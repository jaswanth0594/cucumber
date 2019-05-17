
Feature: adding the details in twoDmap
  I want to use this template for my feature file

  
  Scenario: adding the details of 2d
    Given the user wants to open the browser
    And the user wants to go to telecom page
    When the user wants to fill the details
    |monthlyRental|freelocalminutes|freeinterminutes|freesmspack|localminchar|internatminchar|smspercharges|  
    |100|200|300|400|500|600|700|
    |112|213|230|400|356|245|600|
    |312|234|345|567|670|870|700|
    And the user want to click the subbmit btn
    Then the user wants to see the cong message
    

 