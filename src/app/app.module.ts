import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // entryComponents: [TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
