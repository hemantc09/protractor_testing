
/*
Name: Hemant Choudhari
Reference : http://www.protractortest.org/#/tutorial
website to test : http://www.acme.eu/en-us  [This is website designed using javascript]
this is the configuaration file for "script2_test_is_onlyWebsite.js"

protractor --version 
Version 5.1.1

selenium standalone version available: 3.3.1
chromedriver version available: 2.28 
*/

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['script2_test_is_onlyWebsite.js'], //test only  javascript website
  capabilities: {
  'browserName': 'chrome'
  },
  rootElement: 'html'
};

