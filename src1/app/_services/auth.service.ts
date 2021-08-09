/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
// import { of, Observable, Subject, throwError, BehaviorSubject } from 'rxjs';
// import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { catchError, retry, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../_models/user';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
const TOKEN_KEY = 'my-token';
// tslint:disable-next-line: variable-name
const another_Key = 'test-key';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/fhir+json',
    AUTHORIZATION: ' [jwt]',
    'X-Requested-With': 'XMLHttpRequest',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public userSubject: BehaviorSubject<any>;
  public user: Observable<any>;
  token = '';
  status: any;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('user'))
    );
    this.loadToken();
    this.user = this.userSubject.asObservable();
  }

  async loadToken() {
    // const user: any = await JSON.parse(localStorage.getItem('user'));
    const user = await JSON.parse(localStorage.getItem('user'));
    if (user) {
      const result = user.result;
      const api_token = result.api_token;
      if (api_token) {
        // console.log('set token: ', token.value);
        this.token = api_token;
        this.userSubject.next(true);
      } else {
        this.userSubject.next(false);
      }
    }
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  register(email, password, name, gresponse) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('name', name);
    formData.append('gresponse', gresponse);
    // console.log(JSON.stringify(formData));
    // formData.forEach((value, key) => {
    //   console.log(key + ' , ' + value);
    // });
    return this.http.post<any>(`${environment.apiUrl}/register`, formData).pipe(
      map((user: any) => {
        const result = user.result;
        if (result.length !== 0) {
          localStorage.setItem('ch_token', JSON.stringify(result.ch_token));
          localStorage.setItem(
            'greenroom_token',
            JSON.stringify(result.greenroom_token)
          );
          localStorage.setItem('user', JSON.stringify(user));
        }
        this.userSubject.next(user);
        return user;
      })
    );
  }

  // tslint:disable-next-line: variable-name
  validate(api_token, ch_username) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('ch_username', ch_username);
    return this.http
      .post<any>(`${environment.apiUrl}/validate_ch`, formData)
      .pipe();
    // .subscribe((data: any) => {
    // 		console.log(data);
    // 	});
  }
  validategr(api_token, firstname, lastname, greenroom_username) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('greenroom_username', greenroom_username);
    return this.http
      .post<any>(`${environment.grUrl}/validate_gr`, formData)
      .pipe();
    // .subscribe((data: any) => {
    // 		console.log(data);
    // 	});
  }

  // tslint:disable-next-line: variable-name
  getDetails(api_token) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    return this.http.post<any>(`${environment.apiUrl}/me`, formData).pipe(
      map((user: any) => {
        const result = user.result;
        if (result.length !== 0) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        this.userSubject.next(user);
        return user;
      })
    );
  }
  forgot(email) {
    const formData = new FormData();
    formData.append('email', email);
    return this.http.post<any>(`${environment.apiUrl}/forgot`, formData).pipe();
  }
  reset(email, resetCode, newPassword) {
    console.log('calling');
    const formData = new FormData();
    formData.append('email', email);
    formData.append('resetCode', resetCode);
    formData.append('newPassword', newPassword);
    return this.http
      .post<any>(`${environment.apiUrl}/reset_password`, formData)
      .pipe();
  }

  login(email: string, password: string, gresponse: string) {
    // const url = environment.apiUrl + '/register';
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('gresponse', gresponse);
    return this.http.post<any>(`${environment.apiUrl}/login`, formData).pipe(
      map((user: any) => {
        const result = user.result;
        if (result.length !== 0) {
          localStorage.setItem('ch_token', JSON.stringify(result.ch_token));
          localStorage.setItem(
            'greenroom_token',
            JSON.stringify(result.greenroom_token)
          );
          localStorage.setItem('user', JSON.stringify(user));
        }
        this.userSubject.next(user);
        return user;
      })
    );
  }
  freeTrial(token) {
    const formData = new FormData();
    formData.append('api_token', token);
    return this.http
      .post<any>(`${environment.apiUrl}/start_trial`, formData)
      .pipe();
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('data');
    localStorage.removeItem('ch_token');
    localStorage.removeItem('greenroom_token');
    this.userSubject.next(false);
    this.router.navigate(['/auth']);
  }
}
