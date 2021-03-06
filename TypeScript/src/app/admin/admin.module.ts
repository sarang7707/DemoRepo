import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';

import { AdminRoutingModule } from './admin-routes.module';

@NgModule({
  imports: [
      CommonModule,
      AdminRoutingModule
  ],
  declarations: [AdminComponent, HomeComponent]
})
export class AdminModule { }
