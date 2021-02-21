import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-categorieslist',
  templateUrl: './categorieslist.component.html',
  styleUrls: ['./categorieslist.component.css']
})
export class CategorieslistComponent implements OnInit {
  public Categories=[];

  constructor(private data:DataService, private router: Router) { }

  ngOnInit() {
    this.Categories=this.data.GetCategories();
  }
  public CategoriesClick(item){
    this.router.navigate(['categories',item.CategoryId]);
  }

}
