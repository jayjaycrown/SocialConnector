(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_grtools_weekly-comparison_weekly-comparison_module_ts"],{

/***/ 41339:
/*!*******************************************************************************!*\
  !*** ./src/app/grtools/weekly-comparison/weekly-comparison-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyComparisonPageRoutingModule": () => (/* binding */ WeeklyComparisonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _weekly_comparison_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly-comparison.page */ 87644);




const routes = [
    {
        path: '',
        component: _weekly_comparison_page__WEBPACK_IMPORTED_MODULE_0__.WeeklyComparisonPage
    }
];
let WeeklyComparisonPageRoutingModule = class WeeklyComparisonPageRoutingModule {
};
WeeklyComparisonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WeeklyComparisonPageRoutingModule);



/***/ }),

/***/ 36789:
/*!***********************************************************************!*\
  !*** ./src/app/grtools/weekly-comparison/weekly-comparison.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyComparisonPageModule": () => (/* binding */ WeeklyComparisonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _weekly_comparison_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly-comparison-routing.module */ 41339);
/* harmony import */ var _weekly_comparison_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly-comparison.page */ 87644);







let WeeklyComparisonPageModule = class WeeklyComparisonPageModule {
};
WeeklyComparisonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _weekly_comparison_routing_module__WEBPACK_IMPORTED_MODULE_0__.WeeklyComparisonPageRoutingModule
        ],
        declarations: [_weekly_comparison_page__WEBPACK_IMPORTED_MODULE_1__.WeeklyComparisonPage]
    })
], WeeklyComparisonPageModule);



/***/ }),

/***/ 87644:
/*!*********************************************************************!*\
  !*** ./src/app/grtools/weekly-comparison/weekly-comparison.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyComparisonPage": () => (/* binding */ WeeklyComparisonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_weekly_comparison_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./weekly-comparison.page.html */ 63568);
/* harmony import */ var _weekly_comparison_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly-comparison.page.scss */ 43121);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/gr-service.service */ 50972);



/* eslint-disable @typescript-eslint/naming-convention */






let WeeklyComparisonPage = class WeeklyComparisonPage {
    constructor(app, router, toastController, loadingController) {
        this.app = app;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.model = {};
        this.allRooms = [];
        this.allRooms2 = [];
        this.page = 1;
        this.status = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.date2 = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
        });
    }
    transformMinute(value) {
        const hours = Math.floor(value / 60);
        const minutes = Math.floor(value % 60);
        return hours + ' hrs ' + minutes + ' mins';
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 2000
            });
            toast.present();
        });
    }
    compare() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(this.model);
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            const date = this.model.date1;
            this.date1 = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(date), 'yyyy-MM-dd');
            this.date = this.date1;
            const date2 = this.model.date2;
            this.date2 = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(date2), 'yyyy-MM-dd');
            this.date3 = this.date2;
            // console.log( this.date1, this.date2);
            // this.date1 = this.model.date1;
            // this.date2 = this.model.date2;
            // this.date3 = this.date2;
            const color = 'danger';
            // console.log('date1 ', this.date, '  date2 ', this.date2);
            this.app.CompareWeek(this.api_token, this.date1, this.date2, this.page)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.status === 'success') {
                    this.status = true;
                    this.week1Details = res.result.week1;
                    this.week2Details = res.result.week2;
                    // console.log(this.week2Details);
                }
                else if (res.status === 'upgrade') {
                    // this.alertService.danger(res.message);
                    this.presentToast(color, res.message);
                    this.router.navigateByUrl('/home/upgrade');
                }
                else if (res.status === 'validate') {
                    // this.alertService.danger(res.message);
                    this.presentToast(color, res.message);
                    this.router.navigateByUrl('/auth/validategr/ ' + this.api_token);
                }
                else {
                    this.status = false;
                    this.error = res.message;
                    // this.alertService.danger(res.message);
                    this.presentToast(color, res.message);
                    // console.log(this.error);
                }
            }));
        });
    }
    next(fastForward) {
        if (fastForward === 'forward') {
            this.page += 1;
            this.compare();
        }
        else {
            if (this.page > 1) {
                this.page -= 1;
                this.compare();
            }
            else {
                this.page = 1;
            }
        }
    }
};
WeeklyComparisonPage.ctorParameters = () => [
    { type: src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_3__.GrServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
WeeklyComparisonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-weekly-comparison',
        template: _raw_loader_weekly_comparison_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_weekly_comparison_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WeeklyComparisonPage);



/***/ }),

/***/ 43121:
/*!***********************************************************************!*\
  !*** ./src/app/grtools/weekly-comparison/weekly-comparison.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWtseS1jb21wYXJpc29uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0YiLCJmaWxlIjoid2Vla2x5LWNvbXBhcmlzb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 63568:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grtools/weekly-comparison/weekly-comparison.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      GR TOOLS\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form name=\"form\" #historyForm=\"ngForm\" (ngSubmit)=\"historyForm.valid && compare()\">\n        <ion-item  style=\"margin-bottom: 10px;\">\n          <ion-label position=\"floating\">Select A Date</ion-label>\n          <ion-datetime name=\"date1\" [(ngModel)]=\"model.date1\" #date1=\"ngModel\" displayFormat=\"MM/DD/YYYY\"\n            min=\"2016-01-01\" max=\"2022-12-31\" required>\n          </ion-datetime>\n        </ion-item>\n\n        <ion-item >\n          <ion-label position=\"floating\">Select Another Date</ion-label>\n          <ion-datetime name=\"date2\" [(ngModel)]=\"model.date2\" #date2=\"ngModel\" displayFormat=\"MM/DD/YYYY\"\n            min=\"2016-01-01\" max=\"2022-12-31\" required>\n          </ion-datetime>\n        </ion-item>\n        <ion-button type=\"submit\" [disabled]=\"!historyForm.valid\" expand=\"full\" color=\"primary\">Compare</ion-button>\n      </form>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"status\">\n    <ion-card-header class=\"ion-text-center\">\n      <ion-card-title>Weekly Comparison</ion-card-title>\n      <ion-card-subtitle>{{date}} - {{date3}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Week 1</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Week 2</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Average Listened</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ week1Details.avg }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ week2Details.avg }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Average Max Listeners</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ week1Details.avg_max_listeners }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ week2Details.avg_max_listeners }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Total Listened Time</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">{{transformMinute(week1Details.total_listened)}} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3 class=\"ion-text-wrap\"> {{transformMinute(week2Details.total_listened)}} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Total Listeners</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ week1Details.total_listeners || 0 }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ week2Details.total_listeners || 0 }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Total Rooms</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ week1Details.total_rooms }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item  lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                  <h3>{{ week2Details.total_rooms }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  <ion-card *ngIf=\"allRooms?.length > 0\" class=\"ion-text-center\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-button (click)=\"next('back')\">\n              <ion-icon slot=\"icon-only\" name=\"play-back-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"next('forward')\">\n              <ion-icon slot=\"icon-only\" name=\"play-forward-outline\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_grtools_weekly-comparison_weekly-comparison_module_ts.js.map