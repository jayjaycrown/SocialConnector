(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_chtools_announcements_announcements_module_ts"],{

/***/ 57752:
/*!***********************************************************************!*\
  !*** ./src/app/chtools/announcements/announcements-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementsPageRoutingModule": () => (/* binding */ AnnouncementsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _announcements_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcements.page */ 86003);




const routes = [
    {
        path: '',
        component: _announcements_page__WEBPACK_IMPORTED_MODULE_0__.AnnouncementsPage
    }
];
let AnnouncementsPageRoutingModule = class AnnouncementsPageRoutingModule {
};
AnnouncementsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnnouncementsPageRoutingModule);



/***/ }),

/***/ 26014:
/*!***************************************************************!*\
  !*** ./src/app/chtools/announcements/announcements.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementsPageModule": () => (/* binding */ AnnouncementsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _announcements_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./announcements-routing.module */ 57752);
/* harmony import */ var _announcements_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcements.page */ 86003);







let AnnouncementsPageModule = class AnnouncementsPageModule {
};
AnnouncementsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _announcements_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnnouncementsPageRoutingModule
        ],
        declarations: [_announcements_page__WEBPACK_IMPORTED_MODULE_1__.AnnouncementsPage]
    })
], AnnouncementsPageModule);



/***/ }),

/***/ 86003:
/*!*************************************************************!*\
  !*** ./src/app/chtools/announcements/announcements.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnnouncementsPage": () => (/* binding */ AnnouncementsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_announcements_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./announcements.page.html */ 26053);
/* harmony import */ var _announcements_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./announcements.page.scss */ 41701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/app.service */ 2440);



/* eslint-disable @typescript-eslint/naming-convention */




let AnnouncementsPage = class AnnouncementsPage {
    constructor(app, router, route, loadingController, toastController) {
        this.app = app;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.model = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.fetchClubs();
        });
    }
    fetchClubs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.app.fetchClub(this.api_token).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                //  console.log(res);
                this.clubLists = res.result;
            }));
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            // this.loading = true;
            const message = this.model.message;
            const club_id = this.model.club_id;
            // this.loading = true;
            // console.log(message, club_id, this.api_token);
            this.app.postNotification(this.api_token, club_id, message).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                // this.loading = false;
                yield loading.dismiss();
                if (res.status === 'success') {
                    this.presentToast('success', res.message);
                    // this.alertService.success(res.message);
                }
                else {
                    this.presentToast('danger', res.message);
                    // this.alertService.danger(res.message);
                }
            }));
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
};
AnnouncementsPage.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
AnnouncementsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-announcements',
        template: _raw_loader_announcements_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_announcements_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AnnouncementsPage);



/***/ }),

/***/ 41701:
/*!***************************************************************!*\
  !*** ./src/app/chtools/announcements/announcements.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbm5vdW5jZW1lbnRzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 26053:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/announcements/announcements.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"rayo\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Announcements\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/home/profile']\" routerLinkActive=\"router-link-active\">\n        <ion-icon name=\"person-circle-outline\" slot=\"icon-only\"\n          style=\"width: 36px !important; height: 36px !important;\">\n        </ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <form name=\"form\" #announcementForm=\"ngForm\" (ngSubmit)=\"announcementForm.valid && onSubmit()\">\n        <ion-item class=\"ion-margin-bottom\">\n          <ion-textarea rows=\"10\" name=\"message\" [(ngModel)]=\"model.message\" placeholder=\"Enter your messages here\"\n            required>\n          </ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\"></ion-label>\n          <ion-select name=\"club_id\" id=\"\" [(ngModel)]=\"model.club_id\" #club_id=\"ngModel\" placeholder=\"Select Club\"\n            required>\n            <ion-select-option *ngFor=\"let item of clubLists\" [value]=\"item.club_id\">{{item.club_name}}\n            </ion-select-option>\n          </ion-select>\n        </ion-item>\n        <ion-button type=\"submit\" [disabled]=\"!announcementForm.valid\" expand=\"full\" color=\"primary\">Submit</ion-button>\n\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chtools_announcements_announcements_module_ts.js.map