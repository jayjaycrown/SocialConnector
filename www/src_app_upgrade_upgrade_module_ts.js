(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_upgrade_upgrade_module_ts"],{

/***/ 72284:
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-stripe/__ivy_ngcc__/fesm2015/ngx-stripe.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentRef": () => (/* binding */ DocumentRef),
/* harmony export */   "LazyStripeAPILoader": () => (/* binding */ LazyStripeAPILoader),
/* harmony export */   "NgxStripeModule": () => (/* binding */ NgxStripeModule),
/* harmony export */   "STRIPE_OPTIONS": () => (/* binding */ STRIPE_OPTIONS),
/* harmony export */   "STRIPE_PUBLISHABLE_KEY": () => (/* binding */ STRIPE_PUBLISHABLE_KEY),
/* harmony export */   "StripeAuBankAccountComponent": () => (/* binding */ StripeAuBankAccountComponent),
/* harmony export */   "StripeCardComponent": () => (/* binding */ StripeCardComponent),
/* harmony export */   "StripeCardCvcComponent": () => (/* binding */ StripeCardCvcComponent),
/* harmony export */   "StripeCardExpiryComponent": () => (/* binding */ StripeCardExpiryComponent),
/* harmony export */   "StripeCardGroupDirective": () => (/* binding */ StripeCardGroupDirective),
/* harmony export */   "StripeCardNumberComponent": () => (/* binding */ StripeCardNumberComponent),
/* harmony export */   "StripeElementsService": () => (/* binding */ StripeElementsService),
/* harmony export */   "StripeFactoryService": () => (/* binding */ StripeFactoryService),
/* harmony export */   "StripeFpxBankComponent": () => (/* binding */ StripeFpxBankComponent),
/* harmony export */   "StripeIbanComponent": () => (/* binding */ StripeIbanComponent),
/* harmony export */   "StripeIdealBankComponent": () => (/* binding */ StripeIdealBankComponent),
/* harmony export */   "StripeInstance": () => (/* binding */ StripeInstance),
/* harmony export */   "StripePaymentRequestButtonComponent": () => (/* binding */ StripePaymentRequestButtonComponent),
/* harmony export */   "StripeService": () => (/* binding */ StripeService),
/* harmony export */   "WindowRef": () => (/* binding */ WindowRef),
/* harmony export */   "ɵa": () => (/* binding */ NGX_STRIPE_VERSION)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 45435);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 69412);








const _c0 = ["stripeElementRef"];
const STRIPE_PUBLISHABLE_KEY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Stripe Publishable Key');
const STRIPE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Stripe Options');
const NGX_STRIPE_VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NGX_STRIPE_VERSION');

class WindowRef {
    constructor(platformId) {
        this.platformId = platformId;
    }
    getNativeWindow() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            return window;
        }
        return {};
    }
}
WindowRef.ɵfac = function WindowRef_Factory(t) { return new (t || WindowRef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID)); };
WindowRef.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowRef, factory: WindowRef.ɵfac });
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }]; }, null); })();

class DocumentRef {
    constructor(platformId) {
        this.platformId = platformId;
    }
    getNativeDocument() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformBrowser)(this.platformId)) {
            return document;
        }
        return {};
    }
}
DocumentRef.ɵfac = function DocumentRef_Factory(t) { return new (t || DocumentRef)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID)); };
DocumentRef.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentRef, factory: DocumentRef.ɵfac });
DocumentRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocumentRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }]; }, null); })();

class LazyStripeAPILoader {
    constructor(platformId, window, document) {
        this.platformId = platformId;
        this.window = window;
        this.document = document;
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            error: false,
            loaded: false,
            loading: false
        });
    }
    asStream() {
        this.load();
        return this.status.asObservable();
    }
    isReady() {
        return this.status.getValue().loaded;
    }
    load() {
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.isPlatformServer)(this.platformId)) {
            return;
        }
        const status = this.status.getValue();
        if (this.window.getNativeWindow().hasOwnProperty('Stripe')) {
            this.status.next({
                error: false,
                loaded: true,
                loading: false
            });
        }
        else if (!status.loaded && !status.loading) {
            this.status.next(Object.assign(Object.assign({}, status), { loading: true }));
            const script = this.document.getNativeDocument().createElement('script');
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://js.stripe.com/v3/';
            script.onload = () => {
                this.status.next({
                    error: false,
                    loaded: true,
                    loading: false
                });
            };
            script.onerror = () => {
                this.status.next({
                    error: true,
                    loaded: false,
                    loading: false
                });
            };
            this.document.getNativeDocument().body.appendChild(script);
        }
    }
}
LazyStripeAPILoader.ɵfac = function LazyStripeAPILoader_Factory(t) { return new (t || LazyStripeAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](DocumentRef)); };
LazyStripeAPILoader.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LazyStripeAPILoader, factory: LazyStripeAPILoader.ɵfac });
LazyStripeAPILoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID,] }] },
    { type: WindowRef },
    { type: DocumentRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyStripeAPILoader, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__.PLATFORM_ID]
            }] }, { type: WindowRef }, { type: DocumentRef }]; }, null); })();

