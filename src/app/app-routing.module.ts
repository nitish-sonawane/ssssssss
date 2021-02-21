import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { JqueryComponent } from './jquery/jquery.component';
import { CssdemoComponent } from './cssdemo/cssdemo.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategorieslistComponent } from './categorieslist/categorieslist.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'js',component:JavascriptComponent},
  {path:'jq',component:JqueryComponent},
  {path:'css',component:CssdemoComponent},
  {path:'categories',component:CategorieslistComponent},
  {path:'categories/:id',component:ProductlistComponent},
  {path:'categories/:id',component:ProductlistComponent,
   children:[
     {path:'details/:id',component:ProductdetailsComponent}
   ]},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
