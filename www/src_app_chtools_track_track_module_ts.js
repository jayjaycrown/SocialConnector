(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_chtools_track_track_module_ts"],{

/***/ 59154:
/*!*******************************************************!*\
  !*** ./src/app/chtools/track/track-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackPageRoutingModule": () => (/* binding */ TrackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _track_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./track.page */ 25152);




// import { TrackDetailsComponent } from './track-details/track-details.component';
const routes = [
    {
        path: '',
        component: _track_page__WEBPACK_IMPORTED_MODULE_0__.TrackPage
    }
];
let TrackPageRoutingModule = class TrackPageRoutingModule {
};
TrackPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TrackPageRoutingModule);



/***/ }),

/***/ 1620:
/*!***********************************************!*\
  !*** ./src/app/chtools/track/track.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackPageModule": () => (/* binding */ TrackPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ 53760);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _track_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-routing.module */ 59154);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _track_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./track.page */ 25152);




// import { InAppBrowser } from '@ionic-native/in-app-browser';




// import { File } from '@ionic-native/file/ngx';
// import { HTTP } from '@ionic-native/http/ngx';

// import { TrackDetailsComponent } from "./track-details/track-details.component";
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
// import { TrackDetailsComponent } from './track-details/track-details.component';
let TrackPageModule = class TrackPageModule {
};
TrackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _track_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrackPageRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_8__.ChartsModule,
        ],
        declarations: [_track_page__WEBPACK_IMPORTED_MODULE_2__.TrackPage],
        providers: [_ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_0__.InAppBrowser],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.CUSTOM_ELEMENTS_SCHEMA],
    })
], TrackPageModule);



/***/ }),

/***/ 25152:
/*!*********************************************!*\
  !*** ./src/app/chtools/track/track.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackPage": () => (/* binding */ TrackPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_track_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./track.page.html */ 11990);
/* harmony import */ var _track_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track.page.scss */ 999);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/app.service */ 2440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);



/* eslint-disable @typescript-eslint/naming-convention */




let TrackPage = class TrackPage {
    // trackForm: NgForm;
    constructor(loadingController, toastController, alertController, app, router) {
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.app = app;
        this.router = router;
        this.page = 1;
        this.model = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // localStorage.removeItem('refresh');
            const d = localStorage.getItem('refresh');
            if (d !== null) {
                localStorage.removeItem('refresh');
                // tslint:disable-next-line: only-arrow-functions
                // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
            // alert(d);
            //
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.getRoomHistory();
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
    getRoomHistory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app.getActiveRooms(this.page, this.api_token).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    this.allRooms = res.result;
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/tabs/upgrade');
                }
                else if (res.status === 'validate') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                }
            }), (err) => {
                console.error(err);
            });
        });
    }
    analyze(roomId) {
        // alert(roomId);
        this.router.navigateByUrl('/tabs/chtools/track/' + roomId);
    }
    onSubmit() {
        // console.log(this.model);
        const str = this.model.roomLink;
        const splitted = str.split('/');
        // console.log(splitted[4]);
        const data = splitted[4];
        this.analyze(data);
        // this.trackForm.reset();
        this.submitted = true;
        this.slForm.reset();
    }
    next(fastForward) {
        if (fastForward === 'forward') {
            this.page += 1;
            this.getRoomHistory();
        }
        else {
            if (this.page > 1) {
                this.page -= 1;
                this.getRoomHistory();
            }
            else {
                this.page = 1;
            }
        }
        // alert(this.page);
    }
};
TrackPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
TrackPage.propDecorators = {
    slForm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['trackForm',] }]
};
TrackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-track',
        template: _raw_loader_track_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_track_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrackPage);



/***/ }),

/***/ 999:
/*!***********************************************!*\
  !*** ./src/app/chtools/track/track.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card.test {\n  width: 100% !important;\n}\n\nion-item {\n  border-radius: 0 !important;\n  --border-radius: 0 !important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtFQUNBLDhCQUFBO0FBRUYiLCJmaWxlIjoidHJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQudGVzdHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pdGVte1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 11990:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/track/track.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"rayo\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title> Track a Room</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" routerDirection=\"back\">\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-margin\">\n    <ion-card-content>\n      <form name=\"form\" #trackForm=\"ngForm\" (ngSubmit)=\"trackForm.valid && onSubmit()\">\n        <ion-item class=\"ion-margin-bottom\">\n          <!-- <ion-label position=\"floating\">Clubhouse room link</ion-label> -->\n          <ion-input minlength=\"10\" name=\"roomLink\" class=\"form-control\" placeholder=\"Enter Clubhouse room link\"\n            [(ngModel)]=\"model.roomLink\" #roomLink=\"ngModel\"\n            [ngClass]=\"{ 'is-invalid': trackForm.submitted && roomLink.invalid }\" required></ion-input>\n        </ion-item>\n        <ion-button type=\"submit\" color=\"primary\" [disabled]=\"!trackForm.valid\" expand=\"full\">Track Room</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"allRooms?.length <= 0\" class=\"ion-margin\">\n    <ion-card-content>\n      <ion-item>\n        <ion-label>\n          <h3>No room available</h3>\n        </ion-label>\n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"allRooms?.length > 0\" class=\"ion-margin\">\n    <ion-card-header>\n      <ion-card-title>Active Rooms</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n\n  <ion-item *ngFor=\"let allRoom of allRooms\" lines=\"none\">\n    <ion-card class=\"test\">\n      <ion-card-header (click)=\"analyze(allRoom.channel)\" class=\"ion-text-center\">\n        <ion-card-title>{{ allRoom.topic }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <div *ngIf=\"allRoom.date_ended;else templateName\">\n          <ion-item>\n            <ion-label>\n              <!-- <p></p> -->\n              <h3>\n                <span class=\"ion-float-left\">Room Status</span>\n                <span class=\"ion-float-right\">Ended</span>\n              </h3>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <!-- <p>Room Status</p> -->\n              <h3>\n                <span class=\"ion-float-left\">Ended on </span>\n                <span class=\"ion-float-right\"> {{ allRoom.date_ended }} </span>\n              </h3>\n            </ion-label>\n          </ion-item>\n        </div>\n        <ng-template #templateName>\n          <ion-item>\n            <ion-label>\n              <!-- <p>Room Status</p> -->\n              <h3>\n                <span class=\"ion-float-left\">Room Status</span>\n                <span class=\"ion-float-right\">Active</span>\n              </h3>\n            </ion-label>\n          </ion-item>\n        </ng-template>\n      </ion-card-content>\n    </ion-card>\n  </ion-item>\n  <ion-item *ngIf=\"allRooms?.length > 0\">\n    <ion-grid class=\"ion-text-center\" style=\"background: #fff !important\">\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"3\">\n          <ion-button fill=\"clear\" (click)=\"next('back')\">\n            <ion-icon slot=\"icon-only\" name=\"play-back-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button fill=\"clear\" (click)=\"next('forward')\">\n            <ion-icon slot=\"icon-only\" name=\"play-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chtools_track_track_module_ts.js.map