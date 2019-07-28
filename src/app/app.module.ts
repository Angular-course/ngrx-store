import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlComponent } from './counter-control/counter-control.component';
import { CounterComponent } from './counter/counter.component';
import {StoreModule} from '@ngrx/store';
// reducers
import {counterReducer} from './store/reducers/counter-reducer';
@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
