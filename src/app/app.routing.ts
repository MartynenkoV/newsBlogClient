import { Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component'

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: ':page', component: HomePageComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);