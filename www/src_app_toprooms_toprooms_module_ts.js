(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_toprooms_toprooms_module_ts"],{

/***/ 51994:
/*!*****************************************************!*\
  !*** ./src/app/toprooms/toprooms-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToproomsPageRoutingModule": () => (/* binding */ ToproomsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _toprooms_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toprooms.page */ 39986);




const routes = [
    {
        path: '',
        component: _toprooms_page__WEBPACK_IMPORTED_MODULE_0__.ToproomsPage
    }
];
let ToproomsPageRoutingModule = class ToproomsPageRoutingModule {
};
ToproomsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ToproomsPageRoutingModule);



/***/ }),

/***/ 74775:
/*!*********************************************!*\
  !*** ./src/app/toprooms/toprooms.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToproomsPageModule": () => (/* binding */ ToproomsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ 86178);
/* harmony import */ var _toprooms_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toprooms-routing.module */ 51994);
/* harmony import */ var _toprooms_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toprooms.page */ 39986);








let ToproomsPageModule = class ToproomsPageModule {
};
ToproomsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _toprooms_routing_module__WEBPACK_IMPORTED_MODULE_0__.ToproomsPageRoutingModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_7__.ChartsModule,
        ],
        declarations: [_toprooms_page__WEBPACK_IMPORTED_MODULE_1__.ToproomsPage],
    })
], ToproomsPageModule);



/***/ }),

/***/ 39986:
/*!*******************************************!*\
  !*** ./src/app/toprooms/toprooms.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToproomsPage": () => (/* binding */ ToproomsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_toprooms_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./toprooms.page.html */ 61750);
/* harmony import */ var _toprooms_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toprooms.page.scss */ 7811);
/* harmony import */ var src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/gr-service.service */ 50972);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/app.service */ 2440);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! date-fns */ 92707);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ 16738);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);










