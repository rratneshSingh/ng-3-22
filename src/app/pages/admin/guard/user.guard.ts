import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AddUserComponent } from "../add-user/add-user.component";

export class UserGuard implements CanDeactivate<AddUserComponent> {

    canDeactivate(component: AddUserComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if ( component.form.dirty ) {
            const ans = confirm('Are you sure you want to leave');
            if ( ans ) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}