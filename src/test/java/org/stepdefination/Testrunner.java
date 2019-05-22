package org.stepdefination;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Feature/oneDmap.feature",glue="org.stepdefination",
                         plugin= {"html:target","rerun:src\\test\\resources\\failed.txt","json:target/report.json"},
                                                               tags={"@reg,@reg1"})
                             
public class Testrunner {

}
