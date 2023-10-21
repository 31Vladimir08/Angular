import { ProductStateInterface } from "src/app/products/types/productState.interface copy";
import { ProductsStateInterface } from "src/app/products/types/productsState.interface";

export interface AppStateInterface {
    products: ProductsStateInterface,
    product: ProductStateInterface
}