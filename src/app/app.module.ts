import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
// Material
import { MatIconModule } from "@angular/material/icon";
import {  MatButtonModule} from "@angular/material/button";
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
//components
import { PersonComponent } from './components/person/person.component';
import { SceneComponent } from './components/scene/scene.component';
import { Scene2Component } from './components/scene2/scene2.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    SceneComponent,
    Scene2Component,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatListModule,
    MatGridListModule,
    NgbModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
