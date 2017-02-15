import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';

//Routing
import { routing }   from './app.routing';
import { NewsPreviewComponent } from './news-preview/news-preview.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    FooterComponent,
    HomePageComponent,
    NewsPreviewComponent,
    AdminPanelComponent,
    NewsPageComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
