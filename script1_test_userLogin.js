/*
Name: Hemant Choudhari
email: hemantc09@mgmail.com
URL reference: http://www.way2automation.com/angularjs-protractor/registeration/#/login
test suit 1:
test case 1  - verify the title of login page
test case 2  - verify the login with valid credenitals and validate user navigate to expected URL
test case 3  - verify the incorrect user name and password	
test case 4  - blank user name verification [negative testing]
test case 5  - blank password verification [negative testing]
test case 6  - the login button is present on login page
*/

describe('test_userlogin',function(){
	//make execution slower in order to see the result visually 
	var userNameIp = element(by.name('username')); //get user name: angular
	var userNameDATA = 'angular';
	var passwordIp = element(by.name('password')); //get password: password
	var passwordDATA = 'password';
	var loginBtn = element(by.xpath("html/body/div[3]/div/div/div/form/div[3]/button")); //login button
	var userNameIp_1 = element(by.name('formly_1_input_username_0'));
	var userNameDATA_1 = 'angular';
	var origFn = browser.driver.controlFlow().execute;
	var URL='http://www.way2automation.com/angularjs-protractor/registeration/#/login';
	var expectedURL = 'http://www.way2automation.com/angularjs-protractor/registeration/#/'; //for login check
	// here we can adjust the execution speed
	browser.driver.controlFlow().execute = function () {
		var args = arguments;
		// queue 100ms wait
		origFn.call(browser.driver.controlFlow(), function () {
		return protractor.promise.delayed(100);   
		});
		return origFn.apply(browser.driver.controlFlow(), args);
	};

	beforeEach(function(){	
		browser.get(URL);
	});

	//test case 1  - verify the title of login page
	it('Verify the title of login page', function() {
  		expect(browser.getTitle()).toEqual('Protractor practice website - Registration');
  		console.log("1. login page title PASSED");
 	 });
	
	//test case 2 - verify the login with valid credenitals and validate user navigate to proper URL
	it('test_browser_title',function(){ 
		userNameIp.clear();
		passwordIp.clear();
		userNameIp.sendKeys(userNameDATA);
		passwordIp.sendKeys(passwordDATA);
		userNameIp_1.sendKeys(userNameDATA);
		loginBtn.click();
		browser.sleep(2000);
		loginURLCurrent= browser.getCurrentUrl();	
		expect(loginURLCurrent).toEqual(expectedURL);
		console.log("2. Authentic user login PASSED");
	});
	
	//test case 3  - verify the incorrect user name and password	
	it('verify_incorrect_username_and_password',function(){ 
		userNameIp.clear();
		passwordIp.clear();
		userNameIp.sendKeys('userNameDATA');
		passwordIp.sendKeys('passwordDATA');
		userNameIp_1.sendKeys('incorrectUsername');
		browser.sleep(2000);
		loginBtn.click();
		element(by.css('.alert.alert-danger.ng-binding.ng-scope')).getText().then(function(text) {
  		//console.log(text); //to disaplay the error on console
  		browser.sleep(3000);
  		expect(text).toEqual('Username or password is incorrect'); //verify the error here
		});
		console.log("3. Incorrect username and password login PASSED");
	});

	//test case 4 - blank user name verification
	it('verify_blank_username',function(){ 
		userNameIp.sendKeys(protractor.Key.TAB);
		element(by.xpath('html/body/div[3]/div/div/div/form/div[1]/div/div')).getText().then(function(text) {
  		console.log(text); //to disaplay the error on console
   		expect(text).toEqual('You did not enter a username'); //verify the error here
		});
		passwordIp.sendKeys(passwordDATA);
		browser.sleep(2000);
		console.log('test 4 - blank username PASSED');
	});

	//test case 5 - blank password verification
	it('verify_blank_password',function(){ 
		userNameIp.sendKeys(userNameDATA);
		passwordIp.sendKeys(protractor.Key.TAB);
		element(by.xpath('html/body/div[3]/div/div/div/form/div[2]/div/div')).getText().then(function(text) {
  		console.log(text); //to disaplay the error on console
   		expect(text).toEqual('You did not enter a username'); //verify the error here
		});
		passwordIp.sendKeys(passwordDATA);
		browser.sleep(2000);
		console.log('test 5 - blank password PASSED');
	});

	//test case 6 - the login button is present on login page
	  it('verify_login_button_is_present', function() {
         expect(element(by.css('.btn.btn-danger')).isDisplayed()).toBe(true);
         console.log('test case 6 - Login button is present PASSED');
      });
});