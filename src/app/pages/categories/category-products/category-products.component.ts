import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Interfaces/IProduct';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss'],
})
export class CategoryProductsComponent implements OnInit {

  public category: CategoryProductsComponent = null;
  public products: IProduct[] = [];
  public imageBase : string = "http://localhost:3000/uploads/";
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.api.getCategoryProducts(params.categoryId).subscribe(response => {
        if (response.success) {
          this.category = response.category;
          this.products = response.products;
        }
      });
    });
    
  }

}
