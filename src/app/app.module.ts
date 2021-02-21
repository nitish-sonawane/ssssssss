import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CssdemoComponent } from './cssdemo/cssdemo.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JqueryComponent } from './jquery/jquery.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DataService } from './data.service';
import { CategorieslistComponent } from './categorieslist/categorieslist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CssdemoComponent,
    JavascriptComponent,
    JqueryComponent,
    ContactComponent,
    NotfoundComponent,
    CategorieslistComponent,
    ProductlistComponent,
    ProductdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
