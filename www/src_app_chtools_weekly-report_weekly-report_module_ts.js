(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_chtools_weekly-report_weekly-report_module_ts"],{

/***/ 31599:
/*!***********************************************************************!*\
  !*** ./src/app/chtools/weekly-report/weekly-report-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyReportPageRoutingModule": () => (/* binding */ WeeklyReportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _weekly_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly-report.page */ 73124);




const routes = [
    {
        path: '',
        component: _weekly_report_page__WEBPACK_IMPORTED_MODULE_0__.WeeklyReportPage
    }
];
let WeeklyReportPageRoutingModule = class WeeklyReportPageRoutingModule {
};
WeeklyReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], WeeklyReportPageRoutingModule);



/***/ }),

/***/ 6477:
/*!***************************************************************!*\
  !*** ./src/app/chtools/weekly-report/weekly-report.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyReportPageModule": () => (/* binding */ WeeklyReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _weekly_report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weekly-report-routing.module */ 31599);
/* harmony import */ var _weekly_report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly-report.page */ 73124);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);









let WeeklyReportPageModule = class WeeklyReportPageModule {
};
WeeklyReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _weekly_report_routing_module__WEBPACK_IMPORTED_MODULE_0__.WeeklyReportPageRoutingModule
        ],
        providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__.SocialSharing],
        declarations: [_weekly_report_page__WEBPACK_IMPORTED_MODULE_1__.WeeklyReportPage]
    })
], WeeklyReportPageModule);



/***/ }),

/***/ 73124:
/*!*************************************************************!*\
  !*** ./src/app/chtools/weekly-report/weekly-report.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WeeklyReportPage": () => (/* binding */ WeeklyReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_weekly_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./weekly-report.page.html */ 96829);
/* harmony import */ var _weekly_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weekly-report.page.scss */ 34919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/app.service */ 2440);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-papaparse */ 61704);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);



/* eslint-disable @typescript-eslint/naming-convention */









let WeeklyReportPage = class WeeklyReportPage {
    constructor(app, router, loadingController, toastController, alertController, file, socialSharing, papa, plt) {
        this.app = app;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.file = file;
        this.socialSharing = socialSharing;
        this.papa = papa;
        this.plt = plt;
        this.model = {};
        this.allRooms = [];
        this.moderators = {};
        this.page = 1;
        this.roomDetail = {};
        this.exportedData = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            // const date1 = new Date();
            // const date = new Date(date1.toUTCString());
            this.date = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
            this.weeklyRoomHistory();
        });
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 3000,
            });
            toast.present();
        });
    }
    weeklyRoomHistory() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.exportedData = [];
            const date = this.date;
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app
                .weeklyRoomHistory(this.api_token, this.page, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                // console.log(res);
                yield loading.dismiss();
                if (res.status === 'success') {
                    this.roomDetail = res.result;
                    this.avg_max_listeners = this.roomDetail.avg_max_listeners;
                    this.allRooms = res.result.rooms;
                    this.exportedData = [
                        {
                            avg_max_listeners: this.roomDetail.avg_max_listeners,
                            total_listeners: this.roomDetail.total_listeners,
                            total_listened: this.roomDetail.total_listened,
                            avg: this.roomDetail.avg,
                            new: this.roomDetail.new,
                            total_rooms: this.roomDetail.total_rooms,
                            date
                        }
                    ];
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/home/upgrade');
                }
                else if (res.status === 'validate') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
                }
                else {
                    // this.alertService.danger(res.message);
                }
                // console.log(this.allRooms);
            }));
        });
    }
    analyze(roomId) {
        // alert(roomId);
        this.router.navigateByUrl('/tabs/chtools/track/' + roomId);
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.exportedData = [];
            // // console.log(this.model);
            // const date = this.model.date;
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            let date = this.model.date;
            date = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.default)(new Date(date), 'yyyy-MM-dd');
            //  console.log(date);
            this.app
                .weeklyRoomHistory(this.api_token, this.page, date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    this.roomDetail = res.result;
                    // console.log( this.roomDetail);
                    this.avg_max_listeners = this.roomDetail.avg_max_listeners;
                    this.allRooms = res.result.rooms;
                    this.exportedData = [
                        {
                            avg_max_listeners: this.roomDetail.avg_max_listeners,
                            total_listeners: this.roomDetail.total_listeners,
                            total_listened: this.roomDetail.total_listened,
                            avg: this.roomDetail.avg,
                            new: this.roomDetail.new,
                            total_rooms: this.roomDetail.total_rooms,
                            date
                        }
                    ];
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/tabs/upgrade');
                }
                else if (res.status === 'validate') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'warning';
                    this.presentToast(color, res.message);
                }
                // console.log(this.allRooms);
            }));
        });
    }
    next(fastForward) {
        if (fastForward === 'forward') {
            this.page += 1;
            this.weeklyRoomHistory();
        }
        else {
            if (this.page > 1) {
                this.page -= 1;
                this.weeklyRoomHistory();
            }
            else {
                this.page = 1;
            }
        }
    }
    transformMinute(value) {
        const hours = Math.floor(value / 60);
        const minutes = Math.floor(value % 60);
        return hours + ' hrs ' + minutes + ' mins';
    }
    export() {
        const header = [];
        const data = this.exportedData[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.exportedData
        });
        console.log(csv);
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file.writeFile(this.file.dataDirectory, 'weekly_report.csv', csv, { replace: true })
                .then(res => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            }).catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'weekly_report.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        // console.log(this.newTop)
    }
};
WeeklyReportPage.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__.SocialSharing },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_10__.Papa },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform }
];
WeeklyReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-weekly-report',
        template: _raw_loader_weekly_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_weekly_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], WeeklyReportPage);



