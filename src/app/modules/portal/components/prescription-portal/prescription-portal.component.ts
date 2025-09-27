import { Component, OnInit, signal } from '@angular/core';

// Define the interface for a single day's event
export interface Day {
  date: number;        // The day of the month (1-31)
  event: string;       // The event associated with the day (e.g., "Active Day")
}

// Define the interface for the month, including the days of the month
export interface Month {
  month: string;       // The name of the month (e.g., "September")
  year: number;        // The year of the calendar
  weeksDay: Day[][];         // An array of Day objects representing each day of the month
}


@Component({
  selector: 'app-prescription-portal',
  standalone: false,
  templateUrl: './prescription-portal.component.html',
  styleUrl: './prescription-portal.component.scss'
})
export class PrescriptionPortalComponent {
  onSelectChange($event: Event) {
    throw new Error('Method not implemented.');
  }





  public noticeContent: string = '';

  public monthData = signal<Month>({ month: 'January', year: 2024, weeksDay: [] });
  public readonly daysOfWeek: string[] = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  private readonly monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  isBrowser: boolean = false;

  constructor() {
    this.generateMonthData();
  }



  // Function to generate the month data with "Active Day" for each day
  generateMonthData() {
    const selectedDay = new Date();
    this.monthData.set({
      month: this.monthNames[selectedDay.getMonth()],
      year: selectedDay.getFullYear(),
      weeksDay: this.calculateDaysInMonth(selectedDay)
    });

  }



  private getRemainingDaysOfFirstSaturday(day: Date): number {

    const date = new Date(day.getFullYear(), day.getMonth(), 1);
    const dayOfWeek = date.getDay();
    return (2 - dayOfWeek + 7) % 7;

  }



  private calculateDaysInMonth(selectedDay: Date): Day[][] {

    let days: Day[] = [];
    const dayToAdd = this.getRemainingDaysOfFirstSaturday(selectedDay);


    for (let i = 0; i <= dayToAdd; i++) {
      days.push({ date: 0, event: "" });
    }

    const date = new Date(selectedDay.getFullYear(), selectedDay.getMonth() + 1, 0);
    for (let i = 1; i < date.getDate() + 1; i++) {
      days.push({ date: i, event: "Active Day" });
    }

    if (days.length % 7 !== 0) {
      const remainingDays = 7 - (days.length % 7);
      for (let i = 0; i < remainingDays; i++) {
        days.push({ date: 0, event: "" });
      }
    }



    let weekDays: Day[][] = [];
    for (let i = 0; i < days.length; i++) {
      const weekIndex = Math.floor(i / 7);
      if (!weekDays[weekIndex]) {
        weekDays[weekIndex] = [];
      }
      weekDays[weekIndex][i % 7] = days[i];
    }
    return weekDays;
  }
}


