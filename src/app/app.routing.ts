import { Routes, RouterModule} from "@angular/router";
import {HomePageComponent} from './home-page/home-page.component'

const APP_ROUTES: Routes = [

  { path: '', component: HomePageComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);