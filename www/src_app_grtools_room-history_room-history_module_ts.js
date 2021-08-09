(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_grtools_room-history_room-history_module_ts"],{

/***/ 21933:
/*!*********************************************************************!*\
  !*** ./src/app/grtools/room-history/room-history-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomHistoryPageRoutingModule": () => (/* binding */ RoomHistoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _room_history_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-history.page */ 8421);




const routes = [
    {
        path: '',
        component: _room_history_page__WEBPACK_IMPORTED_MODULE_0__.RoomHistoryPage
    }
];
let RoomHistoryPageRoutingModule = class RoomHistoryPageRoutingModule {
};
RoomHistoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RoomHistoryPageRoutingModule);



/***/ }),

/***/ 10203:
/*!*************************************************************!*\
  !*** ./src/app/grtools/room-history/room-history.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomHistoryPageModule": () => (/* binding */ RoomHistoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _room_history_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-history-routing.module */ 21933);
/* harmony import */ var _room_history_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-history.page */ 8421);







let RoomHistoryPageModule = class RoomHistoryPageModule {
};
RoomHistoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _room_history_routing_module__WEBPACK_IMPORTED_MODULE_0__.RoomHistoryPageRoutingModule
        ],
        declarations: [_room_history_page__WEBPACK_IMPORTED_MODULE_1__.RoomHistoryPage]
    })
], RoomHistoryPageModule);



/***/ }),

/***/ 8421:
/*!***********************************************************!*\
  !*** ./src/app/grtools/room-history/room-history.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoomHistoryPage": () => (/* binding */ RoomHistoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_room_history_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./room-history.page.html */ 83134);
/* harmony import */ var _room_history_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./room-history.page.scss */ 43441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/gr-service.service */ 50972);



/* eslint-disable @typescript-eslint/naming-convention */





let RoomHistoryPage = class RoomHistoryPage {
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
        this.disable = false;
        this.setDisplay = false;
    }
    ionViewWillEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.getRoomHistory();
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
        });
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
    getRoomHistory() {
        this.app.getRoomHistory(this.page, this.api_token).subscribe((res) => {
            if (res.status === 'success') {
                this.setDisplay = true;
                this.allRooms = res.result;
                // console.log(this.allRooms);
            }
            else {
                const color = 'danger';
                this.setDisplay = false;
                this.presentToast(color, res.message);
            }
        });
    }
    analyze(roomId) {
        // alert(roomId);
        this.router.navigateByUrl('/tabs/grtools/track/' + roomId);
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
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let date = this.model.date;
            date = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.default)(new Date(date), 'yyyy-MM-dd');
            // console.log(date);
            // const date = form.value.toLocaleDateString().split(',')[0];
            // console.log(date);
            // console.log(this.model);
            // const date = this.model.dates;
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.app.getRoomHistorySort(this.page, this.api_token, date).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                if (res.status === 'success') {
                    yield loading.dismiss();
                    this.allRooms = res.result;
                    // console.log(this.allRooms);
                }
                else if (res.status === 'upgrade') {
                    yield loading.dismiss();
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/home/upgrade');
                }
                else if (res.status === 'validate') {
                    yield loading.dismiss();
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/auth/validategr/ ' + this.api_token);
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                }
                // console.log(res);
                // this.allRooms = res.result;
            }));
        });
    }
    goHome() { }
};
RoomHistoryPage.ctorParameters = () => [
    { type: src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_2__.GrServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
RoomHistoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-room-history',
        template: _raw_loader_room_history_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_room_history_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RoomHistoryPage);



/***/ }),

