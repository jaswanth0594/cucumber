

Feature: entering the tariff details
  I want to use this template for my feature file

  Scenario: adding the details
    Given the user have to open the browser
    And the user should go to the telecome page
    When the user should fill the details
    |100|200|300|400|500|600|700|
    |112|123|300|500|450|600|312|
    |230|320|312|578|324|478|320|
  And the user should click the submit button
  Then the user should get the congratulation message and tariff
   

 
