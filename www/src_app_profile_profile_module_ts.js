(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 86829:
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 72919);




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_0__.ProfilePage
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ 84523:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 86829);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 72919);







let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage]
    })
], ProfilePageModule);



/***/ }),

/***/ 72919:
/*!*****************************************!*\
  !*** ./src/app/profile/profile.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 52907);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 70231);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../_services/auth.service */ 88368);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);




/* eslint-disable @typescript-eslint/naming-convention */




let ProfilePage = class ProfilePage {
    constructor(auth, router, loadingController, toastController) {
        this.auth = auth;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.showLinkCh = false;
        this.showLinkGr = false;
        this.result = {};
        this.data = {};
        this.upgrade = false;
        this.freeTrial = false;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.ch_user_id = result.ch_user_id;
            this.ch_user_email = result.email;
            this.greenroom_user_id = result.greenroom_user_id;
            this.rally_user_id = result.rally_user_id;
            if (this.ch_user_id == null || this.ch_user_id === '') {
                this.showLinkCh = true;
            }
            else {
                this.showLinkCh = false;
            }
            if (this.greenroom_user_id == null || this.greenroom_user_id === '') {
                this.showLinkGr = true;
            }
            else {
                this.showLinkGr = false;
            }
            if (this.rally_user_id == null || this.rally_user_id === '') {
                this.showLinkRally = true;
            }
            else {
                this.showLinkRally = false;
            }
            this.date2 = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.getDetails();
        });
    }
    ngOnInit() {
    }
    getDetails() {
        this.auth.getDetails(this.api_token).subscribe((res) => {
            // console.log(res);
            if (res.status === 'success') {
                this.result = res.result;
                // this.data = JSON.parse(this.result.data);
                if (this.result.subscription_expiry === null) {
                    this.freeTrial = true;
                    this.upgrade = true;
                }
                else if (this.result.subscription_expiry < this.date2) {
                    this.upgrade = true;
                    this.freeTrial = false;
                }
                else {
                    this.upgrade = false;
                    this.freeTrial = false;
                }
            }
            else if (res.status === 'validate') {
                const color = 'danger';
                this.presentToast(color, res.message);
                // this.alertService.danger(res.message);
                this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
            }
            else {
                const color = 'danger';
                this.presentToast(color, res.message);
                // this.alertService.danger(res.message);
            }
            // console.log(res);
            // console.log(this.data);
        }, err => {
            const color = 'danger';
            this.presentToast(color, err.message);
            // this.alertService.danger(err.message);
        });
    }
    freetrial() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.auth.freeTrial(this.api_token).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                const color = 'primary';
                this.presentToast(color, res.message);
            }));
        });
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 1000
            });
            toast.present();
        });
    }
    onClick() {
        this.auth.logout();
    }
    linkCH() {
        this.router.navigateByUrl('/auth/validate/' + this.api_token);
    }
    linkGR() {
        this.router.navigateByUrl('/auth/validategr/' + this.api_token);
    }
    linkRally() {
        console.log(`https://garyvip.managemych.club/link_rally?ch_user_id=${this.ch_user_id}&email=${this.ch_user_email}`);
        window.open(`https://garyvip.managemych.club/link_rally?ch_user_id=${this.ch_user_id}&email=${this.ch_user_email}`);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 70231:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("p {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\nion-item {\n  margin-bottom: 10px;\n}\n\np {\n  font-size: 0.8em !important;\n  text-transform: capitalize !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFBdUIsNEJBQUE7RUFDdkIsNEJBQUE7QUFFRjs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSwyQkFBQTtFQUNBLHFDQUFBO0FBR0YiLCJmaWxlIjoicHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5we1xyXG4gIGZvbnQtc2l6ZTogLjhlbSAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 52907:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>\n      Profile\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onClick()\" color=\"dark\">\n        <ion-icon slot=\"start\" name=\"log-out\"> </ion-icon> Log out\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"person-outline\"></ion-icon>\n        <ion-label>\n          <p>Name</p>\n          <h2>{{ result.name | titlecase }}</h2>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon>\n        <ion-label>\n          <p>Email</p>\n          <h2>{{ result.email }}</h2>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\n        <ion-label>\n          <p>Current Plan</p>\n          <h2>{{result.package | titlecase}} <span *ngIf=\"upgrade\">(Expired)</span></h2>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"result?.balance\">\n        <ion-icon slot=\"start\" name=\"cash\"></ion-icon>\n        <ion-label>\n          <p>$GARY Balance</p>\n          <h2>{{ result?.balance }}</h2>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"upgrade\">\n        <ion-label class=\"ion-padding-left\">\n          <ion-button expand=\"full\" color=\"primary\" [routerLink]=\"['/tabs/upgrade']\">Upgrade</ion-button>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"freeTrial\">\n        <ion-label class=\"ion-padding-left\">\n          <p></p>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"freetrial()\">Start free Trial</ion-button>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"!upgrade\">\n        <ion-icon slot=\"start\" name=\"timer-outline\"></ion-icon>\n        <ion-label>\n          <p>Expires on</p>\n          <h2>{{result.subscription_expiry}} </h2>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"showLinkCh\">\n        <ion-label>\n          <ion-button (click)=\"linkCH()\" expand=\"block\" color=\"light\" fill=\"clear\">\n            Link Clubhouse\n          </ion-button>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"showLinkGr\">\n        <ion-label>\n          <ion-button (click)=\"linkGR()\" expand=\"block\" color=\"success\">\n            Link Greenroom\n          </ion-button>\n        </ion-label>\n      </ion-item>\n\n      <ion-item *ngIf=\"showLinkRally\">\n        <ion-label>\n          <ion-button (click)=\"linkRally()\" expand=\"block\" color=\"secondary\">\n            Link Rally\n          </ion-button>\n        </ion-label>\n      </ion-item>\n\n\n\n\n\n\n\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map