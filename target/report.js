$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/oneDmap.feature");
formatter.feature({
  "name": "adding tariff plans by onedmap",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@reg1"
    }
  ]
});
formatter.scenario({
  "name": "adding plans",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@reg1"
    },
    {
      "name": "@smoke"
    }
  ]
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
formatter.scenario({
  "name": "adding plans",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@reg"
    },
    {
      "name": "@reg1"
    }
  ]
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
        "400"
      ]
    },
    {
      "cells": [
        "freelocalminutes",
        "500"
      ]
    },
    {
      "cells": [
        "freeinterminutes",
        "600"
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
        "120"
      ]
    },
    {
      "cells": [
        "smspercharges",
        "101"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d74.0.3729.157)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-V3OIPS3R\u0027, ip: \u0027192.168.0.166\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\GOWRIS~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:59402}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 74.0.3729.157, webStorageEnabled: true}\nSession ID: e4fa2e01d60f291dd565b93ee03c8225\n*** Element info: {Using\u003dxpath, value\u003d//a[@class\u003d\u0027button\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.stepdefination.OneDmap.the_user_has_to_get_congo_message(OneDmap.java:57)\r\n\tat ✽.the user has to get congo message(src/test/resources/Feature/oneDmap.feature:32)\r\n",
  "status": "failed"
});
});