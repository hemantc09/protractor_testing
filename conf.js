
/*
Name: Hemant Choudhari
Reference : http://www.protractortest.org/#/tutorial
website to test : http://www.way2automation.com/angularjs-protractor/registeration/#/login  [This is the angular js website]
this is the configuaration file for "script1_test_userLogin.js"

protractor --version 
Version 5.1.1

selenium standalone version available: 3.3.1
chromedriver version available: 2.28 
*/
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['script1_test_userLogin.js'], //test only angular js website
  capabilities: {
  'browserName': 'chrome'
  },
  rootElement: 'html'
 //rootElement: '.account-security-ui'
};

