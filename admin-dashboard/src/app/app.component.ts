import { Component } from '@angular/core';
import { IAdminDashboard } from './models/admin-dashboard.model';

@Component({
  selector: 'app-root',
  templateUrl: './admin-dashboard.html',
  styleUrls: [
    './app.component.css',
    '../styles.css'
  ]
})

export class AdminDashboardComponent {
  title = 'admin-dashboard';
  tempNumbers: IAdminDashboard[] = [];

  constructor() {
    this.tempNumbers = [
      { id: 1, number: "1234567890", status: "active", messages: 10 },
      { id: 2, number: "0987654321", status: "inactive", messages: 0 },
      { id: 3, number: "1122334455", status: "active", messages: 5 },
      { id: 4, number: "1122134455", status: "active", messages: 8 }
    ]
  }
}