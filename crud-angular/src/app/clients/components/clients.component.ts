import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Client } from '../model/client';
import { ClientsService } from '../services/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<Client[]>;
  displayedColumns = ['name', 'address', 'phone', 'email'];


  constructor(private clientsService: ClientsService) {
    this.clients$ = this.clientsService.list()
      .pipe(
        catchError(error => {
          console.log(error);
          return of([]);
        }),
      );
  }

  ngOnInit(): void {
  }
}
