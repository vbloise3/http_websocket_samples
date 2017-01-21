/**
 * Created by vincebloise on 1/18/17.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import 'rxjs/add/operator/map';
import { YoMoFoComponent } from './yo-mo-fo/yo-mo-fo';
import AppComponent from './appComponent/appComponent';
import HomeComponent from './home/home';


@NgModule({
    imports:      [ BrowserModule, ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path: '',                    component: HomeComponent},
            {path: 'products/:productId', component: HomeComponent},
            {path: 'yo', component: YoMoFoComponent},
            {path: 'dbaa', component: HomeComponent}
        ])],
    declarations: [ AppComponent, HomeComponent, YoMoFoComponent],
    providers:    [
        {provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }

