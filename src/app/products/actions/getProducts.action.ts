import { createAction, props } from "@ngrx/store";
import { ProductsActionTypes } from "../store/products/productsActionType";
import { ProductsResponseInterface } from "../types/productsResponse.interface";

export const getProductsAction = createAction(
    ProductsActionTypes.GET_PRODUCTS,
    props<{offset: number}>()
)

export const getProductsSuccessAction = createAction(
    ProductsActionTypes.GET_PRODUCTS_SUCCESS,
    props<{products: ProductsResponseInterface}>()
)

export const getProductsFailureAction = createAction(
    ProductsActionTypes.GET_PRODUCTS_FAILURE
)