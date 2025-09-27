export interface SidebarNavSubItem {
    name: string;  
    route: string; 
    active: boolean; 
  }
  
  export interface SidebarNavItem {
    name: string;  
    icon: string;  
    active: boolean;
    route: string;  
    collapsed: boolean;  
    children?: SidebarNavSubItem[]; 
  }
  
  export type SidebarNavItemModel = SidebarNavItem[];
   