Feature: adding tarrif plans to the telecom website
  I want to use this template for my feature file

  
  Scenario: adding the plans
    Given the user need to open the browser
    When the user  fill the tarrif plan
    |300|200|100|50|1|50|100|    
    And the user should click the subbmit button
    Then the user should get the congratulation message
    


