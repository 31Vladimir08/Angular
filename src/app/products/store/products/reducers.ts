import { Action, createReducer, on } from "@ngrx/store";
import { ProductsStateInterface } from "../../types/productsState.interface";
import { getProductsAction, getProductsFailureAction, getProductsSuccessAction } from "../../actions/getProducts.action";

const initialState: ProductsStateInterface = {
    isLoading: false,
    error: null,
    data: null
}

const productsReducer = createReducer(
    initialState,
    on(
        getProductsAction,
        (state):  ProductsStateInterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getProductsSuccessAction,
        (state, action):  ProductsStateInterface => ({
            ...state,
            isLoading: false,
            data: action.products
        })
    ),
    on(
        getProductsFailureAction,
        (state):  ProductsStateInterface => ({
            ...state,
            isLoading: false
        })
    )
)

export function reducersProducts(state: ProductsStateInterface, action: Action) {
    return productsReducer(state, action)
}

