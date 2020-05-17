import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '@presentation/shared/shared.module';
import { ContainerAppComponent } from './presentation/feature/container-app/container-app.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
