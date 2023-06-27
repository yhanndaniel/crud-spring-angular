import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Client } from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }

  list(): Client[] {
    return [
      { _id: '1', name: 'John Doe', address: '123 Main St', phone: '555-555-5555', email: 'johndoe@me.com' },
      { _id: '2', name: 'Jane Doe', address: '456 Main St', phone: '555-555-5556', email: 'janedoe@me.com' },
    ];
  }
}
