import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'employee-list',
  templateUrl: 'employee-list.component.html',
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: any;
  showIndex: number;
  constructor(
  ) { }

  ngOnInit(): void {
    this.employees = [{
      name: 'john',
      bio: {
        state: 'good',
        sex: 'male',
        age: '25',
      }
    }, {
      name: 'love',
      bio: {
        state: 'well',
        sex: 'female',
        age: '52',
      }
    }, {
      name: 'david',
      bio: {
        state: 'well',
        sex: 'male',
        age: '40'
      }
    }, {
      name: 'smith',
      bio: {
        state: 'not good',
        sex: 'male',
        age: '62'
      }
    }, {
      name: 'jackie',
      bio: {
        state: 'well',
        sex: 'male',
        age: '36'
      }
    }]
  }

  clickBio(index:number) {
    this.showIndex = (this.showIndex == index)?-1:index;
  }

  showbio(bio:any) {
    alert("the employee's bio is" + JSON.stringify(bio));
  }
}
