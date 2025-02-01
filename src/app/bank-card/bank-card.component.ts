import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../app.component.models';

@Component({
  selector: 'app-bank-card',
  imports: [],
  templateUrl: './bank-card.component.html',
  styleUrl: './bank-card.component.css'
})
export class BankCardComponent {
  @Input({required: true}) course: ICourse = {} as ICourse;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();


  viewCourse(): void{
    this.viewCourseEvent.emit(this.course);
  }

}
