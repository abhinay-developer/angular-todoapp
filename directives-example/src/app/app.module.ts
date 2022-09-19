import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { SignupComponent } from './signup/signup.component';
import { DirectivesComponent } from './directives/directives.component';

@NgModule({
  declarations: [
     AppComponent,
     FormArrayComponent,
     SignupComponent,
     DirectivesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
