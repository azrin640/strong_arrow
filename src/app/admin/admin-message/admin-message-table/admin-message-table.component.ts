import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { MessageService } from 'src/app/services/message/message.service';
import { Contact } from 'src/app/interface/contact';

@Component({
  selector: 'app-admin-message-table',
  templateUrl: './admin-message-table.component.html',
  styleUrls: ['./admin-message-table.component.scss']
})
export class AdminMessageTableComponent implements AfterViewInit, OnInit {   
   
   dataSource = new MatTableDataSource<Contact>() ;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['created', 'email'];
  
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  constructor(
     private messageService: MessageService
  ){  this.updateTable() }

  ngOnInit() {      

  }

  updateTable()
   {  this.messageService.messages.subscribe(
         (response: Contact[]) => {
            console.log(response);
            this.dataSource.data = response;
         }  
      )

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}
