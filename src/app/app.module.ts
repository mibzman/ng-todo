import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import { ToDoItemComponent } from './to-do/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
