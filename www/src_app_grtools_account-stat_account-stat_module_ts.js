(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_grtools_account-stat_account-stat_module_ts"],{

/***/ 20153:
/*!*********************************************************************!*\
  !*** ./src/app/grtools/account-stat/account-stat-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatPageRoutingModule": () => (/* binding */ AccountStatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _account_stat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-stat.page */ 44108);




const routes = [
    {
        path: '',
        component: _account_stat_page__WEBPACK_IMPORTED_MODULE_0__.AccountStatPage
    }
];
let AccountStatPageRoutingModule = class AccountStatPageRoutingModule {
};
AccountStatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountStatPageRoutingModule);



/***/ }),

/***/ 34628:
/*!*************************************************************!*\
  !*** ./src/app/grtools/account-stat/account-stat.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatPageModule": () => (/* binding */ AccountStatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _account_stat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-stat-routing.module */ 20153);
/* harmony import */ var _account_stat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-stat.page */ 44108);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 44981);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ 68536);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 72533);










let AccountStatPageModule = class AccountStatPageModule {
};
AccountStatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _account_stat_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountStatPageRoutingModule,
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__.OrderModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_account_stat_page__WEBPACK_IMPORTED_MODULE_1__.AccountStatPage]
    })
], AccountStatPageModule);



/***/ }),

/***/ 44108:
/*!***********************************************************!*\
  !*** ./src/app/grtools/account-stat/account-stat.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountStatPage": () => (/* binding */ AccountStatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_account_stat_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./account-stat.page.html */ 52662);
/* harmony import */ var _account_stat_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-stat.page.scss */ 66214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/gr-service.service */ 50972);



/* eslint-disable @typescript-eslint/naming-convention */




let AccountStatPage = class AccountStatPage {
    constructor(loadingController, toastController, alertController, app, router) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.app = app;
        this.router = router;
        this.key = 'date_entered';
        this.reverse = true;
        this.p = 1;
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.getUserStats();
        });
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 3000,
            });
            toast.present();
        });
    }
    getUserStats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app.fetchAccountStats(this.api_token).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                // console.log(res);
                yield loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    this.results = res.result;
                    for (const i of this.results) {
                        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                        i.data;
                    }
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/home/upgrade');
                }
                else if (res.status === 'validate') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.router.navigateByUrl('/auth/validategr/ ' + this.api_token);
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                }
            }));
        });
    }
};
AccountStatPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_2__.GrServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AccountStatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-account-stat',
        template: _raw_loader_account_stat_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_account_stat_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AccountStatPage);



/***/ }),

/***/ 66214:
/*!*************************************************************!*\
  !*** ./src/app/grtools/account-stat/account-stat.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXN0YXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 52662:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grtools/account-stat/account-stat.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"rayo\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      GR TOOLS\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<!-- date_entered: \"2021-03-26\"\ndc: \"2021-03-26T22:05:25Z\"\nid: \"3274\"\nnew: \"0\"\nnum_followers: \"15210\"\nnum_following: \"1896\"\nuser_id: \"5020\" -->\n  <ion-card>\n    <ion-card-content>\n      <!-- <ion-list> -->\n        <ion-item class=\"nocolor\"\n          *ngFor=\"let item of results| orderBy: key: reverse | paginate: {id: 'pagination1', itemsPerPage:7, currentPage: p}\">\n          <ion-label>\n            <h3>\n              <span class=\"ion-float-left\">Date</span>\n              <span class=\"ion-float-right\">{{ item.date_entered | date: 'MMM, dd' }}</span>\n            </h3>\n\n            <h3>\n              <span class=\"ion-float-left\">Followers</span>\n              <span class=\"ion-float-right\">{{ item.num_followers }}</span>\n            </h3>\n            <h3>\n              <span class=\"ion-float-left\">Following</span>\n              <span class=\"ion-float-right\">{{ item.num_following }}</span>\n            </h3>\n            <h2>\n              <span class=\"ion-float-left\">New Followers</span>\n              <span  class=\"ion-float-right\" style=\"font-weight: 900;\"><span *ngIf=\"item.new > 0\" >+</span>{{ item.new}}</span>\n            </h2>\n          </ion-label>\n        </ion-item>\n      <!-- </ion-list> -->\n      <ion-item class=\"ion-text-center nocolor\">\n        <div class=\"ion-text-center\" style=\"width: 100%;\">\n          <pagination-controls class=\"my-pagination\" id=\"pagination1\" (pageChange)=\"p = $event\" previousLabel=\"\"\n            nextLabel=\"\">\n          </pagination-controls>\n        </div>\n\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_grtools_account-stat_account-stat_module_ts.js.map