class StripeInstance {
    constructor(version, loader, window, key, options) {
        this.version = version;
        this.loader = loader;
        this.window = window;
        this.key = key;
        this.options = options;
        this.stripe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(undefined);
        this.stripe = this.stripe$
            .asObservable()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((stripe) => Boolean(stripe)));
        this.loader
            .asStream()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((status) => status.loaded === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => this.window.getNativeWindow().Stripe))
            .subscribe((stripeInstance) => {
            const stripe = this.options
                ? stripeInstance(this.key, this.options)
                : stripeInstance(this.key);
            stripe.registerAppInfo(this.getNgxStripeAppInfo(this.version));
            this.stripe$.next(stripe);
        });
    }
    getInstance() {
        return this.stripe$.getValue();
    }
    elements(options) {
        return this.stripe$.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((stripe) => Boolean(stripe)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((stripe) => stripe.elements(options)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    redirectToCheckout(options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.redirectToCheckout(options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmAcssDebitPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmAcssDebitPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmAfterpayClearpayPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmAfterpayClearpayPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmAlipayPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmAlipayPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmAuBecsDebitPayment(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmAuBecsDebitPayment(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmBancontactPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmBancontactPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmCardPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmCardPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmEpsPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmEpsPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmFpxPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmFpxPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmGiropayPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmGiropayPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmGrabPayPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmGrabPayPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmIdealPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmIdealPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmKlarnaPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmKlarnaPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmOxxoPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmOxxoPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmP24Payment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmP24Payment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmSepaDebitPayment(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmSepaDebitPayment(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmSofortPayment(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmSofortPayment(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmWechatPayPayment(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmWechatPayPayment(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    handleCardAction(clientSecret) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.handleCardAction(clientSecret))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    verifyMicrodepositsForPayment(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.verifyMicrodepositsForPayment(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    createPaymentMethod(paymentMethodData) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.createPaymentMethod(paymentMethodData))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    retrievePaymentIntent(clientSecret) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.retrievePaymentIntent(clientSecret))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmAcssDebitSetup(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmAcssDebitSetup(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmAuBecsDebitSetup(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmAuBecsDebitSetup(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmBacsDebitSetup(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmBacsDebitSetup(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmBancontactSetup(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmBancontactSetup(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmCardSetup(clientSecret, data, options) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmCardSetup(clientSecret, data, options))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmIdealSetup(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmIdealSetup(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmSepaDebitSetup(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmSepaDebitSetup(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    confirmSofortSetup(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmSofortSetup(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    verifyMicrodepositsForSetup(clientSecret, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.verifyMicrodepositsForSetup(clientSecret, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    retrieveSetupIntent(clientSecret) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.retrieveSetupIntent(clientSecret))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    paymentRequest(options) {
        const stripe = this.getInstance();
        return stripe ? stripe.paymentRequest(options) : undefined;
    }
    createToken(tokenType, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.createToken(tokenType, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    createSource(a, b) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.createSource(a, b))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    retrieveSource(source) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.retrieveSource(source))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    verifyIdentity(clientSecret) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.verifyIdentity(clientSecret))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    /**
     * @deprecated
     */
    handleCardPayment(clientSecret, element, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.handleCardPayment(clientSecret, element, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    /**
     * @deprecated
     */
    confirmPaymentIntent(clientSecret, element, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmPaymentIntent(clientSecret, element, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    /**
     * @deprecated
     */
    handleCardSetup(clientSecret, element, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.handleCardSetup(clientSecret, element, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    /**
     * @deprecated
     */
    confirmSetupIntent(clientSecret, element, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.confirmSetupIntent(clientSecret, element, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    /**
     * @deprecated
     */
    handleFpxPayment(clientSecret, element, data) {
        return this.stripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((stripe) => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(stripe.handleFpxPayment(clientSecret, element, data))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)());
    }
    getNgxStripeAppInfo(version) {
        return {
            name: 'ngx-stripe',
            url: 'https://ngx-stripe.dev',
            partner_id: 'pp_partner_JR4l1rmvUoPP4V',
            version
        };
    }
}

class StripeService {
    constructor(version, key, options, loader, window) {
        this.version = version;
        this.key = key;
        this.options = options;
        this.loader = loader;
        this.window = window;
        if (key) {
            this.stripe = new StripeInstance(this.version, this.loader, this.window, key, options);
        }
    }
    getStripeReference() {
        return this.loader.asStream().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((status) => status.loaded === true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => this.window.getNativeWindow().Stripe));
    }
    getInstance() {
        return this.stripe.getInstance();
    }
    setKey(key, options) {
        return this.changeKey(key, options);
    }
    changeKey(key, options) {
        this.stripe = new StripeInstance(this.version, this.loader, this.window, key, options);
        return this.stripe;
    }
    elements(options) {
        return this.stripe.elements(options);
    }
    redirectToCheckout(options) {
        return this.stripe.redirectToCheckout(options);
    }
    confirmAcssDebitPayment(clientSecret, data, options) {
        return this.stripe.confirmAcssDebitPayment(clientSecret, data, options);
    }
    confirmAfterpayClearpayPayment(clientSecret, data, options) {
        return this.stripe.confirmAfterpayClearpayPayment(clientSecret, data, options);
    }
    confirmAlipayPayment(clientSecret, data, options) {
        return this.stripe.confirmAlipayPayment(clientSecret, data, options);
    }
    confirmAuBecsDebitPayment(clientSecret, data) {
        return this.stripe.confirmAuBecsDebitPayment(clientSecret, data);
    }
    confirmBancontactPayment(clientSecret, data, options) {
        return this.stripe.confirmBancontactPayment(clientSecret, data, options);
    }
    confirmCardPayment(clientSecret, data, options) {
        return this.stripe.confirmCardPayment(clientSecret, data, options);
    }
    confirmEpsPayment(clientSecret, data, options) {
        return this.stripe.confirmEpsPayment(clientSecret, data, options);
    }
    confirmFpxPayment(clientSecret, data, options) {
        return this.stripe.confirmFpxPayment(clientSecret, data, options);
    }
    confirmGiropayPayment(clientSecret, data, options) {
        return this.stripe.confirmGiropayPayment(clientSecret, data, options);
    }
    confirmGrabPayPayment(clientSecret, data, options) {
        return this.stripe.confirmGrabPayPayment(clientSecret, data, options);
    }
    confirmIdealPayment(clientSecret, data, options) {
        return this.stripe.confirmIdealPayment(clientSecret, data, options);
    }
    confirmKlarnaPayment(clientSecret, data, options) {
        return this.stripe.confirmKlarnaPayment(clientSecret, data, options);
    }
    confirmOxxoPayment(clientSecret, data, options) {
        return this.stripe.confirmOxxoPayment(clientSecret, data, options);
    }
    confirmP24Payment(clientSecret, data, options) {
        return this.stripe.confirmP24Payment(clientSecret, data, options);
    }
    confirmSepaDebitPayment(clientSecret, data) {
        return this.stripe.confirmSepaDebitPayment(clientSecret, data);
    }
    confirmSofortPayment(clientSecret, data) {
        return this.stripe.confirmSofortPayment(clientSecret, data);
    }
    confirmWechatPayPayment(clientSecret, data, options) {
        return this.stripe.confirmWechatPayPayment(clientSecret, data, options);
    }
    handleCardAction(clientSecret) {
        return this.stripe.handleCardAction(clientSecret);
    }
    verifyMicrodepositsForPayment(clientSecret, data) {
        return this.stripe.verifyMicrodepositsForPayment(clientSecret, data);
    }
    createPaymentMethod(paymentMethodData) {
        return this.stripe.createPaymentMethod(paymentMethodData);
    }
    retrievePaymentIntent(clientSecret) {
        return this.stripe.retrievePaymentIntent(clientSecret);
    }
    confirmAcssDebitSetup(clientSecret, data, options) {
        return this.stripe.confirmAcssDebitSetup(clientSecret, data, options);
    }
    confirmAuBecsDebitSetup(clientSecret, data) {
        return this.stripe.confirmAuBecsDebitSetup(clientSecret, data);
    }
    confirmBacsDebitSetup(clientSecret, data) {
        return this.stripe.confirmBacsDebitSetup(clientSecret, data);
    }
    confirmBancontactSetup(clientSecret, data) {
        return this.stripe.confirmBancontactSetup(clientSecret, data);
    }
    confirmCardSetup(clientSecret, data, options) {
        return this.stripe.confirmCardSetup(clientSecret, data, options);
    }
    confirmIdealSetup(clientSecret, data) {
        return this.stripe.confirmIdealSetup(clientSecret, data);
    }
    confirmSepaDebitSetup(clientSecret, data) {
        return this.stripe.confirmSepaDebitSetup(clientSecret, data);
    }
    confirmSofortSetup(clientSecret, data) {
        return this.stripe.confirmSofortSetup(clientSecret, data);
    }
    verifyMicrodepositsForSetup(clientSecret, data) {
        return this.stripe.verifyMicrodepositsForSetup(clientSecret, data);
    }
    retrieveSetupIntent(clientSecret) {
        return this.stripe.retrieveSetupIntent(clientSecret);
    }
    paymentRequest(options) {
        return this.stripe.paymentRequest(options);
    }
    createToken(tokenType, data) {
        return this.stripe.createToken(tokenType, data);
    }
    createSource(a, b) {
        return this.stripe.createSource(a, b);
    }
    retrieveSource(source) {
        return this.stripe.retrieveSource(source);
    }
    verifyIdentity(clientSecret) {
        return this.stripe.verifyIdentity(clientSecret);
    }
    /**
     * @deprecated
     */
    handleCardPayment(clientSecret, element, data) {
        return this.stripe.handleCardPayment(clientSecret, element, data);
    }
    /**
     * @deprecated
     */
    confirmPaymentIntent(clientSecret, element, data) {
        return this.stripe.confirmPaymentIntent(clientSecret, element, data);
    }
    /**
     * @deprecated
     */
    handleCardSetup(clientSecret, element, data) {
        return this.stripe.handleCardSetup(clientSecret, element, data);
    }
    /**
     * @deprecated
     */
    confirmSetupIntent(clientSecret, element, data) {
        return this.stripe.confirmSetupIntent(clientSecret, element, data);
    }
    /**
     * @deprecated
     */
    handleFpxPayment(clientSecret, element, data) {
        return this.stripe.handleFpxPayment(clientSecret, element, data);
    }
}
StripeService.ɵfac = function StripeService_Factory(t) { return new (t || StripeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NGX_STRIPE_VERSION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STRIPE_PUBLISHABLE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STRIPE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LazyStripeAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WindowRef)); };
StripeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StripeService, factory: StripeService.ɵfac });
StripeService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [NGX_STRIPE_VERSION,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [NGX_STRIPE_VERSION]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [STRIPE_PUBLISHABLE_KEY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [STRIPE_OPTIONS]
            }] }, { type: LazyStripeAPILoader }, { type: WindowRef }]; }, null); })();

class StripeElementsService {
    constructor(stripeService) {
        this.stripeService = stripeService;
    }
    elements(stripe, options = {}) {
        if (stripe) {
            if (Object.keys(options).length > 0) {
                return stripe.elements(options);
            }
            return stripe.elements();
        }
        else {
            if (Object.keys(options).length > 0) {
                return this.stripeService.elements(options);
            }
            return this.stripeService.elements();
        }
    }
    paymentRequest(stripe, options) {
        return stripe
            ? stripe.paymentRequest(options)
            : this.stripeService.paymentRequest(options);
    }
    mergeOptions(options, containerClass) {
        if (!containerClass || (options && options.classes)) {
            return options || {};
        }
        if (!options || !options.classes) {
            return Object.assign(Object.assign({}, (options || {})), { classes: {
                    base: containerClass,
                    complete: `${containerClass}--complete`,
                    empty: `${containerClass}--empty`,
                    focus: `${containerClass}--focus`,
                    invalid: `${containerClass}--invalid`,
                    webkitAutoFill: `${containerClass}--webkit-autoFill`
                } });
        }
        return options || {};
    }
}
StripeElementsService.ɵfac = function StripeElementsService_Factory(t) { return new (t || StripeElementsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](StripeService)); };
StripeElementsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StripeElementsService, factory: StripeElementsService.ɵfac });
StripeElementsService.ctorParameters = () => [
    { type: StripeService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeElementsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: StripeService }]; }, null); })();

class StripeCardComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getCard() {
        return this.element;
    }
    createElement(options = {}) {
        this.element = this.elements.create('card', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeCardComponent.ɵfac = function StripeCardComponent_Factory(t) { return new (t || StripeCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeCardComponent, selectors: [["ngx-stripe-card"]], viewQuery: function StripeCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeCardComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeCardComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-card',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeCardGroupDirective {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.elements = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.state = 'starting';
            const elementsOptions = this.elementsOptions;
            const stripe = this.stripe;
            if (changes.elementsOptions || changes.stripe || !this._elements) {
                this._elements = yield this.stripeElementsService
                    .elements(stripe, elementsOptions)
                    .toPromise();
                this.elements.emit(this._elements);
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this._elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.elements.emit(this._elements);
                this.state = 'ready';
            }
        });
    }
}
StripeCardGroupDirective.ɵfac = function StripeCardGroupDirective_Factory(t) { return new (t || StripeCardGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeCardGroupDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StripeCardGroupDirective, selectors: [["ngx-stripe-card-group"], ["", "ngxStripeCardGroup", ""]], inputs: { elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { elements: "elements" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
StripeCardGroupDirective.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeCardGroupDirective.propDecorators = {
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    elements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardGroupDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: 'ngx-stripe-card-group,[ngxStripeCardGroup]'
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { elements: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeCardNumberComponent {
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((elements) => {
                this.elements = elements;
                this.setupElement('elements');
            });
        }
        else {
            throw new Error('StripeCardNumberComponent must have StripeCardGroupDirective parent');
        }
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getCardNumber() {
        return this.element;
    }
    setupElement(source) {
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardNumber', options);
            this.element.on('change', (ev) => this.change.emit(ev));
            this.element.on('blur', () => this.blur.emit());
            this.element.on('focus', () => this.focus.emit());
            this.element.on('ready', () => this.ready.emit());
            this.element.on('escape', () => this.escape.emit());
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardNumberComponent.ɵfac = function StripeCardNumberComponent_Factory(t) { return new (t || StripeCardNumberComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardNumberComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeCardNumberComponent, selectors: [["ngx-stripe-card-number"]], viewQuery: function StripeCardNumberComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardNumberComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeCardNumberComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
StripeCardNumberComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardNumberComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-card-number',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeCardExpiryComponent {
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((elements) => {
                this.elements = elements;
                this.setupElement('elements');
            });
        }
        else {
            throw new Error('StripeCardExpiryComponent must have StripeCardGroupDirective parent');
        }
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getCardExpiry() {
        return this.element;
    }
    setupElement(source) {
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardExpiry', options);
            this.element.on('change', (ev) => this.change.emit(ev));
            this.element.on('blur', () => this.blur.emit());
            this.element.on('focus', () => this.focus.emit());
            this.element.on('ready', () => this.ready.emit());
            this.element.on('escape', () => this.escape.emit());
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardExpiryComponent.ɵfac = function StripeCardExpiryComponent_Factory(t) { return new (t || StripeCardExpiryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardExpiryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeCardExpiryComponent, selectors: [["ngx-stripe-card-expiry"]], viewQuery: function StripeCardExpiryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardExpiryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeCardExpiryComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
StripeCardExpiryComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardExpiryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-card-expiry',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeCardCvcComponent {
    constructor(stripeElementsService, cardGroup) {
        this.stripeElementsService = stripeElementsService;
        this.cardGroup = cardGroup;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (changes.options || changes.containerClass) {
                this.setupElement('options');
            }
        });
    }
    ngOnInit() {
        if (this.cardGroup) {
            this.cardGroupSubscription = this.cardGroup.elements.subscribe((elements) => {
                this.elements = elements;
                this.setupElement('elements');
            });
        }
        else {
            throw new Error('StripeCardCvcComponent must have StripeCardGroupDirective parent');
        }
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
        if (this.cardGroupSubscription) {
            this.cardGroupSubscription.unsubscribe();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getCardCvc() {
        return this.element;
    }
    setupElement(source) {
        const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
        if (this.element && source === 'options') {
            this.update(options);
        }
        else if (this.elements && source === 'elements') {
            this.element = this.elements.create('cardCvc', options);
            this.element.on('change', (ev) => this.change.emit(ev));
            this.element.on('blur', () => this.blur.emit());
            this.element.on('focus', () => this.focus.emit());
            this.element.on('ready', () => this.ready.emit());
            this.element.on('escape', () => this.escape.emit());
            this.element.mount(this.stripeElementRef.nativeElement);
            this.load.emit(this.element);
        }
    }
}
StripeCardCvcComponent.ɵfac = function StripeCardCvcComponent_Factory(t) { return new (t || StripeCardCvcComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeCardGroupDirective, 8)); };
StripeCardCvcComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeCardCvcComponent, selectors: [["ngx-stripe-card-cvc"]], viewQuery: function StripeCardCvcComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeCardCvcComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeCardCvcComponent.ctorParameters = () => [
    { type: StripeElementsService },
    { type: StripeCardGroupDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional }] }
];
StripeCardCvcComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeCardCvcComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-card-cvc',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }, { type: StripeCardGroupDirective, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }] }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeFpxBankComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getFpxBank() {
        return this.element;
    }
    createElement(options = { accountHolderType: 'individual' }) {
        this.element = this.elements.create('fpxBank', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeFpxBankComponent.ɵfac = function StripeFpxBankComponent_Factory(t) { return new (t || StripeFpxBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeFpxBankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeFpxBankComponent, selectors: [["ngx-stripe-fpx-bank"]], viewQuery: function StripeFpxBankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeFpxBankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeFpxBankComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeFpxBankComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeFpxBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-fpx-bank',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeIdealBankComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getIdealBank() {
        return this.element;
    }
    createElement(options = {}) {
        this.element = this.elements.create('idealBank', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeIdealBankComponent.ɵfac = function StripeIdealBankComponent_Factory(t) { return new (t || StripeIdealBankComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeIdealBankComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeIdealBankComponent, selectors: [["ngx-stripe-ideal-bank"]], viewQuery: function StripeIdealBankComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeIdealBankComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeIdealBankComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeIdealBankComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeIdealBankComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-ideal-bank',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeIbanComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getIban() {
        return this.element;
    }
    createElement(options = {}) {
        this.element = this.elements.create('iban', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeIbanComponent.ɵfac = function StripeIbanComponent_Factory(t) { return new (t || StripeIbanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeIbanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeIbanComponent, selectors: [["ngx-stripe-iban"]], viewQuery: function StripeIbanComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeIbanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeIbanComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeIbanComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeIbanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-iban',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeAuBankAccountComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.escape = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.state = 'notready';
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.state = 'starting';
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe, this.elementsOptions)
                    .toPromise();
                updateElements = true;
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.createElement(options);
                }
            }
            this.state = 'ready';
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            if (this.state === 'notready') {
                this.state = 'starting';
                this.elements = yield this.stripeElementsService
                    .elements(this.stripe)
                    .toPromise();
                this.createElement();
                this.state = 'ready';
            }
        });
    }
    ngOnDestroy() {
        if (this.element) {
            this.element.destroy();
        }
    }
    update(options) {
        this.element.update(options);
    }
    /**
     * @deprecated
     */
    getAuBankAccount() {
        return this.element;
    }
    createElement(options = {}) {
        this.element = this.elements.create('auBankAccount', options);
        this.element.on('change', (ev) => this.change.emit(ev));
        this.element.on('blur', () => this.blur.emit());
        this.element.on('focus', () => this.focus.emit());
        this.element.on('ready', () => this.ready.emit());
        this.element.on('escape', () => this.escape.emit());
        this.element.mount(this.stripeElementRef.nativeElement);
        this.load.emit(this.element);
    }
}
StripeAuBankAccountComponent.ɵfac = function StripeAuBankAccountComponent_Factory(t) { return new (t || StripeAuBankAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripeAuBankAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripeAuBankAccountComponent, selectors: [["ngx-stripe-au-bank-account"]], viewQuery: function StripeAuBankAccountComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", blur: "blur", change: "change", focus: "focus", ready: "ready", escape: "escape" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripeAuBankAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripeAuBankAccountComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripeAuBankAccountComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    escape: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeAuBankAccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-au-bank-account',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], escape: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripePaymentRequestButtonComponent {
    constructor(stripeElementsService) {
        this.stripeElementsService = stripeElementsService;
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.token = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.paymentMethod = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.source = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.shippingaddresschange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.shippingoptionchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.notavailable = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnChanges(changes) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const options = this.stripeElementsService.mergeOptions(this.options, this.containerClass);
            const elementsOptions = this.elementsOptions;
            const stripe = this.stripe;
            let updateElements = false;
            if (changes.elementsOptions || changes.stripe || !this.elements) {
                const elements = yield this.stripeElementsService
                    .elements(stripe, elementsOptions)
                    .toPromise();
                this.elements = elements;
                updateElements = true;
            }
            if (changes.paymentOptions && this.paymentRequest) {
                this.updateRequest(this.paymentOptions);
            }
            if (changes.options ||
                changes.containerClass ||
                !this.element ||
                updateElements) {
                if (this.element && !updateElements) {
                    this.update(options);
                }
                else if (this.elements && updateElements) {
                    this.paymentRequest = this.stripeElementsService.paymentRequest(stripe, this.paymentOptions);
                    this.paymentRequest.on('token', (ev) => this.token.emit(ev));
                    this.paymentRequest.on('paymentmethod', (ev) => this.paymentMethod.emit(ev));
                    this.paymentRequest.on('source', (ev) => this.source.emit(ev));
                    this.paymentRequest.on('cancel', () => this.cancel.emit());
                    this.paymentRequest.on('shippingaddresschange', (ev) => this.shippingaddresschange.emit(ev));
                    this.paymentRequest.on('shippingoptionchange', (ev) => this.shippingoptionchange.emit(ev));
                    this.element = this.elements.create('paymentRequestButton', Object.assign({ paymentRequest: this.paymentRequest }, options));
                    this.canMakePayment().subscribe((result) => {
                        if (result) {
                            this.element.on('click', (ev) => this.change.emit(ev));
                            this.element.on('blur', () => this.blur.emit());
                            this.element.on('focus', () => this.focus.emit());
                            this.element.on('ready', () => this.ready.emit());
                            this.element.mount(this.stripeElementRef.nativeElement);
                            this.load.emit({
                                paymentRequestButton: this.element,
                                paymentRequest: this.paymentRequest
                            });
                        }
                        else {
                            this.notavailable.emit();
                        }
                    });
                }
            }
        });
    }
    canMakePayment() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.from)(this.paymentRequest.canMakePayment());
    }
    update(options) {
        this.element.update(options);
    }
    updateRequest(options) {
        const { currency, total, displayItems, shippingOptions } = options;
        this.paymentRequest.update({
            currency,
            total,
            displayItems,
            shippingOptions
        });
    }
    show() {
        this.paymentRequest.show();
    }
    /**
     * @deprecated
     */
    getButton() {
        return this.element;
    }
}
StripePaymentRequestButtonComponent.ɵfac = function StripePaymentRequestButtonComponent_Factory(t) { return new (t || StripePaymentRequestButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](StripeElementsService)); };
StripePaymentRequestButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StripePaymentRequestButtonComponent, selectors: [["ngx-stripe-payment-request-button"]], viewQuery: function StripePaymentRequestButtonComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.stripeElementRef = _t.first);
    } }, inputs: { containerClass: "containerClass", paymentOptions: "paymentOptions", options: "options", elementsOptions: "elementsOptions", stripe: "stripe" }, outputs: { load: "load", change: "change", blur: "blur", focus: "focus", ready: "ready", token: "token", paymentMethod: "paymentMethod", source: "source", cancel: "cancel", shippingaddresschange: "shippingaddresschange", shippingoptionchange: "shippingoptionchange", notavailable: "notavailable" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [[1, "field"], ["stripeElementRef", ""]], template: function StripePaymentRequestButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } }, encapsulation: 2 });
StripePaymentRequestButtonComponent.ctorParameters = () => [
    { type: StripeElementsService }
];
StripePaymentRequestButtonComponent.propDecorators = {
    stripeElementRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['stripeElementRef',] }],
    containerClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    paymentOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    elementsOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    stripe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    blur: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    focus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    token: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    paymentMethod: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    cancel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    shippingaddresschange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    shippingoptionchange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    notavailable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripePaymentRequestButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-stripe-payment-request-button',
                template: `<div class="field" #stripeElementRef></div>`
            }]
    }], function () { return [{ type: StripeElementsService }]; }, { load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], blur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], focus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], token: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], paymentMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], source: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], cancel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], shippingaddresschange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], shippingoptionchange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], notavailable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], stripeElementRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['stripeElementRef']
        }], containerClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], paymentOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], elementsOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], stripe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class StripeFactoryService {
    constructor(version, baseKey, baseOptions, loader, window) {
        this.version = version;
        this.baseKey = baseKey;
        this.baseOptions = baseOptions;
        this.loader = loader;
        this.window = window;
    }
    create(key, options) {
        if (!key && !this.baseKey) {
            return null;
        }
        return new StripeInstance(this.version, this.loader, this.window, key || this.baseKey, options || this.baseOptions);
    }
}
StripeFactoryService.ɵfac = function StripeFactoryService_Factory(t) { return new (t || StripeFactoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](NGX_STRIPE_VERSION), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STRIPE_PUBLISHABLE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](STRIPE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](LazyStripeAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](WindowRef)); };
StripeFactoryService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StripeFactoryService, factory: StripeFactoryService.ɵfac });
StripeFactoryService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [NGX_STRIPE_VERSION,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [STRIPE_PUBLISHABLE_KEY,] }] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject, args: [STRIPE_OPTIONS,] }] },
    { type: LazyStripeAPILoader },
    { type: WindowRef }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StripeFactoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [NGX_STRIPE_VERSION]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [STRIPE_PUBLISHABLE_KEY]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
                args: [STRIPE_OPTIONS]
            }] }, { type: LazyStripeAPILoader }, { type: WindowRef }]; }, null); })();

