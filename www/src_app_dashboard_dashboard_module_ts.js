(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 50425:
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 65935);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 50425);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 65935);








let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.ChartsModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule,
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage],
    })
], DashboardPageModule);



/***/ }),

/***/ 65935:
/*!*********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 52836);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 38043);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/app.service */ 2440);
/* harmony import */ var _services_gr_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../_services/gr-service.service */ 50972);



/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */






let DashboardPage = class DashboardPage {
    constructor(router, app, gr, toastController, loadingController) {
        this.router = router;
        this.app = app;
        this.gr = gr;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.selectedData = 'total_rooms';
        this.showData = 'total_rooms';
        this.type = 'ch';
        this.type2 = 'ch';
        this.type3 = 'ch';
        this.page = 1;
        this.current = {};
        this.currentgr = {};
        this.last = {};
        this.lastgr = {};
        this.color = '';
        this.icon = '';
        this.total_roomsData = [];
        this.total_roomsDatagr = [];
        this.total_listenersData = [];
        this.total_listenersDatagr = [];
        this.total_listened = [];
        this.total_listenedgr = [];
        this.avg_max_listeners = [];
        this.avgData = [];
        this.newData = [];
        this.avgDatagr = [];
        this.newDatagr = [];
        this.avg_max_listenersgr = [];
        this.selectMonth = [
            { name: 'January', value: 1 },
            { name: 'February', value: 2 },
            { name: 'March', value: 3 },
            { name: 'April', value: 4 },
            { name: 'May', value: 5 },
            { name: 'June', value: 6 },
            { name: 'July', value: 7 },
            { name: 'August', value: 8 },
            { name: 'September', value: 9 },
            { name: 'October', value: 10 },
            { name: 'November', value: 11 },
            { name: 'December', value: 12 },
        ];
        this.lineChartData = [
            { data: this.total_roomsData, label: 'Total Rooms' },
        ];
        this.lineChartDatagr = [
            { data: this.total_roomsDatagr, label: 'Total Rooms' },
        ];
        this.lineChartLabels = [
            'Week 1',
            'Week 2',
            'Week 3',
            'Week 4',
            'Week 5',
        ];
        this.lineChartData2 = [
            { data: this.total_listenersData, label: 'Total Listeners' },
        ];
        this.lineChartData2gr = [
            { data: this.total_listenersDatagr, label: 'Total Listeners' },
        ];
        this.lineChartData3 = [
            { data: this.total_listened, label: 'Total Listened Time' },
        ];
        this.lineChartData3gr = [
            { data: this.total_listenedgr, label: 'Total Listened Time' },
        ];
        this.lineChartData4 = [
            { data: this.avg_max_listeners, label: 'Max Listeners' },
        ];
        this.lineChartData4gr = [
            { data: this.avg_max_listenersgr, label: 'Max Listeners' },
        ];
        this.lineChartData5 = [
            { data: this.avgData, label: 'Avg Listened Time' },
        ];
        this.lineChartData5gr = [
            { data: this.avgDatagr, label: 'Avg Listened Time' },
        ];
        this.lineChartData6 = [
            { data: this.newData, label: 'New Follower(s)' },
        ];
        this.lineChartData6gr = [
            { data: this.newDatagr, label: 'New Follower(s)' },
        ];
        this.lineChartOptions = {
            responsive: true,
        };
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
        this.lineChartColors2 = [
            {
                backgroundColor: 'rgba(20, 128, 0, 0.3)',
                borderColor: 'green',
                pointBackgroundColor: '#fff',
                pointBorderColor: 'green',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                pointBorderWidth: 3,
            },
        ];
        this.lineChartColors3 = [
            {
                // dark grey
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'white',
                pointBorderColor: 'rgba(77,83,96,1)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)',
                pointBorderWidth: 3,
            },
        ];
        this.lineChartColors4 = [
            {
                // grey
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'white',
                pointBorderColor: 'rgba(148,159,177,1)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)',
                pointBorderWidth: 3,
            },
        ];
        this.lineChartLegend = false;
        this.lineChartType = 'line';
        this.lineChartPlugins = [];
        this.month1 = '';
        this.month2 = '';
        this.customPopoverOptions = {
            subHeader: ' Filter by',
        };
        this.customActionSheetOptions = {
            header: 'Select Month',
        };
        this.fullData = [];
        this.fullDatagr = [];
        this.shownone = true;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.name = result.name;
            this.date = moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY-MM-DD');
            this.month = moment__WEBPACK_IMPORTED_MODULE_2__().format('MM');
            this.month1 = moment__WEBPACK_IMPORTED_MODULE_2__().format('MMMM');
            this.month2 = moment__WEBPACK_IMPORTED_MODULE_2__().format('MMMM');
            // alert(this.month1);
            // alert(this.month);
            this.getPerformanceStats();
            this.getGRPerformanceStats();
            this.getWeeklyStats(this.month);
            this.getWeeklyStatsgr(this.month);
            this.getWeeklyTopRooms();
            this.getWeeklyTopRoomsgr();
        });
    }
    doRefresh(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.ngOnInit();
            ev.target.complete();
        });
    }
    getPerformanceStats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // this.date = '2021-04-07';
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app.performanceStats(this.api_token, this.date, this.page).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    // this.shownone = false;
                    this.show = true;
                    this.current = res.result.current;
                    this.last = res.result.last;
                    this.percTotal = this.relDiff(this.current.total_rooms, this.last.total_rooms);
                    this.totalColor = this.getColor(this.percTotal);
                    console.log(this.totalColor);
                    this.total_listeners = this.relDiff(this.current.total_listeners, this.last.total_listeners);
                    this.listenerColor = this.getColor(this.total_listeners);
                    this.avg = this.relDiff(this.current.avg, this.last.avg);
                    this.avgColor = this.getColor(this.avg);
                    this.new = this.relDiff(this.current.new, this.last.new);
                    this.newColor = this.getColor(this.new);
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.shownone = true;
                    this.show = false;
                    // this.presentToast('danger',res.message);
                    // this.alertService.danger(res.message);
                    // this.router.navigateByUrl('/tabs/upgrade');
                }
                else if (res.status === 'validate') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
                    this.presentToast(color, res.message);
                    //  this.shownone = true;
                    this.show = false;
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.shownone = true;
                    this.show = false;
                }
            }), (err) => {
                this.presentToast('danger', err.message);
                // console.log(err);
            });
        });
    }
    getGRPerformanceStats() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            // this.date = '2021-04-07';
            this.gr.performanceStats(this.api_token, this.date, this.page).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // console.log(res);
                if (res.status === 'success') {
                    // this.show = true;
                    this.shownone = false;
                    this.currentgr = res.result.current;
                    this.lastgr = res.result.last;
                    this.percTotalgr = this.relDiff(this.currentgr.total_rooms, this.lastgr.total_rooms);
                    this.totalColorgr = this.getColor(this.percTotalgr);
                    // console.log(this.totalColor);
                    this.total_listenersgr = this.relDiff(this.currentgr.total_listeners, this.lastgr.total_listeners);
                    this.listenerColorgr = this.getColor(this.total_listenersgr);
                    this.avggr = this.relDiff(this.currentgr.avg, this.lastgr.avg);
                    this.avgColorgr = this.getColor(this.avggr);
                    this.newgr = this.relDiff(this.currentgr.new, this.lastgr.new);
                    this.newColorgr = this.getColor(this.newgr);
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    // this.router.navigateByUrl('/tabs/upgrade');
                    this.shownone = true;
                }
                else if (res.status === 'validate') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
                    this.shownone = true;
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.shownone = true;
                }
            }), (err) => {
                this.presentToast('danger', err.message);
                this.shownone = true;
                // console.log(err);
            });
        });
    }
    getWeeklyStats(month) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            //
            this.total_roomsData.length = 0;
            this.total_listenersData.length = 0;
            this.total_listened.length = 0;
            this.avgData.length = 0;
            this.avg_max_listeners.length = 0;
            this.newData.length = 0;
            this.app.weeklyStats(this.api_token, month, this.page).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // await loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    // console.log(res);
                    this.show = true;
                    const sata = res.result;
                    this.total_roomsWk1 = parseFloat(sata.week1.total_rooms);
                    this.total_roomsWk2 = parseFloat(sata.week2.total_rooms);
                    this.total_roomsWk3 = parseFloat(sata.week3.total_rooms);
                    this.total_roomsWk4 = parseFloat(sata.week4.total_rooms);
                    this.total_roomsWk5 = parseFloat(sata.week5.total_rooms) || 0;
                    this.total_roomsData.push(this.total_roomsWk1, this.total_roomsWk2, this.total_roomsWk3, this.total_roomsWk4, this.total_roomsWk5);
                    // console.log(this.total_roomsData);
                    // total listeners
                    this.total_listenersData_1 = parseFloat(sata.week1.total_listeners);
                    this.total_listenersData_2 = parseFloat(sata.week2.total_listeners);
                    this.total_listenersData_3 = parseFloat(sata.week3.total_listeners);
                    this.total_listenersData_4 = parseFloat(sata.week4.total_listeners);
                    this.total_listenersData_5 =
                        parseFloat(sata.week5.total_listeners) || 0;
                    this.total_listenersData.push(this.total_listenersData_1, this.total_listenersData_2, this.total_listenersData_3, this.total_listenersData_4, this.total_listenersData_5);
                    // console.log(this.total_listenersData);
                    // total_listened
                    this.total_listened_1 = parseFloat(sata.week1.total_listened);
                    this.total_listened_2 = parseFloat(sata.week2.total_listened);
                    this.total_listened_3 = parseFloat(sata.week3.total_listened);
                    this.total_listened_4 = parseFloat(sata.week4.total_listened);
                    this.total_listened_5 = parseFloat(sata.week4.total_listened) || 0;
                    this.total_listened.push(this.total_listened_1, this.total_listened_2, this.total_listened_3, this.total_listened_4, this.total_listened_5);
                    // console.log(this.total_listened);
                    // avg_max_listeners
                    this.avg_max_listeners_1 = parseFloat(sata.week1.avg_max_listeners);
                    this.avg_max_listeners_2 = parseFloat(sata.week2.avg_max_listeners);
                    this.avg_max_listeners_3 = parseFloat(sata.week3.avg_max_listeners);
                    this.avg_max_listeners_4 = parseFloat(sata.week4.avg_max_listeners);
                    this.avg_max_listeners_5 =
                        parseFloat(sata.week4.avg_max_listeners) || 0;
                    this.avg_max_listeners.push(this.avg_max_listeners_1, this.avg_max_listeners_2, this.avg_max_listeners_3, this.avg_max_listeners_4, this.avg_max_listeners_5);
                    // console.log(this.avg_max_listeners);
                    // avgData
                    this.avg_1 = parseFloat(sata.week1.avg);
                    this.avg_2 = parseFloat(sata.week2.avg);
                    this.avg_3 = parseFloat(sata.week3.avg);
                    this.avg_4 = parseFloat(sata.week4.avg);
                    this.avg_5 = parseFloat(sata.week4.avg) || 0;
                    this.avgData.push(this.avg_1, this.avg_2, this.avg_3, this.avg_4, this.avg_5);
                    // console.log(this.avgData);
                    // newData
                    this.new_1 = parseFloat(sata.week1.new) || 0;
                    this.new_2 = parseFloat(sata.week2.new) || 0;
                    this.new_3 = parseFloat(sata.week3.new) || 0;
                    this.new_4 = parseFloat(sata.week4.new) || 0;
                    this.new_5 = parseFloat(sata.week4.new) || 0;
                    this.newData.push(this.new_1, this.new_2, this.new_3, this.new_4, this.new_5);
                    // console.log(this.newData);
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.show = false;
                    // this.alertService.danger(res.message);
                    // this.router.navigateByUrl('/tabs/upgrade');
                }
                else if (res.status === 'validate') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.show = false;
                    this.presentToast(color, res.message);
                    // this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
                }
                else {
                    // this.alertService.danger(res.message);
                    this.show = false;
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.show = false;
                }
            }), (err) => {
                this.presentToast('danger', err.message);
                this.show = false;
                // console.log(err);
            });
        });
    }
    getWeeklyStatsgr(month) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.total_roomsDatagr.length = 0;
            this.total_listenersDatagr.length = 0;
            this.total_listenedgr.length = 0;
            this.avgDatagr.length = 0;
            this.avg_max_listenersgr.length = 0;
            this.newDatagr.length = 0;
            this.gr.weeklyStats(this.api_token, month, this.page).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // await loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    this.shownone = false;
                    // console.log(res);
                    const sata = res.result;
                    this.total_roomsWk1gr = parseFloat(sata.week1.total_rooms);
                    this.total_roomsWk2gr = parseFloat(sata.week2.total_rooms);
                    this.total_roomsWk3gr = parseFloat(sata.week3.total_rooms);
                    this.total_roomsWk4gr = parseFloat(sata.week4.total_rooms);
                    this.total_roomsWk5gr = parseFloat(sata.week5.total_rooms) || 0;
                    this.total_roomsDatagr.push(this.total_roomsWk1gr, this.total_roomsWk2gr, this.total_roomsWk3gr, this.total_roomsWk4gr, this.total_roomsWk5gr);
                    // console.log(this.total_roomsData);
                    // total listeners
                    this.total_listenersData_1gr = parseFloat(sata.week1.total_listeners);
                    this.total_listenersData_2gr = parseFloat(sata.week2.total_listeners);
                    this.total_listenersData_3gr = parseFloat(sata.week3.total_listeners);
                    this.total_listenersData_4gr = parseFloat(sata.week4.total_listeners);
                    this.total_listenersData_5gr =
                        parseFloat(sata.week5.total_listeners) || 0;
                    this.total_listenersDatagr.push(this.total_listenersData_1gr, this.total_listenersData_2gr, this.total_listenersData_3gr, this.total_listenersData_4gr, this.total_listenersData_5gr);
                    // console.log(this.total_listenersData);
                    // total_listened
                    this.total_listened_1gr = parseFloat(sata.week1.total_listened);
                    this.total_listened_2gr = parseFloat(sata.week2.total_listened);
                    this.total_listened_3gr = parseFloat(sata.week3.total_listened);
                    this.total_listened_4gr = parseFloat(sata.week4.total_listened);
                    this.total_listened_5gr = parseFloat(sata.week4.total_listened) || 0;
                    this.total_listenedgr.push(this.total_listened_1gr, this.total_listened_2gr, this.total_listened_3gr, this.total_listened_4gr, this.total_listened_5gr);
                    // console.log(this.total_listened);
                    // avg_max_listeners
                    this.avg_max_listeners_1gr = parseFloat(sata.week1.avg_max_listeners);
                    this.avg_max_listeners_2gr = parseFloat(sata.week2.avg_max_listeners);
                    this.avg_max_listeners_3gr = parseFloat(sata.week3.avg_max_listeners);
                    this.avg_max_listeners_4gr = parseFloat(sata.week4.avg_max_listeners);
                    this.avg_max_listeners_5gr =
                        parseFloat(sata.week4.avg_max_listeners) || 0;
                    this.avg_max_listenersgr.push(this.avg_max_listeners_1gr, this.avg_max_listeners_2gr, this.avg_max_listeners_3gr, this.avg_max_listeners_4gr, this.avg_max_listeners_5gr);
                    // console.log(this.avg_max_listeners);
                    // avgData
                    this.avg_1gr = parseFloat(sata.week1.avg);
                    this.avg_2gr = parseFloat(sata.week2.avg);
                    this.avg_3gr = parseFloat(sata.week3.avg);
                    this.avg_4gr = parseFloat(sata.week4.avg);
                    this.avg_5gr = parseFloat(sata.week4.avg) || 0;
                    this.avgDatagr.push(this.avg_1gr, this.avg_2gr, this.avg_3gr, this.avg_4gr, this.avg_5gr);
                    // console.log(this.avgData);
                    // newData
                    this.new_1gr = parseFloat(sata.week1.new) || 0;
                    this.new_2gr = parseFloat(sata.week2.new) || 0;
                    this.new_3gr = parseFloat(sata.week3.new) || 0;
                    this.new_4gr = parseFloat(sata.week4.new) || 0;
                    this.new_5gr = parseFloat(sata.week4.new) || 0;
                    this.newDatagr.push(this.new_1gr, this.new_2gr, this.new_3gr, this.new_4gr, this.new_5gr);
                    // console.log(this.newData);
                }
                else if (res.status === 'upgrade') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.shownone = true;
                    // this.alertService.danger(res.message);
                    // this.router.navigateByUrl('/tabs/upgrade');
                }
                else if (res.status === 'validate') {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.shownone = true;
                    // this.router.navigateByUrl('/auth/validategr/ ' + this.api_token);
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.shownone = true;
                }
            }), (err) => {
                this.presentToast('danger', err.message);
                this.shownone = true;
                // console.log(err);
            });
        });
    }
    getWeeklyTopRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.app
                .WeeklyTopRooms(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (res.status === 'success') {
                    const arr = res.result;
                    this.fullData = arr.slice(Math.max(arr.length - 3, 0));
                    //           date_ended: "2021-07-03 16:07:56"
                    // date_started: "2021-07-03 10:11:01"
                    // alert(this.thisDay);
                }
                else {
                }
            }));
        });
    }
    getWeeklyTopRoomsgr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.gr
                .WeeklyTopRooms(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                if (res.status === 'success') {
                    const arr = res.result;
                    this.fullDatagr = arr.slice(Math.max(arr.length - 3, 0));
                    //           date_ended: "2021-07-03 16:07:56"
                    // date_started: "2021-07-03 10:11:01"
                    // alert(this.thisDay);
                }
                else {
                }
            }));
        });
    }
    randomize() {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    }
    onClick(channel) {
        this.router.navigateByUrl('/tabs/chtools/track/' + channel);
    }
    getDateDiff(now, end) {
        // console.log(now, end);
        // const now = moment(new Date()); //todays date
        // const end = moment('2015-12-1'); // another date
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
    changedData(event) {
        // console.log(this.selectedData);
        // console.log(event);
        this.showData = this.selectedData;
    }
    // transformMinute(value: number): string {
    //   const hours = Math.floor(value / 60);
    //   const minutes = Math.floor(value % 60);
    //   return hours + ':' + minutes;
    // }
    convert(value) {
        const data = moment__WEBPACK_IMPORTED_MODULE_2__.duration(value, 'minutes');
        // console.log(data._data);
        return data._data.minutes + ':' + data._data.seconds;
    }
    relDiff(a, b) {
        if (a == null) {
            a = 0;
        }
        if (b == null) {
            b = 0;
        }
        // if (a === null || b== null) {
        //   return '';
        // }
        let total;
        const decreaseValue = parseFloat(a) - parseFloat(b);
        if (b === 0) {
            total = 0;
        }
        else {
            total = ((decreaseValue / b) * 100).toFixed(2);
        }
        return total;
        // return  100 * Math.abs( (( a - b ) / (b)) * 100 ); Math.sign(2)
    }
    getColor(total) {
        //  console.log(Math.sign(parseFloat(total)));
        if (Math.sign(parseFloat(total)) === 1) {
            this.color = 'green';
            this.icon = 'arrow-up-outline';
        }
        else if (Math.sign(parseFloat(total)) === 0) {
            this.icon = '';
            this.color = 'black';
        }
        else {
            this.icon = 'arrow-down-outline';
            this.color = 'red';
        }
        return [this.color, this.icon];
    }
    segmentChanged(ev) {
        // console.log(ev);
    }
    gotoCHTOOLS() {
        this.router.navigateByUrl('/tabs/home');
    }
    onClick2(channel) {
        this.router.navigateByUrl('/tabs/grtools/track/' + channel);
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 1500,
            });
            toast.present();
        });
    }
    selectAMonth(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const num = ev - 1;
            this.month1 = moment__WEBPACK_IMPORTED_MODULE_2__().month(num).format('MMMM');
            this.getWeeklyStats(ev);
        });
    }
    selectAMonthgr(ev) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const num = ev - 1;
            this.month2 = moment__WEBPACK_IMPORTED_MODULE_2__().month(num).format('MMMM');
            this.getWeeklyStatsgr(ev);
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _services_gr_service_service__WEBPACK_IMPORTED_MODULE_4__.GrServiceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 38043:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".newsDiv {\n  display: block;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  background-color: #c5ebc2 !important;\n}\n\n.coloredCard {\n  background-color: var(--ion-color-primary);\n  padding: 60px !important;\n  border-radius: 20px;\n}\n\n.toolscard {\n  text-align: center !important;\n  border-radius: 20px;\n}\n\n.clear {\n  clear: both;\n}\n\n.tabbar {\n  width: 60vw !important;\n  float: left;\n  overflow: scroll !important;\n  font-size: 0.8em !important;\n}\n\nion-segment-button {\n  font-size: 0.8em !important;\n}\n\n.right {\n  float: right !important;\n}\n\n.moreButton {\n  font-size: 0.8em;\n  color: var(--ion-color-dark);\n}\n\n.red {\n  color: red !important;\n}\n\n.green {\n  color: green !important;\n}\n\n.black {\n  color: var(--ion-color-dark);\n}\n\n.selectFilter {\n  --border-width: 1px !important;\n  --border-color: var(--ion-color-light);\n  --border-radius: 5px !important;\n}\n\n.image {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.creators {\n  margin-right: 5px !important;\n  width: 50px !important;\n  height: 50px !important;\n  border-radius: 50%;\n}\n\n.clear {\n  clear: both;\n}\n\np {\n  font-size: 0.8em !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUNGOztBQUNBO0VBQ0UsMENBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBRUE7RUFDRSw2QkFBQTtFQUVBLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsdUJBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0VBQ0EsNEJBQUE7QUFHRjs7QUFEQTtFQUNFLHFCQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtBQUtGOztBQUhBO0VBQ0UsNEJBQUE7QUFNRjs7QUFHQTtFQUNFLDhCQUFBO0VBQ0Esc0NBQUE7RUFFQSwrQkFBQTtBQURGOztBQXdCQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0UsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFyQkY7O0FBdUJBO0VBQ0UsV0FBQTtBQXBCRjs7QUF1QkE7RUFDRSwyQkFBQTtBQXBCRiIsImZpbGUiOiJkYXNoYm9hcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ld3NEaXYge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTcsIDIzNSwgMTk0KSAhaW1wb3J0YW50O1xyXG59XHJcbi5jb2xvcmVkQ2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDYwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC8vIGNvbG9yOiByZ2IoMCwgMTI4LCAwKTtcclxufVxyXG5cclxuLnRvb2xzY2FyZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgLy8gcGFkZGluZzogMzBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4udGFiYmFyIHtcclxuICB3aWR0aDogNjB2dyAhaW1wb3J0YW50O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG92ZXJmbG93OiBzY3JvbGwgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xyXG59XHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm1vcmVCdXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMC44ZW07XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxufVxyXG4ucmVkIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdyZWVuIHtcclxuICBjb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG4uYmxhY2sge1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbn1cclxuLy8gaW9uLWxhYmVsLFxyXG4vLyBpb24tY29sLFxyXG4vLyBpb24tZ3JpZCB7XHJcbi8vICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbi8vICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4uc2VsZWN0RmlsdGVyIHtcclxuICAtLWJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgLy8gLS1ib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkdW0pICFpbXBvcnRhbnQ7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gLmJnQ2gge1xyXG4vLyAgIC8vIGhlaWdodDogMTl2aCAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvY2guanBnXCIpIDAgMC8gMTAwJSAxMDAlO1xyXG4vLyAgIC8vIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmJnR3Ige1xyXG4vLyAgIC8vIGhlaWdodDogMTl2aCAhaW1wb3J0YW50O1xyXG4vLyAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4vLyAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9nci5qcGdcIikgMCAwLyAxMDAlIDEwMCU7XHJcbi8vICAgLy8gYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuLy8gICAvLyBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IHVuc2V0O1xyXG4vLyAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLmltYWdlIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uY3JlYXRvcnMge1xyXG4gIG1hcmdpbi1yaWdodDogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDUwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmNsZWFyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxucHtcclxuICBmb250LXNpemU6IC44ZW0gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 52836:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar>\n    <ion-title>Hello {{ name }} </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"clear\">\n        <ion-icon slot=\"icon-only\" name=\"notifications\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card style=\"border-radius: 20px\">\n    <ion-card-header>\n      <ion-card-subtitle>\n        <ion-item>\n          <ion-label>\n            <p>{{ date | date: 'dd MMMM, YYYY' }}</p>\n            <h1></h1>\n          </ion-label>\n        </ion-item>\n      </ion-card-subtitle>\n      <ion-card-subtitle>\n        <div class=\"tabbar\">\n          <ion-segment [(ngModel)]=\"type2\" (ionChange)=\"segmentChanged($event)\" swipeGesture=\"true\">\n            <ion-segment-button value=\"ch\">\n              <ion-label>Clubhouse</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"gr\">\n              <ion-label>GreenRoom</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n        <div class=\"clear\"></div>\n      </ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content [ngSwitch]=\"type2\" class=\"ion-no-padding\">\n      <div *ngSwitchCase=\"'ch'\">\n        <ion-grid class=\"noPM\" *ngIf=\"show\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ion-text-center\" lines=\"none\">\n                <ion-label>\n                  <p>No of Rooms</p>\n                  <h1>{{ current.total_rooms }}</h1>\n                  <ion-button expand=\"full\" fill=\"clear\">\n                    <span [class]=\"totalColor[0]\">\n                      <ion-icon [name]=\"totalColor[1]\"></ion-icon>{{ percTotal\n                      }}%\n                    </span>\n                  </ion-button>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item class=\"ion-text-center\" lines=\"none\">\n                <ion-label>\n                  <p>Total Listeners</p>\n                  <h1>{{ current.total_listeners | number}}</h1>\n                  <!-- <h2><span class=\"red\"><ion-icon name=\"arrow-down-outline\"></ion-icon>34%</span></h2> -->\n                  <ion-button expand=\"full\" fill=\"clear\">\n                    <span [class]=\"listenerColor[0]\">\n                      <ion-icon [name]=\"listenerColor[1]\"></ion-icon>{{\n                      total_listeners }}%\n                    </span>\n                  </ion-button>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ion-text-center\" lines=\"none\">\n                <ion-label>\n                  <p>Avg Listened time</p>\n                  <h1>{{ convert(current.avg) }}</h1>\n                  <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\n                    <span [class]=\"avgColor[0]\">\n                      <ion-icon [name]=\"avgColor[1]\"></ion-icon>{{ avg }}%\n                    </span>\n                  </ion-button>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item class=\"ion-text-center\" lines=\"none\">\n                <ion-label>\n                  <p>New Followers</p>\n                  <h1>{{ current.new || 0 | number}}</h1>\n                  <h2>\n                    <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\n                      <span [class]=\"newColor[0]\">\n                        <ion-icon [name]=\"newColor[1]\"></ion-icon>{{ new}}%\n                      </span>\n                    </ion-button>\n                  </h2>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div *ngSwitchCase=\"'gr'\">\n        <ion-grid class=\"noPM\" *ngIf=\"!shownone\">\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ion-text-center\" lines=\"none\">\n                <ion-label>\n                  <p>No of Rooms</p>\n                  <h1>{{ currentgr.total_rooms }}</h1>\n                  <ion-button expand=\"full\" fill=\"clear\">\n                    <span [class]=\"totalColorgr[0]\">\n                      <ion-icon [name]=\"totalColorgr[1]\"></ion-icon>{{\n                      percTotalgr }}%\n                    </span>\n                  </ion-button>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item class=\"ion-text-center\" lines=\"none\">\n                <ion-label>\n                  <p>Total Listeners</p>\n                  <h1>{{ currentgr.total_listeners | number}}</h1>\n                  <!-- <h2><span class=\"red\"><ion-icon name=\"arrow-down-outline\"></ion-icon>34%</span></h2> -->\n                  <ion-button expand=\"full\" fill=\"clear\">\n                    <span [class]=\"listenerColorgr[0]\">\n                      <ion-icon [name]=\"listenerColorgr[1]\"></ion-icon>{{\n                      total_listenersgr }}%\n                    </span>\n                  </ion-button>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item class=\"ion-text-center\" lines=\"none\">\n                <ion-label>\n                  <p>Avg Listened time</p>\n                  <h1>{{ convert(currentgr.avg) }}</h1>\n                  <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\n                    <span [class]=\"avgColorgr[0]\">\n                      <ion-icon [name]=\"avgColorgr[1]\"></ion-icon>{{ avggr }}%\n                    </span>\n                  </ion-button>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item class=\"ion-text-center\" lines=\"none\">\n                <ion-label>\n                  <p>New Followers</p>\n                  <h1>{{ currentgr.new | number}}</h1>\n                  <h2>\n                    <ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\n                      <span [class]=\"newColorgr[0]\">\n                        <ion-icon [name]=\"newColorgr[1]\"></ion-icon>{{ newgr}}%\n                      </span>\n                    </ion-button>\n                  </h2>\n                </ion-label>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n      <div class=\"ion-text-center\">\n        <p style=\"font-size: .7em !important;\">All % data are compared to last week</p>\n      </div>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- tools -->\n  <div style=\"margin-top: 4vh\">\n    <ion-text color=\"primary\">\n      <h4 style=\"margin-bottom: 0, margin\" class=\"ion-margin-start\">TOOLS</h4>\n    </ion-text>\n    <ion-grid fixed>\n      <ion-row class=\"mt0\">\n        <ion-col size=\"6\">\n          <ion-card color=\"light\" class=\"toolscard bgCh\" [routerLink]=\"['/tabs/chtools']\"\n            routerLinkActive=\"router-link-active\">\n            <ion-img src=\"assets/img/ch.jpg\"></ion-img>\n          </ion-card>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-card color=\"success\" class=\"toolscard bgGr\" [routerLink]=\"['/tabs/grtools']\"\n            routerLinkActive=\"router-link-active\">\n            <ion-img src=\"assets/img/gr.jpg\"></ion-img>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <!-- Canva -->\n  <ion-card>\n    <ion-card-header>\n      <ion-card-subtitle>\n        <div class=\"tabbar\">\n          <ion-segment [(ngModel)]=\"type3\" (ionChange)=\"segmentChanged($event)\" swipeGesture=\"true\">\n            <ion-segment-button value=\"ch\">\n              <ion-label>Clubhouse</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"gr\">\n              <ion-label>GreenRoom</ion-label>\n            </ion-segment-button>\n          </ion-segment>\n        </div>\n\n        <div class=\"clear\"></div>\n      </ion-card-subtitle>\n      <!-- <ion-card-subtitle>\n\n      </ion-card-subtitle> -->\n    </ion-card-header>\n    <div [ngSwitch]=\"type3\">\n      <div *ngSwitchCase=\"'ch'\">\n        <div *ngIf=\"show\">\n          <div class=\"ion-text-center\">\n            <p>Weekly Report for {{ month1 }}</p>\n          </div>\n\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item lines=\"none\" class=\"selectFilter\">\n                  <ion-select mode=\"ios\" value=\"month\" [interfaceOptions]=\"customActionSheetOptions\"\n                    interface=\"action-sheet\" placeholder=\"Select Month\" ngModel=\"month1\"\n                    (ngModelChange)=\"selectAMonth($event)\">\n                    <ion-select-option *ngFor=\"let item of selectMonth\" [value]=\"item.value\">\n                      {{ item.name }}\n                    </ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item lines=\"none\" class=\"selectFilter\">\n                  <ion-select mode=\"md\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\"\n                    value=\"selectedData\" placeholder=\"Filter\" [(ngModel)]=\"selectedData\"\n                    (ngModelChange)=\"changedData($event)\">\n                    <ion-select-option value=\"total_rooms\" selected=\"true\">Total Rooms</ion-select-option>\n                    <ion-select-option value=\"total_listeners\">Total Listeners</ion-select-option>\n                    <ion-select-option value=\"total_listened\">Total Listened Time</ion-select-option>\n                    <ion-select-option value=\"avg_max_listeners\">Avg Max Listeners</ion-select-option>\n\n                    <ion-select-option value=\"avg\">Avg Listened Time</ion-select-option>\n                    <ion-select-option value=\"new\">New Followers</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n\n          <div *ngIf=\"showData === 'total_rooms'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n          <div *ngIf=\"showData === 'total_listeners'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData2\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors2\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n\n          <div *ngIf=\"showData === 'total_listened'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData3\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors3\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n\n          <div *ngIf=\"showData === 'avg_max_listeners'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData4\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors4\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n\n          <div *ngIf=\"showData === 'avg'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData5\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n\n          <div *ngIf=\"showData === 'new'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData6\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors2\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n          <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize()\">\n            <a>\n              <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n            </a>\n            <ion-text color=\"primary\" style=\"display: block !important\">\n              <p style=\"font-size: 0.6em !important; margin: 0; padding: 0\">\n                Change Style\n              </p>\n            </ion-text>\n          </div>\n        </div>\n      </div>\n      <div *ngSwitchCase=\"'gr'\">\n        <div *ngIf=\"!shownone\">\n          <div class=\"ion-text-center\">\n            <p>Weekly Report for {{ month2 }}</p>\n          </div>\n          <ion-grid fixed>\n            <ion-row>\n              <ion-col size=\"6\">\n                <ion-item lines=\"none\" class=\"selectFilter\">\n                  <ion-select mode=\"ios\" value=\"month\" [interfaceOptions]=\"customActionSheetOptions\"\n                    interface=\"action-sheet\" placeholder=\"Select Month\" ngModel=\"month2\"\n                    (ngModelChange)=\"selectAMonthgr($event)\">\n                    <ion-select-option *ngFor=\"let item of selectMonth\" [value]=\"item.value\">\n                      {{ item.name }}\n                    </ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item lines=\"none\" class=\"selectFilter\">\n                  <ion-select mode=\"md\" [interfaceOptions]=\"customPopoverOptions\" interface=\"popover\"\n                    value=\"selectedData\" placeholder=\"Filter\" [(ngModel)]=\"selectedData\"\n                    (ngModelChange)=\"changedData($event)\">\n                    <ion-select-option value=\"total_rooms\" selected=\"true\">Total Rooms</ion-select-option>\n                    <ion-select-option value=\"total_listeners\">Total Listeners</ion-select-option>\n                    <ion-select-option value=\"total_listened\">Total Listened Time</ion-select-option>\n                    <ion-select-option value=\"avg_max_listeners\">Avg Max Listeners</ion-select-option>\n\n                    <ion-select-option value=\"avg\">Avg Listened Time</ion-select-option>\n                    <ion-select-option value=\"new\">New Followers</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <div *ngIf=\"showData === 'total_rooms'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartDatagr\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n          <div *ngIf=\"showData === 'total_listeners'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData2gr\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors2\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n\n          <div *ngIf=\"showData === 'total_listened'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData3gr\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors3\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n\n          <div *ngIf=\"showData === 'avg_max_listeners'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData4gr\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors4\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n\n          <div *ngIf=\"showData === 'avg'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData5gr\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n\n          <div *ngIf=\"showData === 'new'\">\n            <canvas baseChart height=\"300\" [datasets]=\"lineChartData6gr\" [labels]=\"lineChartLabels\"\n              [options]=\"lineChartOptions\" [colors]=\"lineChartColors2\" [legend]=\"lineChartLegend\"\n              [chartType]=\"lineChartType\" [plugins]=\"lineChartPlugins\"></canvas>\n          </div>\n          <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize()\">\n            <a>\n              <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n            </a>\n            <ion-text color=\"primary\" style=\"display: block !important\">\n              <p style=\"font-size: 0.6em !important; margin: 0; padding: 0\">\n                Change Style\n              </p>\n            </ion-text>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </ion-card>\n\n  <!-- tOP ROOMS -->\n  <div style=\"margin: 5vh 16px 16px !important\">\n    <ion-text color=\"primary\">\n      <h4 style=\"margin-bottom: 0\">\n        <span class=\"ion-float-left\"> TOP ROOMS </span>\n        <!-- <span class=\"ion-float-right\">\n          <a [routerLink]=\"['/tabs/toprooms']\" routerLinkActive=\"router-link-active\" class=\"moreButton\">More</a></span> -->\n      </h4>\n    </ion-text>\n    <div class=\"clear\"></div>\n    <br>\n\n    <div class=\"tabbar\">\n      <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" swipeGesture=\"true\">\n        <ion-segment-button value=\"ch\">\n          <ion-label>Clubhouse</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"gr\">\n          <ion-label>GreenRoom</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div class=\"clear\"></div>\n  </div>\n\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'ch'\">\n      <div *ngIf=\"show\">\n        <div *ngFor=\"let item of fullData\">\n          <ion-card (click)=\"onClick(item.channel)\">\n            <ion-card-content>\n              <ion-item lines=\"none\">\n                <ion-label class=\"ion-text-wrap\">\n                  <h2>{{ item.topic }}</h2>\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <span class=\"ion-align-items-center\">\n                    <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n                  </span>\n                  {{ item.end_total_speakers }}\n                </ion-label>\n                <ion-label>\n                  <ion-icon name=\"people-outline\"></ion-icon> {{\n                  item.end_total_listeners }}\n                </ion-label>\n                <ion-label>\n                  <ion-icon name=\"time-outline\"></ion-icon> {{\n                  getDateDiff(item.date_started, item.date_ended)}}\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\">\n\n                <ion-label>\n                  <p>Date: {{ item.date_ended }}</p>\n                </ion-label>\n              </ion-item>\n              <!-- <div class=\"image\">\n                      <span *ngFor=\"let moderator of allmoderators\">\n                        <img\n                          [src]=\"moderator.photo_url\"\n                          class=\"creators\"\n                          alt=\"\"\n                          srcset=\"\"\n                        />\n                      </span>\n                      <span\n                        style=\"\n                          float: right;\n                          color: #fff !important;\n                          background-color: rgb(122, 121, 121);\n                          border-radius: 50%;\n                          margin-top: 12px;\n                          padding: 5px;\n                        \"\n                        *ngIf=\"modLength > 5\"\n                        >+{{ modLength - 5 }}\n                      </span>\n                      <div class=\"clear\"></div>\n                    </div> -->\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'gr'\">\n      <div *ngIf=\"!shownone\">\n        <div *ngFor=\"let item of fullDatagr\">\n          <ion-card (click)=\"onClick2(item.channel)\">\n            <ion-card-content>\n              <ion-item lines=\"none\">\n                <ion-label class=\"ion-text-wrap\">\n                  <h2>{{ item.topic }}</h2>\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\">\n                <ion-label>\n                  <span class=\"ion-align-items-center\">\n                    <ion-icon name=\"chatbox-ellipses-outline\"></ion-icon>\n                  </span>\n                  {{ item.end_total_speakers }}\n                </ion-label>\n                <ion-label>\n                  <ion-icon name=\"people-outline\"></ion-icon> {{\n                  item.end_total_listeners }}\n                </ion-label>\n                <ion-label>\n                  <ion-icon name=\"time-outline\"></ion-icon> {{\n                  getDateDiff(item.date_started, item.date_ended)}}\n                </ion-label>\n              </ion-item>\n              <ion-item lines=\"none\">\n\n                <ion-label>\n                  <p>Date: {{ item.date_ended }}</p>\n                </ion-label>\n              </ion-item>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map