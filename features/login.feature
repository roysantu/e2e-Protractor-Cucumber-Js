Feature: Login
    In order to performsuccessful Login
    As a user
    I want to enter valid credentials

    Background:
        Given user navigates to application
        When user validate the login page title "Page Title 1"

    Scenario Outline: Verify user able to login
        Then user enters "<Username>" and "<Password>"
        Then user should "be" able to login

        Examples:
            | Username | Password |
            | User1    | pass1    |
            | User2    | pass2    |

    Scenario Outline: Verify user not able to login with invalid credentials
        Then user enters "userX" and "passX"
        Then user should "not be" able to login
