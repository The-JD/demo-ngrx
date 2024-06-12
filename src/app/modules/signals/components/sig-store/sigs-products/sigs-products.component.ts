import { ChangeDetectorRef, Component, OnInit, Signal, effect, inject, signal } from '@angular/core';
import { SigsProductService } from './sigs-product.service';
import { SigsProductStore } from './sigs-product.store';
import { patchState } from '@ngrx/signals';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SigsCartStore } from '../sigs-cart/sigs-cart.store';
import { SigsOrderStore } from '../sigs-orders/sigs-orders.store';

@Component({
  selector: 'app-sigs-products',
  standalone: true,
  imports: [InfiniteScrollModule, CommonModule, HttpClientModule],
  templateUrl: './sigs-products.component.html',
  styleUrl: './sigs-products.component.css',
  // providers: [SigsProductStore, SigsCartStore]
})
export class SigsProductsComponent implements OnInit {

  productStore = inject(SigsProductStore);
  cartStore = inject(SigsCartStore);
  orderStore = inject(SigsOrderStore);

  pageData: { pageSize: number, pageNumber: number } = { pageSize: 10, pageNumber: 1 }

  constructor(private productService: SigsProductService) {
    effect(() => {
      console.log('Products Effect')
    })
  }

  ngOnInit() {
    this.loadProducts();
  }

  onScroll() {
    this.pageData.pageNumber = this.pageData.pageNumber + 1;
    this.loadProducts();
  }

  loadProducts() {
    const pageNumber = this.pageData.pageNumber;
    const pageSize = this.pageData.pageSize;

    this.productService.fetchProductsList(pageNumber, pageSize).subscribe(data => {
      const updatedList = [...this.productStore.products(), ...data];
      patchState(this.productStore, { products: updatedList });
    })
  }

  addToCart(productId: number, quantity: number = 1) {
    let prodData = this.productStore.products();
    prodData = prodData.map(item => item.id === productId ?
      {
        ...item,
        isAdded: true
      } : item);

    const total = prodData.filter(x => x.isAdded).reduce((total, item) => {
      return total + (item ? item.price * 1 : 0);
    }, 0)

    patchState(this.productStore, { products: prodData })
    patchState(this.productStore, { totalPrice: total })

    let cartData = this.cartStore.cartItems();
    const existingItem = this.cartStore.cartItems().find(item => item.productId === productId);
    if (existingItem) {
      cartData = cartData.map(item =>
        item.productId === productId ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      cartData = [...cartData, { productId, quantity, name }];
    }
    patchState(this.cartStore, { cartItems: cartData, isUpdated: true });
  }
}

