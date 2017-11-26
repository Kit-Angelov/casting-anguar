import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import {Routes, RouterModule} from "@angular/router";

import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { MainComponent } from "./main/main.component";
import { RegComponent } from "./reg/reg.component";
import { AuthComponent } from "./auth/auth.component";
import { TestimgComponent } from "./testimg/testimg.component";

import { HttpClientModule }   from '@angular/common/http';
import {ParametersComponent} from "./parameters/parameters.component";



const appRoutes: Routes =[
    // { path: '', component: MainComponent},
    { path: 'main', component: MainComponent},
    // { path: 'registration', component: RegComponent},
];


@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes), CommonModule],
    declarations: [ AppComponent, MainComponent, RegComponent, ParametersComponent, AuthComponent, TestimgComponent],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }