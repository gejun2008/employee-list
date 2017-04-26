# Angular QuickStart Source
employee list project
```bash
npm install;
npm start;
```

<h2>explanation e2e test and unit test</h2>

<h3>end-to-end test:is used to test Scenarios. Inside the test file e2e/app.e2e-spec.ts. use protractor tools. protractor config file is protractor.config.js.</h3>
```bash
npm run e2e;
```

<h4>Confirm get employee list, have 5 list items.</h4>

```js
it('should list all results', function () {
    expect(element.all(by.css('.employeeItem')).count()).toEqual(5);
  });
```

<h3>unit test: always test a component. use karma test run. karma config file is karma.conf.js. test src file is app/app.component.spec.ts</h3>
```bash
npm run test;
```
<h4>test component create</h4>
```js
it('should create component', () => expect(comp).toBeDefined() );
```

<h4>test employee list display 5 list items</h4>
```js
it('should display all employee list', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.children.length).toEqual(5); 
  });
```

<h4>test employee list display item name</h4>
```js
it('should display employee name', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/john/i,
      'list not complete');
  });
```
