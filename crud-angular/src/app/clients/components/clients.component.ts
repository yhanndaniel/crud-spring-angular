import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Client } from '../model/client';
import { ClientsService } from '../services/clients.service';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<Client[]>;
  displayedColumns = ['name', 'address', 'phone', 'email'];


  constructor(
    private clientsService: ClientsService,
    public dialog: MatDialog
  ) {
    this.clients$ = this.clientsService.list()
      .pipe(
        catchError(error => {
          this.onError('An error occurred!');
          return of([]);
        }),
      );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  ngOnInit(): void {
  }
}
