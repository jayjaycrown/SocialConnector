(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_chtools_home_home_module_ts"],{

/***/ 76115:
/*!*******************************************************************************!*\
  !*** ./src/app/chtools/club-analytics/club-details/club-details.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClubDetailsComponent": () => (/* binding */ ClubDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_club_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./club-details.component.html */ 39974);
/* harmony import */ var _club_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./club-details.component.scss */ 71245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/app.service */ 2440);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);



/* eslint-disable @typescript-eslint/naming-convention */






let ClubDetailsComponent = class ClubDetailsComponent {
    constructor(app, router, route, loadingController, toastController, alertController) {
        this.app = app;
        this.router = router;
        this.route = route;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.alertController = alertController;
        this.model = {};
        this.results = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.newDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.route.paramMap.subscribe(paramMap => {
                this.id = paramMap.get('id');
            });
            this.clubAnalytics();
        });
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 3000
            });
            toast.present();
        });
    }
    clubAnalytics() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.app.clubAnalytics(this.api_token, this.id, this.newDate).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.status === 'success') {
                    this.results = res.result;
                }
                else if (res.status === 'upgrade') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.router.navigateByUrl('/tabs/upgrade');
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                }
                // console.log(res);
                // this.results = res.result;
            }));
        });
    }
    analyze(roomId) {
        // alert(roomId);
        this.router.navigateByUrl('/tabs/chtools/track/' + roomId);
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(this.model);
            let date = this.model.date;
            date = (0,date_fns__WEBPACK_IMPORTED_MODULE_5__.default)(new Date(date), 'yyyy-MM-dd');
            // console.log(date);
            this.newDate = date;
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.app.clubAnalytics(this.api_token, this.id, this.newDate).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.status === 'success') {
                    this.results = res.result;
                    // console.log(this.results);
                }
                else if (res.status === 'upgrade') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.router.navigateByUrl('/tabs/upgrade');
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                }
                // console.log(res);
                // this.results = res.result;
            }));
        });
    }
    transformMinute(value) {
        const hours = Math.floor(value / 60);
        const minutes = Math.floor(value % 60);
        return hours + ' hrs ' + minutes + ' mins';
    }
};
ClubDetailsComponent.ctorParameters = () => [
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
ClubDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-club-details',
        template: _raw_loader_club_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_club_details_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClubDetailsComponent);



/***/ }),

/***/ 89416:
/*!*****************************************************************************!*\
  !*** ./src/app/chtools/club-analytics/verify-club/verify-club.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyClubComponent": () => (/* binding */ VerifyClubComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_verify_club_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./verify-club.component.html */ 95024);
/* harmony import */ var _verify_club_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-club.component.scss */ 85001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/app.service */ 2440);



/* eslint-disable @typescript-eslint/naming-convention */




let VerifyClubComponent = class VerifyClubComponent {
    constructor(app, router, route, toastController, alertController, loadingController) {
        this.app = app;
        this.router = router;
        this.route = route;
        this.toastController = toastController;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.loading = false;
        this.route.paramMap.subscribe(paramMap => {
            this.id = paramMap.get('id');
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.getCode();
        });
    }
    getCode() {
        // this.loading = true;
        this.app.getCode(this.api_token, this.id).subscribe((res) => {
            // console.log(res);
            if (res.status === 'success') {
                this.code = res.result.code;
            }
            else {
                // this.alertService.danger(res.message);
            }
        });
    }
    verifyClub() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // this.loading = true;
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.app.verifyClub(this.api_token, this.id).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                // console.log(res);
                yield loading.dismiss();
                // this.loading = false;
                if (res.status === 'success') {
                    // this.alertService.success(res.message);
                    this.presentToast('success', res.message);
                    this.router.navigateByUrl('/tabs/chtools/clubs');
                    // this.code = res.result.code;
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
VerifyClubComponent.ctorParameters = () => [
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__.AppService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController }
];
VerifyClubComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-verify-club',
        template: _raw_loader_verify_club_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_verify_club_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VerifyClubComponent);



/***/ }),

/***/ 29303:
/*!*****************************************************!*\
  !*** ./src/app/chtools/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _club_analytics_club_details_club_details_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../club-analytics/club-details/club-details.component */ 76115);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/auth.guard */ 95107);
/* harmony import */ var _track_track_details_track_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../track/track-details/track-details.component */ 5960);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ 46144);
/* harmony import */ var _club_analytics_verify_club_verify_club_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../club-analytics/verify-club/verify-club.component */ 89416);







// import { ClubAnalyticsPageModule } from '../club-analytics/club-analytics.module';

const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__.HomePage,
        children: [
            {
                path: '',
                redirectTo: 'track',
                pathMatch: 'full',
            },
            {
                path: 'room-history',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_room-history_room-history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../room-history/room-history.module */ 18910)).then((m) => m.RoomHistoryPageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
            },
            {
                path: 'club-analytics',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_club-analytics_club-analytics_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../club-analytics/club-analytics.module */ 32356)).then((m) => m.ClubAnalyticsPageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
            },
            {
                path: 'club-analytics/:id',
                component: _club_analytics_club_details_club_details_component__WEBPACK_IMPORTED_MODULE_0__.ClubDetailsComponent,
            },
            {
                path: 'verify-club/:id',
                component: _club_analytics_verify_club_verify_club_component__WEBPACK_IMPORTED_MODULE_4__.VerifyClubComponent,
            },
            {
                path: 'weekly-report',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_weekly-report_weekly-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../weekly-report/weekly-report.module */ 6477)).then((m) => m.WeeklyReportPageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
            },
            {
                path: 'weekly-comparison',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_weekly-comparison_weekly-comparison_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../weekly-comparison/weekly-comparison.module */ 14064)).then((m) => m.WeeklyComparisonPageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
            },
            {
                path: 'club-comparison',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_club-comparison_club-comparison_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../club-comparison/club-comparison.module */ 76908)).then((m) => m.ClubComparisonPageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
            },
            {
                path: 'profile/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_chtools_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 34156)).then((m) => m.ProfilePageModule),
            },
            // {
            //   path: 'profile',
            //   loadChildren: () =>
            //     import('../profile/profile.module').then((m) => m.ProfilePageModule),
            //   canLoad: [AuthGuard],
            // },
            {
                path: 'track',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_track_track_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../track/track.module */ 1620)).then((m) => m.TrackPageModule),
                canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
            },
            {
                path: 'track/:id',
                component: _track_track_details_track_details_component__WEBPACK_IMPORTED_MODULE_2__.TrackDetailsComponent,
            },
            {
                path: 'announcements',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_announcements_announcements_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../announcements/announcements.module */ 26014)).then((m) => m.AnnouncementsPageModule),
            },
            {
                path: 'details/:id',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_pages_details_details_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../pages/details/details.module */ 40134)).then((m) => m.DetailsPageModule),
            },
            {
                path: 'account-stat',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_chtools_account-stat_account-stat_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../account-stat/account-stat.module */ 17378)).then((m) => m.AccountStatPageModule),
            },
        ],
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7861:
/*!*********************************************!*\
  !*** ./src/app/chtools/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 46144);
/* harmony import */ var _club_analytics_club_details_club_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../club-analytics/club-details/club-details.component */ 76115);
/* harmony import */ var _track_track_details_track_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../track/track-details/track-details.component */ 5960);
/* harmony import */ var _club_analytics_verify_club_verify_club_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../club-analytics/verify-club/verify-club.component */ 89416);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var ngx_order_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-order-pipe */ 68536);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 44981);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-routing.module */ 29303);








// import { AnnouncementsPage } from '../announcements/announcements.page';





// import { NgxStripeModule } from 'ngx-stripe';

// import { HTTP } from '@ionic-native/http/ngx';
// import { FileOpener } from "@ionic-native/file-opener/ngx";


let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_8__.HomePageRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_14__.ChartsModule,
            ngx_order_pipe__WEBPACK_IMPORTED_MODULE_15__.OrderModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule
            // NgxStripeModule.forRoot('pk_live_X0yHCliG01VXZYUlqsD2D88W00vkCJ4P5g'),
        ],
        providers: [_ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_6__.File, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__.SocialSharing],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, _club_analytics_club_details_club_details_component__WEBPACK_IMPORTED_MODULE_1__.ClubDetailsComponent, _track_track_details_track_details_component__WEBPACK_IMPORTED_MODULE_2__.TrackDetailsComponent, _club_analytics_verify_club_verify_club_component__WEBPACK_IMPORTED_MODULE_3__.VerifyClubComponent]
    })
], HomePageModule);



/***/ }),

/***/ 46144:
/*!*******************************************!*\
  !*** ./src/app/chtools/home/home.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 13019);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 64853);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/auth.service */ 88368);







let HomePage = class HomePage {
    constructor(router, menu, auth) {
        this.router = router;
        this.menu = menu;
        this.auth = auth;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.Pages = [
            {
                title: 'Track',
                url: '/tabs/chtools/track',
                icon: 'analytics'
            },
            {
                title: 'Room History',
                url: '/tabs/chtools/room-history',
                icon: 'options'
            },
            {
                title: 'Club Analytics',
                url: '/tabs/chtools/club-analytics',
                icon: 'bar-chart'
            },
            {
                title: 'Weekly Report',
                url: '/tabs/chtools/weekly-report',
                icon: 'stats-chart'
            },
            {
                title: 'Weekly Comparison',
                url: '/tabs/chtools/weekly-comparison',
                icon: 'repeat'
            },
            {
                title: 'Club Comparison',
                url: '/tabs/chtools/club-comparison',
                icon: 'copy'
            },
            {
                title: 'Announcements',
                url: '/tabs/chtools/announcements',
                icon: 'mic'
            },
            {
                title: 'Account Stats',
                url: '/tabs/chtools/account-stat',
                icon: 'pie-chart'
            },
        ];
        this.selectedPath = '';
        this.router.events.subscribe((event) => {
            this.selectedPath = event.url;
        });
    }
    // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
    openFirst() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
    openEnd() {
        this.menu.open('end');
    }
    openCustom() {
        this.menu.enable(true, 'custom');
        this.menu.open('custom');
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 5960:
/*!************************************************************************!*\
  !*** ./src/app/chtools/track/track-details/track-details.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrackDetailsComponent": () => (/* binding */ TrackDetailsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_track_details_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./track-details.component.html */ 70903);
/* harmony import */ var _track_details_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./track-details.component.scss */ 91246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/app.service */ 2440);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/auth.service */ 88368);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var ngx_papaparse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-papaparse */ 61704);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 24276);



/* eslint-disable guard-for-in */
/* eslint-disable eqeqeq */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */








// import { ExportToCsv } from 'export-to-csv';
// import { CSVService } from 'ionic-csv';

// import { HTTP } from '@ionic-native/http/ngx';