const components = [
    StripeCardComponent,
    StripeCardNumberComponent,
    StripeCardExpiryComponent,
    StripeCardCvcComponent,
    StripeFpxBankComponent,
    StripeIdealBankComponent,
    StripeIbanComponent,
    StripeAuBankAccountComponent,
    StripePaymentRequestButtonComponent
];
const directives = [StripeCardGroupDirective];
const currentVersion = '12.3.1';
class NgxStripeModule {
    static forRoot(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                StripeElementsService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGX_STRIPE_VERSION,
                    useValue: currentVersion
                }
            ]
        };
    }
    static forChild(publishableKey, options) {
        return {
            ngModule: NgxStripeModule,
            providers: [
                LazyStripeAPILoader,
                StripeService,
                StripeFactoryService,
                StripeElementsService,
                WindowRef,
                DocumentRef,
                {
                    provide: STRIPE_PUBLISHABLE_KEY,
                    useValue: publishableKey
                },
                {
                    provide: STRIPE_OPTIONS,
                    useValue: options
                },
                {
                    provide: NGX_STRIPE_VERSION,
                    useValue: currentVersion
                }
            ]
        };
    }
}
NgxStripeModule.ɵfac = function NgxStripeModule_Factory(t) { return new (t || NgxStripeModule)(); };
NgxStripeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxStripeModule });
NgxStripeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxStripeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [...components, ...directives],
                exports: [...components, ...directives]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxStripeModule, { declarations: [StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeFpxBankComponent, StripeIdealBankComponent, StripeIbanComponent, StripeAuBankAccountComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective], exports: [StripeCardComponent, StripeCardNumberComponent, StripeCardExpiryComponent, StripeCardCvcComponent, StripeFpxBankComponent, StripeIdealBankComponent, StripeIbanComponent, StripeAuBankAccountComponent, StripePaymentRequestButtonComponent, StripeCardGroupDirective] }); })();

