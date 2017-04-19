"use strict";
var protractor_1 = require('protractor');
describe('employee list', function () {
    beforeEach(function () {
        protractor_1.browser.get('');
    });
    it('should list all results', function () {
        expect(protractor_1.element.all(protractor_1.by.css('.employeeItem')).count()).toEqual(5);
        protractor_1.element.all(protractor_1.by.css('.employeeItem')).get(0).click();
        expect(protractor_1.element(protractor_1.by.css('.employeebio')).isPresent()).toBeTruthy();
        protractor_1.element(protractor_1.by.css('.employeebio')).click();
    });
});
//# sourceMappingURL=app.e2e-spec.js.map