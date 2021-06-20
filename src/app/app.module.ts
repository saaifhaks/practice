import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FormsModule} from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { from } from 'rxjs';
import { RFormComponent } from './r-form/r-form.component';
import { HeaderComponent } from './header/header.component';
import { CompServiceComponent } from './comp-service/comp-service.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { TableComponent } from './table/table.component';
import { CctvComponent } from './cctv/cctv.component';
import {MatInputModule} from '@angular/material/input';


import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { TodoComponent } from './todo/todo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [

    AppComponent,
     ContactComponent,
     RFormComponent,
     HeaderComponent,
     CompServiceComponent,
     SlideshowComponent,
     TableComponent,
     CctvComponent,
     TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    BrowserAnimationsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
