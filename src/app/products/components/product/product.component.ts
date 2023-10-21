import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable, switchMap } from "rxjs";
import { ProductResponseInterface } from "../../types/product.response.interfase";
import { Store, select } from "@ngrx/store";
import { getProductAction } from "../../actions/getProduct.action";
import { errorSelector, isLoadingSelector, productSelector } from "../../store/product/selectors";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    id: number;
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    product$: Observable<ProductResponseInterface | null>
    constructor(private activateRoute: ActivatedRoute, private store: Store){
    }
    ngOnInit(): void {
        this.initValues()
        this.getProduct()
    }

    initValues(): void {
        this.id = this.activateRoute.snapshot.params['id'];
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.product$ = this.store.pipe(select(productSelector))
    }

    getProduct(): void {
        this.store.dispatch(getProductAction({id:this.id}));
    }
}
