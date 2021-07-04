import { Injectable } from '@angular/core';
declare let ga: Function;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  // startTrackerWithId(id) {
  //   ga('config', id);
  // }

  trackView(pageUrl: string, screenName: string) {
    ga('set', 'page', pageUrl);
    ga('send', 'pageview');
  }

  trackEvent(category, action, label?, value?) {}
}