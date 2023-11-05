import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoriesResponseInterface } from "../types/categoriesResponse.interface";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class CategoriesService {
    constructor(private http: HttpClient) {
    }
    
    getCategories(): Observable<CategoriesResponseInterface> {
        const fullUrl = `${environment.apiUrl}/${environment.storeID}/categories`
        return this.http.get<CategoriesResponseInterface>(fullUrl)
    }
}