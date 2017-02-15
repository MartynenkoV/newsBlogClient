import { Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component';
import {AdminPanelComponent} from './admin-panel/admin-panel.component';
import {NewsPageComponent} from './news-page/news-page.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'news', component: NewsPageComponent },
  { path: 'news/:page', component: NewsPageComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: ':page', component: HomePageComponent }
  
];

export const routing = RouterModule.forRoot(APP_ROUTES);