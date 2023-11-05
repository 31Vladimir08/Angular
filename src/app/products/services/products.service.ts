import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { ProductsResponseInterface } from "../types/productsResponse.interface";
import { ProductResponseInterface } from "../types/product.response.interfase";
import { environment } from "src/environments/environment";

@Injectable()
export class ProductsService {
constructor(private http: HttpClient) {
}
    getProducts(offset: number): Observable<ProductsResponseInterface> {
        const fullUrl = `${environment.apiUrl}/${environment.storeID}/products?limit=${environment.limit}&?offset=${offset}`
        return this.http.get<ProductsResponseInterface>(fullUrl)
    }

    getProduct(id: number): Observable<ProductResponseInterface> {
        const fullUrl = `${environment.apiUrl}/${environment.storeID}/products/${id}`
        return this.http.get<ProductResponseInterface>(fullUrl)
    }
}