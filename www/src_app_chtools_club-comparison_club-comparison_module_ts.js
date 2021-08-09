(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_chtools_club-comparison_club-comparison_module_ts"],{

/***/ 13822:
/*!*************************************************************!*\
  !*** ./src/app/_helpers/area-modal/area-modal.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AreaModalComponent": () => (/* binding */ AreaModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_area_modal_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./area-modal.component.html */ 12371);
/* harmony import */ var _area_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./area-modal.component.scss */ 27155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/app.service */ 2440);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 68384);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);



/* eslint-disable @typescript-eslint/naming-convention */

// import { AppService } from '../../_services/app.service';





// eslint-disable-next-line @typescript-eslint/naming-convention
const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Plugins;
const TOKEN_KEY = 'my-token';
let AreaModalComponent = class AreaModalComponent {
    constructor(modalCtrl, 
    // private auth: AuthService,
    loadingController, toastController, alertController, navParams, app, router) {
        this.modalCtrl = modalCtrl;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.navParams = navParams;
        this.app = app;
        this.router = router;
        // @Input() club: string;
        // @Input() state: any;
        // token: { value: string; };
        // areas: any;
        // availableArea: any;
        this.searchText = '';
        this.selectedItems = [];
        this.displayOk = false;
        this.model = {};
        this.clubname = '';
        this.club = this.navParams.get('club');
        // alert(this.club);
        // this.titleText = this.navParams.get('state');
        // this.FilterItems();
        // console.log( this.items);
        this.clubname = this.club;
        console.log(this.club);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.date = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
        });
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 3000
            });
            toast.present();
        });
    }
    FilterItems() {
        const data = this.model.club;
        const color = 'danger';
        // console.log(data.length);
        if (data.length >= 4) {
            this.app.searchClub(this.api_token, data).subscribe((res) => {
                if (res.status === 'success') {
                    this.allRooms = res.result;
                }
                else if (res.status === 'upgrade') {
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/home/upgrade');
                }
                else {
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                }
                // console.log(res);
                // this.allRooms = res.result;
            });
        }
        // this.filterItems = this.items;
        // if (this.searchText.trim() !== '') {
        //   this.filterItems = this.filterItems.filter((item) => {
        //     const test: string = item.areaName;
        //     return (test.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1);
        //   });
        // }
    }
    CheckChange(item, name) {
        this.modalCtrl.dismiss({
            id: item,
            name
        });
    }
    dismiss() {
        this.modalCtrl.dismiss();
    }
};
AreaModalComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavParams },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router }
];
AreaModalComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-area-modal',
        template: _raw_loader_area_modal_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_area_modal_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AreaModalComponent);



/***/ }),

/***/ 28408:
/*!***************************************************************************!*\
  !*** ./src/app/chtools/club-comparison/club-comparison-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubComparisonPageRoutingModule": () => (/* binding */ ClubComparisonPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _club_comparison_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club-comparison.page */ 87895);




const routes = [
    {
        path: '',
        component: _club_comparison_page__WEBPACK_IMPORTED_MODULE_0__.ClubComparisonPage
    }
];
let ClubComparisonPageRoutingModule = class ClubComparisonPageRoutingModule {
};
ClubComparisonPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClubComparisonPageRoutingModule);



/***/ }),

/***/ 76908:
/*!*******************************************************************!*\
  !*** ./src/app/chtools/club-comparison/club-comparison.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubComparisonPageModule": () => (/* binding */ ClubComparisonPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _club_comparison_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./club-comparison-routing.module */ 28408);
/* harmony import */ var _club_comparison_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club-comparison.page */ 87895);
/* harmony import */ var _helpers_area_modal_area_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/area-modal/area-modal.component */ 13822);








let ClubComparisonPageModule = class ClubComparisonPageModule {
};
ClubComparisonPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _club_comparison_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClubComparisonPageRoutingModule
        ],
        declarations: [_club_comparison_page__WEBPACK_IMPORTED_MODULE_1__.ClubComparisonPage, _helpers_area_modal_area_modal_component__WEBPACK_IMPORTED_MODULE_2__.AreaModalComponent]
    })
], ClubComparisonPageModule);



/***/ }),

/***/ 87895:
/*!*****************************************************************!*\
  !*** ./src/app/chtools/club-comparison/club-comparison.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubComparisonPage": () => (/* binding */ ClubComparisonPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_club_comparison_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./club-comparison.page.html */ 51079);
/* harmony import */ var _club_comparison_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club-comparison.page.scss */ 62505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _helpers_area_modal_area_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_helpers/area-modal/area-modal.component */ 13822);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/app.service */ 2440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);



/* eslint-disable @typescript-eslint/naming-convention */







