$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/Addcustomer.feature");
formatter.feature({
  "name": "Adding customer details to the telcom website",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Adding details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "The user need to open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "AddCustomer1.the_user_need_to_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user need to fill all the customer detail",
  "rows": [
    {
      "cells": [
        "jash",
        "annam",
        "jash@gmail.com",
        "chennai",
        "987654321"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddCustomer1.the_user_need_to_fill_all_the_customer_detail(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user should click on the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddCustomer1.the_user_should_click_on_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The should be shown the generated pin",
  "keyword": "Then "
});
formatter.match({
  "location": "AddCustomer1.the_should_be_shown_the_generated_pin()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/addcustomer1.feature");
formatter.feature({
  "name": "adding tarrif plans to the telecom website",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "adding the plans",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user need to open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "tarrifplan1d.the_user_need_to_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user  fill the tarrif plan",
  "rows": [
    {
      "cells": [
        "300",
        "200",
        "100",
        "50",
        "1",
        "50",
        "100"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "tarrifplan1d.the_user_fill_the_tarrif_plan(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click the subbmit button",
  "keyword": "And "
});
formatter.match({
  "location": "tarrifplan1d.the_user_should_click_the_subbmit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should get the congratulation message",
  "keyword": "Then "
});
formatter.match({
  "location": "tarrifplan1d.the_user_should_get_the_congratulation_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/oneDmap.feature");
formatter.feature({
  "name": "adding tariff plans by onedmap",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "adding plans",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user has to open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "OneDmap.the_user_has_to_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to go to the telecome webpage",
  "keyword": "And "
});
formatter.match({
  "location": "OneDmap.the_user_has_to_go_to_the_telecome_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to fill the details",
  "rows": [
    {
      "cells": [
        "monthlyRental",
        "300"
      ]
    },
    {
      "cells": [
        "freelocalminutes",
        "200"
      ]
    },
    {
      "cells": [
        "freeinterminutes",
        "100"
      ]
    },
    {
      "cells": [
        "freesmspack",
        "50"
      ]
    },
    {
      "cells": [
        "localminchar",
        "1"
      ]
    },
    {
      "cells": [
        "internatminchar",
        "50"
      ]
    },
    {
      "cells": [
        "smspercharges",
        "100"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "OneDmap.the_user_has_to_fill_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to click the subbmit btn",
  "keyword": "And "
});
formatter.match({
  "location": "OneDmap.the_user_has_to_click_the_subbmit_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user has to get congo message",
  "keyword": "Then "
});
formatter.match({
  "location": "OneDmap.the_user_has_to_get_congo_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/twoDlist.feature");
formatter.feature({
  "name": "entering the tariff details",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "adding the details",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user have to open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodtariff.the_user_have_to_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should go to the telecome page",
  "keyword": "And "
});
formatter.match({
  "location": "Twodtariff.the_user_should_go_to_the_telecome_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should fill the details",
  "rows": [
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "112",
        "123",
        "300",
        "500",
        "450",
        "600",
        "312"
      ]
    },
    {
      "cells": [
        "230",
        "320",
        "312",
        "578",
        "324",
        "478",
        "320"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Twodtariff.the_user_should_fill_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "Twodtariff.the_user_should_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should get the congratulation message and tariff",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodtariff.the_user_should_get_the_congratulation_message_and_tariff()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Feature/twonDmap.feature");
formatter.feature({
  "name": "adding the details in twoDmap",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "adding the details of 2d",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the user wants to open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Twodmaptar.the_user_wants_to_open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to go to telecom page",
  "keyword": "And "
});
formatter.match({
  "location": "Twodmaptar.the_user_wants_to_go_to_telecom_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to fill the details",
  "rows": [
    {
      "cells": [
        "monthlyRental",
        "freelocalminutes",
        "freeinterminutes",
        "freesmspack",
        "localminchar",
        "internatminchar",
        "smspercharges"
      ]
    },
    {
      "cells": [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700"
      ]
    },
    {
      "cells": [
        "112",
        "213",
        "230",
        "400",
        "356",
        "245",
        "600"
      ]
    },
    {
      "cells": [
        "312",
        "234",
        "345",
        "567",
        "670",
        "870",
        "700"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "Twodmaptar.the_user_wants_to_fill_the_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user want to click the subbmit btn",
  "keyword": "And "
});
formatter.match({
  "location": "Twodmaptar.the_user_want_to_click_the_subbmit_btn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user wants to see the cong message",
  "keyword": "Then "
});
formatter.match({
  "location": "Twodmaptar.the_user_wants_to_see_the_cong_message()"
});
formatter.result({
  "status": "passed"
});
});