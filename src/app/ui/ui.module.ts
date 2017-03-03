import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';
import { ToastComponent } from './toast.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule
  ],
  declarations: [UiComponent, ToastComponent]
})
export class UiModule { }