let TrackDetailsComponent = class TrackDetailsComponent {
    // sortby = '';
    constructor(router, app, auth, route, loadingController, toastController, file, socialSharing, 
    // private http: HTTP,
    papa, plt) {
        this.router = router;
        this.app = app;
        this.auth = auth;
        this.route = route;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.file = file;
        this.socialSharing = socialSharing;
        this.papa = papa;
        this.plt = plt;
        this.key = 'name';
        this.key1 = 'username';
        this.key2 = 'name';
        this.key3 = 'name';
        this.key4 = 'name';
        this.key5 = 'name';
        this.reverse = false;
        this.reverse1 = false;
        this.reverse2 = false;
        this.reverse3 = false;
        this.reverse4 = false;
        this.reverse5 = false;
        this.showChat = true;
        this.rrverse = true;
        this.p = 1;
        this.q = 1;
        this.r = 1;
        this.s = 1;
        this.t = 1;
        this.u = 1;
        // Pie
        this.pieChartOptions = {
            responsive: true,
        };
        this.pieChartLabels = ['Party Hat', 'Non Party Hat'];
        this.pieChartData = [30, 50];
        this.pieChartType = 'doughnut';
        this.pieChartLegend = false;
        this.pieChartPlugins = [];
        this.pieChartColors = [
            {
                backgroundColor: ['rgba(127,126,120)', 'rgba(236,231,205)'],
            },
        ];
        this.piechatLabels2 = [
            'Skintone 1 ✋🏻',
            'Skintone 2 ✋🏼',
            'skintone 3 ✋🏽',
            'Skintone 4 ✋🏾',
            'Skintone 5 ✋🏿',
        ];
        this.pieChartData2 = [30, 50, 40, 10, 5];
        this.pieChartType2 = 'pie';
        this.pieChartPlugins2 = [];
        this.pieChartColors2 = [
            {
                backgroundColor: [
                    'rgb(127,126,120)',
                    'rgb(236,231,205)',
                    'rgb(134, 10,50)',
                    'rgb(192,128,104)',
                    'rgb(12,18,14)',
                ],
            },
        ];
        this.barChartOptions = {
            responsive: true,
        };
        this.barChartLabels = [
            'ST1 ✋🏻',
            'ST2 ✋🏼',
            'ST3 ✋🏽',
            'ST4 ✋🏾',
            'ST5 ✋🏿',
        ];
        this.barChartType = 'bar';
        this.barChartLegend = true;
        this.barChartPlugins = [];
        this.barChartColors = [
            {
                // first color
                backgroundColor: 'rgb(127,126,120)',
                borderColor: 'rgb(127,126,120)',
                pointBackgroundColor: 'rgb(127,126,120)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(127,126,120)',
            },
            {
                // Third color
                backgroundColor: 'rgb(134, 10,50)',
                borderColor: 'rgb(134, 10,50)',
                pointBackgroundColor: 'rgb(134, 10,50)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(134, 10,50)',
            },
            {
                // Fourth color
                backgroundColor: 'rgb(192,128,104)',
                borderColor: 'rgb(192,128,104)',
                pointBackgroundColor: 'rgb(192,128,104)',
                pointBorderColor: '#000',
                pointHoverBackgroundColor: '#000',
                pointHoverBorderColor: 'rgb(192,128,104)',
            },
            {
                // Fifth color
                backgroundColor: 'rgb(12,18,14)',
                borderColor: 'rgb(12,18,14)',
                pointBackgroundColor: 'rgb(12,18,14)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(12,18,14)',
            },
        ];
        this.customPopoverOptions = {
            header: 'Badge',
            subHeader: 'Add a badge',
        };
        this.customActionSheetOptions = {
            header: 'Sort',
            subHeader: 'Sort by',
        };
        this.customActionSheetOptions2 = {
            header: 'Show',
            subHeader: 'Show only',
        };
        this.loadMore = false;
        this.fullData = {};
        this.spdData = [];
        this.dataListener = [];
        this.dataSpeaker = [];
        this.dataSkinTone = [];
        this.dataLTSkinTone = [];
        this.dataSpeakerSkinTone = [];
        this.dataModSkinTone = [];
        this.dataModerator = [];
        this.listenerNewSTData = [];
        this.listenerOldSTData = [];
        this.pieChartDataL = this.dataListener;
        this.pieChartDataS = this.dataSpeaker;
        this.pieChartDataM = this.dataModerator;
        this.pieChartDataSkin = this.dataSkinTone;
        this.pieChartLTSkin = this.dataLTSkinTone;
        this.pieChartSpeakerSkin = this.dataSpeakerSkinTone;
        this.pieChartModSkin = this.dataModSkinTone;
        this.barChartData = [
            { data: this.listenerNewSTData, label: 'Listeners' },
            { data: [28, 48, 40, 19, 86], label: 'Speakers' },
            { data: [28, 48, 40, 19, 86], label: 'Moderators' },
            { data: [28, 48, 40, 19, 86], label: 'Avg Listened Time' },
        ];
        this.model = {};
        this.setDisplay = false;
        this.greenImg = 'assets/img/green.gif';
        this.redImg = 'assets/img/red.gif';
        this.upgrade = false;
        this.superFans = [];
        this.Fans = [];
        this.showTwitter = false;
        this.showInsta = false;
        this.speakersshowTwitter = false;
        this.speakershowInsta = false;
        this.showSpeaker = false;
        this.exportToHs = false;
        this.hideSkintone = true;
        this.showChart = false;
        this.searchUser = false;
        this.date_entered = [];
        this.listeners_data = [];
        this.lineChartData = [
            { data: this.listeners_data, label: 'Active Listeners' },
        ];
        this.lineChartLabels = this.date_entered;
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(9, 175, 252, 0.2)',
                borderColor: 'rgba(9, 175, 252,1)',
                pointBackgroundColor: '#fff',
                pointBorderColor: 'rgba(9, 175, 252,1)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177, 0.8)',
                pointBorderWidth: 3,
            },
        ];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
        this.showData = false;
        this.roomOn = false;
        this.sortKey = '';
        this.randomElement = {};
        this.showonlyone = false;
        this.event = false;
        this.showcoin = false;
        this.listeners_data2 = [];
        this.displayFilter = false;
        this.showAllData = false;
        (0,ng2_charts__WEBPACK_IMPORTED_MODULE_7__.monkeyPatchChartJsTooltip)();
        (0,ng2_charts__WEBPACK_IMPORTED_MODULE_7__.monkeyPatchChartJsLegend)();
    }
    sort(key) {
        this.key = key;
        this.reverse = !this.reverse;
    }
    sortWoKey() {
        this.rrverse = !this.rrverse;
    }
    sort1(key) {
        this.key1 = key;
        this.reverse1 = !this.reverse1;
    }
    sort2(key) {
        this.key2 = key;
        this.reverse2 = !this.reverse2;
    }
    sort3(key) {
        this.key3 = key;
        this.reverse3 = !this.reverse3;
    }
    sort4(key) {
        this.key4 = key;
        this.reverse4 = !this.reverse4;
    }
    sort5(key) {
        this.key5 = key;
        this.reverse5 = !this.reverse5;
    }
    search() {
        this.newFollowers_gained = this.followers_gained;
        if (this.name === '') {
            this.newFollowers_gained = this.followers_gained;
        }
        else {
            this.newFollowers_gained = this.newFollowers_gained.filter((res) => String(res.name)
                .toLocaleLowerCase()
                .match(this.name.toLocaleLowerCase()));
        }
    }
    search1() {
        this.newFans = this.Fans;
        if (this.name3 === '') {
            this.newFans = this.Fans;
        }
        else {
            this.newFans = this.newFans.filter((resp) => String(resp.name)
                .toLocaleLowerCase()
                .match(this.name3.toLocaleLowerCase()));
        }
    }
    search2() {
        this.newTop = this.top;
        if (this.name2 === '') {
            this.newTop = this.top;
            this.searchUser = false;
        }
        else {
            this.searchUser = true;
            this.displayFilter = false;
            this.showonlyone = false;
            this.newTop = this.newTop.filter((resp) => String(resp.name)
                .toLocaleLowerCase()
                .match(this.name2.toLocaleLowerCase()));
        }
    }
    search3() {
        this.newSuperFans = this.superFans;
        if (this.name3 === '') {
            this.newSuperFans = this.superFans;
        }
        else {
            this.newSuperFans = this.newSuperFans.filter((resp) => String(resp.name)
                .toLocaleLowerCase()
                .match(this.name3.toLocaleLowerCase()));
        }
    }
    search4() {
        this.newSpeakers = this.speakers;
        if (this.name4 === '') {
            this.newSpeakers = this.speakers;
        }
        else {
            this.newSpeakers = this.newSpeakers.filter((resp) => String(resp.name)
                .toLocaleLowerCase()
                .match(this.name4.toLocaleLowerCase()));
        }
    }
    search5() {
        this.newModerators = this.moderators;
        if (this.name5 === '') {
            this.newModerators = this.moderators;
        }
        else {
            this.newModerators = this.newModerators.filter((resp) => String(resp.name)
                .toLocaleLowerCase()
                .match(this.name5.toLocaleLowerCase()));
        }
    }
    search6() {
        this.newSpdData = this.spdData;
        if (this.name6 === '') {
            this.newSpdData = this.spdData;
        }
        else {
            this.newSpdData = this.newSpdData.filter((resp) => String(resp.name)
                .toLocaleLowerCase()
                .match(this.name6.toLocaleLowerCase()));
        }
    }
    export2() {
        const header = [];
        const data = this.newSuperFans[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.newSuperFans,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'super_fans.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'super_fans.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        // console.log(this.newSuperFans)
    }
    export() {
        const header = [];
        const data = this.newTop[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.newTop,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'top_listeners.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'top_listeners.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        // console.log(this.newTop)
    }
    export3() {
        const header = [];
        const data = this.newFans[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.newFans,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'new_fans.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'new_fans.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
        // console.log(this.newFans)
    }
    export4() {
        const header = [];
        const data = this.newFollowers_gained[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.newFollowers_gained,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'follwers_gained.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'follwers_gained.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    export5() {
        const header = [];
        const data = this.moderators[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.moderators,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'moderators.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'moderators.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    export6() {
        const header = [];
        const data = this.speakers[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.speakers,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'speakers.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'speakers.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    export7() {
        const header = [];
        const data = this.spdData[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.spdData,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'Speakers_data.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'Speakers_data.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    exportFollowedBySpeakers() {
        const header = [];
        const data = this.followedBySpeaker[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.followedBySpeaker,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'Followed_by_speaker.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'Followed_by_speaker.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    exportOthers() {
        const header = [];
        const data = this.othersInRoom[0];
        for (const property in data) {
            if (!data.hasOwnProperty(property)) {
                continue;
            }
            header.push(property);
        }
        const csv = this.papa.unparse({
            fields: header,
            data: this.othersInRoom,
        });
        // console.log(csv)
        if (this.plt.is('capacitor') || this.plt.is('cordova')) {
            this.file
                .writeFile(this.file.dataDirectory, 'others_in_the_room.csv', csv, {
                replace: true,
            })
                .then((res) => {
                this.socialSharing.share(null, null, res.nativeURL, null);
            })
                .catch();
        }
        else {
            const blob = new Blob([csv]);
            const a = window.document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = 'others_in_the_room.csv';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    }
    // waitForElement() {
    //   // console.log('calling');
    //   if (typeof this.roomStatus !== 'undefined') {
    //     //variable exists, do what you want
    //     // console.log(this.roomStatus);
    //     if (this.roomStatus === 'ongoing') {
    //       this.refresh = setInterval(() => {
    //         // console.log('Setting');
    //         this.getAppData(this.id, this.api_token);
    //       }, 30000);
    //     } else {
    //       clearInterval(this.refresh);
    //     }
    //   } else {
    //     // console.log(this.roomStatus);
    //     setTimeout(this.waitForElement, 250);
    //   }
    // }
    // checkVariable() {
    //   // console.log('checking');
    //   if (this.roomStatus !== 'undefined') {
    //     if (this.roomStatus === 'ongoing') {
    //       this.refresh = setInterval(() => {
    //         // console.log('Setting');
    //         this.getAppData(this.id, this.api_token);
    //       }, 30000);
    //     } else {
    //       clearInterval(this.refresh);
    //     }
    //   }
    // }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.date2 = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.userId = result.ch_user_id;
            this.coin = result.coin;
            this.route.paramMap.subscribe((paramMap) => {
                this.id = paramMap.get('id');
            });
            this.loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield this.loading.present();
            this.getAppData();
            this.getDetails();
        });
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.secondFunction();
        });
    }
    ionViewWillLeave() {
        // clearTimeout(this.refresh);
        if (this.refresh) {
            // console.log('clearing');
            clearInterval(this.refresh);
            // clearTimeout(this.refresh);
        }
        clearInterval(this.refresh);
    }
    doRefresh(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(event)
            yield this.getAppData();
            // this.event = event;
            // console.log(this.event);
            if (this.event === true) {
                event.target.complete();
            }
        });
    }
    ngOnDestroy() {
        this.fullData = {};
        clearTimeout(this.refresh);
        if (this.refresh) {
            // console.log(this.refresh);
            // console.log('clearing');
            clearInterval(this.refresh);
            clearTimeout(this.refresh);
        }
        clearInterval(this.refresh);
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 2000,
            });
            toast.present();
        });
    }
    onClick() {
        if (this.upgrade === true) {
            const color = 'danger';
            this.presentToast(color, 'Please Upgrade to view more data');
            // this.alertService.danger('Please Upgrade to view more data');
            this.loadMore = false;
        }
        else {
            this.loadMore = true;
        }
    }
    getAppData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.superFans = [];
            const fields = [];
            this.app.getRoomDetails(this.id, this.api_token).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                // await loading.dismiss();
                // console.log(res);
                yield this.loading.dismiss();
                this.event = true;
                if (res.status === 'success') {
                    this.showData = true;
                    this.fullData = res.result;
                    this.channel = this.fullData.channel;
                    this.getRoomStats();
                    this.Fans = this.fullData.fans;
                    this.newFans = this.Fans;
                    this.followers_gained = this.fullData.followers_gained;
                    this.newFollowers_gained = this.followers_gained;
                    // eslint-disable-next-line eqeqeq
                    if (this.fullData.total_listeners_new_3 == 0) {
                        this.hideSkintone = true;
                    }
                    else {
                        this.hideSkintone = false;
                    }
                    this.top = this.fullData.top;
                    this.newTop = this.top;
                    if (this.newTop.length > 0) {
                        if ('twitter' in this.newTop[0]) {
                            this.showTwitter = true;
                        }
                        else {
                            this.showTwitter = false;
                        }
                        if ('instagram' in this.newTop[0]) {
                            this.showInsta = true;
                        }
                        else {
                            this.showInsta = false;
                        }
                    }
                    for (let i = 0; i < this.top.length; i++) {
                        const element = this.top[i];
                        if (element.fan === true) {
                            this.superFans.push(element);
                        }
                        this.newSuperFans = this.superFans;
                        if (this.newSuperFans.length > 0) {
                            if (this.newSuperFans[0].hasOwnProperty('twitter')) {
                                this.showSuperTwitter = true;
                            }
                            else {
                                this.showSuperTwitter = false;
                            }
                            if (this.newSuperFans[0].hasOwnProperty('instagram')) {
                                this.showSuperInsta = true;
                            }
                            else {
                                this.showSuperInsta = false;
                            }
                        }
                    }
                    // for (const iterator of this.top) {
                    // 	if (iterator.fan === true) {
                    // 		this.superFans.push(iterator)
                    // 	}
                    // }
                    this.setDisplay = true;
                    this.roomStatus = this.fullData.room_status;
                    // console.log(this.roomStatus);
                    // alert(this.roomStatus);
                    if (this.roomStatus === 'ongoing') {
                        // console.log('checking');
                        this.roomOn = true;
                        // this.secondFunction();
                        // this.refresh = setTimeout(() => {
                        //   this.getAppData();
                        //   this.getRoomStats();
                        // }, 30000);
                        this.imageLight = this.greenImg;
                    }
                    else {
                        this.roomOn = false;
                        this.imageLight = this.redImg;
                    }
                    const size = 5;
                    this.moderators = this.fullData.moderators;
                    // eslint-disable-next-line @typescript-eslint/no-shadow
                    for (const data of this.moderators) {
                        // eslint-disable-next-line radix
                        if (data.user_id === parseInt(this.userId)) {
                            if (this.hs_portal_id != null || this.hs_portal_id != undefined) {
                                this.exportToHs = true;
                            }
                            else {
                                this.exportToHs = false;
                            }
                        }
                        else {
                            this.exportToHs = false;
                        }
                    }
                    this.spdData = this.fullData.spd_data;
                    if (this.spdData && this.spdData.length > 0) {
                        this.showSpd = true;
                    }
                    else {
                        this.showSpd = false;
                    }
                    this.newSpdData = this.spdData;
                    this.newModerators = this.moderators;
                    this.speakers = this.fullData.speakers;
                    this.speakerWithMod();
                    this.getActiveMods();
                    this.getAllCoinHolder();
                    this.getAllSuperfans();
                    if (this.speakers) {
                        this.showSpeaker = true;
                    }
                    this.newSpeakers = this.speakers;
                    if (this.speakers && this.speakers.length > 0) {
                        if (this.speakers[0].hasOwnProperty('twitter')) {
                            this.speakersshowTwitter = true;
                        }
                        else {
                            this.speakersshowTwitter = false;
                        }
                        const a = 'instagram';
                        // alert(this.moderators[0].hasOwnProperty('instagram'));
                        if (this.speakers[0].hasOwnProperty(a)) {
                            this.speakershowInsta = true;
                        }
                        else {
                            this.speakershowInsta = false;
                        }
                    }
                    if (this.moderators.length > 0) {
                        if (this.moderators[0].hasOwnProperty('twitter')) {
                            this.modshowTwitter = true;
                        }
                        else {
                            this.modshowTwitter = false;
                        }
                        const a = 'instagram';
                        // alert(this.moderators[0].hasOwnProperty('instagram'));
                        if (this.moderators[0].hasOwnProperty(a)) {
                            this.modshowInsta = true;
                        }
                        else {
                            this.modshowInsta = false;
                        }
                    }
                    this.allmoderators = this.moderators.slice(0, size);
                    // alert(this.moderators.length)
                    this.modLength = this.moderators.length;
                    // this.moderators = JSON.parse(this.fullData.moderators);
                    this.percentListenerNew = parseFloat(this.fullData.percent_listeners_new);
                    this.percentListenerOld = parseFloat(this.fullData.percent_listeners_old);
                    this.dataListener.length = 0;
                    this.dataListener.push(this.percentListenerNew, this.percentListenerOld);
                    // console.log(this.data);
                    this.percentSpeakerNew = parseFloat(this.fullData.percent_speakers_new);
                    this.percentSpeakerOld = parseFloat(this.fullData.percent_speakers_old);
                    this.dataSpeaker.length = 0;
                    this.dataSpeaker.push(this.percentSpeakerNew, this.percentSpeakerOld);
                    // console.log(this.dataSpeaker);
                    this.percentModeratorNew = parseFloat(this.fullData.percent_moderators_new);
                    this.percentModeratorrOld = parseFloat(this.fullData.percent_moderators_old);
                    this.dataModerator.length = 0;
                    this.dataModerator.push(this.percentModeratorNew, this.percentModeratorrOld);
                    // console.log(JSON.parse(this.moderators));
                    // Listeners % Skintone
                    this.percentST1 = parseFloat(this.fullData.percent_listeners_1);
                    this.percentST2 = parseFloat(this.fullData.percent_listeners_2);
                    this.percentST3 = parseFloat(this.fullData.percent_listeners_3);
                    this.percentST4 = parseFloat(this.fullData.percent_listeners_4);
                    this.percentST5 = parseFloat(this.fullData.percent_listeners_5);
                    this.dataSkinTone.length = 0;
                    this.dataSkinTone.push(this.percentST1, this.percentST2, this.percentST3, this.percentST4, this.percentST5);
                    // Speakers % skintones
                    this.spST1 = parseFloat(this.fullData.percent_speakers_1);
                    this.spST2 = parseFloat(this.fullData.percent_speakers_2);
                    this.spST3 = parseFloat(this.fullData.percent_speakers_3);
                    this.spST4 = parseFloat(this.fullData.percent_speakers_4);
                    this.spST5 = parseFloat(this.fullData.percent_speakers_5);
                    this.dataSpeakerSkinTone.length = 0;
                    this.dataSpeakerSkinTone.push(this.spST1, this.spST2, this.spST3, this.spST4, this.spST5);
                    // Moderators % Skintones
                    this.modST1 = parseFloat(this.fullData.percent_moderators_1);
                    this.modST2 = parseFloat(this.fullData.percent_moderators_2);
                    this.modST3 = parseFloat(this.fullData.percent_moderators_3);
                    this.modST4 = parseFloat(this.fullData.percent_moderators_4);
                    this.modST5 = parseFloat(this.fullData.percent_moderators_5);
                    this.dataModSkinTone.length = 0;
                    this.dataModSkinTone.push(this.modST1, this.modST2, this.modST3, this.modST4, this.modST5);
                    // Listened Time Skintone
                    this.modLT1 = parseFloat(this.fullData.avg_listened_1);
                    this.modLT2 = parseFloat(this.fullData.avg_listened_2);
                    this.modLT3 = parseFloat(this.fullData.avg_listened_3);
                    this.modLT4 = parseFloat(this.fullData.avg_listened_4);
                    this.modLT5 = parseFloat(this.fullData.avg_listened_5);
                    this.dataLTSkinTone.length = 0;
                    this.dataLTSkinTone.push(this.modLT1, this.modLT2, this.modLT3, this.modLT4, this.modLT5);
                    // Listener New Skintone Data
                    this.listenerNewSK1 = parseFloat(this.fullData.percent_listeners_new_1);
                    this.listenerNewSK2 = parseFloat(this.fullData.percent_listeners_new_2);
                    this.listenerNewSK3 = parseFloat(this.fullData.percent_listeners_new_3);
                    this.listenerNewSK4 = parseFloat(this.fullData.percent_listeners_new_4);
                    this.listenerNewSK5 = parseFloat(this.fullData.percent_listeners_new_5);
                    this.listenerNewSTData.length = 0;
                    // tslint:disable-next-line: max-line-length
                    this.listenerNewSTData.push(this.listenerNewSK1, this.listenerNewSK2, this.listenerNewSK3, this.listenerNewSK4, this.listenerNewSK5);
                    // console.log(this.fullData.room_ended);
                    // console.log(this.fullData.room_start);
                    // Duration
                    if (this.fullData.room_ended) {
                        const today = this.fullData.room_ended;
                        const testing = today.replace(/-/g, '/');
                        const newDates = new Date(testing);
                        this.thisDay = new Date(newDates.toUTCString());
                    }
                    else {
                        const today = new Date(this.fullData.now);
                        this.thisDay = new Date(today.toUTCString());
                    }
                    // alert(this.thisDay);
                    const test = this.fullData.room_start;
                    const dattta = test.split('.');
                    const datta2 = dattta[0].replace(/T/g, ' ');
                    // tslint:disable-next-line: no-shadowed-variable
                    const rest = datta2.replace(/-/g, '/');
                    const newDate = new Date(rest);
                    const anotherDate = new Date(newDate.toUTCString());
                    // alert(anotherDate);
                    const ms = moment__WEBPACK_IMPORTED_MODULE_2__(this.thisDay, 'DD/MM/YYYY HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_2__(anotherDate, 'DD/MM/YYYY HH:mm:ss'));
                    const value = ms;
                    const now = moment__WEBPACK_IMPORTED_MODULE_2__();
                    const secssss = moment__WEBPACK_IMPORTED_MODULE_2__.duration(value).seconds();
                    const minsss = moment__WEBPACK_IMPORTED_MODULE_2__.duration(value).minutes();
                    const hrsss = Math.trunc(moment__WEBPACK_IMPORTED_MODULE_2__.duration(value).asHours());
                    this.durationDays = hrsss + ':' + minsss + ':' + secssss;
                    // console.log(this.durationDays);
                    // const d = moment.duration(ms);
                    // this.duration = d;
                    // console.log(this.duration);
                    // this.durationDays = moment.utc(this.duration).format('HH:mm');
                    // console.log(this.durationDays);
                    // this.durationMonth = this.duration._data.months;
                    // this.durationDays = this.duration._data.days;
                    // this.durationhrs = this.duration._data.hours;
                    // this.durationMins = this.duration._data.minutes;
                    // this.durationSecs = this.duration._data.seconds;
                    // Tracking Duration
                    if (this.fullData.room_ended) {
                        const today1 = this.fullData.room_ended;
                        // alert(today1)
                        // var str = this.fullData.room_ended;
                        // var res = str.replace(/-/g, "/");
                        const test11 = today1.replace(/-/g, '/');
                        // console.log(today.toUTCString());
                        // alert(test);
                        const newDate11 = new Date(test11);
                        this.thisDay1 = new Date(newDate11.toUTCString());
                    }
                    else {
                        const today = new Date(this.fullData.now);
                        // alert(today);
                        // console.log(today.toUTCString());
                        this.thisDay1 = new Date(today.toUTCString());
                    }
                    const test1 = this.fullData.tracking_start;
                    const ress = test1.replace(/-/g, '/');
                    const newDate1 = new Date(ress);
                    const anotherDate1 = new Date(newDate1.toUTCString());
                    const ms1 = moment__WEBPACK_IMPORTED_MODULE_2__(this.thisDay1, 'DD/MM/YYYY HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_2__(anotherDate1, 'DD/MM/YYYY HH:mm:ss'));
                    const d1 = moment__WEBPACK_IMPORTED_MODULE_2__.duration(ms1);
                    const value1 = ms1;
                    const secssss1 = moment__WEBPACK_IMPORTED_MODULE_2__.duration(value1).seconds();
                    const minsss1 = moment__WEBPACK_IMPORTED_MODULE_2__.duration(value1).minutes();
                    const hrsss1 = Math.trunc(moment__WEBPACK_IMPORTED_MODULE_2__.duration(value1).asHours());
                    this.durationDays1 = hrsss1 + ':' + minsss1 + ':' + secssss1;
                    // console.log(this.durationDays1);
                    // this.duration1 = d1;
                    // alert(s);
                    // console.log(this.duration1);
                    // this.durationMonth1 = this.duration1._data.months;
                    // this.durationDays1 = this.duration1._data.days;
                    // this.durationhrs1 = this.duration1._data.hours;
                    // this.durationMins1 = this.duration1._data.minutes;
                    // this.durationSecs1 = this.duration1._data.seconds;
                    // outputs: "48:39:30"
                    // Avg Listened Conversion
                    const num = this.fullData.avg_listened;
                    const secs = num * 60;
                    const hr = Math.floor(num / 60);
                    const minutes = Math.round(num % 60);
                    const rseconds = Math.floor(secs % 60);
                    // const rminutes = Math.round(minutes);
                    this.avgListend = `${hr}:${minutes}:00`;
                    // alert(this.fullData.total_listened);
                    const num1 = this.fullData.total_listened;
                    // const hours1 = (num1 / 60);
                    // const rhours1 = Math.floor(hours1);
                    // const days = Math.floor(rhours1 / 24);
                    // const minutes1 = (hours1 - rhours1) * 60;
                    // const rminutes1 = Math.round(minutes1);
                    // this.avgListend = days + ' days, ' + rhours1 + ' hr(s), ' + rminutes1 + ' min(s).';
                    const h = Math.floor(num1 / 60);
                    const days = Math.floor(h / 24);
                    const m = Math.round(num1 % 60);
                    const s = ((num1 - days * 24 * 60 - h * 60 - m) * 60).toFixed(2);
                    this.avgListend1 = `${h}:${m}:00`;
                    // console.log(this.avgListend1);
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
                else if (res.status === 'error') {
                    this.presentToast('danger', res.message);
                    this.router.navigateByUrl('/tabs/chtools/track/');
                }
                else {
                    // setTimeout(() => {
                    //   this.getAppData();
                    // }, 30000);
                    this.setDisplay = false;
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                }
            }), (err) => {
                console.log(err);
                this.secondFunction();
                // setTimeout(() => {
                //   this.getAppData();
                // }, 30000);
            });
        });
    }
    secondFunction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(this.roomOn);
            if (this.roomOn === true) {
                this.refresh = setInterval(() => {
                    // console.log('calling now');
                    this.getAppData();
                }, 30000);
            }
            else {
                setTimeout(() => {
                    // console.log('calling in 1 minute');
                    this.secondFunction();
                }, 100000);
            }
        });
    }
    getDetails() {
        this.auth.getDetails(this.api_token).subscribe((res) => {
            if (res.status === 'success') {
                this.result = res.result;
                if (this.result.subscription_expiry < this.date2) {
                    this.upgrade = true;
                }
                else {
                    this.upgrade = false;
                }
            }
            else {
                // this.alertService.danger(res.message);
                const color = 'danger';
                this.presentToast(color, res.message);
            }
            // console.log(res);
            // console.log(this.data);
        }, (err) => {
            // this.alertService.danger(err.message);
            const color = 'danger';
            this.presentToast(color, err.message);
        });
    }
    exportToHS() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            const channel = this.fullData.channel;
            this.app.exporttohubsport(this.api_token, channel).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    this.presentToast('success', res.message);
                }
                else if (res.status === 'upgrade') {
                    this.presentToast('danger', res.message);
                    this.router.navigateByUrl('/tabs/upgrade');
                }
                else if (res.status === 'validate') {
                    this.presentToast('danger', res.message);
                    this.router.navigateByUrl('/app/auth/validate/ ' + this.api_token);
                }
                else {
                    this.presentToast('danger', res.message);
                }
            }), (err) => {
                this.presentToast('danger', err.message);
            });
        });
    }
    getRoomStats() {
        this.app.roomStats(this.api_token, this.channel).subscribe((resp) => {
            const arr = resp.result;
            this.listeners_data2.length = 0;
            for (const x of arr) {
                const listenersData2 = parseFloat(x.listeners);
                this.listeners_data2.push(listenersData2);
            }
            // console.log(this.listeners_data2);
            this.peak = 0;
            for (let i = 0; i <= this.peak; i++) {
                if (this.listeners_data2[i] > this.peak) {
                    this.peak = this.listeners_data2[i];
                }
            }
            // console.log(this.peak);
            //
            const data = arr.slice(Math.max(arr.length - 10, 0));
            this.date_entered.length = 0;
            this.listeners_data.length = 0;
            for (const x of data) {
                const datepipe = new _angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe('en-US');
                const ress = x.date_entered.replace(/-/g, '/');
                const newDate1 = new Date(ress);
                const anotherDate1 = new Date(newDate1.toUTCString());
                // const ms1 = moment(this.thisDay1, 'DD/MM/YYYY HH:mm:ss')
                const formattedDate = datepipe.transform(anotherDate1, 'h:mm a');
                // const formattedDate = datepipe.transform(x.date_entered, 'h:mm a');
                // console.log(formattedDate);
                const listenersData = parseFloat(x.listeners);
                this.listeners_data.push(listenersData);
                this.date_entered.push(formattedDate);
            }
            // console.log(this.date_entered);
            this.showChart = true;
            // this.date_entered = data.date_entered;
            // this.listeners_data = data.listeners;
        });
    }
    convert(value) {
        const data = moment__WEBPACK_IMPORTED_MODULE_2__.duration(value, 'minutes');
        // console.log(data._data);
        return (String(data._data.hours).padStart(2, '0') +
            ':' +
            String(data._data.minutes).padStart(2, '0'));
    }
    split(name) {
        if (name && (name !== null || name !== undefined)) {
            const splitted = name.split(' ');
            const first = splitted[0];
            return first;
        }
        else {
            return '___';
        }
    }
    // channel_emoji: '🇰🇼';
    // fan: false;
    // first_name: 'Zeyad';
    // instagram: 'cpt.zeyad';
    // is_followed_by_speaker: 'true';
    // is_invited_as_speaker: 'false';
    // is_moderator: 'true';
    // is_new: 'false';
    // is_speaker: 'true';
    // minutes: 171;
    // name: 'Zeyad Alashram';
    // no_rooms: '0';
    // photo_url: 'https://d14u0p1qkech25.cloudfront.net/678008011_a2406c6b-2b14-4d54-92ed-b20b0b630c7b_thumbnail_250x250';
    // twitter: null;
    // user_id: '678008011';
    // username: 'pilotx';
    getActiveMods() {
        if (this.roomStatus === 'ongoing') {
            this.moderators = [];
            for (let i = 0; i < this.top.length; i++) {
                const element = this.top[i];
                if (element.is_moderator === 'true') {
                    this.moderators.push(element);
                }
            }
            this.allmoderators = this.moderators.slice(0, 5);
            // alert(this.moderators.length)
            this.modLength = this.moderators.length;
            // console.log('active mods', this.moderators);
        }
    }
    speakerWithMod() {
        this.modSpeaker = [];
        this.followedBySpeaker = [];
        this.othersInRoom = [];
        for (let i = 0; i < this.top.length; i++) {
            const element = this.top[i];
            if (element.is_speaker === 'true') {
                this.modSpeaker.push(element);
            }
            else if (element.is_followed_by_speaker === 'true') {
                this.followedBySpeaker.push(element);
            }
            else {
                this.othersInRoom.push(element);
            }
        }
        // console.log('all users', this.top);
        // console.log('speaker', this.modSpeaker);
        // console.log('followed by speaker', this.followedBySpeaker);
        // console.log('Others in room', this.othersInRoom);
    }
    getAllCoinHolder() {
        // coin_balance
        this.coinHoders = [];
        for (let i = 0; i < this.top.length; i++) {
            const element = this.newTop[i];
            let total = 0;
            // total += element.coin_balance;
            // this.totalCoins = total;
            if (parseFloat(element.coin_balance) > 0) {
                this.coinHoders.push(element);
            }
            //
            for (const key in this.coinHoders) {
                if (Object.prototype.hasOwnProperty.call(this.coinHoders, key)) {
                    const test = this.coinHoders[key];
                    total += test.coin_balance;
                    this.totalCoins = total;
                }
            }
        }
        // console.log(this.totalCoins);
        // console.log(this.coinHoders);
    }
    getAllSuperfans() {
        // fan: false
        this.superfansArray = [];
        for (let i = 0; i < this.top.length; i++) {
            const element = this.top[i];
            if (element.fan === true) {
                this.superfansArray.push(element);
            }
        }
        // console.log(this.superfansArray);
        // console.log(this.superfansArray.length);
    }
    showOnly(ev) {
        this.show = '';
        this.show = ev;
        this.searchUser = false;
        this.displayFilter = false;
        this.showonlyone = false;
        this.name2 = '';
        // this.displayFilter = true;
        if (this.show === 'coin') {
            this.displayFilter = true;
            this.showonly = 'coin';
        }
        else if (this.show === 'fan') {
            this.displayFilter = true;
            this.showonly = 'fan';
        }
        else {
            this.clearFilter();
        }
    }
    checkIfMod(username) {
        for (let i = 0; i < this.moderators.length; i++) {
            const element = this.moderators[i];
            if (String(element.username) === username) {
                // console.log(username);
                return true;
            }
            else {
                return false;
            }
        }
        // for (const i of this.moderators) {
        //   if (i.username === username) {
        //     return true;
        //   } else {
        //     return false;
        //   }
        // }
    }
    selectFilter(ev) {
        this.showDisplay = '';
        // console.log(ev);
        this.showDisplay = ev;
        if (this.showDisplay === 'coin') {
            this.showcoin = true;
        }
        else {
            this.showcoin = false;
        }
    }
    orderBy(ev) {
        // console.log(ev);
        this.sortKey = '';
        this.sortKey = String(ev);
    }
    clearFilter() {
        this.sortKey = '';
        // this.showonlyone = false;
        this.showDisplay = '';
        this.show = '';
        this.showonly = '';
        this.searchUser = false;
        this.showAllData = false;
        this.displayFilter = false;
        this.showonlyone = false;
        this.name2 = '';
        //  this.searchUser = false;
        // console.log(this.showonlyone);
    }
    pickRandom() {
        if (this.othersInRoom.length === 0) {
            this.showonlyone = false;
            this.searchUser = false;
            this.displayFilter = false;
            this.presentToast('danger', 'No audience in the room');
            this.randomElement = null;
        }
        else {
            this.showonlyone = true;
            this.searchUser = false;
            this.displayFilter = false;
            this.randomElement =
                this.othersInRoom[Math.floor(Math.random() * this.othersInRoom.length)];
        }
        // console.log(this.randomElement);
    }
    gotoUser(userid) {
        // console.log(userid);
        this.router.navigateByUrl('/tabs/chtools/profile/' + userid);
    }
    share() {
        const url = 'https://clubhouse.socialconnector.io/r/';
        window.open(url + this.channel, '_blank');
    }
};
TrackDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_5__.File },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__.SocialSharing },
    { type: ngx_papaparse__WEBPACK_IMPORTED_MODULE_12__.Papa },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform }
];
TrackDetailsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-track-details',
        template: _raw_loader_track_details_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_track_details_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TrackDetailsComponent);



