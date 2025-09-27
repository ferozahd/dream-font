
import { Component, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SidebarNavItemModel, SidebarNavSubItem } from '../../models/sidebar.route.model';

@Component({
  selector: 'app-portal',
  standalone: false,
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.scss'
})
export class PortalComponent {


  public sidebar = signal<SidebarNavItemModel>([
    {
      name: "Dashboard", icon: "mdi mdi-view-dashboard", route: "/dr/dashboard",
      collapsed: false,
      active: false,
      children: [
        { name: "KPI Reports", active: false, route: "/dr/dashboard/kpi" },
        { name: "Appointments", active: false, route: "/dr/dashboard/appoitment" }
      ]
    },
    { name: "Patients", active: false, icon: "mdi mdi-account-multiple", route: "/dr/patients", collapsed: false, children: [] },
    {
      name: "Prescriptions", active: false, icon: "mdi mdi-file-document-box", collapsed: false, route: "/dr/prescription", children: [
      ]
    },
  ])

  // Assume `sidebar` is a signal or store that holds the sidebar items
  constructor(private router: Router) {
    this.trackNavigationChanges();
  }

  /**
   * Tracks navigation changes and updates the active state of the sidebar items
   */
  private trackNavigationChanges(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateSidebarItems();
      });
  }

  /**
   * Updates the active state of each sidebar item based on the current route
   */
  private updateSidebarItems(): void {
    this.sidebar.update(items => items.map(item => {
      item.active = this.isItemActive(item);
      if (item.collapsed && !item.active) {
        item.collapsed = false;
      }
      if (item.children?.length) {
        item.children = this.updateSubItemsActiveState(item.children);
      }
      return item;
    }));
  }

  /**
   * Determines if a sidebar item is active based on the router's current URL
   * @param item The sidebar item
   * @returns `true` if the item is active, otherwise `false`
   */
  private isItemActive(item: SidebarNavSubItem): boolean {
    return item.route !== undefined && this.router.url.startsWith(item.route);
  }

  /**
   * Updates the active state of child items based on the current route
   * @param children Array of sub-items (children)
   * @returns Updated list of sub-items with active states
   */
  private updateSubItemsActiveState(children: SidebarNavSubItem[]): SidebarNavSubItem[] {
    return children.map(sub_item => {
      sub_item.active = sub_item.route === this.router.url;
      return sub_item;
    });
  }

  /**
   * Toggles the collapse state of a sidebar item
   * @param name The name of the sidebar item to toggle collapse for
   */
  toggleCollapse(name: string): void {
    this.sidebar.update(items => items.map(item => {
      if (item.name === name) {
        item.collapsed = !item.collapsed;
        item.active = item.collapsed ? true : false;
      }
      return item;
    }));
  }
}