(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["default-src_app__services_gr-service_service_ts"],{

/***/ 50972:
/*!*************************************************!*\
  !*** ./src/app/_services/gr-service.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrServiceService": () => (/* binding */ GrServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 92340);

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */





let GrServiceService = class GrServiceService {
    constructor(http) {
        this.http = http;
        this.api = 'https://greenroomtools.xyz/api/track/';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.grUrl;
        this._refreshNeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    get refreshNeded$() {
        return this._refreshNeded$;
    }
    // tslint:disable-next-line: variable-name
    getRoomDetails(data, api_token) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        return this.http.post(this.api + data, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRoomDetails'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    getRoomHistory(page, api_token) {
        const formData = new FormData();
        formData.append('page', page);
        formData.append('api_token', api_token);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/room_history', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRoomHistory'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    getActiveRooms(page, api_token) {
        const formData = new FormData();
        formData.append('page', page);
        formData.append('api_token', api_token);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/get_active_rooms', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getRoomHistory'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    getRoomHistorySort(page, api_token, date) {
        const formData = new FormData();
        formData.append('page', page);
        formData.append('api_token', api_token);
        formData.append('date', date);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/room_history_sort', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('room_history_sort'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    weeklyRoomHistory(api_token, page, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('page', page);
        formData.append('date', date);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/room_history_weekly', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('room_history_weekly'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    topRooms(api_token) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/top_rooms', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('top_rooms'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    searchClub(api_token, club) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('club', club);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/search_club', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('search_club'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    clubAnalytics(api_token, club_id, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('club_id', club_id);
        formData.append('date', date);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/club_analytics', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('club_analytics'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    CompareWeek(api_token, date1, date2, page) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('date1', date1);
        formData.append('date2', date2);
        formData.append('page', page);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/compare_week', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('CompareWeek'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    CompareClubs(api_token, club1, club2, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('club1', club1);
        formData.append('club2', club2);
        formData.append('date', date);
        // formData.append('api_token', api_token);
        return this.http.post(this.url + '/compare_clubs', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('CompareWeek'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    getCode(api_token, club_id) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('club_id', club_id);
        return this.http.post(this.url + '/club_verification', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('verifyClub'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    verifyClub(api_token, club_id) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('club_id', club_id);
        return this.http.post(this.url + '/validate_club', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('verifyClub'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    fetchClub(api_token) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        return this.http.post(this.url + '/fetch_clubs', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('fetchClub'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    fetchAccountStats(api_token) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        return this.http.post(this.url + '/user_stats', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('fetchClub'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    // tslint:disable-next-line: variable-name
    postNotification(api_token, club_id, message) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('club_id', club_id);
        formData.append('message', message);
        return this.http.post(this.url + '/post_notification', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('postNotification'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    exporttohubsport(api_token, channel) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('channel', channel);
        return this.http.post(this.url + '/export_to_hs', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('exporttohubsport'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    getUsersProfiles(api_token, profile_id, date, page) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('profile_id', profile_id);
        formData.append('date', date);
        formData.append('page', page);
        return this.http.post(this.url + '/profile', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getUsersProfiles'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    performanceStats(api_token, date, page) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('date', date);
        formData.append('page', page);
        return this.http.post(this.url + '/performance_stats', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('performanceStats'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    weeklyStats(api_token, month, page) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('month', month);
        formData.append('page', page);
        return this.http.post(this.url + '/week_stats', formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('weeklyStats'))
        // tap(() => {
        //   this._refreshNeded$.next();
        // })
        );
    }
    WeeklyTopRooms(api_token, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('date', date);
        // formData.append('page', page);
        return this.http
            .post(this.url + '/top_rooms_week', formData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('WeeklyTopRooms')));
    }
    roomStats(api_token, channel) {
        // console.log('getting stats');
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('channel', channel);
        // formData.append('page', page);
        return this.http
            .post(this.url + '/room_stats', formData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('roomStats')));
    }
    getSuperfans(api_token, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('date', date);
        return this.http
            .post(this.url + '/superfans', formData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getSuperfans')));
    }
    // https://monitor.clubhousetools.xyz/api/max_rooms?api_token=apRCOa9jBmJvgr7X7C0Y6EzHcgCSv66hrVT39AWAnjoWJlKGxm&date=2021-08-01
    getMaxroomsinWeek(api_token, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('date', date);
        return this.http
            .post(this.url + '/max_rooms', formData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getMaxroomsinWeek')));
    }
    // https://monitor.clubhousetools.xyz/api/max_rooms_time?api_token=apRCOa9jBmJvgr7X7C0Y6EzHcgCSv66hrVT39AWAnjoWJlKGxm&date=2021-08-01
    getRoomsCount(api_token, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('date', date);
        return this.http
            .post(this.url + '/max_rooms_time', formData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('gerRoomsCount')));
    }
    // https://monitor.clubhousetools.xyz/api/max_users_time?api_token=apRCOa9jBmJvgr7X7C0Y6EzHcgCSv66hrVT39AWAnjoWJlKGxm&date=2021-08-02
    getUsersCount(api_token, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('date', date);
        return this.http
            .post(this.url + '/max_users_time', formData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('gerUsersCount')));
    }
    // https://monitor.clubhousetools.xyz/api/max_users?api_token=apRCOa9jBmJvgr7X7C0Y6EzHcgCSv66hrVT39AWAnjoWJlKGxm&date=2021-08-01
    getusersinweek(api_token, date) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('date', date);
        return this.http
            .post(this.url + '/max_users', formData)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('getusersinweek')));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
GrServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient }
];
GrServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root',
    })
], GrServiceService);



/***/ })

}]);
//# sourceMappingURL=default-src_app__services_gr-service_service_ts.js.map