/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { catchError, retry, map, switchMap, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GrServiceService {
  api = 'https://greenroomtools.xyz/api/track/';
  url = environment.grUrl;

  private _refreshNeded$ = new Subject<any>();
  get refreshNeded$() {
    return this._refreshNeded$;
  }
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: variable-name
  getRoomDetails(data, api_token) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    return this.http.post(this.api + data, formData).pipe(
      catchError(this.handleError('getRoomDetails'))
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
    return this.http.post(this.url + '/room_history', formData).pipe(
      catchError(this.handleError('getRoomHistory'))
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
    return this.http.post(this.url + '/get_active_rooms', formData).pipe(
      catchError(this.handleError('getRoomHistory'))
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
    return this.http.post(this.url + '/room_history_sort', formData).pipe(
      catchError(this.handleError('room_history_sort'))
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
    return this.http.post(this.url + '/room_history_weekly', formData).pipe(
      catchError(this.handleError('room_history_weekly'))
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
    return this.http.post(this.url + '/top_rooms', formData).pipe(
      catchError(this.handleError('top_rooms'))
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
    return this.http.post(this.url + '/search_club', formData).pipe(
      catchError(this.handleError('search_club'))
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
    return this.http.post(this.url + '/club_analytics', formData).pipe(
      catchError(this.handleError('club_analytics'))
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
    return this.http.post(this.url + '/compare_week', formData).pipe(
      catchError(this.handleError('CompareWeek'))
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
    return this.http.post(this.url + '/compare_clubs', formData).pipe(
      catchError(this.handleError('CompareWeek'))
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
    return this.http.post(this.url + '/club_verification', formData).pipe(
      catchError(this.handleError('verifyClub'))
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
    return this.http.post(this.url + '/validate_club', formData).pipe(
      catchError(this.handleError('verifyClub'))
      // tap(() => {
      //   this._refreshNeded$.next();
      // })
    );
  }

  // tslint:disable-next-line: variable-name
  fetchClub(api_token) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    return this.http.post(this.url + '/fetch_clubs', formData).pipe(
      catchError(this.handleError('fetchClub'))
      // tap(() => {
      //   this._refreshNeded$.next();
      // })
    );
  }

  fetchAccountStats(api_token) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    return this.http.post(this.url + '/user_stats', formData).pipe(
      catchError(this.handleError('fetchClub'))
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
    return this.http.post(this.url + '/post_notification', formData).pipe(
      catchError(this.handleError('postNotification'))
      // tap(() => {
      //   this._refreshNeded$.next();
      // })
    );
  }

  exporttohubsport(api_token, channel) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('channel', channel);
    return this.http.post(this.url + '/export_to_hs', formData).pipe(
      catchError(this.handleError('exporttohubsport'))
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
    return this.http.post(this.url + '/profile', formData).pipe(
      catchError(this.handleError('getUsersProfiles'))
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
    return this.http.post(this.url + '/performance_stats', formData).pipe(
      catchError(this.handleError('performanceStats'))
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
    return this.http.post(this.url + '/week_stats', formData).pipe(
      catchError(this.handleError('weeklyStats'))
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
      .pipe(catchError(this.handleError('WeeklyTopRooms')));
  }

  roomStats(api_token, channel) {
    // console.log('getting stats');
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('channel', channel);
    // formData.append('page', page);
    return this.http
      .post(this.url + '/room_stats', formData)
      .pipe(catchError(this.handleError('roomStats')));
  }

  getSuperfans(api_token, date) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('date', date);
    return this.http
      .post(this.url + '/superfans', formData)
      .pipe(catchError(this.handleError('getSuperfans')));
  }

  // https://monitor.clubhousetools.xyz/api/max_rooms?api_token=apRCOa9jBmJvgr7X7C0Y6EzHcgCSv66hrVT39AWAnjoWJlKGxm&date=2021-08-01
  getMaxroomsinWeek(api_token, date) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('date', date);
    return this.http
      .post(this.url + '/max_rooms', formData)
      .pipe(catchError(this.handleError('getMaxroomsinWeek')));
  }

  // https://monitor.clubhousetools.xyz/api/max_rooms_time?api_token=apRCOa9jBmJvgr7X7C0Y6EzHcgCSv66hrVT39AWAnjoWJlKGxm&date=2021-08-01

  getRoomsCount(api_token, date) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('date', date);
    return this.http
      .post(this.url + '/max_rooms_time', formData)
      .pipe(catchError(this.handleError('gerRoomsCount')));
  }
  // https://monitor.clubhousetools.xyz/api/max_users_time?api_token=apRCOa9jBmJvgr7X7C0Y6EzHcgCSv66hrVT39AWAnjoWJlKGxm&date=2021-08-02

  getUsersCount(api_token, date) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('date', date);
    return this.http
      .post(this.url + '/max_users_time', formData)
      .pipe(catchError(this.handleError('gerUsersCount')));
  }

  // https://monitor.clubhousetools.xyz/api/max_users?api_token=apRCOa9jBmJvgr7X7C0Y6EzHcgCSv66hrVT39AWAnjoWJlKGxm&date=2021-08-01

  getusersinweek(api_token, date) {
    const formData = new FormData();
    formData.append('api_token', api_token);
    formData.append('date', date);
    return this.http
      .post(this.url + '/max_users', formData)
      .pipe(catchError(this.handleError('getusersinweek')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}
