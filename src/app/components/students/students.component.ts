import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public students: any[] = [];
  
  constructor() { }

  ngOnInit(): void {
    this.fillData();
  }
  
  private fillData() {
    this.students = [
      {
        name: 'Samara',
        lastname: 'Weaving',
        directive: 'ngclass',
        status: true
      },
      {
        name: 'Sean',
        lastname: 'Connery',
        directive: 'ngstyle',
        status: true
      },
      {
        name: 'Brendan',
        lastname: 'Fraser',
        directive: 'custom-directive',
        status: false
      },
      {
        name: 'Sofia',
        lastname: 'Vergara',
        directive: 'pipes',
        status: true
      },
      {
        name: 'Jennifer',
        lastname: 'Lawrence',
        directive: 'ngif',
        status: false
      }
    ];
  }
  
  public mixStyles() {
    this.students.forEach(student => {
      student.status = !student.status;
    });
  }
}
