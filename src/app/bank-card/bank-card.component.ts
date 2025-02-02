import { CategoryType } from './../app.component.models';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../app.component.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bank-card',
  imports: [CommonModule],
  templateUrl: './bank-card.component.html',
  styleUrl: './bank-card.component.css'
})
export class BankCardComponent {
  CategoryType = CategoryType;
  @Input({required: true}) course: ICourse = {} as ICourse;
  @Input({required: true}) index!: number;
  @Output() viewCourseEvent = new EventEmitter<ICourse>();


  viewCourse(): void{
    this.viewCourseEvent.emit(this.course);
  }

}
