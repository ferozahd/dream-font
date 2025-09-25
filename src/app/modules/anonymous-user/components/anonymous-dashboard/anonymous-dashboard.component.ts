import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
 
@Component({
  selector: 'app-anonymous-dashboard',
 standalone:false,
  templateUrl: './anonymous-dashboard.component.html',
  styleUrl: './anonymous-dashboard.component.scss'
})
export class AnonymousDashboardComponent {


 public ticket_name:string|undefined=undefined;


toggleSidebar() {
// throw new Error('Method not implemented.');
}
selectTicket(_t8: any) {

}
constructor(private modalService: NgbModal) {}

  openModal(content: TemplateRef<any>) {
    console.log('Opening modal');
    this.modalService.open(content, { size: 'sm', backdrop: 'static' ,centered:true});
  }



isMobile=false;
showSidebar=true;
selectedTicket={id:'1',status:'OPEN',title:'Login Issue',token:'A1B2C3'};
    tickets = [
    {
      id: '1',
      title: 'Login Issue',
      token: 'A1B2C3',
      status: 'OPEN'
    },
    {
      id: '2',
      title: 'ID Verification',
      token: 'D4E5F6',
      status: 'AWAITING_UPLOAD'
    }
  ];
  
      messages = [
    {
      id: 'm1',
      sender: 'AGENT',
      text: 'Hello, can you explain the problem in detail?',
      time: '10:00 AM'
    },
    {
      id: 'm2',
      sender: 'USER',
      text: 'I can’t log in, my password reset isn’t working.',
      time: '10:02 AM'
    },
    {
      id: 'm3',
      sender: 'AGENT',
      uploadRequest: {
        label: 'Government ID',
        required: true,
        status: 'PENDING'
      }
    }
  ];


 public createATicket() {
  this.tickets.push({
    id: (this.tickets.length + 1).toString(),
    title: this.ticket_name||'No Title',
    token: Math.random().toString(36).substring(2, 8).toUpperCase(),
    status: 'OPEN'
  });
  this.ticket_name=undefined;
  this.modalService.dismissAll();
}

public check_ticket_button_disablity() {
  return this.ticket_name===undefined || this.ticket_name.trim().length<5 || this.ticket_name.trim().length>50;
}
  
}