let ClubComparisonPage = class ClubComparisonPage {
    constructor(modalController, app, loadingController, toastController, router) {
        this.modalController = modalController;
        this.app = app;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.router = router;
        this.club1 = '';
        this.club2 = '';
        this.model = {};
        this.allRooms = [];
        this.allRooms2 = [];
        this.page = 1;
        this.club1Details = {};
        this.club2Details = {};
        this.status = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        });
    }
    openAreaModal(club) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _helpers_area_modal_area_modal_component__WEBPACK_IMPORTED_MODULE_2__.AreaModalComponent,
                componentProps: {
                    club
                }
            });
            yield modal.present();
            const data = yield modal.onDidDismiss();
            console.log(data);
            this.club1Name = data.data.name;
            this.club1 = data.data.id;
            console.log(this.club1);
            // console.log(data.areaName);
            // this.pickupArea = data.data
        });
    }
    dropoffModal(club) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _helpers_area_modal_area_modal_component__WEBPACK_IMPORTED_MODULE_2__.AreaModalComponent,
                componentProps: {
                    club
                }
            });
            yield modal.present();
            const data = yield modal.onDidDismiss();
            console.log(data);
            this.club2Name = data.data.name;
            this.club2 = data.data.id;
            console.log(this.club2);
            // console.log(data.areaName);
            // this.dropoffArea = data.data
        });
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 3000
            });
            toast.present();
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const date = this.model.date;
            this.date = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(date), 'yyyy-MM-dd');
            console.log(date);
            const color = 'danger';
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.app.CompareClubs(this.api_token, this.club1, this.club2, this.date).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.status === 'success') {
                    this.status = true;
                    this.club1Details = res.result.club1;
                    this.club2Details = res.result.club2;
                    // console.log(this.club2Details);
                }
                else if (res.status === 'upgrade') {
                    // this.alertService.danger(res.message);
                    this.presentToast(color, res.message);
                    this.router.navigateByUrl('/tabs/upgrade');
                }
                else {
                    this.presentToast(color, res.message);
                    this.status = false;
                    // this.alertService.danger(res.message);
                    // console.log(this.error);
                }
            }));
        });
    }
    transformMinute(value) {
        const hours = Math.floor(value / 60);
        const minutes = Math.floor(value % 60);
        return hours + ' hrs ' + minutes + ' mins';
    }
};
ClubComparisonPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
ClubComparisonPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-club-comparison',
        template: _raw_loader_club_comparison_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_club_comparison_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClubComparisonPage);



/***/ }),

/***/ 27155:
/*!***************************************************************!*\
  !*** ./src/app/_helpers/area-modal/area-modal.component.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcmVhLW1vZGFsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ 62505:
/*!*******************************************************************!*\
  !*** ./src/app/chtools/club-comparison/club-comparison.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item {\n  --background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdWItY29tcGFyaXNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQUNGIiwiZmlsZSI6ImNsdWItY29tcGFyaXNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 12371:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_helpers/area-modal/area-modal.component.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Search for {{clubname }}\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" (click)=\"dismiss()\">\n        <ion-icon name=\"close-outline\" slot=\"icon-only\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"light\">\n    <ion-row>\n      <ion-col col-12 no-padding>\n        <ion-searchbar name=\"club\" mode=\"ios\" placeholder=\"Search Areas\" animated showCancelButton=\"focus\" enterkeyhint=\"search\"\n          inputmode=\"search\" [(ngModel)]=\"model.club\" #club=\"ngModel\" (ngModelChange)=\"FilterItems()\">\n        </ion-searchbar>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-list lines=\"full\">\n    <ion-item details *ngFor=\"let item of allRooms;\" (click)=\"CheckChange(item.club_id, item.name)\" align-items-center>\n      <ion-icon size=\"large\" *ngIf=\"item.selected\" name=\"checkmark-circle-outline\" slot=\"start\" color=\"primary\"></ion-icon>\n      <ion-icon size=\"large\" *ngIf=\"!item.selected\" name=\"radio-button-off-outline\" slot=\"start\" color=\"primary\">\n      </ion-icon>\n      <ion-label>\n        <h2> {{ item.name}}</h2>\n      </ion-label>\n\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 51079:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/club-comparison/club-comparison.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Compare Clubs\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" routerDirection=\"back\">\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important;\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-item (click)=\"openAreaModal('Club 1')\" style=\"margin-bottom: 16px;\">\n        <ion-label>\n          <p>Club 1</p>\n          <h3>{{club1Name}}</h3>\n        </ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"dropoffModal('Club 2')\" style=\"margin-bottom: 16px;\">\n        <ion-label>\n          <p>Club 2</p>\n          <h3>{{club2Name}}</h3>\n        </ion-label>\n      </ion-item>\n\n      <form name=\"form\" #historyForm=\"ngForm\" (ngSubmit)=\"historyForm.valid && onSubmit()\">\n        <ion-item>\n          <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n          <ion-datetime name=\"date\" [(ngModel)]=\"model.date\" #email=\"ngModel\" displayFormat=\"MM/DD/YYYY\"\n            min=\"2016-01-01\" max=\"2022-12-31\" required>\n          </ion-datetime>\n        </ion-item>\n        <ion-button type=\"submit\" [disabled]=\"!historyForm.valid\" expand=\"full\" color=\"primary\">Compare</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card *ngIf=\"status\">\n    <ion-card-header class=\"ion-text-center\">\n      <ion-card-title>Weekly Comparison</ion-card-title>\n      <ion-card-subtitle>{{date}}</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club1Details.name }}</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club2Details.name }}</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Average Listened</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club1Details.avg }} m</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club2Details.avg }} m</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Average Max Listeners</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club1Details.avg_max_listeners }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club2Details.avg_max_listeners }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Total Listened Time</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3 class=\"ion-text-wrap\">{{transformMinute(club1Details.total_listened)}} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3 class=\"ion-text-wrap\"> {{transformMinute(club2Details.total_listened)}} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Total Listeners</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club1Details.total_listeners || 0 }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club2Details.total_listeners || 0 }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>Total Rooms</h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club1Details.total_rooms }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\" class=\"ion-text-center\">\n              <ion-label>\n                <h3>{{ club2Details.total_rooms }} </h3>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chtools_club-comparison_club-comparison_module_ts.js.map