(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_auth_reset_reset_module_ts"],{

/***/ 5825:
/*!****************************************************!*\
  !*** ./src/app/auth/reset/reset-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPageRoutingModule": () => (/* binding */ ResetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.page */ 64569);




const routes = [
    {
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_0__.ResetPage
    }
];
let ResetPageRoutingModule = class ResetPageRoutingModule {
};
ResetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ResetPageRoutingModule);



/***/ }),

/***/ 88403:
/*!********************************************!*\
  !*** ./src/app/auth/reset/reset.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPageModule": () => (/* binding */ ResetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _reset_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-routing.module */ 5825);
/* harmony import */ var _reset_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.page */ 64569);







let ResetPageModule = class ResetPageModule {
};
ResetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reset_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResetPageRoutingModule
        ],
        declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_1__.ResetPage]
    })
], ResetPageModule);



/***/ }),

/***/ 64569:
/*!******************************************!*\
  !*** ./src/app/auth/reset/reset.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPage": () => (/* binding */ ResetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_reset_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./reset.page.html */ 92585);
/* harmony import */ var _reset_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset.page.scss */ 91647);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ 88368);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);








let ResetPage = class ResetPage {
    constructor(router, auth, location, toastController, loadingController) {
        this.router = router;
        this.auth = auth;
        this.location = location;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.model = {};
        this.showPass = false;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // this.router.getCurrentNavigation().extras.state;
        // console.log(history.state);
    }
    ngOnInit() {
        this.state = this.location.getState();
        console.log(this.state.email);
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            const obj = {
                email: this.state.email,
                resetCode: this.model.resetCode,
                newPassword: this.model.newPassword,
            };
            console.log(obj);
            this.auth
                .reset(this.state.email, this.model.resetCode, this.model.newPassword)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                console.log(res);
                if (res.status === 'success') {
                    this.presentToast(res.message, 'primary');
                    this.router.navigateByUrl('/auth');
                }
                else {
                    this.presentToast(res.message, 'danger');
                }
            }));
        });
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 2000,
            });
            toast.present();
        });
    }
};
ResetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
ResetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-reset',
        template: _raw_loader_reset_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_reset_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ResetPage);



/***/ }),

/***/ 91647:
/*!********************************************!*\
  !*** ./src/app/auth/reset/reset.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content .logo {\n  /* width: 30vh; */\n  height: 30vh;\n  margin: 0vh auto;\n  text-align: center;\n  background: url('socialConnector.jpeg') 0px 0%/100% 100% no-repeat;\n}\n\nion-item.mb {\n  margin-bottom: 20px !important;\n}\n\n.errors {\n  font-size: small;\n  color: red !important;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFFQSxrRUFBQTtBQURKOztBQUtBO0VBQ0UsOEJBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFFQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFIRiIsImZpbGUiOiJyZXNldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLmxvZ28ge1xyXG4gICAgLyogd2lkdGg6IDMwdmg7ICovXHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBtYXJnaW46IDB2aCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL3NvY2lhbENvbm5lY3Rvci5qcGVnXCIpIDBweCAwJS8xMDAlIDEwMCUgbm8tcmVwZWF0O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWl0ZW0ubWIge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVycm9ycyB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 92585:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/reset/reset.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n\n  <div class=\"logo\">\n\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <!-- <ion-card-title>Welcome</ion-card-title> -->\n      <ion-card-subtitle class=\"ion-text-center\">Please Enter the reset code sent to your email</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <form name=\"form\" #resetForm=\"ngForm\" (ngSubmit)=\"resetForm.valid && onSubmit()\">\n        <ion-item>\n          <ion-label position=\"floating\">Reset Code</ion-label>\n          <ion-input name=\"resetCode\" [(ngModel)]=\"model.resetCode\" #resetCode=\"ngModel\" minlength=\"6\"\n            [ngClass]=\"{ 'is-invalid': resetForm.submitted && resetCode.invalid }\" type=\"password\" autocomplete=\"off\"\n            required></ion-input>\n        </ion-item>\n        <div *ngIf=\"resetCode.invalid && (resetCode.dirty || resetCode.touched)\" class=\"errors\">\n          <span *ngIf=\"resetCode.errors?.required\">Reset Code is required</span>\n          <span *ngIf=\"resetCode.errors?.minlength\">Reset Code cannot be less than 6 characters</span>\n          <!-- <span *ngIf=\"email.errors?.pattern\">Email is invalid</span> -->\n        </div>\n\n        <ion-item>\n          <ion-label position=\"floating\">New password</ion-label>\n          <ion-input minlength=\"6\" name=\"newPassword\" [(ngModel)]=\"model.newPassword\" #newPassword=\"ngModel\"\n            [ngClass]=\"{ 'is-invalid': resetForm.submitted && newPassword.invalid }\" required\n            type=\"{{showPass ? 'text' : 'password'}}\" autocomplete=\"off\"></ion-input>\n          <ion-icon size=\"large\" style=\"margin-top: 16px;\" item-end slot=\"end\" name=\"{{showPass ? 'eye-off' : 'eye'}}\"\n            (click)=\"showPass=!showPass\"></ion-icon>\n        </ion-item>\n        <div *ngIf=\"newPassword.invalid && (newPassword.dirty || newPassword.touched)\" class=\"errors\">\n          <span *ngIf=\"newPassword.errors?.minlength\">Password cannot be less than 6 characters</span>\n          <span *ngIf=\"newPassword.errors?.required\">Password is required</span>\n        </div>\n        <br>\n\n        <ion-button type=\"submit\" [disabled]=\"!resetForm.valid\" expand=\"full\" color=\"primary\">Submit</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n\n      </ion-col>\n      <ion-col size=\"6\">\n        <h5 class=\"ion-text-center\" style=\"font-size: .9em !important;\">\n          <a [routerLink]=\"['/auth']\" routerLinkActive=\"router-link-active\">Back to login</a>\n        </h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_reset_reset_module_ts.js.map