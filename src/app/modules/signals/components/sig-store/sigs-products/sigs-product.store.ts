
import { signalStore, withHooks, withState } from '@ngrx/signals';
import { SigsProductModel } from './sigs-products.model';
import { Injectable } from '@angular/core';
import { withDevtools, withStorageSync } from '@angular-architects/ngrx-toolkit';
import { createSelector } from '@ngrx/store';
import { SigsCartStore } from '../sigs-cart/sigs-cart.store';

type SigsProductState = { products: SigsProductModel[], cartList: SigsProductModel[], totalPrice: number };

export const initialSigsProductState: SigsProductState = {
    products: [],
    cartList: [],
    totalPrice: 0
}

export const SigsProductStore = signalStore(
    { providedIn: 'root' },
    withDevtools('products'),
    withState(initialSigsProductState),
    withStorageSync('sigsProductState'),
    withHooks({
        onInit() {
            console.log('sp init')
        },
        onDestroy() {
            console.log('sp destroy')
        }
    })
);