/*
 * Public API Surface of ngx-stripe
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-stripe.js.map

/***/ }),

/***/ 63200:
/*!***************************************************!*\
  !*** ./src/app/upgrade/upgrade-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradePageRoutingModule": () => (/* binding */ UpgradePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _upgrade_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrade.page */ 34390);




const routes = [
    {
        path: '',
        component: _upgrade_page__WEBPACK_IMPORTED_MODULE_0__.UpgradePage
    }
];
let UpgradePageRoutingModule = class UpgradePageRoutingModule {
};
UpgradePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpgradePageRoutingModule);



/***/ }),

/***/ 58491:
/*!*******************************************!*\
  !*** ./src/app/upgrade/upgrade.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradePageModule": () => (/* binding */ UpgradePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _upgrade_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrade-routing.module */ 63200);
/* harmony import */ var _upgrade_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade.page */ 34390);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-stripe */ 72284);








let UpgradePageModule = class UpgradePageModule {
};
UpgradePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _upgrade_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpgradePageRoutingModule,
            ngx_stripe__WEBPACK_IMPORTED_MODULE_7__.NgxStripeModule.forRoot('pk_live_X0yHCliG01VXZYUlqsD2D88W00vkCJ4P5g'),
        ],
        declarations: [_upgrade_page__WEBPACK_IMPORTED_MODULE_1__.UpgradePage],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__.CUSTOM_ELEMENTS_SCHEMA],
    })
], UpgradePageModule);



