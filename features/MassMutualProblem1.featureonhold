Feature: MassMutual Problem-1
    As a user
    I want to verify exercise-1 page

    Background:
        Given user navigates to Exercise I
        When user validate the exercise I page title "MassMutual Exercise-1"

    @posivite @functionalTest @chrome @smoke
    Scenario: Verify value field's count on Exercise I page
        Then user verifies total count of value fields as 5

    @posivite @functionalTest @chrome
    Scenario Outline: Verify values are greater than 0 on Exercise-1 page (Selective verification for value field using example table)
        Then user verifies the value of "<Field_Name>" is greater than <Value_Greater_Than>

        Examples:
            | Field_Name | Value_Greater_Than |
            | Value 1    | 0                  |
    # | Value 2          | 0                     |
    # | Value 3          | 0                     |
    # | Value 4          | 0                     |
    # | Value 5          | 0                     |

    @posivite @functionalTest @chrome
    Scenario: Verify value fields are greater than 0 on Exercise I page
        Then user verifies the value fields are greater than 0

    @posivite @functionalTest @chrome @smoke
    Scenario: Verify Total Balance on Exercise-1 page
        Then user sum up total amount in value fields
        Then user verifies Total Balance

    @posivite @UATTest @chrome
    Scenario Outline: Verify value fields are formatted as currency
        Then user verifies format of field "<Field_Name>" as currency "<Currency_Type>"

        Examples:
            | Field_Name | Currency_Type |
            | Value 1    | USD           |
# | Value 2          | USD                     |
# | Value 3          | USD                     |
# | Value 4          | USD                     |
# | Value 5          | USD                     |
