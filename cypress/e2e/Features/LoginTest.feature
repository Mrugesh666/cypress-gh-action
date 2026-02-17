Feature: OrangeHRM Application Login Test

Login To the OrangeHRM application with valid credentials

    Scenario: Login to the OrangeHRM application with valid credentials 
        Given Launch OrangeHRM application URL
        Then Enter the valid username "Admin"
        And Enter the valid password "admin123"
        Then Click on Login button
        And Verify Login is successful
