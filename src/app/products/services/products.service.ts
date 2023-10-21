import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"
import { ProductsResponseInterface } from "../types/productsResponse.interface";
import { environment } from "src/environments/enviroment";
import { ProductResponseInterface } from "../types/product.response.interfase";

@Injectable()
export class ProductsService {
constructor(private http: HttpClient) {
}
    getProducts(offset: number): Observable<ProductsResponseInterface> {
        const fullUrl = `${environment.apiUrl}/${environment.storeID}/products?limit=${environment.limit}&?offset=${offset}`
        const headers = { 'Authorization': 'Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD' }
        return this.http.get<ProductsResponseInterface>(fullUrl, { headers })
    }

    getProduct(id: number): Observable<ProductResponseInterface> {
        const fullUrl = `${environment.apiUrl}/${environment.storeID}/products/${id}`
        const headers = { 'Authorization': 'Bearer public_7BxbJGWyDaZfSQqjVS5Ftr4jzXkS43UD' }
        return this.http.get<ProductResponseInterface>(fullUrl, { headers })
    }
}