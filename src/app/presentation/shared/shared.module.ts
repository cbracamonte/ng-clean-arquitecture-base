import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NavBarComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavBarComponent]
})
export class SharedModule { }
