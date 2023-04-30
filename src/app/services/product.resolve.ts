import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { ProductComponent } from "../pages/product/product/product.component";
import { Observable, tap } from "rxjs";
import { ProductService } from "./product.service";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<Product[]> {

    constructor(private productService: ProductService,private router: Router, private activatedRoute: ActivatedRoute) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Product[] | Observable<Product[]> | Promise<Product[]> {
        return this.productService.getAllProducts().pipe(tap( ps => {
            if ( !ps?.length ) {
                this.router.navigate(['..'], {relativeTo: this.activatedRoute});
            }
        }))
    }
}