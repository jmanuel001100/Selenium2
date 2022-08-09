const { Given, When, Then } = require("@cucumber/cucumber");
const {Build, By, Key, util, Builder} = require("selenium-webdriver");
var should = require("chai").should();


var dia
var actual
const dias = [
    'domingo',
    'lunes',
    'martes',
    'miércoles',
    'jueves',
    'viernes',
    'sábado',
  ];

  
  

Given("hoy es domingo", function() {


  dia="domingo";
  
 

});

When("Pregunto si es viernes", async function() {


  var driver= await new Builder().forBrowser("chrome").build();

  await driver.get("https://www.saucedemo.com/");
  
  await driver.findElement(By.id("user-name")).sendKeys("standard_user");
  await driver.findElement(By.id("password")).sendKeys("secret_sauce");
  await driver.findElement(By.xpath("//*[@id='login-button']")).click();

  let titulo1= await driver.findElement(By.xpath("//*[@id='header_container']/div[2]/span")).getText();



  console.log(titulo1);


    let fecha=new Date();
    let day=fecha.getDay();
  
    console.log(day);
  
    actual=dias[day];
  
    console.log(actual);

    await driver.quit();

});

Then("Responde {string}", function(string){

    should.equal(actual,"lunes");
    //return "NO";

})