/***/ }),

/***/ 71245:
/*!*********************************************************************************!*\
  !*** ./src/app/chtools/club-analytics/club-details/club-details.component.scss ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-card.test {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsdWItZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0FBQ0YiLCJmaWxlIjoiY2x1Yi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQudGVzdHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 85001:
/*!*******************************************************************************!*\
  !*** ./src/app/chtools/club-analytics/verify-club/verify-club.component.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktY2x1Yi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 64853:
/*!*********************************************!*\
  !*** ./src/app/chtools/home/home.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".header {\n  width: 100%;\n  height: 20vh;\n  margin: 0 auto;\n  padding: 10px;\n  background: url('logo.PNG') 0px 0%/100% 100% no-repeat;\n  color: #fff !important;\n}\n\nion-item,\nion-list {\n  --background: var(--ion-background-color) !important;\n  --border-radius: 10px 10px 0 0 !important;\n  color: var(--ion-color-primary) !important;\n}\n\n.selected {\n  border-left: 3px solid var(--ion-color-primary);\n  color: var(--ion-color-dark) !important;\n}\n\n.selected ion-icon {\n  color: var(--ion-color-dark) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUVBLHNEQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTs7RUFFRSxvREFBQTtFQUNBLHlDQUFBO0VBQ0EsMENBQUE7QUFBRjs7QUFHQTtFQUVFLCtDQUFBO0VBQ0EsdUNBQUE7QUFERjs7QUFJQTtFQUNFLHVDQUFBO0FBREYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjB2aDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDEwcHg7XG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzLy9sb2dvLlBOR1wiKSAwcHggMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0sXG5pb24tbGlzdCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpICFpbXBvcnRhbnQ7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMCAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3RlZCB7XG4gIC8vIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xuICAvLyBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbi5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbn1cbiJdfQ== */");

