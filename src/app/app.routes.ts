import { Routes } from '@angular/router';
import { AffiliateComponent } from './screens/affiliate/affiliate.component';
import { AffiliateFormComponent } from './screens/affiliate-form/affiliate-form.component';

export const routes: Routes = [
  {
    path: '',
    component: AffiliateComponent,
  },
  {
    path: 'create',
    component: AffiliateFormComponent,
    pathMatch: 'full',
  },
];
