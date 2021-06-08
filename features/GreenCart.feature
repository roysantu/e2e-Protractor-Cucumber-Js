Feature: Green cart
    As a user
    I want to verify exercise-1 page

    Background:
        Given user navigates to "greenCartURL" page
        When user validate the Green Cart page title "GreenKart - veg and fruits kart"

    @posivite @functionalTest @chrome @smoke
    Scenario: Verify count of products on Green cart Home page
        Then user verifies total count of products as 30

    @posivite @functionalTest @chrome 
    Scenario Outline: Verify user able to add products to cart
        Then user adds product number <Product_Instance> to cart
        # TODO save value to world param
        Then user verifies price "<Product_Cost>" cart preview
        And user verifies amount currency as "<Currency>"

        Examples:
            | Product_Instance | Product_Cost | Currency |
            | 4                | 56           | ₹        |

    @posivite @functionalTest @chrome 
    Scenario Outline: Verify product price are greater than 0 (Selective verification for value field using example table)
        Then user verifies the value of product <Product_Instance> is greater than <Greater_Than>

        Examples:
            | Product_Instance | Greater_Than |
            | 1                | 0.0          |
    # | Value 2          | 0                     |
    # | Value 3          | 0                     |
    # | Value 4          | 0                     |
    # | Value 5          | 0                     |

    @posivite @functionalTest @chrome 
    Scenario: Verify all products prices are greater than 0 
        Then user verifies all products prices are greater than 0

    @posivite @functionalTest @chrome @smoke 
    Scenario: Verify total price of all the products
        Then user verifies total amount of all the products

#     @posivite @UATTest @chrome
#     Scenario Outline: Verify value fields are formatted as currency
#         Then user verifies format of field "<Field_Name>" as currency "<Currency_Type>"

#         Examples:
#             | Field_Name | Currency_Type |
#             | Value 1    | USD           |
# # | Value 2          | USD                     |
# # | Value 3          | USD                     |
# # | Value 4          | USD                     |
# # | Value 5          | USD                     |