/***/ }),

/***/ 91246:
/*!**************************************************************************!*\
  !*** ./src/app/chtools/track/track-details/track-details.component.scss ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".image {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.creators {\n  margin-right: 5px !important;\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50%;\n}\n\n.clear {\n  clear: both;\n}\n\nion-item {\n  --background: var(--ion-color-light);\n}\n\nion-item {\n  --border-radius: 0 !important;\n  margin-bottom: 5px;\n}\n\np {\n  font-size: 0.8em !important;\n}\n\n.userlist {\n  margin-left: auto;\n  margin-right: auto;\n  text-align: center !important;\n}\n\n.userImg {\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50%;\n}\n\n.mr-1 {\n  margin-right: 0.25rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.new-user {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background: #fff;\n  bottom: 0;\n  border-radius: 50%;\n  box-shadow: 0 2px 1px 0 #b8b8b8;\n}\n\n.superfan {\n  width: 1.5rem;\n  height: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background: #fff;\n  bottom: 0;\n  right: 0;\n  border-radius: 50%;\n  box-shadow: 0 2px 1px 0 #b8b8b8;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.relative {\n  position: relative !important;\n}\n\n.block {\n  display: block !important;\n}\n\n.flex {\n  display: flex !important;\n}\n\n.clamp {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  -webkit-box-orient: vertical;\n}\n\n.badge {\n  font-size: 0.6em !important;\n  color: #d6d2d2 !important;\n}\n\n.blink_me {\n  -webkit-animation-name: blinker;\n  -webkit-animation-duration: 2s;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n  -moz-animation-name: blinker;\n  -moz-animation-duration: 2s;\n  -moz-animation-timing-function: linear;\n  -moz-animation-iteration-count: infinite;\n  animation-name: blinker;\n  animation-duration: 2s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n}\n\n@keyframes blinker {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWNrLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUNBO0VBQ0UsV0FBQTtBQUVGOztBQUNBO0VBQ0Usb0NBQUE7QUFFRjs7QUFDQTtFQUdFLDZCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFJQTtFQUNFLDJCQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsNkJBQUE7QUFGRjs7QUFJQTtFQUVJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQUZKOztBQVVBO0VBQ0kscUJBQUE7QUFQSjs7QUFTQTtFQUNJLG9CQUFBO0FBTko7O0FBUUE7RUFDSSxzQkFBQTtBQUxKOztBQU9BO0VBQ0ksZ0JBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO0VBR0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBRUEsK0JBQUE7QUFKSjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBR0EsYUFBQTtFQUdBLG1CQUFBO0VBR0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUVBLCtCQUFBO0FBSko7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBSEo7O0FBS0E7RUFHSSx1QkFBQTtBQUZKOztBQUlBO0VBQ0ksNkJBQUE7QUFESjs7QUFHQTtFQUNFLHlCQUFBO0FBQUY7O0FBRUE7RUFHSSx3QkFBQTtBQUNKOztBQUdBO0VBQ0MsZ0JBQUE7RUFDQyx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFBdUIsNEJBQUE7RUFDdkIsNEJBQUE7QUFDRjs7QUFDQTtFQUNFLDJCQUFBO0VBQ0MseUJBQUE7QUFFSDs7QUFFQTtFQUNJLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0VBRUEsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNDQUFBO0VBQ0Esd0NBQUE7RUFFQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQ0FBQTtBQURKOztBQWdCQTtFQUNJO0lBQUssVUFBQTtFQVVQO0VBVEU7SUFBTSxVQUFBO0VBWVI7RUFYRTtJQUFPLFVBQUE7RUFjVDtBQUNGIiwiZmlsZSI6InRyYWNrLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2Uge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5jcmVhdG9ycyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiAjZjFlZWUzO1xyXG4gIC8vIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tYm9yZGVyLWNvbG9yKTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgLy8gLS1ib3JkZXItd2lkdGg6IDFweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXNlcmxpc3R7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNlZWUgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4udXNlckltZ3tcclxuICAvLyBtYXJnaW46IDVweCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi8vIHAge1xyXG4vLyAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwZW0gIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbi1ibG9jay1lbmQ6IDBlbSAhaW1wb3J0YW50O1xyXG5cclxuLy8gfVxyXG4ubXItMSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC4yNXJlbTtcclxufVxyXG4ubXItMiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59XHJcbi5tYi0xIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxufVxyXG4uZm9udC1zZW1pYm9sZCB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubmV3LXVzZXJ7XHJcbiAgICB3aWR0aDogMS41cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjVyZW07XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogI2I4YjhiOCAwIDJweCAxcHggMDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDFweCAwICNiOGI4Yjg7XHJcbn1cclxuXHJcbi5zdXBlcmZhbntcclxuICAgIHdpZHRoOiAxLjVyZW07XHJcbiAgICBoZWlnaHQ6IDEuNXJlbTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xyXG4gICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICNiOGI4YjggMCAycHggMXB4IDA7XHJcbiAgICBib3gtc2hhZG93OiAwIDJweCAxcHggMCAjYjhiOGI4O1xyXG59XHJcbi50ZXh0LXhzIHtcclxuICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbn1cclxuLmp1c3RpZnktY2VudGVyIHtcclxuICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcclxuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5yZWxhdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcclxufVxyXG4uYmxvY2t7XHJcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3ggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5jbGFtcCB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxufVxyXG4uYmFkZ2V7XHJcbiAgZm9udC1zaXplOiAuNmVtICFpbXBvcnRhbnQ7XHJcbiAgIGNvbG9yOiByZ2IoMjE0LCAyMTAsIDIxMCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5ibGlua19tZSB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBibGlua2VyO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG5cclxuICAgIC1tb3otYW5pbWF0aW9uLW5hbWU6IGJsaW5rZXI7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcclxuICAgIC1tb3otYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcblxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rZXI7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xyXG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBibGlua2VyIHtcclxuICAgIDAlIHsgb3BhY2l0eTogMS4wOyB9XHJcbiAgICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cclxuICAgIDEwMCUgeyBvcGFjaXR5OiAxLjA7IH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgMCUgeyBvcGFjaXR5OiAxLjA7IH1cclxuICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxyXG4gICAgMTAwJSB7IG9wYWNpdHk6IDEuMDsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xyXG4gICAgMCUgeyBvcGFjaXR5OiAxLjA7IH1cclxuICAgIDUwJSB7IG9wYWNpdHk6IDAuMDsgfVxyXG4gICAgMTAwJSB7IG9wYWNpdHk6IDEuMDsgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 39974:
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/club-analytics/club-details/club-details.component.html ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar >\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/chtools/club-analytics\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{results.name}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-card>\n      <ion-card-content>\n        <form name=\"form\" #historyForm=\"ngForm\" (ngSubmit)=\"historyForm.valid && onSubmit()\">\n          <ion-item>\n            <ion-label position=\"floating\">MM/DD/YYYY</ion-label>\n            <ion-datetime name=\"date\" [(ngModel)]=\"model.date\" #email=\"ngModel\" displayFormat=\"MM/DD/YYYY\"\n              min=\"2016-01-01\" max=\"2022-12-31\" required>\n            </ion-datetime>\n          </ion-item>\n          <ion-button type=\"submit\" [disabled]=\"!historyForm.valid\" expand=\"full\" color=\"primary\">Get History</ion-button>\n        </form>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <br>\n  <ion-list>\n    <ion-item *ngIf=\"results?.length ===0\">\n      <ion-label>No data available</ion-label>\n    </ion-item>\n  </ion-list>\n  <div *ngIf=\"results?.length !== 0\">\n    <ion-card>\n      <ion-img [src]=\"results.photo_url\"></ion-img>\n      <ion-card-content class=\"ion-text-center\">\n        <ion-text class=\"ion-text-justify\">\n          {{ results.description }}\n        </ion-text>\n        <ion-list class=\"ion-text-center\">\n          <ion-item class=\"ion-text-center\">\n            <ion-label>\n              <p>Total Rooms Tracked</p>\n              <h2>{{ results.total_rooms || 0  }}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"ion-text-center\">\n            <ion-label>\n              <p>Total Listeners</p>\n              <h2>{{ results.total_listeners || 0 }}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"ion-text-center\">\n            <ion-label>\n              <p>Total Listened</p>\n              <h2>{{transformMinute(results.total_listened) || 0}}</h2>\n              <!-- <h2>{{ results.total_listened || 0 }}</h2> -->\n            </ion-label>\n          </ion-item>\n          <ion-item class=\"ion-text-center\">\n            <ion-label>\n              <p>Average Listened Time</p>\n              <h2>{{ results.avg || 0 }} mins</h2>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n  <br>\n  <div class=\"ion-padding\">\n    <ion-item-divider color=\"secondary ion-padding\" *ngIf=\"results?.length !== 0\">\n      <ion-label>\n        <h2>Top Rooms</h2>\n      </ion-label>\n    </ion-item-divider>\n  </div>\n\n   <ion-item *ngFor=\"let item of results.rooms\">\n      <ion-card class=\"test\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>{{ item.topic }}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content class=\"ion-text-center\">\n          <ion-item class=\"ion-text-center\">\n            <ion-label>\n              <h2>{{ item.end_total_listeners }} listeners</h2>\n              <p>{{ item.date_started }}</p>\n            </ion-label>\n          </ion-item>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"analyze(item.channel)\">View Stats</ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ion-item>\n</ion-content>\n");

/***/ }),

