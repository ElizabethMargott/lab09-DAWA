import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgClass, SlicePipe } from '@angular/common';

const MODULES = [
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  SlicePipe,
  NgClass,
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MODULES],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: IProduct[] = [];
  isExpanded: boolean[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.isExpanded = new Array(this.products.length).fill(false);
    });
  }

  toggleDescription(index: number): void {
    this.isExpanded[index] = !this.isExpanded[index];
  }
  
}
