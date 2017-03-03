import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  template: `
	<div class="jumbotron jumbotron-fluid">
	  <div class="container text-center">
	    <h1 class="display-3">Reusable UI components</h1>
	    <div class="card">
		  <div class="card-block">
		    <a class="btn btn-outline-info" routerLink="/ui/toast">Toast</a>
		    <a class="btn btn-outline-info" routerLink="/ui/toast">Toast</a>
		    <a class="btn btn-outline-info" routerLink="/ui/toast">Toast</a>
		    <a class="btn btn-outline-info" routerLink="/ui/toast">Toast</a>
		    <a class="btn btn-outline-info" routerLink="/ui/toast">Toast</a>
		    <a class="btn btn-outline-info" routerLink="/ui/toast">Toast</a>
		  </div>
	    </div>
	  </div>
	</div>
  <router-outlet></router-outlet>
  `
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
