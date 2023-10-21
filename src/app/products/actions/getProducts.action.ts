import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../store/products/productsType";
import { ProductsResponseInterface } from "../types/productsResponse.interface";

export const getProductsAction = createAction(
    ActionTypes.GET_PRODUCTS,
    props<{offset: number}>()
)

export const getProductsSuccessAction = createAction(
    ActionTypes.GET_PRODUCTS_SUCCESS,
    props<{products: ProductsResponseInterface}>()
)

export const getProductsFailureAction = createAction(
    ActionTypes.GET_PRODUCTS_FAILURE
)