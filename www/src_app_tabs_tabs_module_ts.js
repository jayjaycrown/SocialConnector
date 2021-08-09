(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_app_service_ts"), __webpack_require__.e("default-src_app__services_gr-service_service_ts"), __webpack_require__.e("src_app_dashboard_dashboard_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 34814)).then((m) => m.DashboardPageModule),
            },
            {
                path: 'superfans',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_app_service_ts"), __webpack_require__.e("default-src_app__services_gr-service_service_ts"), __webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-ord-09208b"), __webpack_require__.e("src_app_superfans_superfans_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../superfans/superfans.module */ 76311)).then((m) => m.SuperfansPageModule),
            },
            {
                path: 'toprooms',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-src_app__services_app_service_ts"), __webpack_require__.e("default-src_app__services_gr-service_service_ts"), __webpack_require__.e("src_app_toprooms_toprooms_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../toprooms/toprooms.module */ 74775)).then((m) => m.ToproomsPageModule),
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 84523)).then((m) => m.ProfilePageModule),
            },
            {
                path: 'club',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_app_service_ts"), __webpack_require__.e("src_app_club_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../club/support.module */ 3807)).then((m) => m.SupportPageModule),
            },
            // {
            //   path: 'tab1',
            //   loadChildren: () =>
            //     import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
            // },
            // {
            //   path: 'tab2',
            //   loadChildren: () =>
            //     import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
            // },
            // {
            //   path: 'tab3',
            //   loadChildren: () =>
            //     import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
            // },
            {
                path: '',
                redirectTo: '/tabs/dashboard',
                pathMatch: 'full',
            },
            // {
            //   path: '**',
            //   redirectTo: '/tabs/dashboard',
            // },
        ],
    },
    {
        path: 'chtools',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_date-fns_esm_format_index_js"), __webpack_require__.e("default-src_app__services_app_service_ts"), __webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-ord-09208b"), __webpack_require__.e("default-node_modules_ionic-native_file___ivy_ngcc___ngx_index_js-node_modules_ionic-native_so-7029ca"), __webpack_require__.e("src_app_chtools_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../chtools/home/home.module */ 7861)).then((m) => m.HomePageModule),
    },
    {
        path: 'grtools',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app__services_gr-service_service_ts"), __webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-ord-09208b"), __webpack_require__.e("default-node_modules_ionic-native_file___ivy_ngcc___ngx_index_js-node_modules_ionic-native_so-7029ca"), __webpack_require__.e("src_app_grtools_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../grtools/home/home.module */ 19466)).then((m) => m.HomePageModule),
    },
    {
        path: 'upgrade',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_upgrade_upgrade_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../upgrade/upgrade.module */ 58491)).then((m) => m.UpgradePageModule),
    },
    {
        path: 'details/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/details/details.module */ 30557)).then((m) => m.DetailsPageModule),
    },
    // {
    //   path: '',
    //   redirectTo: '/tabs/dashboard',
    //   pathMatch: 'full',
    // },
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let TabsPage = class TabsPage {
    constructor() {
        this.myCustomIcon = '/assets/logo.svg';
    }
    setCurrentTab() {
        this.selectedTab = this.tabs.getSelected();
        // console.log(this.selectedTab);
        if (this.selectedTab === 'dashboard') {
            this.showLabel = false;
        }
        else {
            this.showLabel = true;
        }
    }
};
TabsPage.ctorParameters = () => [];
TabsPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild, args: ['tabs', { static: false },] }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-tab-button.home {\n  --color-selected: var(--ion-color-primary) !important;\n}\n\n.selected {\n  transition: 0.3s all ease-in-out;\n  font-size: 50px !important;\n}\n\nion-tabs {\n  --backgound: var(--ion-background-color, #fff) !important;\n  background: var(--ion-background-color, #fff) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscURBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFPQTtFQUNFLHlEQUFBO0VBQ0Esd0RBQUE7QUFKRiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10YWItYnV0dG9uLmhvbWUge1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdGVkIHtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZS1pbi1vdXQ7XG4gIGZvbnQtc2l6ZTogNTBweCAhaW1wb3J0YW50O1xufVxuLy8gaW9uLXRhYi1iYXIge1xuLy8gICAvLyBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbi8vICAgLy8gbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xuLy8gICAvKiAtLWJhY2tncm91bmQ6ICNmZmY7ICovXG4vLyB9XG5cbmlvbi10YWJzIHtcbiAgLS1iYWNrZ291bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-tabs #tabs (ionTabsDidChange)=\"setCurrentTab()\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"club\">\n      <ion-icon name=\"business-outline\"></ion-icon>\n      <ion-label>My Club</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"superfans\">\n      <ion-icon name=\"people-circle-outline\"></ion-icon>\n      <ion-label>Super Fans</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"dashboard\" class=\"home\">\n      <ion-icon [src]=\"myCustomIcon\" [class.selected]=\"!showLabel\"></ion-icon>\n\n      <!-- <ion-icon name=\"home\" [class.selected]=\"!showLabel\"></ion-icon> -->\n      <ion-label *ngIf=\"showLabel\">Home</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"toprooms\">\n      <ion-icon name=\"albums-outline\"></ion-icon>\n      <ion-label>Rooms</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person-circle\"></ion-icon>\n      <ion-label>Profile</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map