
import { compileComponentClassMetadata } from '@angular/compiler';
import { Component, computed, Signal, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-portal',
  standalone: false,
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent {



  public active_route_path = signal<string>("/dr/dashboard");
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.active_route_path.set(this.router.url);  // Log the active route
      });
  }

 


  public active_group_selected: Signal<"dashboard" | "none"> = computed(() => {
    if (this.active_route_path().startsWith("/dr/dashboard")) {
      return "dashboard";
    }
    else {
      return "none";
    }
  });
  

}
