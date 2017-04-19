import { browser, element, by } from 'protractor';

describe('employee list', function () {

  beforeEach(function () {
    browser.get('');
  });

  it('should list all results', function () {
    expect(element.all(by.css('.employeeItem')).count()).toEqual(5);

    element.all(by.css('.employeeItem')).get(0).click();

    expect(element(by.css('.employeebio')).isPresent()).toBeTruthy();

    element(by.css('.employeebio')).click();
  });

});



