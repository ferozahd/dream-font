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
        path:'dr',
        loadChildren:()=> 
          import('./modules/portal/portal.module').then(
            (m) => m.PortalModule
          ),
      },
      {
        path:'dr-prescription',
        loadChildren:()=> 
          import('./modules/prescription/prescription.module').then(
            (m) => m.PrescriptionModule
          ),
      },
      {
        path:'anonymous',
        loadChildren:()=> 
          import('./modules/anonymous-user/anonymous-user.module').then(
            (m) => m.AnonymousUserModule
          ),
      },
      {
        path:'patient',
        loadChildren:()=> 
          import('./modules/patient/patient.module').then(
            (m) => m.PatientModule
          ),
      },
      {
        path: '**', redirectTo: 'authentication'
      }
     
];
