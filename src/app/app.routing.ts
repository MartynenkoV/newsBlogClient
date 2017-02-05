import { Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {NewsPageComponent} from './news-page/news-page.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: ':page', component: HomePageComponent }
  
];

export const routing = RouterModule.forRoot(APP_ROUTES);