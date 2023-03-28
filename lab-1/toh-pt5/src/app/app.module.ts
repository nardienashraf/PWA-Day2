import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      // .The boolean parameter enabled is set to the inverse of the isDevMode() value.
      // This determines whether the Service Worker should be enabled in production or development environment.
      enabled: !isDevMode(),
      // Register the service worker after 30 seconds of inactivity
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
