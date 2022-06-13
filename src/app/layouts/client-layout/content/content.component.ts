import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'types/Product';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  products: Product[]

  constructor(
    private productService:ProductService,
  ) { 
    this.products=[]
  }

  ngOnInit(): void {
    this.onGetlist()
  }
  onGetlist(){
    this.productService.getProducts().subscribe((data)=>{
      this.products=data
      console.log(data);
      
  });
  }

}
