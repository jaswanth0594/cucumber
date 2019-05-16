package org.stepdefination;





import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class AddCustomer {
	static WebDriver driver;
	@Given("User need to open the browser")
	public void user_need_to_open_the_browser() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Gowri sankar\\Desktop\\selenium practise _jash\\cucumber1\\driver\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
		
		driver.findElement(By.xpath("(//a[text()='Add Customer'])[1]")).click();
		
		
	  
	}

	

	@When("Need to fill all the customer details")
	public void need_to_fill_all_the_customer_details() {
		
		
		
		WebElement rdbtn = driver.findElement(By.id("done"));
		rdbtn.click();
		WebElement frst = driver.findElement(By.id("fname"));
	   frst.sendKeys("jash");
	   WebElement lst = driver.findElement(By.id("lname"));
	   lst.sendKeys("annam");
	   WebElement mail = driver.findElement(By.id("email"));
	   mail.sendKeys("jash@gmail.com");
	   WebElement msg = driver.findElement(By.name("addr"));
	   msg.sendKeys("hey i am jash");
	   WebElement phne = driver.findElement(By.id("telephoneno"));
	   phne.sendKeys("9876543210");
	   
	}

	@When("User should click on the submit button")
	public void user_should_click_on_the_submit_button() {
		WebElement sbmt = driver.findElement(By.name("submit"));
		sbmt.click();
	  
	}

	@Then("It should show the generated pin")
	public void it_should_show_the_generated_pin() {
	   Assert.assertTrue(driver.findElement(By.xpath("//td[@align='center'][2]")).isDisplayed());
	}


}
