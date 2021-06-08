Feature: MassMutual Exercise-I
    As a tester
    I want to solve exercise-I

    Background:
        Given user navigates to "MMExercise-I" page
        When user validate the exercise I page title "MassMutual — MMExercise-I"

    @posivite @functionalTest @chrome @smoke
    Scenario: Verify counts of value labels and texts on Exercise-I page
        Then user verifies total counts of value labels equal to 5
        And user verifies total counts of value texts fields equal to 5

    @posivite @functionalTest @chrome
    Scenario Outline: Verify values are greater than 0 (Selective verification for value field using example table)
        Then user verifies the value of text field instance <Value_Text_Field_Instance> is greater than <Greater_Than>

        Examples:
            | Value_Text_Field_Instance | Greater_Than |
            | 1                         | 0.0          |
            | 2                         | 0.0          |
            | 3                         | 0.0          |
            | 4                         | 0.0          |
            | 5                         | 0.0          |

    @posivite @functionalTest @chrome
    Scenario: Verify all values are greater than 0
        Then user verifies all values are greater than 0
        And user verifies Total Balance values is greater than 0

    @posivite @functionalTest @chrome @smoke
    Scenario: Verify sum of all the values matches Total Balance
        Then user verifies sum of all the values matches Total Balance

    @posivite @UATTest @chrome
    Scenario Outline: Verify value fields are formatted as currency
        Then user verifies all currency format of value fields as currency "$"
        And user verifies all currency format of Total Balance fields as currency "$"

