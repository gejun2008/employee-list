# Angular QuickStart Source
employee list project

npm install;
npm start;

# explanation e2e test and unit test

# end-to-end:is used to test Scenarios. Inside the test file e2e/app.e2e-spec.ts. use protractor tools. protractor config file is protractor.config.js.

npm run e2e;

# Confirm get employee list, have 5 list items.

it('should list all results', function () {
    expect(element.all(by.css('.employeeItem')).count()).toEqual(5);
  });


# unit test: always test a component. use karma test run. karma config file is karma.conf.js. test src file is app/app.component.spec.ts

npm run test;

#test component create

it('should create component', () => expect(comp).toBeDefined() );

#test employee list display 5 list items
it('should display all employee list', () => {
    fixture.detectChanges();//employee-list component
    const h1 = de.nativeElement; //get all list element
    expect(h1.children.length).toEqual(5); 

  });
