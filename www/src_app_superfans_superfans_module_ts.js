(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_superfans_superfans_module_ts"],{

/***/ 63684:
/*!*******************************************************!*\
  !*** ./src/app/superfans/superfans-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperfansPageRoutingModule": () => (/* binding */ SuperfansPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _superfans_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superfans.page */ 8389);




const routes = [
    {
        path: '',
        component: _superfans_page__WEBPACK_IMPORTED_MODULE_0__.SuperfansPage
    }
];
let SuperfansPageRoutingModule = class SuperfansPageRoutingModule {
};
SuperfansPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuperfansPageRoutingModule);



/***/ }),

/***/ 76311:
/*!***********************************************!*\
  !*** ./src/app/superfans/superfans.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperfansPageModule": () => (/* binding */ SuperfansPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _superfans_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./superfans-routing.module */ 63684);
/* harmony import */ var _superfans_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superfans.page */ 8389);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 44981);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-order-pipe */ 68536);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 72533);










let SuperfansPageModule = class SuperfansPageModule {
};
SuperfansPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _superfans_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuperfansPageRoutingModule,
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_9__.OrderModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule,
        ],
        declarations: [_superfans_page__WEBPACK_IMPORTED_MODULE_1__.SuperfansPage],
    })
], SuperfansPageModule);



/***/ }),

/***/ 8389:
/*!*********************************************!*\
  !*** ./src/app/superfans/superfans.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperfansPage": () => (/* binding */ SuperfansPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_superfans_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./superfans.page.html */ 24917);
/* harmony import */ var _superfans_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./superfans.page.scss */ 23986);
/* harmony import */ var src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/gr-service.service */ 50972);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/app.service */ 2440);




/* eslint-disable @typescript-eslint/naming-convention */





let SuperfansPage = class SuperfansPage {
    constructor(app, router, loadingController, toastController, gr) {
        this.app = app;
        this.router = router;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.gr = gr;
        this.results = [];
        this.key = 'no_rooms';
        this.key2 = 'no_rooms';
        this.reverse = true;
        this.reverse2 = true;
        this.p = 1;
        this.q = 1;
        this.type = 'ch';
        this.resultsgr = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.date = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            this.getSuperFans();
            this.getSuperFansgr();
        });
    }
    getSuperFans() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.results = [];
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app
                .getSuperfans(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // console.log(res);
                for (const key in res.result) {
                    if (Object.prototype.hasOwnProperty.call(res.result, key)) {
                        const element = res.result[key];
                        // console.log(element);
                        this.results.push(element);
                    }
                }
                yield loading.dismiss();
                // console.log(this.results);
            }));
        });
    }
    getSuperFansgr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.results = [];
            this.gr
                .getSuperfans(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // console.log(res);
                for (const key in res.result) {
                    if (Object.prototype.hasOwnProperty.call(res.result, key)) {
                        const element = res.result[key];
                        // console.log(element);
                        this.resultsgr.push(element);
                    }
                }
                // await loading.dismiss();
                // console.log(this.resultsgr);
            }));
        });
    }
    segmentChanged($event) { }
    gotoUser(userid) {
        // console.log(userid);
        this.router.navigateByUrl('/tabs/chtools/profile/' + userid);
    }
    gotoUsergr(userid) {
        // console.log(userid);
        this.router.navigateByUrl('/tabs/grtools/profile/' + userid);
    }
};
SuperfansPage.ctorParameters = () => [
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_2__.GrServiceService }
];
SuperfansPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-superfans',
        template: _raw_loader_superfans_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_superfans_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SuperfansPage);



/***/ }),

