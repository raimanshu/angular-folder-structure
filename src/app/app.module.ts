import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './blueprint-1/layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './blueprint-1/layout/content-layout/content-layout.component';
import { FooterLayoutComponent } from './blueprint-1/layout/footer-layout/footer-layout.component';
import { NavLayoutComponent } from './blueprint-1/layout/nav-layout/nav-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    FooterLayoutComponent,
    NavLayoutComponent,
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
