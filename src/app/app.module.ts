import { CourseComponents } from './courses.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseComponents	
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
