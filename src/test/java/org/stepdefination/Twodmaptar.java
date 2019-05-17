package org.stepdefination;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class Twodmaptar {
	static WebDriver driver;
	@Given("the user wants to open the browser")
	public void the_user_wants_to_open_the_browser() {
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Gowri sankar\\Desktop\\selenium practise _jash\\cucumber1\\driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("http://demo.guru99.com/telecom/");
	}

	@Given("the user wants to go to telecom page")
	public void the_user_wants_to_go_to_telecom_page() {
		driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]")).click();
	   
	}

	@When("the user wants to fill the details")
	public void the_user_wants_to_fill_the_details(DataTable tarDetails) {
		List<Map<String, String>> tardetail = tarDetails.asMaps(String.class,String.class);
		driver.findElement(By.xpath("//input[@placeholder='Monthly Rental']")).sendKeys(tardetail.get(0).get("monthlyRental"));
		driver.findElement(By.xpath("//input[@placeholder='Free Local Minutes']")).sendKeys(tardetail.get(2).get("freelocalminutes"));
		driver.findElement(By.xpath("//input[@placeholder='Free International Minutes']")).sendKeys(tardetail.get(2).get("freeinterminutes"));
	    driver.findElement(By.xpath("//input[@placeholder='Free SMS Pack']")).sendKeys(tardetail.get(1).get("freesmspack"));
	    driver.findElement(By.xpath("//input[@placeholder='Local Per Minutes Charges']")).sendKeys(tardetail.get(2).get("localminchar"));
	    driver.findElement(By.xpath("//input[@placeholder='Inter. Per Minutes Charges']")).sendKeys(tardetail.get(0).get("internatminchar"));
	    driver.findElement(By.xpath("//input[@placeholder='SMS Per Charges']")).sendKeys(tardetail.get(1).get("internatminchar"));

	}

	@When("the user want to click the subbmit btn")
	public void the_user_want_to_click_the_subbmit_btn() {
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	   
	}

	@Then("the user wants to see the cong message")
	public void the_user_wants_to_see_the_cong_message() {
		Assert.assertTrue(driver.findElement(By.xpath("//a[@class='button']")).isDisplayed());
	 
	}



}
