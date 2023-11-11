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
    getProducts(url: string): Observable<ProductsResponseInterface> {
        const fullUrl = environment.apiUrl + url
        return this.http.get<ProductsResponseInterface>(fullUrl)
    }

    getProduct(id: number): Observable<ProductResponseInterface> {
        const fullUrl = `${environment.apiUrl}/${environment.storeID}/products/${id}`
        return this.http.get<ProductResponseInterface>(fullUrl)
    }
}