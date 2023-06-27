import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Client } from '../model/client';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly API = '/assets/clients.json';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Client[]>(this.API)
      .pipe(
        first(),
        tap(clients => console.log(clients))
      );
  }
}
