import { AppComponent } from './app.component';
import { EmployeeListComponent }        from './employee-list.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let deNode: any;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent,EmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('.employeelist'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should display all employee list', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.children.length).toEqual(5);
    
  });

  it('should display employee name', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/john/i,
      'list not complete');
  });
});
