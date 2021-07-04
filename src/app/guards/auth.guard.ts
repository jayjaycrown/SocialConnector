import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  returnUrl = location.pathname;
  canLoad(
    route: Route,
    segments: UrlSegment[]) {
    const currentUser = this.authService.userValue;
    if (currentUser) {
      // authorized so return true
      // alert(1);

      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/auth'], { queryParams: { returnUrl: this.returnUrl } });
    return false;
  }
}
