package org.stepdefination;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class OneDmap {
	static WebDriver driver;

	
	
	@Given("the user has to open the browser")
	public void the_user_has_to_open_the_browser() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Gowri sankar\\Desktop\\selenium practise _jash\\cucumber1\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		
		
	}	    

	@Given("the user has to go to the telecome webpage")
	public void the_user_has_to_go_to_the_telecome_webpage() {
		driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();
	  
	}

	@When("the user has to fill the details")
	public void the_user_has_to_fill_the_details(DataTable tarDetail ) {
		Map<String,String> tardetail = tarDetail.asMap(String.class,String.class);
		driver.findElement(By.xpath("//input[@placeholder='Monthly Rental']")).sendKeys(tardetail.get("monthlyRental"));
		driver.findElement(By.xpath("//input[@placeholder='Free Local Minutes']")).sendKeys(tardetail.get("freelocalminutes"));
		driver.findElement(By.xpath("//input[@placeholder='Free International Minutes']")).sendKeys(tardetail.get("freeinterminutes"));
	    driver.findElement(By.xpath("//input[@placeholder='Free SMS Pack']")).sendKeys(tardetail.get("freesmspack"));
	    driver.findElement(By.xpath("//input[@placeholder='Local Per Minutes Charges']")).sendKeys(tardetail.get("localminchar"));
	    driver.findElement(By.xpath("//input[@placeholder='Inter. Per Minutes Charges']")).sendKeys(tardetail.get("internatminchar"));
	    driver.findElement(By.xpath("//input[@placeholder='SMS Per Charges']")).sendKeys(tardetail.get("internatminchar"));
	    
	   
	}

	@When("the user has to click the subbmit btn")
	public void the_user_has_to_click_the_subbmit_btn() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	 
	}

	@Then("the user has to get congo message")
	public void the_user_has_to_get_congo_message() {
		Assert.assertTrue(driver.findElement(By.xpath("//a[@class='button']")).isDisplayed());
	
	}



}
