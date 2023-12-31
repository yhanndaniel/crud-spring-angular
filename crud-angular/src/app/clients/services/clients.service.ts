import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Client } from '../model/client';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private readonly API = 'api/clients';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Client[]>(this.API)
      .pipe(
        first(),
        delay(1000),
        tap(clients => console.log(clients))
      );
  }
}
