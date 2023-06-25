import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  data: any = [];
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getAllData();
  }
  getAllData() {
    this.apiService.getAllPlayers().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getLessThan5Innings() {
    this.apiService.getLessThan5Innings().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getGraterThan500Runs() {
    this.apiService.getGraterThan500Runs().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getGraterThan45Average() {
    this.apiService.getGraterThan45Average().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getLessThan100Runs() {
    this.apiService.getLessThan100Runs().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  getPlayersByName() {
    this.apiService.getPlayersByName().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  DeletePlayer(data: any) {
    let body = {
      _id: data,
    };
    this.apiService.deletePlayer(body).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  onOptionsSelected(value: string) {
    if (value === 'get-less-than-5-innings') {
      this.getLessThan5Innings();
    } else if (value === 'get-grater-than-500-runs') {
      this.getGraterThan500Runs();
    } else if (value === 'get-grater-than-45-average') {
      this.getGraterThan45Average();
    } else if (value === 'get-less-than-100-runs') {
      this.getLessThan100Runs();
    } else if (value === 'get-players-by-name') {
      this.getPlayersByName();
    } else {
      this.getAllData();
    }
  }
  deletePlayer(id: string) {
    this.DeletePlayer(id);
  }
}