let ToproomsPage = class ToproomsPage {
    constructor(router, app, toastController, loadingController, gr) {
        this.router = router;
        this.app = app;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.gr = gr;
        this.type = 'ch';
        this.model = {};
        this.date_entered = [];
        this.no_rooms = [];
        this.date_enteredgr = [];
        this.no_roomsgr = [];
        this.hour = [];
        this.no_rooms2 = [];
        this.hourgr = [];
        this.no_rooms2gr = [];
        this.hour2 = [];
        this.no_users = [];
        this.hour2gr = [];
        this.no_usersgr = [];
        this.date_entered2 = [];
        this.no_users2 = [];
        this.date_entered2gr = [];
        this.no_users2gr = [];
        this.lineChartData = [
            { data: this.no_rooms, label: 'No of rooms' },
        ];
        this.lineChartData2 = [
            { data: this.no_rooms2, label: 'No of rooms' },
        ];
        this.lineChartData3 = [
            { data: this.no_users, label: 'No of users' },
        ];
        this.lineChartData4 = [
            { data: this.no_users2, label: 'No of users' },
        ];
        this.lineChartLabels = this.date_entered;
        this.lineChartLabels2 = this.hour;
        this.lineChartLabels3 = this.hour2;
        this.lineChartLabels4 = this.date_entered2;
        this.lineChartDatagr = [
            { data: this.no_roomsgr, label: 'No of rooms' },
        ];
        this.lineChartData2gr = [
            { data: this.no_rooms2gr, label: 'No of rooms' },
        ];
        this.lineChartData3gr = [
            { data: this.no_usersgr, label: 'No of users' },
        ];
        this.lineChartData4gr = [
            { data: this.no_users2gr, label: 'No of users' },
        ];
        this.lineChartLabelsgr = this.date_enteredgr;
        this.lineChartLabels2gr = this.hourgr;
        this.lineChartLabels3gr = this.hour2gr;
        this.lineChartLabels4gr = this.date_entered2gr;
        this.lineChartColors = [
            {
                // grey
                backgroundColor: 'rgba(9, 175, 252, .7)',
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
                // grey
                backgroundColor: 'rgba(20, 128, 0, 0.7)',
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
                // green
                backgroundColor: 'rgba(77,83,96,0.7)',
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
                // green
                backgroundColor: 'rgba(122, 111, 180, 0.7)',
                borderColor: 'rgba(56, 34, 179,1)',
                pointBackgroundColor: 'white',
                pointBorderColor: 'rgba(56, 34, 179,1)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(56, 34, 179,1)',
                pointBorderWidth: 3,
            },
        ];
        this.lineChartOptions = {
            responsive: true,
        };
        this.lineChartLegend = false;
        this.lineChartType = 'bar';
        this.lineChartType2 = 'bar';
        this.lineChartType3 = 'bar';
        this.lineChartType4 = 'bar';
        this.lineChartPlugins = [];
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.api_token = result.api_token;
            this.date = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
            this.month = moment__WEBPACK_IMPORTED_MODULE_4__().format('MM');
            this.month1 = moment__WEBPACK_IMPORTED_MODULE_4__().format('MMMM');
            // this.getWeeklyTopRooms();
            // this.getWeeklyTopRoomsgr();
            this.weeklyRooms();
            this.roomsCount();
            this.roomsCountgr();
            this.usersCount();
            this.usersCountgr();
            this.weeklyUsers();
            this.weeklyUsersgr();
        });
    }
    getWeeklyTopRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app
                .WeeklyTopRooms(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.status === 'success') {
                    this.fullData = res.result;
                    // this.fullData = arr.slice(Math.max(arr.length - 3, 0));
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
                    this.fullDatagr = res.result;
                    // this.fullDatagr = arr.slice(Math.max(arr.length - 3, 0));
                    //           date_ended: "2021-07-03 16:07:56"
                    // date_started: "2021-07-03 10:11:01"
                    // alert(this.thisDay);
                }
                else {
                }
            }));
        });
    }
    weeklyRooms() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.date_entered.length = 0;
            this.no_rooms.length = 0;
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.app
                .getMaxroomsinWeek(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log(res);
                const data = res.result;
                for (const x of data) {
                    // const datepipe: DatePipe = new DatePipe('en-US');
                    // const formattedDate = datepipe.transform(x.date, 'h:mm a');
                    // console.log(formattedDate);
                    const no_rooms = parseFloat(x.no_rooms);
                    const date = x.date;
                    this.no_rooms.push(no_rooms);
                    this.date_entered.push(date);
                }
                // console.log(this.no_rooms);
                // console.log(this.date_entered);
            }));
            // this.model = {};
        });
    }
    weeklyUsers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.date_entered2.length = 0;
            this.no_users2.length = 0;
            this.app
                .getusersinweek(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const data = res.result;
                for (const x of data) {
                    const no_rooms = parseFloat(x.no_users);
                    const date = x.date;
                    this.no_users2.push(no_rooms);
                    this.date_entered2.push(date);
                }
                console.log(this.no_users2);
                console.log(this.date_entered2);
            }));
        });
    }
    weeklyUsersgr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.date_entered2gr.length = 0;
            this.no_users2gr.length = 0;
            this.gr
                .getusersinweek(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                const data = res.result;
                for (const x of data) {
                    const no_rooms = parseFloat(x.no_users);
                    const date = x.date;
                    this.no_users2gr.push(no_rooms);
                    this.date_entered2gr.push(date);
                }
            }));
        });
    }
    weeklyRoomsgr() {
        this.date_enteredgr.length = 0;
        this.no_roomsgr.length = 0;
        this.gr
            .getMaxroomsinWeek(this.api_token, this.date)
            .subscribe((res) => {
            // console.log(res);
            const data = res.result;
            for (const x of data) {
                const no_rooms = parseFloat(x.no_rooms);
                const date = x.date;
                this.no_roomsgr.push(no_rooms);
                this.date_enteredgr.push(date);
            }
            // console.log(this.no_rooms);
            // console.log(this.date_entered);
        });
        // this.date = moment().format('YYYY-MM-DD');
        // this.model = {};
    }
    roomsCount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.hour.length = 0;
            this.no_rooms2.length = 0;
            this.app
                .getRoomsCount(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // await loading.dismiss();
                // console.log(res);
                const data = res.result;
                for (const x of data) {
                    // const datepipe: DatePipe = new DatePipe('en-US');
                    // const formattedDate = datepipe.transform(x.date, 'h:mm a');
                    // console.log(formattedDate);
                    const no_rooms = parseFloat(x.no_rooms);
                    const date = x.hour;
                    this.no_rooms2.push(no_rooms);
                    this.hour.push(date);
                }
                // console.log(this.no_rooms2);
                // console.log(this.hour);
            }));
            // this.model = {};
        });
    }
    roomsCountgr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.gr
                .getRoomsCount(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // await loading.dismiss();
                // console.log(res);
                const data = res.result;
                for (const x of data) {
                    // const datepipe: DatePipe = new DatePipe('en-US');
                    // const formattedDate = datepipe.transform(x.date, 'h:mm a');
                    // console.log(formattedDate);
                    const no_rooms = parseFloat(x.no_rooms);
                    const date = x.hour;
                    this.no_rooms2gr.push(no_rooms);
                    this.hourgr.push(date);
                }
                // console.log(this.no_rooms2gr);
                // console.log(this.hourgr);
            }));
            // this.model = {};
        });
    }
    usersCount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.hour2.length = 0;
            this.no_users.length = 0;
            this.app
                .getUsersCount(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // await loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    const data = res.result;
                    for (const x of data) {
                        const no_users = parseFloat(x.no_users);
                        const hour = x.hour;
                        this.no_users.push(no_users);
                        this.hour2.push(hour);
                    }
                    // console.log(this.no_users);
                    // console.log(this.hour);
                }
                else {
                    this.presentToast(res.message, 'danger');
                }
            }));
            // this.model = {};
        });
    }
    usersCountgr() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.hour2gr.length = 0;
            this.no_usersgr.length = 0;
            this.gr
                .getUsersCount(this.api_token, this.date)
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                // await loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    const data = res.result;
                    for (const x of data) {
                        const no_users = parseFloat(x.no_users);
                        const hour = x.hour;
                        this.no_usersgr.push(no_users);
                        this.hour2gr.push(hour);
                    }
                    // console.log(this.no_users);
                    // console.log(this.hour);
                }
                else {
                    this.presentToast(res.message, 'danger');
                }
            }));
            // this.model = {};
        });
    }
    onClick(channel) {
        this.router.navigateByUrl('/tabs/chtools/track/' + channel);
    }
    onClick2(channel) {
        this.router.navigateByUrl('/tabs/grtools/track/' + channel);
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
        const duration = moment__WEBPACK_IMPORTED_MODULE_4__(testing2, 'YYYY/MM/DD HH:mm:ss').diff(moment__WEBPACK_IMPORTED_MODULE_4__(testing, 'YYYY/MM/DD HH:mm:ss'));
        // const days = duration.asHours();
        const secssss = moment__WEBPACK_IMPORTED_MODULE_4__.duration(duration).seconds();
        const minsss = moment__WEBPACK_IMPORTED_MODULE_4__.duration(duration).minutes();
        const hrsss = Math.trunc(moment__WEBPACK_IMPORTED_MODULE_4__.duration(duration).asHours());
        this.durationDays = hrsss + ':' + minsss + ':' + secssss;
        // console.log(this.durationDays);
        return this.durationDays;
    }
    segmentChanged(ev) { }
    onSubmit(ev) {
        // console.log(ev);
        let date = this.model.date;
        date = (0,date_fns__WEBPACK_IMPORTED_MODULE_6__.default)(new Date(date), 'yyyy-MM-dd');
        // console.log(date);
        this.date = date;
        this.weeklyRooms();
        this.weeklyRoomsgr();
        this.weeklyUsers();
        this.weeklyUsersgr();
        this.roomsCount();
        this.roomsCountgr();
        this.usersCount();
        this.usersCountgr();
        setTimeout(() => {
            this.date = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
        }, 3000);
    }
    randomize() {
        this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    }
    randomize2() {
        // console.log('ddd');
        this.lineChartType2 = this.lineChartType2 === 'bar' ? 'line' : 'bar';
    }
    randomize3() {
        // console.log('ddd');
        this.lineChartType3 = this.lineChartType3 === 'bar' ? 'line' : 'bar';
    }
    randomize4() {
        // console.log('ddd');
        this.lineChartType4 = this.lineChartType4 === 'bar' ? 'line' : 'bar';
    }
    presentToast(message, color) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 2000,
            });
            toast.present();
        });
    }
};
ToproomsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__.AppService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: src_app_services_gr_service_service__WEBPACK_IMPORTED_MODULE_2__.GrServiceService }
];
ToproomsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-toprooms',
        template: _raw_loader_toprooms_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_toprooms_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ToproomsPage);



