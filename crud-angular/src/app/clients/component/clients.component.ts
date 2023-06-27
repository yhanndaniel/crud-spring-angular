import { Component, OnInit } from '@angular/core';

import { Client } from '../model/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [];
  displayedColumns = ['name', 'address', 'phone', 'email'];


  constructor(private clientsService: ClientsService) {
    this.clients = this.clientsService.list();
  }

  ngOnInit(): void {
  }
}
