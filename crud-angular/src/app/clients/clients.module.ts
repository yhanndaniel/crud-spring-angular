import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientFormComponent } from './components/client-form/client-form.component';



@NgModule({
  declarations: [
    ClientsComponent,
    ClientFormComponent
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class ClientsModule { }
