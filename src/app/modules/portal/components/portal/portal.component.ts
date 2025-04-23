import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-portal',
standalone: false,
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent implements OnInit{

  sidebarOpen = false;

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  ngOnInit(): void {
    setTimeout(()=>{
      this.sidebarOpen=true;
    },800)
  }
}
