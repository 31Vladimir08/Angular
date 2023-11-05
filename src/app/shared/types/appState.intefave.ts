import { CategoriesStateInterface } from "src/app/categories/types/categoriesState.interface";
import { ProductStateInterface } from "src/app/products/types/productState.interface";
import { ProductsStateInterface } from "src/app/products/types/productsState.interface";

export interface AppStateInterface {
    products: ProductsStateInterface,
    product: ProductStateInterface,
    categories: CategoriesStateInterface
}