/***/ 95024:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/club-analytics/verify-club/verify-club.component.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"ios\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/chtools/club-analytics\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> Verify Club </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <!-- <ion-label> -->\n            <h3>We need to verify you have permissions to manage this club.</h3>\n          <!-- </ion-label> -->\n        </ion-item>\n        <ion-item>\n          <!-- <ion-label> -->\n            <h3>Open your Clubhouse app.</h3>\n          <!-- </ion-label> -->\n        </ion-item>\n        <ion-item>\n          <!-- <ion-label> -->\n            <h3>Enter the code below this line and paste it anywhere in your Club Description:</h3>\n          <!-- </ion-label> -->\n        </ion-item>\n        <ion-item>\n          <ion-label>\n            <h1>{{ code }}</h1>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <!-- <ion-label> -->\n            <h3>After saving your club description, click the \"I DID IT\" button below:* After completing the verification process,\n              you can\n              remove the code from your club description.</h3>\n          <!-- </ion-label> -->\n        </ion-item>\n        \t<ion-button expand=\"full\" color=\"primary\" (click)=\"verifyClub()\">\n        \t  I DID IT</ion-button>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ 13019:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/home/home.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-split-pane  contentId=\"main-content\">\n\n  <ion-menu contentId=\"main-content\" menuId=\"rayo\" type=\"overlay\">\n    <ion-content>\n\n      <div class=\"header ion-text-center\">\n        <!-- <h3>Name Mane</h3>\n        <p>email@email.com</p> -->\n      </div>\n\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let pages of Pages; let i = index\">\n          <ion-item (click)=\"activeIndex = i\" routerDirection=\"root\" [routerLink]=\"[pages.url]\" lines=\"full\"\n            detail=\"false\" [class.selected]=\"activeIndex === i\">\n            <ion-icon slot=\"start\" [ios]=\"pages.icon + '-outline'\" [md]=\"pages.icon + '-sharp'\"></ion-icon>\n            <ion-label>{{ pages.title }}</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n\n    </ion-content>\n    <!-- <ion-footer>\n      <ion-item  lines=\"full\" detail=\"false\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" >\n        <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n        <ion-label>Home</ion-label>\n      </ion-item>\n    </ion-footer> -->\n  </ion-menu>\n\n<ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n</ion-split-pane>\n\n\n\n\n\n\n");

/***/ }),

