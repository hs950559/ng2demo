import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';
import { ToastComponent } from './toast.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{
				path: '',
				component: UiComponent,
			},
			{
				path: 'toast',
				component: ToastComponent
			}
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class UiRoutingModule { }
