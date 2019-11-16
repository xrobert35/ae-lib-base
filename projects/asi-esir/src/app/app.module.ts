import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AsiEsirInputModule} from 'asi-esir-lib';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AsiEsirInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
