import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './components/clients.component';



@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    AppMaterialModule
  ]
})
export class ClientsModule { }
