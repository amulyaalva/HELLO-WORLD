
import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../course/courses.service';

@Component({
  selector: 'app-courses',
  template: `<h2> {{ title }} </h2>
              <h2 [textContent]="title"></h2>
  <img src="{{imageUrl}}" />
  <img [src]="imageUrl"/>

  <ul>
  <li *ngFor ="let course of courses">
 {{course}}
</li>
</ul>

<table><tr><td [attr.colSpan]="colSpan"></td></tr></table>`
})
export class CoursesComponent {
  title="List of courses";
  courses;
  imageUrl="http://lorempixel.com/400/200";
  colSpan=2;

 constructor(service:CoursesService){
   
   this.courses=service.getCourses();
   

 }
}
