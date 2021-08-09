(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_grtools_profile_profile_module_ts"],{

/***/ 71036:
/*!***********************************************************!*\
  !*** ./src/app/grtools/profile/profile-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageRoutingModule": () => (/* binding */ ProfilePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.page */ 28922);




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

/***/ 99319:
/*!***************************************************!*\
  !*** ./src/app/grtools/profile/profile.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePageModule": () => (/* binding */ ProfilePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-routing.module */ 71036);
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page */ 28922);
/* harmony import */ var _helpers_replace_linebreaks_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/replace-linebreaks.pipe */ 88642);








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProfilePageRoutingModule],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_1__.ProfilePage, _helpers_replace_linebreaks_pipe__WEBPACK_IMPORTED_MODULE_2__.ReplaceLinebreaksPipe],
    })
], ProfilePageModule);



/***/ }),

/***/ 28922:
/*!*************************************************!*\
  !*** ./src/app/grtools/profile/profile.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilePage": () => (/* binding */ ProfilePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./profile.page.html */ 82390);
/* harmony import */ var _profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.page.scss */ 27529);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/gr-service.service */ 50972);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/browser */ 28427);



/* eslint-disable no-underscore-dangle */

/* eslint-disable @typescript-eslint/naming-convention */




// import { AppService } from './../../_services/app.service';


let ProfilePage = class ProfilePage {
    constructor(route, loadingController, app, router) {
        this.route = route;
        this.loadingController = loadingController;
        this.app = app;
        this.router = router;
        this.page = 1;
        this.details = {};
        this.profile = {};
        this.data = {};
        this.loaddata = false;
        this.route.paramMap.subscribe((paramMap) => {
            this.id = paramMap.get('id');
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.date = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
            this.getUserProfile();
        });
    }
    getUserProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app
                .getUsersProfiles(this.api_token, this.id, this.date, this.page)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                this.loaddata = true;
                yield this.loadingController.dismiss();
                console.log(res);
                if (res.status === 'success') {
                    this.showResult = true;
                    this.details = res.result;
                    this.profile = this.details.profile;
                    this.data = JSON.parse(this.profile.data);
                    // console.log(this.data);
                    this.rooms = this.details.rooms;
                }
            }));
        });
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
    openTwitter(twitter) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: 'https://www.twitter.com/' + twitter });
        });
    }
    openInsta(insta) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_browser__WEBPACK_IMPORTED_MODULE_4__.Browser.open({ url: 'https://www.instagram.com/' + insta });
        });
    }
    openGr(gr) {
        // await Browser.open({ url: 'https://www.instagram.com/' + insta });
    }
    convert(value) {
        const data = moment__WEBPACK_IMPORTED_MODULE_2__.duration(value, 'minutes');
        console.log(data._data);
        return (data._data.hours + ':' + data._data.minutes + ':' + data._data.seconds);
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_3__.GrServiceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
ProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProfilePage);



/***/ }),

/***/ 27529:
/*!***************************************************!*\
  !*** ./src/app/grtools/profile/profile.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 82390:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/grtools/profile/profile.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title> CH TOOLS </ion-title> -->\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" routerDirection=\"back\">\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<!-- <a target=\"blank\" [href]=\"'https://www.twitter.com/'+ profile.twitter\" class=\"btn btn-sm btn-info mr-4\"\n  *ngIf=\" profile?.twitter\">{{ profile?.twitter }}</a>\n<a [href]=\"'https://www.instagram.com/'+profile.instagram\" target=\"blank\" class=\"btn btn-sm btn-insta float-right\"\n  *ngIf=\" profile?.instagram\"> {{ profile.instagram }} </a> -->\n<ion-content>\n  <div *ngIf=\"loaddata\">\n    <ion-card *ngIf=\"showResult\">\n      <ion-card-header style=\"padding-bottom: 0px !important\">\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col size=\"4\">\n              <img [src]=\"profile?.photo_url || 'http://placehold.it/500x500'\" style=\"border-radius: 30% !important;\" />\n            </ion-col>\n            <ion-col size=\"8\">\n              <ion-card-title class=\"ion-text-center\">\n                {{ profile?.name }}\n              </ion-card-title>\n              <ion-card-subtitle class=\"ion-text-center\" (click)=\"openGr(profile.username)\" color=\"primary\">\n                @{{ profile?.username }}\n              </ion-card-subtitle>\n              <ion-card-subtitle>\n                <ion-item lines=\"none\" class=\"ion-text-center\">\n                  <ion-label>\n                    <p style=\"font-size: .8em !important; text-transform: capitalize !important;\">Followers</p>\n                    <h2>{{ profile?.no_followers| number }}</h2>\n                  </ion-label>\n                  <ion-label>\n                    <p style=\"font-size: .8em !important; text-transform: capitalize !important;\">Following</p>\n                    <h2>{{ profile?.no_following | number }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-card-subtitle>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-header>\n      <div>\n        <ion-item lines=\"none\" *ngIf=\"profile.bio\">\n          <ion-label class=\"ion-text-wrap\">\n            <p style=\"font-size: .8em !important;\" [innerHTML]=\"profile?.bio | replaceLinebreaks\"></p>\n          </ion-label>\n        </ion-item>\n        <ion-grid fixed>\n          <ion-row class=\"ion-text-center\">\n            <ion-col size=\"6\" *ngIf=\"profile.twitter\">\n              <p (click)=\"openTwitter(profile.twitter)\" color=\"primary\">\n                <ion-icon name=\"logo-twitter\"></ion-icon> {{ profile?.twitter }}\n              </p>\n\n            </ion-col>\n            <ion-col size=\"6\" *ngIf=\"profile.instagram\">\n              <p (click)=\"openInsta(profile.instagram)\" color=\"primary\">\n                <ion-icon name=\"logo-instagram\"></ion-icon> {{ profile.instagram }}\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label class=\"ion-text-wrap\">\n                  <p style=\"font-size: .7em !important; text-transform: capitalize !important;\">Avg Time in your room\n                  </p>\n                  <h3> {{ convert(details.avg) }} </h3>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item lines=\"none\">\n                <ion-label class=\"ion-text-wrap\">\n                  <p style=\"font-size: .7em !important; text-transform: capitalize !important;\">Total rooms entered</p>\n                  <h3> {{ details.total_rooms }} </h3>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <p>Gems</p>\n                  <h3> {{ profile.gems }} </h3>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-card>\n\n    <div class=\"ion-padding-horizontal\">\n      <ion-item-divider color=\"secondary\" *ngIf=\"rooms?.length !== 0\">\n        <ion-label>\n          <h2>All Rooms</h2>\n        </ion-label>\n      </ion-item-divider>\n    </div>\n\n    <div *ngFor=\"let item of rooms\">\n      <ion-card (click)=\"onClick(item.channel)\">\n        <ion-card-content>\n          <ion-item lines=\"none\">\n            <ion-label class=\"ion-text-wrap\">\n              <h2>{{ item.topic }}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-label>\n              <span class=\"ion-align-items-center\">\n                <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n              </span>\n              {{ item.end_total_speakers }}\n            </ion-label>\n            <ion-label>\n              <ion-icon name=\"people-outline\"></ion-icon>\n              {{ item.end_total_listeners }}\n            </ion-label>\n            <ion-label>\n              <ion-icon name=\"time-outline\"></ion-icon>\n              {{ getDateDiff(item.date_started, item.date_ended) }}\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_grtools_profile_profile_module_ts.js.map