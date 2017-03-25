
/*
Name: Hemant Choudhari
email: hemantc09@mgmail.com
URL reference: http://www.acme.eu/en-us
test suit 2: 
test case 1  - the website title after user opens the home page "verify the ACME - right now"
test case 2  - verify the logo present on website top left corner
test case 3  - verify the PRODUCTS link present working
test case 4  - verify the LIGHTING link working
test case 5  - verify the search input box and search button on top right corner of page
test case 6 -  verify carousal left and right arrows are working
*/

describe('testsmoke_acme_website',function(){

	var origFn = browser.driver.controlFlow().execute;
	var URL = 'http://www.acme.eu/en-us'; //website to be tested
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
		browser.ignoreSynchronization = true; //it will ignore the angular 
		browser.get(URL);
	});
	
	//test case 1  - the website title after user opens the home page "verify the ACME - right now"
	it('Verify_website_title', function() {
		expect(browser.getTitle()).toEqual('ACME - right now');
		console.log("1. verify title  page title PASSED");
	});

	//test case 2 - verify the logo present on website top left corner
	it('Verify_website_logo_present_top_right_corner', function() {
 		 expect(browser.getTitle()).toEqual('ACME - right now'); //page title
  		//expect(element(by.css('.logo')).isPresent()).toBe(false); //to verify the logo is present alternate ways
  		expect(element(by.css('.logo')).isDisplayed()).toBeTruthy(); //to verify the logo is present on top left corner
  		console.log("2. verify website logo present on top right corner PASSED");
  	});
	
	//test case 3 -  verify the PRODUCTS link present working
	it('verify_link_PRODUCTS',function(){
		element.all(by.css('.first.with-sub.li-first')).get(0).click(); // it reutrns multiple element thats why used all() and get(index) method in order to test first link
		var product_expectedURL  ='http://www.acme.eu/en-us/products';
		PRODUCTS_currentURL= browser.getCurrentUrl();	
		expect(PRODUCTS_currentURL).toEqual(product_expectedURL);
		//browser.sleep(5000);
	})

	//test case 4 -  verify the LIGHTING link working
	it('verify_link_LIGHTING',function(){
		element.all(by.css('.last.with-sub.li-last')).get(0).click();  //get(0) second link for lighting link verification
		var lighting_expectedURL  ='http://www.acme.eu/en-us/lighting';
		PRODUCTS_currentURL= browser.getCurrentUrl();	
		expect(PRODUCTS_currentURL).toEqual(lighting_expectedURL);
		//browser.sleep(5000);
	})
	
	//test case 5 -  verify the search input box and search button on top right corner of page
	it('verify_search_input',function(){
		element(by.name('search_block_form')).sendKeys('headphone');  //get(0) second link for lighting link verification 
		element.all(by.name('op')).first().click();
		var search_navigate_URL  ='http://www.acme.eu/en-us/search/headphone';
		search_curentURL= browser.getCurrentUrl();	
		console.log("curr"+search_navigate_URL);
		expect(search_curentURL).toEqual(search_navigate_URL);
		//browser.sleep(5000);
	})

	//test case 6 -  verify carousal left and right link is working
	it('verify_carousel_left_right_arrow',function(){
		//tp-rightarrow tparrows
		element.all(by.css('tp-rightarrow.tparrows')).each(function (arrowleft) {
  		arrowleft.get(0).click();
		});
		browser.sleep(2000);
		console.log('arrow left now')
		element.all(by.css('tp-leftarrow.tparrows')).each(function (arrowleft) {
  		arrowleft.get(0).click();
		});
		browser.sleep(2000);
	})
});