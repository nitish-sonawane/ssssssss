import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public GetCategories(){
    return[
      {CategoryId:1, CategoryName:'Electronics'},
      {CategoryId:2, CategoryName:'Shoes'}
    ];
  }
  public GetProducts(){
    return[
      {ProductId:1, Name:'Samsung Tv',Price:45000.55,CategoryId:1},
      {ProductId:2, Name:'Nike casuals',Price:5000.55,CategoryId:2},
      {ProductId:3, Name:'Mobile',Price:15000.55,CategoryId:1},
      {ProductId:4, Name:'Lee cooper',Price:4000.55,CategoryId:2},

    ];
  }
}