/***/ 43441:
/*!*************************************************************!*\
  !*** ./src/app/grtools/room-history/room-history.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card.test {\n  width: 100% !important;\n}\n\nion-item {\n  border-radius: 0 !important;\n  --border-radius: 0 !important ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb20taGlzdG9yeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQUNGOztBQUNBO0VBQ0UsMkJBQUE7RUFDQSw4QkFBQTtBQUVGIiwiZmlsZSI6InJvb20taGlzdG9yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZC50ZXN0e1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 83134:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grtools/room-history/room-history.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      GR TOOLS\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"!setDisplay\">\n  <ion-progress-bar [type]=\"'indeterminate'\"></ion-progress-bar>\n</ion-content>\n<ion-content *ngIf=\"setDisplay\">\n  <div class=\"ion-padding\">\n    <ion-card>\n      <ion-card-content>\n        <form name=\"form\" #historyForm=\"ngForm\" (ngSubmit)=\"historyForm.valid && onSubmit()\">\n          <ion-item>\n            <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n            <ion-datetime name=\"date\" [(ngModel)]=\"model.date\" #email=\"ngModel\" displayFormat=\"MM/DD/YYYY\"\n              min=\"2016-01-01\" max=\"2022-12-31\" required>\n            </ion-datetime>\n          </ion-item>\n          <ion-button type=\"submit\" [disabled]=\"!historyForm.valid\" expand=\"full\" color=\"primary\">Get History</ion-button>\n        </form>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <br>\n  <ion-item lines=\"none\" *ngFor=\"let allRoom of allRooms\">\n    <ion-card (click)=\"analyze(allRoom.channel)\" class=\"test\">\n      <ion-card-header class=\"ion-text-center\">\n        <ion-card-title>{{ allRoom.topic }}</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list>\n          <ion-item>\n            <ion-label>\n              <!-- <p></p> -->\n              <h3>\n                <span class=\"ion-float-left\">Total Listeners</span>\n                <span  class=\"ion-float-right\">{{ allRoom.end_total_listeners }}</span>\n              </h3>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <!-- <p></p> -->\n              <h3>\n                <span class=\"ion-float-left\">Total Speakers</span>\n                <span class=\"ion-float-right\">{{ allRoom.end_total_speakers }}</span>\n              </h3>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <h3>\n                <span class=\"ion-float-left\">Room Started</span>\n                <span class=\"ion-float-right\">{{ allRoom.date_started }}</span>\n              </h3>\n            </ion-label>\n          </ion-item>\n            <div *ngIf=\"allRoom.date_ended;else templateName\">\n              <ion-item>\n                <ion-label>\n                  <!-- <p></p> -->\n                  <h3>\n                    <span class=\"ion-float-left\">Room Status</span>\n                    <span class=\"ion-float-right\">Ended</span>\n                  </h3>\n                </ion-label>\n              </ion-item>\n              <ion-item>\n                <ion-label>\n                  <!-- <p>Room Status</p> -->\n                  <h3>\n                    <span class=\"ion-float-left\">Ended on </span>\n                    <span class=\"ion-float-right\"> {{ allRoom.date_ended }} </span>\n                  </h3>\n                </ion-label>\n              </ion-item>\n            </div>\n            <ng-template #templateName>\n              <ion-item>\n                <ion-label>\n                  <!-- <p>Room Status</p> -->\n                  <h3>\n                    <span class=\"ion-float-left\">Room Status</span>\n                    <span class=\"ion-float-right\">Active</span>\n                  </h3>\n                </ion-label>\n              </ion-item>\n            </ng-template>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n\n  </ion-item>\n\n  <ion-item *ngIf=\"allRooms?.length > 0\">\n    <ion-grid  class=\"ion-text-center\" style=\"background:#fff !important\">\n      <ion-row>\n        <ion-col size=\"3\"></ion-col>\n        <ion-col size=\"3\">\n          <ion-button fill=\"clear\" (click)=\"next('back')\">\n            <ion-icon slot=\"icon-only\" name=\"play-back-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button fill=\"clear\" (click)=\"next('forward')\">\n            <ion-icon slot=\"icon-only\" name=\"play-forward-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"3\"></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_grtools_room-history_room-history_module_ts.js.map