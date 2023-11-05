import { Inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {switchMap, map, catchError} from 'rxjs/operators'

import {of} from 'rxjs'
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from "../../actions/getProducts.action";
import { ProductsService } from "../../services/products.service";
import { ProductsResponseInterface } from "../../types/productsResponse.interface";
import { getProductAction, getProductFailureAction, getProductSuccessAction } from "../../actions/getProduct.action";
import { ProductResponseInterface } from "../../types/product.response.interfase";

@Injectable()
export class ProductEffect {
    getProducts$ = createEffect(() => this.actions$.pipe(
        ofType(getProductsAction),
        switchMap(({offset}) => {
            return this.productService.getProducts(offset).pipe(
                map((products: ProductsResponseInterface) => {
                    return getProductsSuccessAction({products})
                }),
                catchError(() => {
                    return of(getProductsFailureAction())
                })
            )
        })
    ))

    getProduct$ = createEffect(() => this.actions$.pipe(
        ofType(getProductAction),
        switchMap(({id}) => {
            return this.productService.getProduct(id).pipe(
                map((product: ProductResponseInterface) => {
                    return getProductSuccessAction({product})
                }),
                catchError(() => {
                    return of(getProductFailureAction())
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private productService: ProductsService) {}
}