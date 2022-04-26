import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';
import { History } from 'src/app/interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  item: History;

  id: any;
  id1: any;
  today: Date;
  runnerId: any

  runnerName: any;
  router: any;

  constructor(private service: HistoryService, private route: Router) {
    this.id1 = this.route.getCurrentNavigation().extras.state?.['id'];
    //this.runnerId = this.id1;
  }

  ngOnInit(): void {
    this.getHistory();
    const now = new Date();
    console.log(now.toLocaleDateString());

    this.getData();
    this.router.navigateByUrl('/rate', {replaceUrl:true});
    
  }

  getHistory() {
    this.id = localStorage.getItem('runnerID');
    console.log(this.id)
    this.service.getHistory(this.id).subscribe((res) => {
      this.item = res;
      console.log(this.item);
    }, (err) => {
      console.log(err)
    });
  }

  getData() {
    let data = JSON.parse(localStorage.getItem('access'));

    this.runnerName = data[0].name + ' ' + data[0].surname;
    console.log(this.runnerName);
  }
}
