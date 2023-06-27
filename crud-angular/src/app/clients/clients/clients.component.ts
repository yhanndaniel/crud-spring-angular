import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients: Client[] = [
    { _id: '1', name: 'John Doe', address: '123 Main St', phone: '555-555-5555', email: 'johndoe@me.com' },
    { _id: '2', name: 'Jane Doe', address: '456 Main St', phone: '555-555-5556', email: 'janedoe@me.com' },
  ];
  displayedColumns = ['name', 'address', 'phone', 'email'];

  constructor() { }

  ngOnInit(): void {
  }
}