/***/ 70903:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chtools/track/track-details/track-details.component.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/chtools/track\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title [routerLink]=\"['/tabs/chtools/track']\" routerLinkActive=\"router-link-active\">\n      Room Details\n    </ion-title> -->\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\" [routerLink]=\"['/tabs']\" routerLinkActive=\"router-link-active\" routerDirection=\"back\">\n        <ion-icon name=\"close\" slot=\"icon-only\" style=\"width: 36px !important; height: 36px !important\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"!setDisplay\"></ion-content>\n<ion-content *ngIf=\"setDisplay\">\n  <!-- <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content pullingIcon=\"chevron-down-circle-outline\" pullingText=\"Pull to refresh\"\n      refreshingSpinner=\"circles\" refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher> -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card>\n    <ion-card-header class=\"ion-text-center\">\n      <ion-card-title>{{ fullData.topic }}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content class=\"ion-text-center\">\n      <div class=\"image\">\n        <span *ngFor=\"let moderator of allmoderators\">\n          <img [src]=\"moderator.photo_url || 'http://placehold.it/50x50'\" class=\"creators\" alt=\"\" srcset=\"\" />\n        </span>\n        <!-- <span\n          style=\"\n            float: right;\n            color: #fff !important;\n            background-color: rgb(122, 121, 121);\n            border-radius: 50%;\n            margin-top: 12px;\n            padding: 5px;\n          \"\n          *ngIf=\"modLength > 5\"\n          >+{{ modLength - 5 }}\n        </span> -->\n        <div class=\"clear\"></div>\n      </div>\n      <p class=\"ml-2 mr-2\">\n        w/\n        <span *ngFor=\"let moderator of allmoderators\">\n          {{ moderator.name }},</span>\n        <span *ngIf=\"modLength > 5\">\n          and\n          <span style=\"\n              color: #fff !important;\n              background-color: rgb(122, 121, 121);\n              border-radius: 50%;\n              padding: 3px 5px 3px 5px;\n            \">{{ modLength - 5 }}</span>\n          &nbsp;others\n        </span>\n      </p>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-avatar slot=\"end\" *ngIf=\"imageLight\">\n                <img [src]=\"imageLight\" />\n              </ion-avatar>\n              <ion-label>\n                <h2>Room Status: {{ fullData.room_status }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Unique Listeners</p>\n                <h2>{{ fullData.total_listeners | number }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Max Speakers</p>\n                <h2>{{ fullData.total_speakers | number }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Moderators</p>\n                <h2>{{ fullData.total_moderators }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Duration</p>\n                <h2>\n                  {{ durationDays }}\n                </h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\" *ngIf=\"fullData.total_active\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Active Listeners</p>\n                <h2>{{ fullData.total_active | number }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"6\" *ngIf=\"!roomOn\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Peak Listeners</p>\n                <h2>{{ peak }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Total Listened</p>\n                <h2>{{ avgListend1 }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Avg Listened</p>\n                <h2>{{ avgListend }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Tracking Time</p>\n                <h2>\n                  {{ durationDays1 }}\n                </h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\" *ngIf=\"fullData.avg_speaker\">\n              <ion-label>\n                <p>Avg Speaker</p>\n                <h2>{{ fullData.avg_speaker }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\" *ngIf=\"fullData.total_speak_time\">\n              <ion-label>\n                <p>Total Speak Time</p>\n                <h2>{{ fullData.total_speak_time }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\" *ngIf=\"fullData.total_speak_time\">\n            <ion-item class=\"ion-text-center ion-border-radius\" lines=\"none\">\n              <ion-label>\n                <p>Total Speak Time</p>\n                <h2>{{ fullData.total_speak_time }}</h2>\n              </ion-label>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf=\"!roomOn\">\n          <ion-col size=\"12\">\n            <ion-button expand=\"full\" color=\"primary\" (click)=\"share()\">Share</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col>\n            <div *ngIf=\"showChart\">\n              <canvas baseChart height=\"300\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\n                [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\n                [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n\n      <div *ngIf=\"exportToHs\">\n        <ion-button (click)=\"exportToHS()\" expand=\"block\" color=\"primary\">\n          Export To HubSpot\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <div class=\"ion-text-center ion-margin-top ion-margin-bottom\" *ngIf=\"!loadMore\">\n    <ion-button fill=\"clear\" (click)=\"onClick()\">\n      <ion-icon slot=\"start\" name=\"reload-outline\"></ion-icon> Load more\n    </ion-button>\n  </div>\n\n  <div *ngIf=\"loadMore\">\n    <div *ngIf=\"roomOn\">\n      <ion-grid fixed>\n        <ion-row>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">\n                Sort by\n              </ion-label>\n              <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" placeholder=\"Sort\"\n                [ngModel]=\"sortKey\" (ngModelChange)=\"orderBy($event)\">\n                <!-- <ion-select-option value=\"\">None</ion-select-option> -->\n                <ion-select-option value=\"minutes\">Minutes listened</ion-select-option>\n                <ion-select-option value=\"name\">Name</ion-select-option>\n                <!-- <ion-select-option value=\"desc\">Z - A</ion-select-option> -->\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-item>\n              <ion-label position=\"floating\">\n                Add a Badge\n              </ion-label>\n              <ion-select [interfaceOptions]=\"customPopoverOptions\" interface=\"action-sheet\" placeholder=\"Badge\" ngModel\n                (ngModelChange)=\"selectFilter($event)\">\n                <ion-select-option value=\"newuser\">New Users</ion-select-option>\n                <ion-select-option value=\"superfan\">Super fans</ion-select-option>\n                <ion-select-option *ngIf=\"coin !== null\" value=\"coin\">Show coin balance</ion-select-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class=\"ion-text-center\" *ngIf=\"coin !== null\">\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label position=\"floating\">\n                Sort by\n              </ion-label>\n              <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\"\n                placeholder=\"Display filter\" [ngModel]=\"show\" (ngModelChange)=\"showOnly($event)\">\n                <!-- <ion-select-option value=\"\">None</ion-select-option> -->\n                <ion-select-option value=\"coin\">Coin holders</ion-select-option>\n                <ion-select-option value=\"fan\">Super fans</ion-select-option>\n                <!-- <ion-select-option value=\"desc\">Z - A</ion-select-option> -->\n              </ion-select>\n            </ion-item>\n          </ion-col>\n\n          <ion-col size=\"6\">\n            <ion-item lines=\"none\">\n              <ion-label position=\"floating\">\n                Coin Balance\n              </ion-label>\n              <ion-input type=\"number\" readonly [value]='totalCoins || 0'></ion-input>\n              <!-- <h3> {{ totalCoins || 0 }} </h3> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row class=\"ion-text-center\">\n          <ion-col size=\"4\">\n            <a style=\"font-size: .8em !important;\" (click)=\"pickRandom()\">\n              <ion-icon name=\"shuffle\"></ion-icon> Pick Random\n            </a>\n          </ion-col>\n          <ion-col size=\"4\">\n            <a (click)=\"sortWoKey()\" style=\"font-size: .8em !important;\">\n              <ion-icon name=\"swap-vertical\"></ion-icon> Order\n            </a>\n          </ion-col>\n          <ion-col size=\"4\">\n            <a style=\"font-size: .8em !important;\" (click)=\"clearFilter()\">\n              <ion-icon name=\"close\"></ion-icon> Clear Filter\n            </a>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item>\n              <ion-label position=\"floating\">Search</ion-label>\n              <ion-input type=\"text\" name=\"name2\" [(ngModel)]=\"name2\" (ngModelChange)=\"search2()\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <div *ngIf=\"searchUser\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle class=\"ion-margin-bottom\">\n              Search Result <span class=\"badge\"> ({{ newTop.length}}) </span>\n            </ion-card-subtitle>\n          </ion-card-header>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"3\" *ngFor=\"let  item of newTop | orderBy: sortKey:rrverse\">\n                <div class=\"userlist\" [ngClass]=\"{blink_me: item.is_invited_as_speaker === 'true'}\"\n                  (click)=\"gotoUser(item.user_id)\">\n                  <div class=\"flex justify-center\">\n                    <div class=\"relative\">\n                      <span class=\"overflow-hidden block  \">\n                        <img [src]=\"item.photo_url || 'https://via.placeholder.com/500'\" alt=\"photo\" class=\"userImg\">\n                      </span>\n                      <span *ngIf=\"showDisplay==='superfan'\">\n                        <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.fan === true\">⭐</span>\n                      </span>\n                      <span *ngIf=\"showDisplay==='newuser'\">\n                        <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.is_new === 'true'\">🎉️</span>\n                      </span>\n                    </div>\n                  </div>\n                  <p class=\"ion-text-nowrap clamp\">\n                    <span style=\"font-weight: 600 !important; font-size: 1em !important;\"> {{ item.first_name }} </span>\n                  </p>\n                  <div *ngIf=\"showcoin\">\n                    <p> {{ item.coin_balance }} ${{coin}}</p>\n                  </div>\n                  <div *ngIf=\"!showcoin\">\n                    <p> {{ convert(item.minutes) }} </p>\n                  </div>\n\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card>\n      </div>\n\n      <div *ngIf=\"!searchUser\">\n        <div *ngIf=\"displayFilter\">\n          <div *ngIf=\"show === 'coin'\">\n            <ion-card>\n              <ion-card-header>\n                <ion-card-subtitle class=\"ion-margin-bottom\">\n                  Coin holders <span class=\"badge\"> ({{ coinHoders.length}}) </span>\n                </ion-card-subtitle>\n              </ion-card-header>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"3\" *ngFor=\"let  item of coinHoders | orderBy: sortKey:rrverse\">\n                    <div class=\"userlist\" [ngClass]=\"{blink_me: item.is_invited_as_speaker === 'true'}\"\n                      (click)=\"gotoUser(item.user_id)\">\n                      <div class=\"flex justify-center\">\n                        <div class=\"relative\">\n                          <span class=\"overflow-hidden block  \">\n                            <img [src]=\"item.photo_url || 'https://via.placeholder.com/500'\" alt=\"photo_url\"\n                              class=\"userImg\">\n                          </span>\n                          <span *ngIf=\"showDisplay==='superfan'\">\n                            <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.fan === true\">⭐</span>\n                          </span>\n                          <span *ngIf=\"showDisplay==='newuser'\">\n                            <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.is_new === 'true'\">🎉️</span>\n                          </span>\n                        </div>\n                      </div>\n                      <p class=\"ion-text-nowrap clamp\">\n                        <span style=\"font-weight: 600 !important; font-size: 1em !important;\"> {{ item.first_name }}\n                        </span>\n                      </p>\n                      <div *ngIf=\"showcoin\">\n                        <p> {{ item.coin_balance }} ${{coin}}</p>\n                      </div>\n                      <div *ngIf=\"!showcoin\">\n                        <p> {{ convert(item.minutes) }} </p>\n                      </div>\n\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card>\n          </div>\n\n          <div *ngIf=\"show === 'fan'\">\n            <ion-card>\n              <ion-card-header>\n                <ion-card-subtitle class=\"ion-margin-bottom\">\n                  Super fans <span class=\"badge\"> ({{ superfansArray.length}}) </span>\n                </ion-card-subtitle>\n              </ion-card-header>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"3\" *ngFor=\"let  item of superfansArray | orderBy: sortKey:rrverse\">\n                    <div class=\"userlist\" [ngClass]=\"{blink_me: item.is_invited_as_speaker === 'true'}\"\n                      (click)=\"gotoUser(item.user_id)\">\n                      <div class=\"flex justify-center\">\n                        <div class=\"relative\">\n                          <span class=\"overflow-hidden block  \">\n                            <img [src]=\"item.photo_url || 'https://via.placeholder.com/500'\" alt=\"photo_url\"\n                              class=\"userImg\">\n                          </span>\n                          <span *ngIf=\"showDisplay==='superfan'\">\n                            <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.fan === true\">⭐</span>\n                          </span>\n                          <span *ngIf=\"showDisplay==='newuser'\">\n                            <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.is_new === 'true'\">🎉️</span>\n                          </span>\n                        </div>\n                      </div>\n                      <p class=\"ion-text-nowrap clamp\">\n                        <span style=\"font-weight: 600 !important; font-size: 1em !important;\"> {{ item.first_name }}\n                        </span>\n                      </p>\n                      <div *ngIf=\"showcoin\">\n                        <p> {{ item.coin_balance }} ${{coin}}</p>\n                      </div>\n                      <div *ngIf=\"!showcoin\">\n                        <p> {{ convert(item.minutes) }} </p>\n                      </div>\n\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card>\n          </div>\n        </div>\n        <div *ngIf=\"!displayFilter\">\n          <div *ngIf=\"showonlyone\">\n            <ion-card>\n              <ion-grid fixed>\n                <ion-row>\n                  <ion-col size=\"3\" (click)=\"gotoUser(randomElement?.user_id)\">\n                    <div class=\"userlist\">\n                      <div class=\"flex justify-center\">\n                        <div class=\"relative\">\n                          <span class=\"overflow-hidden block  \">\n                            <img [src]=\"randomElement?.photo_url || 'https://via.placeholder.com/500'\" alt=\"photo\"\n                              class=\"userImg\">\n                          </span>\n\n                          <span *ngIf=\"showDisplay==='superfan'\">\n                            <span class=\"text-xs font-semibold new-user\" *ngIf=\"randomElement?.fan === true\">⭐</span>\n                          </span>\n                          <span *ngIf=\"showDisplay==='newuser'\">\n                            <span class=\"text-xs font-semibold new-user\"\n                              *ngIf=\"randomElement?.is_new === 'true'\">🎉️</span>\n                          </span>\n\n                        </div>\n                      </div>\n                      <p class=\"ion-text-nowrap clamp\">\n                        <span class=\"mr-1 mb-1\" *ngIf=\"randomElement?.is_moderator === 'true'\">✳️️</span>\n                        <span style=\"font-weight: 600 !important; font-size: 1em !important;\"> {{\n                          randomElement?.first_name\n                          }} </span>\n                      </p>\n                      <div *ngIf=\"showcoin\">\n                        <p> {{ randomElement?.coin_balance }} ${{coin}}</p>\n                      </div>\n                      <div *ngIf=\"!showcoin\">\n                        <p> {{ convert(randomElement?.minutes) }} </p>\n                      </div>\n                    </div>\n                  </ion-col>\n                </ion-row>\n              </ion-grid>\n            </ion-card>\n          </div>\n          <div *ngIf=\"!showonlyone\">\n            <div>\n              <ion-card>\n                <ion-card-header class=\"ion-margin-bottom\">\n                  <ion-card-subtitle>\n                    <span class=\"ion-float-left\">\n                      Speakers <span class=\"badge\"> ({{ modSpeaker.length}}) </span>\n                    </span>\n\n                    <span class=\"ion-float-right\">\n                      <a fill=\"clear\" color=\"primary\" (click)=\"export6()\">Export</a>\n                    </span>\n                    <span class=\"clear\"></span>\n                  </ion-card-subtitle>\n                </ion-card-header>\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"3\" *ngFor=\"let  item of modSpeaker| orderBy: sortKey:rrverse\">\n                      <div class=\"userlist\" (click)=\"gotoUser(item.user_id)\">\n                        <div class=\"flex justify-center\">\n                          <div class=\"relative\">\n                            <span class=\"overflow-hidden block  \">\n                              <img [src]=\"item.photo_url || 'https://via.placeholder.com/500'\" alt=\"photo\"\n                                class=\"userImg\">\n                            </span>\n\n                            <!-- <span class=\"text-xs font-semibold superfan\" *ngIf=\"item.fan === true\">⭐</span> -->\n                            <!-- <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.channel_emoji !== null\"> {{ item.channel_emoji }} </span> -->\n                            <span *ngIf=\"showDisplay==='superfan'\">\n                              <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.fan === true\">⭐</span>\n                            </span>\n                            <span *ngIf=\"showDisplay==='newuser'\">\n                              <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.is_new === 'true'\">🎉️</span>\n                            </span>\n\n                          </div>\n                        </div>\n                        <p class=\"ion-text-nowrap clamp\">\n                          <span class=\"mr-1 mb-1\" *ngIf=\"item.is_moderator === 'true'\">✳️️</span>\n                          <span style=\"font-weight: 600 !important; font-size: 1em !important;\"> {{ item.first_name }}\n                          </span>\n                        </p>\n                        <div *ngIf=\"showcoin\">\n                          <p> {{ item.coin_balance }} ${{coin}}</p>\n                        </div>\n                        <div *ngIf=\"!showcoin\">\n                          <p> {{ convert(item.minutes) }} </p>\n                        </div>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n\n              <ion-card *ngIf=\"followedBySpeaker.length > 0\">\n                <ion-card-header>\n                  <ion-card-subtitle class=\"ion-margin-bottom\">\n                    <span class=\"ion-float-left\">\n                      Followed by the speakers <span class=\"badge\"> ({{ followedBySpeaker.length}}) </span>\n                    </span>\n\n                    <span class=\"ion-float-right\">\n                      <a fill=\"clear\" color=\"primary\" (click)=\"exportFollowedBySpeakers()\">Export</a>\n                    </span>\n                    <span class=\"clear\"></span>\n\n                  </ion-card-subtitle>\n                </ion-card-header>\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"3\" *ngFor=\"let  item of followedBySpeaker | orderBy: sortKey:rrverse\">\n                      <div class=\"userlist\" [ngClass]=\"{blink_me: item.is_invited_as_speaker === 'true'}\"\n                        (click)=\"gotoUser(item.user_id)\">\n                        <div class=\"flex justify-center\">\n                          <div class=\"relative\">\n                            <span class=\"overflow-hidden block  \">\n                              <img [src]=\"item.photo_url || 'https://via.placeholder.com/500'\" alt=\"photo\"\n                                class=\"userImg\">\n                            </span>\n                            <!-- <span class=\"text-xs font-semibold superfan\" *ngIf=\"item.fan === true\">⭐</span> -->\n\n                            <!-- <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.channel_emoji !== null\">\n                                                        {{ item.channel_emoji }} </span> -->\n                            <!-- <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.fan === true\">⭐</span>\n                                                      <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.is_new === '1'\">🎉️</span> -->\n                            <span *ngIf=\"showDisplay==='superfan'\">\n                              <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.fan === true\">⭐</span>\n                            </span>\n                            <span *ngIf=\"showDisplay==='newuser'\">\n                              <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.is_new === 'true'\">🎉️</span>\n                            </span>\n                          </div>\n                        </div>\n                        <p class=\"ion-text-nowrap clamp\">\n                          <!-- <span class=\"mr-1 mb-1\" *ngIf=\"item.is_moderator === 'true'\">✳️️</span> -->\n                          <span style=\"font-weight: 600 !important; font-size: 1em !important;\"> {{ item.first_name }}\n                          </span>\n                        </p>\n                        <div *ngIf=\"showcoin\">\n                          <p> {{ item.coin_balance }} ${{coin}} </p>\n                        </div>\n                        <div *ngIf=\"!showcoin\">\n                          <p> {{ convert(item.minutes) }} </p>\n                        </div>\n                        <!-- <p> {{ convert(item.minutes) }} </p> -->\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n\n              <ion-card *ngIf=\" othersInRoom.length > 0\">\n                <ion-card-header>\n                  <!-- <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle> -->\n                  <ion-card-subtitle class=\"ion-margin-bottom\">\n                    <span class=\"ion-float-left\">\n                      Others in the room <span class=\"badge\"> ({{ othersInRoom.length}}) </span>\n                    </span>\n\n                    <span class=\"ion-float-right\">\n                      <a fill=\"clear\" color=\"primary\" (click)=\"exportOthers()\">Export</a>\n                    </span>\n                    <span class=\"clear\"></span>\n\n                  </ion-card-subtitle>\n                </ion-card-header>\n                <ion-grid fixed>\n                  <ion-row>\n                    <ion-col size=\"3\" *ngFor=\"let  item of othersInRoom | orderBy: sortKey:rrverse\">\n                      <div class=\"userlist\" [ngClass]=\"{blink_me: item.is_invited_as_speaker === 'true'}\"\n                        (click)=\"gotoUser(item.user_id)\">\n                        <div class=\"flex justify-center\">\n                          <div class=\"relative\">\n                            <span class=\"overflow-hidden block  \">\n                              <img [src]=\"item.photo_url || 'https://via.placeholder.com/500'\" alt=\"photo\"\n                                class=\"userImg\">\n\n\n                            </span>\n\n                            <!-- <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.channel_emoji !== null\" >\n                                                        {{ item.channel_emoji }} </span> -->\n                            <!-- <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.fan === true\">⭐</span>-->\n                            <!-- <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.is_new === 'true'\">🎉️</span> -->\n                            <span *ngIf=\"showDisplay==='superfan'\">\n                              <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.fan === true\">⭐</span>\n                            </span>\n                            <span *ngIf=\"showDisplay==='newuser'\">\n                              <span class=\"text-xs font-semibold new-user\" *ngIf=\"item.is_new === 'true'\">🎉️</span>\n                            </span>\n                          </div>\n                        </div>\n                        <p class=\"ion-text-nowrap clamp\">\n                          <!-- <span class=\"mr-1 mb-1\">✳️️</span> -->\n                          <span style=\"font-weight: 600 !important; font-size: 1em !important;\">{{ item.first_name }}\n                          </span>\n                        </p>\n                        <!-- <p> {{ convert(item.minutes) }} </p> -->\n                        <div *ngIf=\"showcoin\">\n                          <p> {{ item.coin_balance }} ${{coin}} </p>\n                        </div>\n                        <div *ngIf=\"!showcoin\">\n                          <p> {{ convert(item.minutes) }} </p>\n                        </div>\n                      </div>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-card>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"displayFilter\">\n\n      </div>\n\n      <div *ngIf=\"showonlyone\">\n\n      </div>\n\n\n\n    </div>\n\n    <div *ngIf=\"!roomOn\">\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>\n            Listeners Percentage distribution [Party Hat/Non-Party Hat]\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas baseChart attr.data=\"{{ pieChartDataL }}\" [data]=\"pieChartDataL\" [labels]=\"pieChartLabels\"\n            [chartType]=\"pieChartType\" [options]=\"pieChartOptions\" [colors]=\"pieChartColors\" [plugins]=\"pieChartPlugins\"\n            [legend]=\"pieChartLegend\">\n          </canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>\n            Speakers Percentage distribution [Party Hat/Non-Party Hat]\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas baseChart [data]=\"pieChartDataS\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\n            [options]=\"pieChartOptions\" [colors]=\"pieChartColors\" [plugins]=\"pieChartPlugins\" [legend]=\"pieChartLegend\">\n          </canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>\n            Moderators Percentage distribution [Party Hat/Non-Party Hat]\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas baseChart [data]=\"pieChartDataM\" [labels]=\"pieChartLabels\" [chartType]=\"pieChartType\"\n            [options]=\"pieChartOptions\" [colors]=\"pieChartColors\" [plugins]=\"pieChartPlugins\" [legend]=\"pieChartLegend\">\n          </canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>\n            Listeners Percentage Based On Skintone\n          </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas baseChart [data]=\"pieChartDataSkin\" [labels]=\"piechatLabels2\" [chartType]=\"pieChartType2\"\n            [options]=\"pieChartOptions\" [colors]=\"pieChartColors2\" [plugins]=\"pieChartPlugins2\"\n            [legend]=\"pieChartLegend\">\n          </canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <h2>Total Listeners</h2>\n            </ion-label>\n            <ion-label>\n              <h2>{{ fullData.total_listeners | number }}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <h2>Total Speakers</h2>\n            </ion-label>\n            <ion-label>\n              <h2>{{ fullData.total_speakers | number }}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <h2>Total Moderators</h2>\n            </ion-label>\n            <ion-label>\n              <h2>{{ fullData.total_moderators | number }}</h2>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <h2>Total Listened Time</h2>\n            </ion-label>\n            <ion-label>\n              <h2>{{ avgListend }}</h2>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title> Party Hat/Non-party Hat Statistics </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <h2>Party Hat</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <h2>Non-Party Hat</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <p>Listeners</p>\n                    <h2>{{ fullData.total_listeners_new | number }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <p>Listeners</p>\n                    <h2>{{ fullData.total_listeners_old | number }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <p>Speakers</p>\n                    <h2>{{ fullData.total_speakers_new | number }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <p>Speakers</p>\n                    <h2>{{ fullData.total_speakers_old | number }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <p>Moderators</p>\n                    <h2>{{ fullData.total_moderators_new | number }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <p>Moderators</p>\n                    <h2>{{ fullData.total_moderators_old | number }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <p>Avg Listened (Mins)</p>\n                    <h2>{{ fullData.avg_listened_new }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>\n                    <p>Avg Listened (Mins)</p>\n                    <h2>{{ fullData.avg_listened_old }}</h2>\n                  </ion-label>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title> Listeners based on Skintone </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas baseChart [data]=\"pieChartDataSkin\" [labels]=\"piechatLabels2\" [chartType]=\"pieChartType\"\n            [options]=\"pieChartOptions\" [colors]=\"pieChartColors2\" [plugins]=\"pieChartPlugins2\"\n            [legend]=\"pieChartLegend\">\n          </canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title> Speakers based on Skintone </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas baseChart [data]=\"pieChartSpeakerSkin\" [labels]=\"piechatLabels2\" [chartType]=\"pieChartType\"\n            [options]=\"pieChartOptions\" [colors]=\"pieChartColors2\" [plugins]=\"pieChartPlugins2\"\n            [legend]=\"pieChartLegend\">\n          </canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title> Moderators Based on Skintone </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas baseChart [data]=\"pieChartModSkin\" [labels]=\"piechatLabels2\" [chartType]=\"pieChartType\"\n            [options]=\"pieChartOptions\" [colors]=\"pieChartColors2\" [plugins]=\"pieChartPlugins2\"\n            [legend]=\"pieChartLegend\">\n          </canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title> Average Listened Time </ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <canvas baseChart [data]=\"pieChartLTSkin\" [labels]=\"piechatLabels2\" [chartType]=\"pieChartType\"\n            [options]=\"pieChartOptions\" [colors]=\"pieChartColors2\" [plugins]=\"pieChartPlugins2\"\n            [legend]=\"pieChartLegend\">\n          </canvas>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- Party Hats skintone progressbar -->\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>Listeners based on Skintone (Party Hat Members)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_new_1\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 1 ✋🏻</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_new_1 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_new_2\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 2 ✋🏼</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_new_2 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_new_3\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 3 ✋🏽</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_new_3 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_new_4\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 4 ✋🏾</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_new_4 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_new_5\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 5 ✋🏿</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_new_5 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>Speakers based on Skintone (Party Hat Members)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_new_1\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 1 ✋🏻</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_new_1 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_new_2\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 2 ✋🏼</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_new_2 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_new_3\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 3 ✋🏽</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_new_3 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_new_4\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 4 ✋🏾</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_new_4 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_new_5\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 5 ✋🏿</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_new_5 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>Moderators based on Skintone (Party Hat Members)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_new_1\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 1 ✋🏻</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_1 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_new_2\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 2 ✋🏼</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_2 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_new_3\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 3 ✋🏽</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_3 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_new_4\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 4 ✋🏾</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_4 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_new_5\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 5 ✋🏿</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_5 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>Avg Listen Time (Party Hat Members)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_new_1\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 1 ✋🏻</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_1 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_new_2\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 2 ✋🏼</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_2 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_new_3\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 3 ✋🏽</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_3 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_new_4\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 4 ✋🏾</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_4 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_new_5\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 5 ✋🏿</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_new_5 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <!-- Non-Party Hats skintone progressbar -->\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>Listeners based on Skintone (Non-Party Hat Members)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_old_1\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 1 ✋🏻</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_old_1 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_old_2\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 2 ✋🏼</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_old_2 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_old_3\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 3 ✋🏽</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_old_3 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_old_4\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 4 ✋🏾</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_old_4 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_listeners_old_5\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 5 ✋🏿</span>\n              <ion-progress-bar [value]=\"fullData.percent_listeners_old_5 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>Speakers based on Skintone (Non-Party Hat Members)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_old_1\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 1 ✋🏻</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_old_1 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_old_2\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 2 ✋🏼</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_old_2 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_old_3\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 3 ✋🏽</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_old_3 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_old_4\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 4 ✋🏾</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_old_4 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_speakers_old_5\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 5 ✋🏿</span>\n              <ion-progress-bar [value]=\"fullData.percent_speakers_old_5 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>Moderators based on Skintone (Non-Party Hat Members)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_old_1\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 1 ✋🏻</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_1 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_old_2\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 2 ✋🏼</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_2 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_old_3\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 3 ✋🏽</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_3 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_old_4\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 4 ✋🏾</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_4 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.total_moderators_old_5\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 5 ✋🏿</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_5 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"!hideSkintone\">\n        <ion-card-header class=\"ion-text-center\">\n          <ion-card-title>Avg Listen Time (Non-Party Hat Members)</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_old_1\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 1 ✋🏻</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_1 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_old_2\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 2 ✋🏼</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_2 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_old_3\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 3 ✋🏽</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_3 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_old_4\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 4 ✋🏾</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_4 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label>\n              <span class=\"ion-float-left\">{{\n                fullData.avg_listened_old_5\n                }}</span>\n              <span class=\"ion-float-right\">From Skintone 5 ✋🏿</span>\n              <ion-progress-bar [value]=\"fullData.percent_moderators_old_5 / 100\" color=\"primary\"></ion-progress-bar>\n            </ion-label>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"top.length > 0\">\n        <ion-card-header>\n          <ion-card-title>Top Listeners</ion-card-title>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"export()\">Export to CSV</ion-button>\n          <br />\n          <ion-item>\n            <ion-label position=\"floating\">Search</ion-label>\n            <ion-input type=\"text\" name=\"name2\" [(ngModel)]=\"name2\" (ngModelChange)=\"search2()\"></ion-input>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"\n                  let item of newTop\n                    | orderBy: key1:reverse1\n                    | paginate: { id: 'pagination', itemsPerPage: 7, currentPage: q }\n                \">\n            <ion-item (click)=\"gotoUser(item.user_id)\">\n              <ion-label class=\"ion-text-wrap padding\">\n                <h3 *ngIf=\"item.name\">\n                  Name: <span style=\"font-weight: bold\"> {{ item.name }} </span>\n                </h3>\n                <p>\n                  Username:\n                  <span style=\"font-weight: bold\"> {{ item.username }} </span>\n                </p>\n                <p>\n                  Minutes:\n                  <span style=\"font-weight: bold\"> {{ item.minutes }} </span>\n                </p>\n                <p *ngIf=\"showTwitter\">\n                  Twitter:\n                  <span style=\"font-weight: bold\">\n                    {{ item.twitter || \"_\" }}\n                  </span>\n                </p>\n                <p *ngIf=\"showInsta\">\n                  Instagram\n                  <span style=\"font-weight: bold\">\n                    {{ item.instagram || \"_\" }}</span>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-item>\n            <div class=\"ion-text-center\" style=\"width: 100%\">\n              <pagination-controls id=\"pagination\" (pageChange)=\"q = $event\" previousLabel=\"\" nextLabel=\"\">\n              </pagination-controls>\n            </div>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"fullData.room_status === 'ongoing' && superFans.length > 0\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-margin-vertical\">Super Fans</ion-card-title>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"export2()\">Export to CSV</ion-button>\n          <br />\n          <ion-item>\n            <ion-label position=\"floating\">Search</ion-label>\n            <ion-input type=\"text\" type=\"text\" class=\"form-control input-sm\" name=\"name\" [(ngModel)]=\"name3\"\n              (ngModelChange)=\"search3()\"></ion-input>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"\n                  let item of newSuperFans\n                    | orderBy: key2:reverse2\n                    | paginate: { id: 'pagination3', itemsPerPage: 7, currentPage: r }\n                \">\n            <ion-item (click)=\"gotoUser(item.user_id)\">\n              <ion-label class=\"ion-text-wrap padding\">\n                <h3 *ngIf=\"item.name\">\n                  Name: <span style=\"font-weight: bold\"> {{ item.name }} </span>\n                </h3>\n                <p>\n                  Username:\n                  <span style=\"font-weight: bold\"> {{ item.username }} </span>\n                </p>\n                <p>\n                  Minutes:\n                  <span style=\"font-weight: bold\"> {{ item.minutes }} </span>\n                </p>\n                <p>\n                  Rooms:\n                  <span style=\"font-weight: bold\"> {{ item.no_rooms }} </span>\n                </p>\n                <p *ngIf=\"showSuperTwitter\">\n                  Twitter:\n                  <span style=\"font-weight: bold\">\n                    {{ item.twitter || \"_\" }}\n                  </span>\n                </p>\n                <p *ngIf=\"showSuperInsta\">\n                  Instagram\n                  <span style=\"font-weight: bold\">\n                    {{ item.instagram || \"_\" }}</span>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-item>\n            <div class=\"ion-text-center\" style=\"width: 100%\">\n              <pagination-controls id=\"pagination3\" (pageChange)=\"r = $event\" previousLabel=\"\" nextLabel=\"\">\n              </pagination-controls>\n            </div>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"fullData.room_status === 'ended' && Fans.length > 0\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-margin-vertical\">Super Fans</ion-card-title>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"export3()\">Export to CSV</ion-button>\n          <br />\n          <ion-item>\n            <ion-label position=\"floating\">Search</ion-label>\n            <ion-input type=\"text\" type=\"text\" class=\"form-control input-sm\" name=\"name\" [(ngModel)]=\"name3\"\n              (ngModelChange)=\"search1()\"></ion-input>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"\n                  let item of newSuperFans\n                    | orderBy: key2:reverse2\n                    | paginate: { id: 'pagination3', itemsPerPage: 7, currentPage: r }\n                \">\n            <ion-item (click)=\"gotoUser(item.user_id)\">\n              <ion-label class=\"ion-text-wrap padding\">\n                <h3 *ngIf=\"item.name\">\n                  Name: <span style=\"font-weight: bold\"> {{ item.name }} </span>\n                </h3>\n                <p>\n                  Username:\n                  <span style=\"font-weight: bold\"> {{ item.username }} </span>\n                </p>\n                <p>\n                  Minutes:\n                  <span style=\"font-weight: bold\"> {{ item.minutes }} </span>\n                </p>\n                <p>\n                  Rooms:\n                  <span style=\"font-weight: bold\"> {{ item.no_rooms }} </span>\n                </p>\n                <p *ngIf=\"showTwitter\">\n                  Twitter:\n                  <span style=\"font-weight: bold\">\n                    {{ item.twitter || \"_\" }}\n                  </span>\n                </p>\n                <p *ngIf=\"showInsta\">\n                  Instagram\n                  <span style=\"font-weight: bold\">\n                    {{ item.instagram || \"_\" }}</span>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n\n          <ion-item>\n            <div class=\"ion-text-center\" style=\"width: 100%\">\n              <pagination-controls id=\"pagination3\" (pageChange)=\"r = $event\" previousLabel=\"\" nextLabel=\"\">\n              </pagination-controls>\n            </div>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"followers_gained.length > 0\">\n        <ion-card-header>\n          <ion-card-title class=\"ion-margin-vertical\">Followers Gained</ion-card-title>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"export4()\">Export to CSV</ion-button>\n          <br />\n          <ion-item>\n            <ion-label position=\"floating\">Search</ion-label>\n            <ion-input type=\"text\" type=\"text\" class=\"form-control input-sm\" name=\"name\" [(ngModel)]=\"name\"\n              (ngModelChange)=\"search()\"></ion-input>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"\n                  let item of newFollowers_gained\n                    | orderBy: key:reverse\n                    | paginate: { id: 'pagination1', itemsPerPage: 7, currentPage: p }\n                \">\n            <ion-item (click)=\"gotoUser(item.user_id)\">\n              <ion-label class=\"ion-text-wrap padding\">\n                <h3 *ngIf=\"item.name\">\n                  Name: <span style=\"font-weight: bold\"> {{ item.name }} </span>\n                </h3>\n                <p>\n                  Username:\n                  <span style=\"font-weight: bold\"> {{ item.username }} </span>\n                </p>\n                <p>\n                  New Followers:\n                  <span style=\"font-weight: bold\"> {{ item.new }} </span>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-item class=\"ion-text-center\">\n            <div class=\"ion-text-center\" style=\"width: 100%\">\n              <pagination-controls id=\"pagination1\" (pageChange)=\"p = $event\" previousLabel=\"\" nextLabel=\"\">\n              </pagination-controls>\n            </div>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"moderators.length > 0\">\n        <ion-card-header>\n          <ion-card-title>Moderators</ion-card-title>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"export5()\">Export to CSV</ion-button>\n          <br />\n          <ion-item>\n            <ion-label position=\"floating\">Search</ion-label>\n            <ion-input type=\"text\" name=\"name5\" [(ngModel)]=\"name5\" (ngModelChange)=\"search5()\"></ion-input>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"\n                  let item of newModerators\n                    | orderBy: key3:reverse3\n                    | paginate\n                      : { id: 'pagination5', itemsPerPage: 10, currentPage: s }\n                \">\n            <ion-item (click)=\"gotoUser(item.user_id)\">\n              <ion-label class=\"ion-text-wrap padding\">\n                <h3 *ngIf=\"item.name\">\n                  Name: <span style=\"font-weight: bold\"> {{ item.name }} </span>\n                </h3>\n                <p>\n                  Username:\n                  <span style=\"font-weight: bold\"> {{ item.username }} </span>\n                </p>\n                <p>\n                  User ID:\n                  <span style=\"font-weight: bold\"> {{ item.user_id }} </span>\n                </p>\n                <p *ngIf=\"modshowTwitter\">\n                  Twitter:\n                  <span style=\"font-weight: bold\">\n                    {{ item.twitter || \"_\" }}\n                  </span>\n                </p>\n                <p *ngIf=\"modshowInsta\">\n                  Instagram:\n                  <span style=\"font-weight: bold\">\n                    {{ item.instagram || \"_\" }}</span>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-item>\n            <div class=\"ion-text-center\" style=\"width: 100%\">\n              <pagination-controls id=\"pagination5\" (pageChange)=\"s = $event\" previousLabel=\"\" nextLabel=\"\">\n              </pagination-controls>\n            </div>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"speakers.length > 0\">\n        <ion-card-header>\n          <ion-card-title>Speakers</ion-card-title>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"export6()\">Export to CSV</ion-button>\n          <br />\n          <ion-item>\n            <ion-label position=\"floating\">Search</ion-label>\n            <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"name4\" (ngModelChange)=\"search4()\"></ion-input>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"\n                  let item of newSpeakers\n                    | orderBy: key4:reverse4\n                    | paginate\n                      : { id: 'pagination4', itemsPerPage: 10, currentPage: t }\n                \">\n            <ion-item (click)=\"gotoUser(item.user_id)\">\n              <ion-label class=\"ion-text-wrap padding\">\n                <h3 *ngIf=\"item.name\">\n                  Name: <span style=\"font-weight: bold\"> {{ item.name }} </span>\n                </h3>\n                <p>\n                  Username:\n                  <span style=\"font-weight: bold\"> {{ item.username }} </span>\n                </p>\n                <p>\n                  User ID:\n                  <span style=\"font-weight: bold\"> {{ item.user_id }} </span>\n                </p>\n                <p *ngIf=\"speakersshowTwitter\">\n                  Twitter:\n                  <span style=\"font-weight: bold\">\n                    {{ item.twitter || \"_\" }}\n                  </span>\n                </p>\n                <p *ngIf=\"speakershowInsta\">\n                  Instagram:\n                  <span style=\"font-weight: bold\">\n                    {{ item.instagram || \"_\" }}</span>\n                </p>\n              </ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-item>\n            <div class=\"ion-text-center\" style=\"width: 100%\">\n              <pagination-controls id=\"pagination4\" (pageChange)=\"t = $event\" previousLabel=\"\" nextLabel=\"\">\n              </pagination-controls>\n            </div>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-card *ngIf=\"showSpd\">\n        <ion-card-header>\n          <ion-card-title>Speakers Impact</ion-card-title>\n          <ion-button expand=\"full\" color=\"primary\" (click)=\"export7()\">Export to CSV</ion-button>\n          <br />\n          <ion-item>\n            <ion-label position=\"floating\">Search</ion-label>\n            <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"name6\" (ngModelChange)=\"search6()\"></ion-input>\n          </ion-item>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-list *ngFor=\"\n                  let item of newSpdData\n                    | orderBy: key5:reverse5\n                    | paginate\n                      : { id: 'pagination6', itemsPerPage: 10, currentPage: u }\n                \">\n            <ion-item (click)=\"gotoUser(item.user_id)\">\n              <ion-label class=\"ion-text-wrap padding\">\n                <h3 *ngIf=\"item.name\">\n                  Name: <span style=\"font-weight: bold\"> {{ item.name }} </span>\n                </h3>\n                <p> Users joined: <span style=\"font-weight: bold\"> {{ item.total_joined }} </span> </p>\n                <p> New Users: <span style=\"font-weight: bold\"> {{ item.total_joined_new }} </span> </p>\n                <p> Old Users: <span style=\"font-weight: bold\"> {{ item.total_joined_old }} </span> </p>\n                <!-- <p>\n                  Username:\n                  <span style=\"font-weight: bold\"> {{ item.username }} </span>\n                </p> -->\n                <!-- <p>\n                  User ID:\n                  <span style=\"font-weight: bold\"> {{ item.user_id }} </span>\n                </p> -->\n                <!-- <p *ngIf=\"speakersshowTwitter\">\n                  Twitter:\n                  <span style=\"font-weight: bold\">\n                    {{ item.twitter || \"_\" }}\n                  </span>\n                </p> -->\n                <!-- <p *ngIf=\"speakershowInsta\">\n                  Instagram:\n                  <span style=\"font-weight: bold\">\n                    {{ item.instagram || \"_\" }}</span>\n                </p> -->\n              </ion-label>\n            </ion-item>\n          </ion-list>\n          <ion-item>\n            <div class=\"ion-text-center\" style=\"width: 100%\">\n              <pagination-controls id=\"pagination6\" (pageChange)=\"u = $event\" previousLabel=\"\" nextLabel=\"\">\n              </pagination-controls>\n            </div>\n          </ion-item>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_chtools_home_home_module_ts.js.map