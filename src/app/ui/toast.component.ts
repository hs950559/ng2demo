import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../shared/services/toastr.service';

@Component({
  selector: 'app-toast',
  template: `
<div class="container-fluid">
	<div class="mx-4 my-4">
		<button class="btn btn-success" (click)="toastSuccess()">Success Toast</button>
		<button class="btn btn-info" (click)="toastInfo()">Info Toast</button>
		<button class="btn btn-danger" (click)="toastError()">Danger Toast</button>
		<button class="btn btn-warning" (click)="toastWarning()">Warning Toast</button>
	</div>
</div>
`
})
export class ToastComponent implements OnInit {

  constructor(private toastrService: ToastrService) { }

  ngOnInit() {
  }

  toastSuccess(){
  	this.toastrService.success("I am here", 'success');
  }

  toastInfo(){
  	this.toastrService.info("I am here", 'info');
  }

  toastWarning(){
  	this.toastrService.warning("I am here", 'warning');
  }

  toastError(){
  	this.toastrService.error("I am here", 'error');
  }

}
