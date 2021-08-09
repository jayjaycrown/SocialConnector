(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_chtools_club-analytics_club-analytics_module_ts"],{

/***/ 4625:
/*!*************************************************************************!*\
  !*** ./src/app/chtools/club-analytics/club-analytics-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubAnalyticsPageRoutingModule": () => (/* binding */ ClubAnalyticsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _club_analytics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club-analytics.page */ 38325);




const routes = [
    {
        path: '',
        component: _club_analytics_page__WEBPACK_IMPORTED_MODULE_0__.ClubAnalyticsPage,
        // children: [
        //   {
        //     path: '/:id',
        //     component: ClubDetailsComponent
        //   },
        //   {
        //     path: '',
        //     redirectTo: 'club-analytics',
        //     pathMatch: 'full'
        //   }
        // ]
    },
];
let ClubAnalyticsPageRoutingModule = class ClubAnalyticsPageRoutingModule {
};
ClubAnalyticsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClubAnalyticsPageRoutingModule);



/***/ }),

/***/ 32356:
/*!*****************************************************************!*\
  !*** ./src/app/chtools/club-analytics/club-analytics.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubAnalyticsPageModule": () => (/* binding */ ClubAnalyticsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _club_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club-analytics-routing.module */ 4625);
/* harmony import */ var _club_analytics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club-analytics.page */ 38325);







let ClubAnalyticsPageModule = class ClubAnalyticsPageModule {
};
ClubAnalyticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _club_analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClubAnalyticsPageRoutingModule
        ],
        declarations: [_club_analytics_page__WEBPACK_IMPORTED_MODULE_1__.ClubAnalyticsPage]
    })
], ClubAnalyticsPageModule);



/***/ }),

/***/ 38325:
/*!***************************************************************!*\
  !*** ./src/app/chtools/club-analytics/club-analytics.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubAnalyticsPage": () => (/* binding */ ClubAnalyticsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_club_analytics_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./club-analytics.page.html */ 63078);
/* harmony import */ var _club_analytics_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club-analytics.page.scss */ 71494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/app.service */ 2440);



/* eslint-disable @typescript-eslint/naming-convention */




let ClubAnalyticsPage = class ClubAnalyticsPage {
    constructor(app, router, loadingController, toastController, alertController) {
        this.app = app;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.model = {};
        this.allRooms = [];
        this.moderators = {};
        this.page = 1;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
        });
    }
    // tslint:disable-next-line: variable-name
    analyze(club_id) {
        // alert(roomId);
        this.router.navigateByUrl('/home/club-analytics/' + club_id);
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 3000
            });
            toast.present();
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(this.model);
            const str = this.model.club;
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.app.searchClub(this.api_token, str).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.status === 'success') {
                    this.allRooms = res.result;
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/tabs/upgrade');
                }
                else {
                    // this.alertService.danger(res.message)
                    const color = 'danger';
                    this.presentToast(color, res.message);
                }
                // console.log(res);
                // this.allRooms = res.result;
            }));
        });
    }
    // tslint:disable-next-line: variable-name
    claimRoom(club_id) {
        this.router.navigateByUrl('/tabs/chtools/verify-club/' + club_id);
    }
    // tslint:disable-next-line: variable-name
    redirect(club_id) {
        const url = 'https://members.trackmy.club/';
        window.open(url + club_id, '_blank');
        // window.location.href()
    }
};
ClubAnalyticsPage.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
ClubAnalyticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-club-analytics',
        template: _raw_loader_club_analytics_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_club_analytics_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClubAnalyticsPage);



/***/ }),

/***/ 71494:
/*!*****************************************************************!*\
  !*** ./src/app/chtools/club-analytics/club-analytics.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card.test {\n  width: 100% !important;\n}\n\nion-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdWItYW5hbHl0aWNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBR0E7RUFDQyxnQkFBQTtFQUNDLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0QkFBQTtFQUN2Qiw0QkFBQTtBQUNGIiwiZmlsZSI6ImNsdWItYW5hbHl0aWNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLnRlc3R7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbmlvbi10ZXh0IHtcclxuXHRvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 63078:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/club-analytics/club-analytics.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Clubs\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" routerDirection=\"back\">\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form name=\"form\" (ngSubmit)=\"clubForm.form.valid && onSubmit()\" #clubForm=\"ngForm\">\n    <ion-card>\n      <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Club Name</ion-label>\n          <ion-input type='text' minlength=\"3\" name=\"club\" class=\"form-control\" placeholder=\"Enter Club Name\"\n            [(ngModel)]=\"model.club\" #club=\"ngModel\" [ngClass]=\"{ 'is-invalid': clubForm.submitted && club.invalid }\"\n            required></ion-input>\n        </ion-item>\n        <ion-button type=\"submit\" [disabled]=\"!clubForm.valid\" expand=\"full\" color=\"primary\">Search Club\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </form>\n\n  <br>\n  <ion-list lines=\"none\">\n    <ion-list-header *ngIf=\"allRooms?.length <= 0\">\n      <ion-label>No data available</ion-label>\n    </ion-list-header>\n    <ion-list-header *ngIf=\"allRooms?.length > 0\">\n      <ion-label>Clubs List</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor=\"let allRoom of allRooms\">\n      <ion-card class=\"test ion-text-center\">\n        <ion-img [src]=\"allRoom.photo_url\"></ion-img>\n        <ion-card-header (click)=\"analyze(allRoom.club_id)\">\n          <ion-card-title>{{ allRoom.name }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content (click)=\"analyze(allRoom.club_id)\">\n          <ion-text class=\"ion-text-justify\">\n            {{ allRoom.description }}\n          </ion-text>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item class=\" ion-text-center\">\n                  <ion-label>\n                    <p>No of Members</p>\n                    <h2> {{ allRoom.num_members }} </h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\" ion-text-center\">\n                  <ion-label>\n                    <p>No of Followers</p>\n                    <h2> {{ allRoom.num_followers }} </h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n          </ion-grid>\n        </ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-button expand=\"full\" color=\"primary\" (click)=\"claimRoom(allRoom.club_id)\">Claim</ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button expand=\"full\" color=\"secondary\" (click)=\"redirect(allRoom.club_id)\">Download Pass</ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chtools_club-analytics_club-analytics_module_ts.js.map