/***/ }),

/***/ 34390:
/*!*****************************************!*\
  !*** ./src/app/upgrade/upgrade.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpgradePage": () => (/* binding */ UpgradePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_upgrade_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./upgrade.page.html */ 41191);
/* harmony import */ var _upgrade_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade.page.scss */ 67559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 43190);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stripe */ 72284);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ 92340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ 88368);



/* eslint-disable @typescript-eslint/naming-convention */









let UpgradePage = class UpgradePage {
    constructor(http, fb, admin, stripeService, router, toastController, loadingController) {
        this.http = http;
        this.fb = fb;
        this.admin = admin;
        this.stripeService = stripeService;
        this.router = router;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.color = 'danger';
        this.cardOptions = {
            style: {
                // iconStyle: 'solid',
                base: {
                    iconColor: '#7f7e78',
                    color: '#7f7e78',
                    fontWeight: '300',
                    // border: '1px solid #000',
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif',
                    fontSize: '18px',
                    '::placeholder': {
                        color: '#7f7e78',
                    },
                },
            },
        };
        this.elementsOptions = {
            locale: 'en',
        };
        this.loading = false;
        this.priceSet = false;
        this.freeTrial = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const user = yield JSON.parse(localStorage.getItem('user'));
            const result = user.result;
            this.userDetails = result;
            this.api_token = result.api_token;
            this.stripeTest = this.fb.group({
                name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                // amount: [1001, [Validators.required, Validators.pattern(/\d+/)]],
            });
            this.getDetails();
        });
    }
    pay() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            if (this.stripeTest.valid) {
                this.createPaymentIntent(this.api_token, this.amountinit)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((pi) => this.stripeService.confirmCardPayment(pi.result.client_secret, {
                    payment_method: {
                        card: this.card.element,
                        billing_details: {
                            name: this.stripeTest.get('name').value,
                        },
                    },
                })))
                    .subscribe((result) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                    yield loading.dismiss();
                    this.loading = false;
                    if (result.error) {
                        // Show error to your customer (e.g., insufficient funds)
                        // const color = 'success';
                        this.presentToast(this.color, result.error.message);
                        // this.alertService.danger(result.error.message);
                        // console.log(result.error.message);
                    }
                    else {
                        // The payment has been processed!
                        if (result.paymentIntent.status === 'succeeded') {
                            // Show a success message to your customer
                            const color = 'success';
                            this.presentToast(color, 'Please complete the form');
                            // this.alertService.success('Payment Successfull');
                            this.router.navigateByUrl('/home/user-profile');
                        }
                    }
                }), err => {
                    this.presentToast(this.color, err.message);
                    // this.alertService.danger(err.message);
                });
            }
            else {
                console.log(this.stripeTest);
                yield loading.dismiss();
                this.loading = false;
                this.presentToast(this.color, 'Please complete the form');
                // this.alertService.danger('Please complete the form');
            }
        });
    }
    // tslint:disable-next-line: variable-name
    createPaymentIntent(api_token, amount) {
        const formData = new FormData();
        formData.append('api_token', api_token);
        formData.append('amount', amount);
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiUrl}/pay`, formData);
    }
    setAmount(selectedPackage) {
        this.priceSet = true;
        this.title = selectedPackage;
        if (selectedPackage === 'founders') {
            // alert(selectedPackage);
            // this.alertService.success('yes');
            this.amountinit = 24700;
        }
        else if (selectedPackage === 'premium') {
            // alert(selectedPackage);
            this.amountinit = 3700;
        }
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
    freetrial() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.admin.freeTrial(this.api_token).subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                const color = 'primary';
                this.presentToast(color, res.message);
            }));
        });
    }
    getDetails() {
        this.admin.getDetails(this.api_token).subscribe((res) => {
            if (res.status === 'success') {
                this.result = res.result;
                // this.data = JSON.parse(this.result.data);
                if (this.result.subscription_expiry === null) {
                    this.freeTrial = true;
                    this.upgrade = true;
                }
                else {
                    this.freeTrial = false;
                }
                if (res.status === 'validate') {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.alertService.danger(res.message);
                    this.router.navigateByUrl('/auth/validate/ ' + this.api_token);
                }
                else {
                }
            }
            else {
                const color = 'danger';
                this.presentToast(color, res.message);
                // this.alertService.danger(res.message);
            }
            // console.log(res);
            // console.log(this.data);
        }, err => {
            const color = 'danger';
            this.presentToast(color, err.message);
            // this.alertService.danger(err.message);
        });
    }
    garyAccess() {
        const ch_user_id = this.userDetails.ch_user_id;
        const ch_user_email = this.userDetails.email;
        // console.log(`https://garyvip.managemych.club/link_rally?ch_user_id=${ch_user_id}&email=${ch_user_email}`)
        window.open(`https://garyvip.managemych.club/link_rally?ch_user_id=${ch_user_id}&email=${ch_user_email}`);
    }
};
UpgradePage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_8__.StripeService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController }
];
UpgradePage.propDecorators = {
    card: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [ngx_stripe__WEBPACK_IMPORTED_MODULE_8__.StripeCardComponent,] }]
};
UpgradePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-upgrade',
        template: _raw_loader_upgrade_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_upgrade_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpgradePage);



