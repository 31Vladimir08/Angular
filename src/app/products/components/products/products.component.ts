import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ProductsResponseInterface } from "../../types/productsResponse.interface";
import { getProductsAction } from "../../actions/getProducts.action";
import { Observable, Subscription } from "rxjs";
import { errorSelector, isLoadingSelector, productsSelector } from "../../store/products/selectors";
import { environment } from "src/environments/environment";
import { ActivatedRoute, Params, Router } from "@angular/router";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
    @Input('categoryId') categoryId: number | null
    @Input('apiUrl') apiUrlProps: string
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    products$: Observable<ProductsResponseInterface | null>
    limit = environment.limit
    baseUrl: string
    queryParamsSubscription: Subscription
    currentPage: number

    constructor(private store: Store, private router: Router, private route: ActivatedRoute) {        
    }
    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe();
    }

    ngOnInit(): void {
        this.initValues();
        this.inizializeListeners();
    }
    inizializeListeners() {
        this.route.queryParams.subscribe((params: Params) => {
            this.currentPage = Number(params['page'] || '1')
            this.fetchData()
        })
    }

    initValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.products$ = this.store.pipe(select(productsSelector))
        this.baseUrl = this.router.url.split('?')[0]
        console.log(this.baseUrl)
    }

    fetchData(): void {
        const offset = this.currentPage * this.limit - this.limit
        //const parsedUrl = parseUrl(this.apiUrlProps)
        //const stringifiedParams = stringify({
        //  limit: this.limit,
        //  offset,
        //  ...parsedUrl.query
        //})
        //const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
        //console.log(apiUrlWithParams)
        this.store.dispatch(getProductsAction({url: `${this.apiUrlProps}/products`}));
    }
}
