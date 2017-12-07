import  { Component } from '@angular/core';

@Component({
	selector: 'courses', // <couress>
	template: '<h2>{{getTitle()}}</h2>'
})

export class CourseComponents {

	title = "List of courses1";

	getTitle(){
	  return this.title;
	}

 }