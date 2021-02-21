import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../data.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  public ProductId;
  public products=[];

  constructor(private route:ActivatedRoute, private data:DataService) { }

  ngOnInit() {
    this.ProductId=this.route.snapshot.paramMap.get('id');
    this.products=this.data.GetProducts().filter(x=>x.ProductId==this.ProductId);
  }
  

}
