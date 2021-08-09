(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_club_support_module_ts"],{

/***/ 27681:
/*!*************************************************************!*\
  !*** ./src/app/club/club-details/club-details.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubDetailsComponent": () => (/* binding */ ClubDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_club_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./club-details.component.html */ 78078);
/* harmony import */ var _club_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club-details.component.scss */ 99561);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/app.service */ 2440);




/* eslint-disable @typescript-eslint/naming-convention */





let ClubDetailsComponent = class ClubDetailsComponent {
    constructor(route, app, loadingController, toastController, router) {
        this.route = route;
        this.app = app;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.item = {};
        this.showData = false;
        this.newMember = [];
        this.newFollower = [];
        this.dateEntered = [];
        this.barChartOptions = {
            responsive: true,
            // We use these empty structures as placeholders for dynamic theming.
            scales: { xAxes: [{}], yAxes: [{}] },
            plugins: {
                datalabels: {
                    anchor: 'end',
                    align: 'end',
                },
            },
        };
        this.barChartLabels = this.dateEntered;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartData = [
            { data: this.newMember, label: 'New Members' },
            { data: this.newFollower, label: 'New Followers' },
        ];
        this.results = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.newDate = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.route.paramMap.subscribe((paramMap) => {
                this.id = paramMap.get('id');
            });
            this.getClubDetails();
            this.clubAnalytics();
        });
    }
    getClubDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app
                .myClubDetails(this.api_token, this.id)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                this.newMember.length = 0;
                this.newFollower.length = 0;
                this.dateEntered.length = 0;
                yield loading.dismiss();
                console.log(res);
                if (res.status === 'success') {
                    this.showData = true;
                    this.item = res.result.club;
                    const data = res.result.stats;
                    this.stats = data.slice(Math.max(data.length - 10, 0));
                    // console.log(this.stats);
                    for (const x of this.stats) {
                        const date_entered = x.date_entered;
                        const newFollowers = parseFloat(x.new);
                        const new_members = parseFloat(x.new_members);
                        this.newMember.push(new_members);
                        this.newFollower.push(newFollowers);
                        this.dateEntered.push(date_entered);
                    }
                    console.log(this.dateEntered);
                    console.log(this.newFollower);
                    console.log(this.newMember);
                }
                else {
                }
            }));
        });
    }
    clubAnalytics() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.app
                .clubAnalytics(this.api_token, this.id, this.newDate)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                if (res.status === 'success') {
                    this.results = res.result;
                }
                else if (res.status === 'upgrade') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.router.navigateByUrl('/tabs/upgrade');
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                }
                // console.log(res);
                // this.results = res.result;
            }));
        });
    }
    transformMinute(value) {
        const hours = Math.floor(value / 60);
        const minutes = Math.floor(value % 60);
        return hours + ' hrs ' + minutes + ' mins';
    }
    getDateDiff(now, end) {
        const data = now.split();
        const testing = data[0].replace(/-/g, '/');
        const data2 = end.split();
        const testing2 = data2[0].replace(/-/g, '/');
        // const datta2 = dattta[0].replace(/T/g, ' ');
        const duration = moment__WEBPACK_IMPORTED_MODULE_2__(testing2, 'YYYY/MM/DD HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_2__(testing, 'YYYY/MM/DD HH:mm:ss'));
        // const days = duration.asHours();
        const secssss = moment__WEBPACK_IMPORTED_MODULE_2__.duration(duration).seconds();
        const minsss = moment__WEBPACK_IMPORTED_MODULE_2__.duration(duration).minutes();
        const hrsss = Math.trunc(moment__WEBPACK_IMPORTED_MODULE_2__.duration(duration).asHours());
        this.durationDays = hrsss + ':' + minsss + ':' + secssss;
        // console.log(this.durationDays);
        return this.durationDays;
    }
    onClick(channel) {
        this.router.navigateByUrl('/tabs/chtools/track/' + channel);
    }
    randomize() {
        this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 3000,
            });
            toast.present();
        });
    }
};
ClubDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
ClubDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-club-details',
        template: _raw_loader_club_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_club_details_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClubDetailsComponent);



/***/ }),

/***/ 60743:
/*!************************************************!*\
  !*** ./src/app/club/support-routing.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _club_details_club_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club-details/club-details.component */ 27681);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 93158);





const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage,
    },
    {
        path: 'club/:id',
        component: _club_details_club_details_component__WEBPACK_IMPORTED_MODULE_0__.ClubDetailsComponent,
    },
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ 3807:
/*!****************************************!*\
  !*** ./src/app/club/support.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 60743);
/* harmony import */ var _club_details_club_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club-details/club-details.component */ 27681);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./support.page */ 93158);









let SupportPageModule = class SupportPageModule {
};
SupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__.ChartsModule,
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_2__.SupportPage, _club_details_club_details_component__WEBPACK_IMPORTED_MODULE_1__.ClubDetailsComponent],
    })
], SupportPageModule);



