import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  users: any;
  
  constructor(private demoService: DemoService) { }

  ngOnInit() {
  	this.demoService.getUsers()
  		.subscribe(resData => this.users = resData);
  }

}
