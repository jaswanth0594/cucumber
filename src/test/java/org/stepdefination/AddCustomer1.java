package org.stepdefination;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import junit.framework.Assert;

public class AddCustomer1 {

	static WebDriver driver;
	
	@Given("The user need to open the browser")
	public void the_user_need_to_open_the_browser() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Gowri sankar\\Desktop\\selenium practise _jash\\cucumber1\\driver\\chromedriver.exe");
		 driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
	   
		
	}

	//@When("The user need to fill all the customer details")
	//public void the_user_need_to_fill_all_the_customer_details() {
		
		//driver.findElement(By.xpath("//label[@for='done']")).click();
		
		//driver.findElement(By.id("fname")).sendKeys("jash");
		//driver.findElement(By.id("lname")).sendKeys("jash");
		//driver.findElement(By.id("email")).sendKeys("hhh@gmail.com");
		//driver.findElement(By.name("addr")).sendKeys("india");
		//driver.findElement(By.id("telephoneno")).sendKeys("34567753323");
	    
	//}
	@When("The user need to fill all the customer detail")
	public void the_user_need_to_fill_all_the_customer_detail(DataTable cusDetails) {
		List<String> cusDetail = cusDetails.asList(String.class);
		driver.findElement(By.xpath("//label[@for='done']")).click();
		
				driver.findElement(By.id("fname")).sendKeys(cusDetail.get(0));
				driver.findElement(By.id("lname")).sendKeys(cusDetail.get(1));
				driver.findElement(By.id("email")).sendKeys(cusDetail.get(2));
				driver.findElement(By.name("addr")).sendKeys(cusDetail.get(3));
				driver.findElement(By.id("telephoneno")).sendKeys(cusDetail.get(4));
		
	   
	}

	  
	

	   
	

	@When("The user should click on the submit button")
	public void the_user_should_click_on_the_submit_button() {
		driver.findElement(By.xpath("//input[@value='Submit']")).click();
	
	}

	@Then("The should be shown the generated pin")
	public void the_should_be_shown_the_generated_pin() {
	    Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
	    
	}
}
