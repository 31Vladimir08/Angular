import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { ProductsResponseInterface } from "../../types/productsResponse.interface";
import { getProductsAction } from "../../actions/getProducts.action";
import { Observable, Subscription } from "rxjs";
import { errorSelector, isLoadingSelector, productsSelector } from "../../store/products/selectors";
import { environment } from "src/environments/environment";
import { ActivatedRoute, Params, Router } from "@angular/router";
import queryString from "query-string";


@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {
    currentUrl: string
    categoryId: number | null
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
        this.queryParamsSubscription?.unsubscribe();
    }

    ngOnInit(): void {
        this.initValues();
        this.inizializeListeners();
    }
    inizializeListeners() {
        // для пагинации
        this.route.queryParams.subscribe((params: Params) => {
            let currentPage = Number(params['page'] || '1')
            if (this.currentPage !== currentPage) {
                this.currentPage = currentPage
                this.baseUrl = this.router.url.split('?')[0]
                this.fetchData()
            }
        })

        // для изменения категории
        this.route.params.subscribe((params: Params) => {
            this.categoryId = params['categoryId'] ?? null
            this.baseUrl = this.router.url.split('?')[0]
            this.fetchData()
        })
    }

    initValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.products$ = this.store.pipe(select(productsSelector))
        this.baseUrl = this.router.url.split('?')[0]
        this.categoryId = Number(this.route.snapshot.paramMap.get('categoryId'))
    }

    fetchData(): void {
        const offset = this.currentPage * this.limit - this.limit
        const parsedUrl = queryString.parseUrl(this.apiUrlProps)
        const stringifiedParams = this.categoryId == null || this.categoryId === 0 ? queryString.stringify({
          limit: this.limit,
          offset,
          ...parsedUrl.query
        })
        : queryString.stringify({
            limit: this.limit,
            offset,
            category: this.categoryId,
            ...parsedUrl.query
          })

        const apiUrlWithParams = `${parsedUrl.url}/products?${stringifiedParams}`
        if (this.currentUrl !== apiUrlWithParams) {
            this.currentUrl = apiUrlWithParams
            this.store.dispatch(getProductsAction({url: `${apiUrlWithParams}`}));
        }
    }
}
