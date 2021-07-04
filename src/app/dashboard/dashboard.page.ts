import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  type = 'ch';
  constructor(
    private router: Router
  ) {}

  ngOnInit() {}

  segmentChanged(ev) {}

  gotoCHTOOLS(){
    this.router.navigateByUrl('/tabs/home');
  }
}
