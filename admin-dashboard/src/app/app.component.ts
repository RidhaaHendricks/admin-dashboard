import { Component, OnInit } from '@angular/core';
import { IAdminDashboard } from './models/admin-dashboard.model';
import { DataService } from './express-server/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './admin-dashboard.html',
  styleUrls: [
    './app.component.css',
    '../styles.css'
  ]
})

export class AdminDashboardComponent implements OnInit {
  title = 'admin-dashboard';
  tempNumbers: IAdminDashboard[] = [];
  data: any;

  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response.message;
    });
  }

}