/***/ }),

/***/ 34919:
/*!***************************************************************!*\
  !*** ./src/app/chtools/weekly-report/weekly-report.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card.test {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlZWtseS1yZXBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJ3ZWVrbHktcmVwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkLnRlc3R7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 96829:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/weekly-report/weekly-report.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <!-- <ion-title>\n      CH TOOLS\n    </ion-title> -->\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" routerDirection=\"back\">\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form name=\"form\" #historyForm=\"ngForm\" (ngSubmit)=\"historyForm.valid && onSubmit()\">\n        <ion-item lines=\"none\" lines=\"none\">\n          <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n          <ion-datetime name=\"date\" [(ngModel)]=\"model.date\" #email=\"ngModel\" displayFormat=\"MM/DD/YYYY\"\n            min=\"2016-01-01\" max=\"2022-12-31\" required>\n          </ion-datetime>\n        </ion-item>\n        <ion-button type=\"submit\" [disabled]=\"!historyForm.valid\" expand=\"full\" color=\"primary\">Get Report\n        </ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      <ion-button expand=\"full\" color=\"primary\" (click)=\"export()\">Export to csv</ion-button>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item class=\"ion-text-center\">\n          <ion-label>\n            <p>Average max listeners</p>\n            <h2>{{ avg_max_listeners }}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-text-center\">\n          <ion-label>\n            <p>Total listener</p>\n            <h2>{{ roomDetail.total_listeners }}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-text-center\">\n          <ion-label>\n            <p>Total listened</p>\n            <h2>{{transformMinute(roomDetail.total_listened)}}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-text-center\">\n          <ion-label>\n            <p>Avg listened time</p>\n            <h2>{{ roomDetail.avg }}m</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-text-center\">\n          <ion-label>\n            <p>Total Rooms</p>\n            <h2>{{ roomDetail.total_rooms }}</h2>\n          </ion-label>\n        </ion-item>\n        <ion-item lines=\"full\" class=\"ion-text-center\">\n          <ion-label>\n            <p>New Followers</p>\n            <h2><span *ngIf=\"roomDetail.new > 0\">+</span>{{ roomDetail.new }}</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n  <div class=\"ion-padding\" *ngIf=\"roomDetail.rooms?.length <= 0\">\n    <ion-item-divider>\n      <ion-label>\n        <h2>No room available</h2>\n      </ion-label>\n    </ion-item-divider>\n  </div>\n\n  <div class=\"ion-padding\">\n    <ion-card class=\"\" *ngIf=\"roomDetail.rooms?.length > 0\">\n      <ion-card-header class=\"ion-text-center\">\n        <ion-card-title>All Rooms</ion-card-title>\n      </ion-card-header>\n    </ion-card>\n  </div>\n  <ion-item *ngFor=\"let allRoom of roomDetail.rooms\" lines=\"none\">\n    <ion-card (click)=\"analyze(allRoom.channel)\" class=\"test\">\n      <ion-card-header class=\"ion-text-center\">\n        <ion-card-title>{{ allRoom.topic }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content class=\"ion-text-center\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label>\n                  <p>Total Listeners</p>\n                  <h2>{{ allRoom.end_total_listeners }}</h2>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <ion-label>\n                  <p>Total Speakers</p>\n                  <h2>{{ allRoom.end_total_speakers }}</h2>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item lines=\"none\" class=\"ion-text-center\">\n                <div *ngIf=\"allRoom.date_ended;else templateName\">\n                  <ion-label>\n                    <h3>Room Status: Ended</h3>\n                  </ion-label>\n                </div>\n                <ng-template #templateName>\n                  <ion-label>\n                    <h3>Room Status: Active</h3>\n                  </ion-label>\n                </ng-template>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n\n\n      </ion-card-content>\n    </ion-card>\n  </ion-item>\n\n  <ion-item *ngIf=\"allRooms?.length > 0\">\n    <ion-grid class=\"ion-text-center\" style=\"background:#fff !important\">\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"3\">\n          <ion-button fill=\"clear\" (click)=\"next('back')\">\n            <ion-icon slot=\"icon-only\" name=\"play-back-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button fill=\"clear\" (click)=\"next('forward')\">\n            <ion-icon slot=\"icon-only\" name=\"play-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chtools_weekly-report_weekly-report_module_ts.js.map