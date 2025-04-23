import { Routes } from '@angular/router';
export const routes: Routes = [
    {
        path: 'authentication',
        loadChildren: () =>
          import('./modules/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
      {
        path:'',
        loadChildren:()=> 
          import('./modules/portal/portal.module').then(
            (m) => m.PortalModule
          ),
      }
];