/***/ }),

/***/ 7811:
/*!*********************************************!*\
  !*** ./src/app/toprooms/toprooms.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3Byb29tcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 61750:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/toprooms/toprooms.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title>Rooms Stats</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <form name=\"form\" #maxroomForm=\"ngForm\" (ngSubmit)=\"maxroomForm.valid && onSubmit(maxroomForm.value)\">\n      <ion-item>\n        <ion-label position=\"fixed\">Select Date</ion-label>\n        <ion-datetime name=\"selectedDate\" [(ngModel)]=\"model.date\" #selectedDate=\"ngModel\" displayFormat=\"MM/DD/YYYY\"\n          min=\"2016-01-01\" [max]=\"date\" required>\n        </ion-datetime>\n      </ion-item>\n      <ion-button type=\"submit\" [disabled]=\"!maxroomForm.valid\" expand=\"full\" color=\"primary\">Submit\n      </ion-button>\n    </form>\n  </ion-card>\n  <br>\n\n  <div style=\"margin: 16px 9px !important\">\n    <ion-text color=\"primary\">\n      <h5 style=\"margin-bottom: 0\">\n        <span> Max. tracked rooms for the week </span>\n      </h5>\n    </ion-text>\n    <div class=\"clear\"></div>\n    <!-- <br> -->\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <div class=\"tabbar\">\n        <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" swipeGesture=\"true\">\n          <ion-segment-button value=\"ch\">\n            <ion-label>Clubhouse</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"gr\">\n            <ion-label>GreenRoom</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <div class=\"clear\"></div>\n    </ion-card-header>\n    <div [ngSwitch]=\"type\">\n      <div *ngSwitchCase=\"'ch'\">\n        <canvas baseChart height=\"300\" [datasets]=\"lineChartData\" [labels]=\"lineChartLabels\"\n          [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"\n          [plugins]=\"lineChartPlugins\"></canvas>\n        <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize()\">\n          <a>\n            <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n          </a>\n          <ion-text color=\"primary\" style=\"display: block !important\">\n            <p style=\"font-size: 0.6em !important; margin: 0; padding: 0\">\n              Change Style\n            </p>\n          </ion-text>\n        </div>\n      </div>\n\n      <div *ngSwitchCase=\"'gr'\">\n        <canvas baseChart height=\"300\" [datasets]=\"lineChartDatagr\" [labels]=\"lineChartLabelsgr\"\n          [options]=\"lineChartOptions\" [colors]=\"lineChartColors\" [legend]=\"lineChartLegend\" [chartType]=\"lineChartType\"\n          [plugins]=\"lineChartPlugins\"></canvas>\n        <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize()\">\n          <a>\n            <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n          </a>\n          <ion-text color=\"primary\" style=\"display: block !important\">\n            <p style=\"font-size: 0.6em !important; margin: 0; padding: 0\">\n              Change Style\n            </p>\n          </ion-text>\n        </div>\n      </div>\n    </div>\n  </ion-card>\n\n  <br>\n\n  <div style=\"margin: 16px 9px !important\">\n    <ion-text color=\"primary\">\n      <h5 style=\"margin-bottom: 0\">\n        <span>Max. users for the week </span>\n      </h5>\n    </ion-text>\n    <div class=\"clear\"></div>\n    <!-- <br> -->\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <div class=\"tabbar\">\n        <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" swipeGesture=\"true\">\n          <ion-segment-button value=\"ch\">\n            <ion-label>Clubhouse</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"gr\">\n            <ion-label>GreenRoom</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <div class=\"clear\"></div>\n    </ion-card-header>\n    <div [ngSwitch]=\"type\">\n      <div *ngSwitchCase=\"'ch'\">\n        <canvas baseChart height=\"300\" [datasets]=\"lineChartData4\" [labels]=\"lineChartLabels4\"\n          [options]=\"lineChartOptions\" [colors]=\"lineChartColors4\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType4\" [plugins]=\"lineChartPlugins\"></canvas>\n      </div>\n\n      <div *ngSwitchCase=\"'gr'\">\n        <canvas baseChart height=\"300\" [datasets]=\"lineChartData4gr\" [labels]=\"lineChartLabels4gr\"\n          [options]=\"lineChartOptions\" [colors]=\"lineChartColors4\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType4\" [plugins]=\"lineChartPlugins\"></canvas>\n\n      </div>\n    </div>\n    <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize4()\">\n      <a>\n        <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n      </a>\n      <ion-text color=\"primary\" style=\"display: block !important\">\n        <p style=\"font-size: 0.6em !important; margin: 0; padding: 0\">\n          Change Style\n        </p>\n      </ion-text>\n    </div>\n  </ion-card>\n\n  <br>\n\n\n\n  <div style=\"margin: 16px 9px !important\">\n    <ion-text color=\"primary\">\n      <h5 style=\"margin-bottom: 0\">\n        <span>Tracked rooms count </span>\n      </h5>\n    </ion-text>\n    <div class=\"clear\"></div>\n    <!-- <br> -->\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <div class=\"tabbar\">\n        <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" swipeGesture=\"true\">\n          <ion-segment-button value=\"ch\">\n            <ion-label>Clubhouse</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"gr\">\n            <ion-label>GreenRoom</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <div class=\"clear\"></div>\n    </ion-card-header>\n    <div [ngSwitch]=\"type\">\n      <div *ngSwitchCase=\"'ch'\">\n        <canvas baseChart height=\"300\" [datasets]=\"lineChartData2\" [labels]=\"lineChartLabels2\"\n          [options]=\"lineChartOptions\" [colors]=\"lineChartColors2\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType2\" [plugins]=\"lineChartPlugins\"></canvas>\n        <!-- <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize()\">\n          <a>\n            <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n          </a>\n          <ion-text color=\"primary\" style=\"display: block !important\">\n            <p style=\"font-size: 0.6em !important; margin: 0; padding: 0\">\n              Change Style\n            </p>\n          </ion-text>\n        </div> -->\n      </div>\n\n      <div *ngSwitchCase=\"'gr'\">\n        <canvas baseChart height=\"300\" [datasets]=\"lineChartData2gr\" [labels]=\"lineChartLabels2gr\"\n          [options]=\"lineChartOptions\" [colors]=\"lineChartColors2\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType2\" [plugins]=\"lineChartPlugins\"></canvas>\n\n      </div>\n    </div>\n    <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize2()\">\n      <a>\n        <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n      </a>\n      <ion-text color=\"primary\" style=\"display: block !important\">\n        <p style=\"font-size: 0.6em !important; margin: 0; padding: 0\">\n          Change Style\n        </p>\n      </ion-text>\n    </div>\n  </ion-card>\n\n  <br>\n\n\n  <div style=\"margin: 16px 9px !important\">\n    <ion-text color=\"primary\">\n      <h5 style=\"margin-bottom: 0\">\n        <span>Users in tracked rooms </span>\n      </h5>\n    </ion-text>\n    <div class=\"clear\"></div>\n    <!-- <br> -->\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <div class=\"tabbar\">\n        <ion-segment [(ngModel)]=\"type\" (ionChange)=\"segmentChanged($event)\" swipeGesture=\"true\">\n          <ion-segment-button value=\"ch\">\n            <ion-label>Clubhouse</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"gr\">\n            <ion-label>GreenRoom</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </div>\n\n      <div class=\"clear\"></div>\n    </ion-card-header>\n    <div [ngSwitch]=\"type\">\n      <div *ngSwitchCase=\"'ch'\">\n        <canvas baseChart height=\"300\" [datasets]=\"lineChartData3\" [labels]=\"lineChartLabels3\"\n          [options]=\"lineChartOptions\" [colors]=\"lineChartColors3\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType3\" [plugins]=\"lineChartPlugins\"></canvas>\n      </div>\n\n      <div *ngSwitchCase=\"'gr'\">\n        <canvas baseChart height=\"300\" [datasets]=\"lineChartData3gr\" [labels]=\"lineChartLabels3gr\"\n          [options]=\"lineChartOptions\" [colors]=\"lineChartColors3\" [legend]=\"lineChartLegend\"\n          [chartType]=\"lineChartType3\" [plugins]=\"lineChartPlugins\"></canvas>\n\n      </div>\n    </div>\n    <div style=\"text-align: center !important; padding: 10px\" (click)=\"randomize3()\">\n      <a>\n        <ion-icon slot=\"start\" name=\"swap-horizontal\" color=\"primary\"></ion-icon>\n      </a>\n      <ion-text color=\"primary\" style=\"display: block !important\">\n        <p style=\"font-size: 0.6em !important; margin: 0; padding: 0\">\n          Change Style\n        </p>\n      </ion-text>\n    </div>\n  </ion-card>\n\n  <br>\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_toprooms_toprooms_module_ts.js.map