/***/ }),

/***/ 93158:
/*!**************************************!*\
  !*** ./src/app/club/support.page.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./support.page.html */ 68043);
/* harmony import */ var _support_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page.scss */ 13218);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/app.service */ 2440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);



/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-underscore-dangle */

/* eslint-disable @typescript-eslint/naming-convention */




let SupportPage = class SupportPage {
    constructor(router, app, toastController, loadingController) {
        this.router = router;
        this.app = app;
        this.toastController = toastController;
        this.loadingController = loadingController;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.month = moment__WEBPACK_IMPORTED_MODULE_3__().format('MM');
            this.month1 = moment__WEBPACK_IMPORTED_MODULE_3__().format('MMMM');
            this.getMyClub();
        });
    }
    getMyClub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app.myClubs(this.api_token).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                console.log(res);
                if (res.status === 'success') {
                    this.clubData = res.result;
                }
                else {
                    console.log(res.status);
                }
            }));
        });
    }
    onClick(id) {
        this.router.navigateByUrl('tabs/club/club/' + id);
    }
};
SupportPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
SupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-support',
        template: _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_support_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SupportPage);



/***/ }),

/***/ 99561:
/*!***************************************************************!*\
  !*** ./src/app/club/club-details/club-details.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card.test {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdWItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoiY2x1Yi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQudGVzdCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 13218:
/*!****************************************!*\
  !*** ./src/app/club/support.page.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwb3J0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 78078:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/club/club-details/club-details.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/club\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Club</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding-horizontal\" *ngIf=\"showData\">\n  <ion-card>\n    <ion-card-header style=\"padding-bottom: 0px !important\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"4\">\n            <ion-img [src]=\"item.photo_url\"></ion-img>\n          </ion-col>\n          <ion-col size=\"8\">\n            <ion-card-title class=\"ion-text-center\">\n              {{ item.name }}\n            </ion-card-title>\n            <ion-card-subtitle>\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label>\n                  <p>Followers</p>\n                  <h2>{{ item.num_followers | number}}</h2>\n                </ion-label>\n                <ion-label>\n                  <p>Members</p>\n                  <h2>{{ item.num_members | number}}</h2>\n                </ion-label>\n              </ion-item>\n            </ion-card-subtitle>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item lines=\"none\">\n        <ion-label class=\"ion-text-wrap\">\n          <p>{{ item.description }}</p>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"showData\">\n    <canvas baseChart height=\"300\" [datasets]=\"barChartData\" [labels]=\"barChartLabels\" [options]=\"barChartOptions\"\n      [plugins]=\"barChartPlugins\" [legend]=\"barChartLegend\" [chartType]=\"barChartType\">\n    </canvas>\n    <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize()\">\n      <a>\n        <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n      </a>\n      <ion-text color=\"primary\" style=\"display: block !important\">\n        <P style=\"font-size: 0.6em !important; margin: 0; padding: 0\">Change Style</P>\n      </ion-text>\n    </div>\n  </ion-card>\n  <br />\n\n  <ion-list>\n    <ion-item *ngIf=\"results?.length === 0\">\n      <ion-label>No data available</ion-label>\n    </ion-item>\n  </ion-list>\n  <br />\n  <div class=\"ion-padding-horizontal\">\n    <ion-item-divider color=\"secondary\" *ngIf=\"results?.length !== 0\">\n      <ion-label>\n        <h2>Top rooms for the week</h2>\n      </ion-label>\n    </ion-item-divider>\n  </div>\n\n  <div *ngFor=\"let item of results.rooms\">\n    <ion-card (click)=\"onClick(item.channel)\">\n      <ion-card-content>\n        <ion-item lines=\"none\">\n          <ion-label class=\"ion-text-wrap\">\n            <h2>{{ item.topic }}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-label>\n            <span class=\"ion-align-items-center\">\n              <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n            </span>\n            {{ item.end_total_speakers }}\n          </ion-label>\n          <ion-label>\n            <ion-icon name=\"people-outline\"></ion-icon>\n            {{ item.end_total_listeners }}\n          </ion-label>\n          <ion-label>\n            <ion-icon name=\"time-outline\"></ion-icon>\n            {{ getDateDiff(item.date_started, item.date_ended) }}\n          </ion-label>\n        </ion-item>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 68043:
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/club/support.page.html ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar>\n    <ion-title>My Club</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding-horizontal\">\n  <div *ngFor=\"let item of clubData\">\n    <ion-card (click)=\"onClick(item.club_id)\">\n      <ion-img [src]=\"item.photo_url\"></ion-img>\n      <ion-card-header>\n        <ion-card-title> {{ item.name }} </ion-card-title>\n        <ion-card-subtitle>{{ item.description }}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label>\n                  <p>Followers</p>\n                  <h2>{{ item.num_followers | number }}</h2>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label>\n                  <p>Members</p>\n                  <h2>{{ item.num_members | number }}</h2>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_club_support_module_ts.js.map