import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  public CategoryId;
  public products=[];

  constructor(private route:ActivatedRoute,private data:DataService,private router:Router) { }

  ngOnInit() {
    this.CategoryId=this.route.snapshot.paramMap.get('id');
    this.products=this.data.GetProducts().filter(x=>x.CategoryId==this.CategoryId);
  }
  public GetDetails(item){
    this.router.navigate(['details',item.ProductId],{relativeTo:this.route});
  }
  
  


}
