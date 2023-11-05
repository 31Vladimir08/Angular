import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CategoriesStateInterface } from "../../types/categoriesState.interface";

export const categoriesFeatureSelector = createFeatureSelector<
CategoriesStateInterface>('categories')

export const isLoadingSelector = createSelector(
    categoriesFeatureSelector, 
    (categoriesState: CategoriesStateInterface) => categoriesState.isLoading)

export const errorSelector = createSelector(
    categoriesFeatureSelector, 
    (categoriesState: CategoriesStateInterface) => categoriesState.error)

export const categoriesSelector = createSelector(
    categoriesFeatureSelector, 
    (categoriesState: CategoriesStateInterface) => categoriesState.data)