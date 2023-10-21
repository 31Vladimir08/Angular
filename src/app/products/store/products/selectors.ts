import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsStateInterface } from "../../types/productsState.interface";

export const productsFeatureSelector = createFeatureSelector<
ProductsStateInterface>('products')

export const isLoadingSelector = createSelector(
    productsFeatureSelector, 
    (feedState: ProductsStateInterface) => feedState.isLoading)

export const errorSelector = createSelector(
    productsFeatureSelector, 
    (feedState: ProductsStateInterface) => feedState.error)

export const productsSelector = createSelector(
    productsFeatureSelector, 
    (feedState: ProductsStateInterface) => feedState.data)