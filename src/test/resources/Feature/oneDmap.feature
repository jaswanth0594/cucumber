Feature: adding tariff plans by onedmap
  I want to use this template for my feature file

  
  Scenario: adding plans
    Given the user has to open the browser
    And the user has to go to the telecome webpage
    When the user has to fill the details
    |monthlyRental|300|
    |freelocalminutes|200|
    |freeinterminutes|100|
    |freesmspack|50|
    |localminchar|1|
    |internatminchar|50|
    |smspercharges|100|  
    And the user has to click the subbmit btn
    Then the user has to get congo message
    

  