/***/ 23986:
/*!***********************************************!*\
  !*** ./src/app/superfans/superfans.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".newsDiv {\n  display: block;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #c5ebc2 !important;\n}\n\n.coloredCard {\n  background-color: var(--ion-color-primary);\n  padding: 60px !important;\n  border-radius: 20px;\n}\n\n.toolscard {\n  text-align: center !important;\n  border-radius: 20px;\n}\n\n.clear {\n  clear: both;\n}\n\n.tabbar {\n  width: 70% !important;\n  float: left;\n}\n\nion-segment-button {\n  font-size: 0.8em !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.moreButton {\n  font-size: 0.8em;\n  color: var(--ion-color-dark);\n}\n\n.red {\n  color: red !important;\n}\n\n.green {\n  color: green !important;\n}\n\n.black {\n  color: var(--ion-color-dark);\n}\n\n.selectFilter {\n  --border-width: 1px !important;\n  --border-color: var(--ion-color-light);\n  --border-radius: 5px !important;\n}\n\n.bgCh {\n  height: 19vh !important;\n  background: url('ch.jpg') 0 0/100% 100%;\n  background-size: cover;\n  background-position-x: unset;\n}\n\n.bgGr {\n  height: 19vh !important;\n  background: url('gr.jpg') 0 0/100% 100%;\n  background-size: cover;\n  background-position-x: unset;\n}\n\n.image {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.creators {\n  margin-right: 5px !important;\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50%;\n}\n\n.clear {\n  clear: both;\n}\n\np {\n  font-size: 0.8em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cGVyZmFucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUNBO0VBQ0UsMENBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBRUE7RUFDRSw2QkFBQTtFQUVBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtBQUVGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSw0QkFBQTtBQUdGOztBQURBO0VBQ0UscUJBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0FBS0Y7O0FBSEE7RUFDRSw0QkFBQTtBQU1GOztBQUdBO0VBQ0UsOEJBQUE7RUFDQSxzQ0FBQTtFQUVBLCtCQUFBO0FBREY7O0FBSUE7RUFDRSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7QUFERjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxXQUFBO0FBQUY7O0FBR0E7RUFDRSwyQkFBQTtBQUFGIiwiZmlsZSI6InN1cGVyZmFucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3c0RpdiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NywgMjM1LCAxOTQpICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbG9yZWRDYXJkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgcGFkZGluZzogNjBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLy8gY29sb3I6IHJnYigwLCAxMjgsIDApO1xyXG59XHJcblxyXG4udG9vbHNjYXJkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAvLyBwYWRkaW5nOiAzMHB4IDIwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5jbGVhciB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi50YWJiYXIge1xyXG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcclxuICBmbG9hdDogbGVmdDtcclxuICAvLyBmb250LXNpemU6IDAuN2VtICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLXNlZ21lbnQtYnV0dG9uIHtcclxuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcclxufVxyXG4ubW9yZUJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAwLjhlbTtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG59XHJcbi5yZWQge1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG4uZ3JlZW4ge1xyXG4gIGNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xyXG59XHJcbi5ibGFjayB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG4vLyBpb24tbGFiZWwsXHJcbi8vIGlvbi1jb2wsXHJcbi8vIGlvbi1ncmlkIHtcclxuLy8gICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuLy8gICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5zZWxlY3RGaWx0ZXIge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAvLyAtLWJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWR1bSkgIWltcG9ydGFudDtcclxuICAtLWJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYmdDaCB7XHJcbiAgaGVpZ2h0OiAxOXZoICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9jaC5qcGdcIikgMCAwLyAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHVuc2V0O1xyXG59XHJcblxyXG4uYmdHciB7XHJcbiAgaGVpZ2h0OiAxOXZoICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9nci5qcGdcIikgMCAwLyAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHVuc2V0O1xyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jcmVhdG9ycyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5we1xyXG4gIGZvbnQtc2l6ZTogLjhlbSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 24917:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/superfans/superfans.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar>\n    <ion-title>My Superfans </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <div class=\"tabbar\">\n        <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" swipeGesture=\"true\">\n          <ion-segment-button value=\"ch\">\n            <ion-label>Clubhouse</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"gr\">\n            <ion-label>GreenRoom</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <div class=\"clear\"></div>\n    </ion-card-header>\n    <ion-card-content [ngSwitch]=\"type\">\n      <div *ngSwitchCase=\"'ch'\">\n        <ion-item\n          *ngFor=\"let item of results| orderBy: key: reverse | paginate: {id: 'pagination1', itemsPerPage:7, currentPage: p}\">\n          <ion-grid fixed>\n            <ion-row (click)=\"gotoUser(item.user_id)\">\n              <ion-col size=\"8\">\n                <ion-label>\n                  <h3>{{ item.name }}</h3>\n                  <p>@{{ item.username }}</p>\n                  <p *ngIf=\" item.instagram !== ''\">\n                    <ion-icon name=\"logo-instagram\"></ion-icon>\n                    {{ item.instagram }}\n                  </p>\n                  <p *ngIf=\"item.twitter !== null \">\n                    <ion-icon name=\"logo-twitter\"></ion-icon> {{ item.twitter }}\n                  </p>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-label>\n                  <p>Rooms</p>\n                  <h3>{{ item.no_rooms }}</h3>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <!-- </ion-list> -->\n        <ion-item class=\"ion-text-center nocolor\">\n          <div class=\"ion-text-center\" style=\"width: 100%\">\n            <pagination-controls class=\"my-pagination\" id=\"pagination1\" (pageChange)=\"p = $event\" previousLabel=\"\"\n              nextLabel=\"\">\n            </pagination-controls>\n          </div>\n        </ion-item>\n      </div>\n\n      <div *ngSwitchCase=\"'gr'\">\n        <ion-item\n          *ngFor=\"let item of resultsgr| orderBy: key2: reverse2 | paginate: {id: 'pagination2', itemsPerPage:7, currentPage: q}\">\n          <ion-grid fixed>\n            <ion-row (click)=\"gotoUsergr(item.user_id)\">\n              <ion-col size=\"8\">\n                <ion-label>\n                  <h3>{{ item.name }}</h3>\n                  <p>@{{ item.username }}</p>\n                  <p *ngIf=\" item.instagram !== ''\">\n                    <ion-icon name=\"logo-instagram\"></ion-icon>\n                    {{ item.instagram }}\n                  </p>\n                  <p *ngIf=\"item.twitter !== null \">\n                    <ion-icon name=\"logo-twitter\"></ion-icon> {{ item.twitter }}\n                  </p>\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"4\" class=\"ion-text-center\">\n                <ion-label>\n                  <p>Rooms</p>\n                  <h3>{{ item.no_rooms }}</h3>\n                </ion-label>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n        <!-- </ion-list> -->\n        <ion-item class=\"ion-text-center nocolor\">\n          <div class=\"ion-text-center\" style=\"width: 100%\">\n            <pagination-controls class=\"my-pagination\" id=\"pagination2\" (pageChange)=\"q = $event\" previousLabel=\"\"\n              nextLabel=\"\">\n            </pagination-controls>\n          </div>\n        </ion-item>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_superfans_superfans_module_ts.js.map