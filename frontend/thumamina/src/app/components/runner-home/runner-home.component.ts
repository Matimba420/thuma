import { Component, OnInit } from '@angular/core';
import { Job ,Home} from 'src/app/interface/jobs';

@Component({
  selector: 'app-runner-home',
  templateUrl: './runner-home.component.html',
  styleUrls: ['./runner-home.component.css']
})
export class RunnerHomeComponent implements OnInit {

  items: Home[] = [{ "earnings":"FSHGDHDV",
    "request":"HGSHGDH",
    "jobs": "GFGHGGV",
    "ratings": "string"

   
    

  }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
