const path = require('path');
const fs = require('fs-extra');
const merge = require('mochawesome-merge');
const marge = require('mochawesome-report-generator');

(async () => {
  try {
    const root = path.resolve(__dirname, '..');
    const reportsHtml = path.join(root, 'cypress', 'reports', 'html');
    const jsonsDir = path.join(reportsHtml, '.jsons');

    let files = [];

    if (await fs.pathExists(jsonsDir)) {
      files = (await fs.readdir(jsonsDir))
        .filter((f) => f.endsWith('.json'))
        .map((f) => path.join(jsonsDir, f));
    }

    if (!files.length && (await fs.pathExists(reportsHtml))) {
      files = (await fs.readdir(reportsHtml))
        .filter((f) => f.endsWith('.json'))
        .map((f) => path.join(reportsHtml, f));
    }

    if (!files.length) {
      const alt = path.join(root, 'mochawesome-report', 'mochawesome.json');
      if (await fs.pathExists(alt)) files = [alt];
    }

    if (!files.length) {
      console.error('No JSON report files found to merge. Looked in:');
      console.error(' -', jsonsDir);
      console.error(' -', reportsHtml);
      console.error(' -', path.join(path.resolve(__dirname, '..'), 'mochawesome-report'));
      process.exitCode = 1;
      return;
    }

    console.log('Merging JSON files:', files);
    const merged = await merge.merge({ files });

    await fs.ensureDir(reportsHtml);
    const outJson = path.join(reportsHtml, 'mochawesome.json');
    await fs.writeJson(outJson, merged, { spaces: 2 });
    console.log('Merged JSON written to', outJson);

    const screenshotsSrc = path.join(root, 'cypress', 'screenshots');
    const screenshotsDest = path.join(reportsHtml, 'screenshots');

    if (await fs.pathExists(screenshotsSrc)) {
      await fs.copy(screenshotsSrc, screenshotsDest);
      console.log('Copied screenshots to', screenshotsDest);
    } else {
      console.log('No screenshots folder found at', screenshotsSrc);
    }

    console.log('Generating HTML report...');
    await marge.create(outJson, { reportDir: reportsHtml, inline: true });
    console.log('Report generated at', path.join(reportsHtml, 'mochawesome.html'));
  } catch (err) {
    console.error('Error generating report:', err);
    process.exitCode = 1;
  }
})();
