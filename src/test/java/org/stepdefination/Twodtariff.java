package org.stepdefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Twodtariff {
	static WebDriver driver;

	
	@Given("the user have to open the browser")
	public void the_user_have_to_open_the_browser() {
	
			System.setProperty("webdriver.chrome.driver","C:\\Users\\Gowri sankar\\Desktop\\selenium practise _jash\\cucumber1\\driver\\chromedriver.exe");
			driver=new ChromeDriver();
			driver.get("http://demo.guru99.com/telecom/");
		
			
			
	}
	    
	

	@Given("the user should go to the telecome page")
	public void the_user_should_go_to_the_telecome_page() {
		driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();
		
	   
	}
	

	@When("the user should fill the details")
	public void the_user_should_fill_the_details(DataTable tarDetail) {
		List<List<String>> tardetail = tarDetail.asLists(String.class);
		driver.findElement(By.xpath("//input[@placeholder='Monthly Rental']")).sendKeys(tardetail.get(0).get(1));
		driver.findElement(By.xpath("//input[@placeholder='Free Local Minutes']")).sendKeys(tardetail.get(1).get(2));
		driver.findElement(By.xpath("//input[@placeholder='Free International Minutes']")).sendKeys(tardetail.get(2).get(3));
	    driver.findElement(By.xpath("//input[@placeholder='Free SMS Pack']")).sendKeys(tardetail.get(0).get(5));
	    driver.findElement(By.xpath("//input[@placeholder='Local Per Minutes Charges']")).sendKeys(tardetail.get(2).get(4));
	    driver.findElement(By.xpath("//input[@placeholder='Inter. Per Minutes Charges']")).sendKeys(tardetail.get(1).get(3));
	    driver.findElement(By.xpath("//input[@placeholder='SMS Per Charges']")).sendKeys(tardetail.get(1).get(6));
	    
	}
	
	
	@When("the user should click the submit button")
	public void the_user_should_click_the_submit_button() {
	
			driver.findElement(By.xpath("//input[@type='submit']")).click();
		   
		

	}
	@Then("the user should get the congratulation message and tariff")
	public void the_user_should_get_the_congratulation_message_and_tariff() {
		
			Assert.assertTrue(driver.findElement(By.xpath("//a[@class='button']")).isDisplayed());
	}
	 

	}