/***/ }),

/***/ 67559:
/*!*******************************************!*\
  !*** ./src/app/upgrade/upgrade.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1cGdyYWRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 41191:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upgrade/upgrade.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar mode=\"ios\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tabs/profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Upgrade\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card>\n    <ion-card-header>\n      <div *ngIf=\"freeTrial\" >\n        <ion-button expand=\"full\" color=\"primary\" (click)=\"freetrial()\">Start free Trial</ion-button>\n        </div>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>\n        <ion-icon slot=\"end\" name=\"bar-chart-sharp\"></ion-icon>\n        <ion-label>\n          <p>Premium Plan</p>\n          <h2>$37.00/month</h2>\n        </ion-label>\n      </ion-item>\n\n      <div class=\"ion-text-right\">\n      <ion-button color=\"primary\" (click)=\"setAmount('premium')\">Select Plan</ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-icon slot=\"end\" name=\"pie-chart-sharp\"></ion-icon>\n        <ion-label>\n          <p>Founders Package</p>\n          <h2>$247.00/year</h2>\n        </ion-label>\n      </ion-item>\n      <div class=\"ion-text-right\">\n        <ion-button color=\"primary\" (click)=\"setAmount('founders')\">Select Plan</ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-content>\n      <ion-item>\n        <ion-icon slot=\"end\" name=\"pie-chart-outline\"></ion-icon>\n        <ion-label>\n          <p>50 $GARY Access</p>\n          <h2>Own 50 $GARY Coin</h2>\n        </ion-label>\n      </ion-item>\n      <div class=\"ion-text-right\">\n        <ion-button color=\"primary\" (click)=\"garyAccess()\">Select Plan</ion-button>\n      </div>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf=\"priceSet\">\n    <ion-card-header class=\"ion-text-center\">\n      <ion-card-title>{{title | titlecase}} Plan</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <ngx-stripe-card-group [formGroup]=\"stripeTest\" [elementsOptions]=\"elementsOptions\">\n        <ion-item style=\"margin-bottom: 16px;\">\n          <ion-label position=\"floating\">Card Holder's Name</ion-label>\n          <ion-input minlength=\"6\" formControlName=\"name\" placeholder=\"Card Name\"></ion-input>\n        </ion-item>\n        <ngx-stripe-card [options]=\"cardOptions\" class=\"\"></ngx-stripe-card>\n        <!-- </ngx-stripe-card> -->\n      </ngx-stripe-card-group>\n      <div class=\"ion-text-right\">\n        <ion-button color=\"primary\" [disabled]=\"!stripeTest.valid\" type=\"submit\" (click)=\"pay()\">\n          Upgrade Plan\n        </ion-button>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_upgrade_upgrade_module_ts.js.map