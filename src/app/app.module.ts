import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {dataService} from '../app/service/data.service';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from '../app/service/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,FormsModule
  ],
  providers: [dataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
