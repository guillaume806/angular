
import { FormsModule } from '@angular/forms';
import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ContactComponent} from "./app.contact.component";



@NgModule({
  declarations: [

    ContactComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],

})
export class AppModule { }
