import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { CustomBindingComponent } from './custom-binding/custom-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabindingComponent,
    EventBindingComponent,
    CustomBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
