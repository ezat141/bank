import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BankCardComponent } from './bank-card/bank-card.component';
import { CategoryType, ICourse } from './app.component.models';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BankCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data={
    title:"This First Angular Project"
  };
  onLogoClicked(): void {
    alert(" Hello Bank Ui");
  }
  readonly courses:Array<ICourse> = [
    {
      id: 1,
      description: 'Angular Fundamentals',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      lessonsCount: 80,
      longDescription: '',
      category: CategoryType.begineers

    },
    {
      id: 2,
      description: 'RxJs',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      lessonsCount: 40,
      longDescription: 'loreum ipsum dolor sit amet consectetur adipisicing elit. Quas, natus.',
      category: CategoryType.advanced

    },
    {
      id: 3,
      description: 'NgRx',
      imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg',
      lessonsCount: 48,
      longDescription: 'loreum ipsum dolor sit amet consectetur adipisicing elit. Quas, natus.',
      category: CategoryType.advanced

    },

  ];

  beginnerCourses = this.courses[0];
  rxjsCourses = this.courses[1];
  ngrxCourses = this.courses[2];


  onCardClicked(course: ICourse): void {
    console.log('on course clicked', course.description)
  }

  trackCourse(index: number, course: ICourse): number {
    return course.id;
  }

}
