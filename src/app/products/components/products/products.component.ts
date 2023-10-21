import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ProductsResponseInterface } from "../../types/productsResponse.interface";
import { getProductsAction } from "../../actions/getProducts.action";
import { Observable } from "rxjs";
import { errorSelector, isLoadingSelector, productsSelector } from "../../store/products/selectors";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    products$: Observable<ProductsResponseInterface | null>

    constructor(private store: Store) {        
    }

    ngOnInit(): void {
        this.initValues();
        this.getProducts();
    }

    initValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.products$ = this.store.pipe(select(productsSelector))
    }

    getProducts(): void {
        this.store.dispatch(getProductsAction({offset: 0}));
    }
}
