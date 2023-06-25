import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  data: any = [];
  constructor(private routes: Router, private apiService: ApiService) {}

  ngOnInit(): void {}

  registerPlayer(
    Name: string,
    Innings: number,
    Highest: number,
    Runs: number,
    Average: number
  ) {
    this.apiService
      .addPlayer({
        Name: Name,
        Innings: Innings,
        Highest: Highest,
        Runs: Runs,
        Average: Average,
      })
      .subscribe((response: any) => {
        this.data = response?.response;
        console.log('registerPlayer', this.data);
      });
    this.routes.navigate(['/dashboard']);
  }
  Register(
    Name: string,
    Innings: number,
    Highest: number,
    Runs: number,
    Average: number
  ) {
    this.registerPlayer(Name, Innings, Highest, Runs, Average);
  }
}
