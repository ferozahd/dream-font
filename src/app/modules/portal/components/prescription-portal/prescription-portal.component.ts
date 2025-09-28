import { Component, inject, OnInit, signal, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoticeEditorComponent } from './notice-editor/notice-editor.component';

export interface Day {
  date: number;
  event: string;
}

export interface Month {
  month: string;
  year: number;
  weeksDay: Day[][];
}


@Component({
  selector: 'app-prescription-portal',
  standalone: false,
  templateUrl: './prescription-portal.component.html',
  styleUrl: './prescription-portal.component.scss'
})
export class PrescriptionPortalComponent {


  public data = signal<string>('');
  private readonly modalService = inject(NgbModal);
  private readonly sanitizer = inject(DomSanitizer);

  public monthData = signal<Month>({ month: 'January', year: 2024, weeksDay: [] });
  public readonly daysOfWeek: string[] = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  private readonly monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



  constructor() {
    this.generateMonthData();
  }




  public onSelectChange($event: Event) {
    throw new Error('Method not implemented.');
  }



  get date(): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.data());
  }






  private generateMonthData() {
    const selectedDay = new Date();
    this.monthData.set({
      month: this.monthNames[selectedDay.getMonth()],
      year: selectedDay.getFullYear(),
      weeksDay: this.calculateDaysInMonth(selectedDay)
    });

  }

  public openEditNoticeModal(): void {
    const modal = this.modalService.open(NoticeEditorComponent, { size: "xl" });
    modal.componentInstance.modalId = 'NOTICE_EDITOR'
    modal.result.then(
      (result) => {
        console.log(`Closed with: ${result}`);
      },
      (reason) => {
        console.log(`Dismissed ${reason}`);
      },

    );

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


