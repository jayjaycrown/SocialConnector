(self["webpackChunkSocialConnector"] = self["webpackChunkSocialConnector"] || []).push([["src_app_auth_auth_module_ts"],{

/***/ 33679:
/*!***********************************************************************!*\
  !*** ./node_modules/ngx-captcha/__ivy_ngcc__/fesm2015/ngx-captcha.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseReCaptchaComponent": () => (/* binding */ BaseReCaptchaComponent),
/* harmony export */   "InvisibleReCaptchaComponent": () => (/* binding */ InvisibleReCaptchaComponent),
/* harmony export */   "NgxCaptchaModule": () => (/* binding */ NgxCaptchaModule),
/* harmony export */   "ReCaptcha2Component": () => (/* binding */ ReCaptcha2Component),
/* harmony export */   "ReCaptchaType": () => (/* binding */ ReCaptchaType),
/* harmony export */   "ReCaptchaV3Service": () => (/* binding */ ReCaptchaV3Service),
/* harmony export */   "ScriptService": () => (/* binding */ ScriptService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 38583);




/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


const _c0 = ["captchaWrapperElem"];
class ScriptService {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
        /**
         * Name of the global google recaptcha script
         */
        this.windowGrecaptcha = 'grecaptcha';
        /**
         * Name of the global callback
         */
        this.windowOnLoadCallbackProperty = 'ngx_captcha_onload_callback';
        this.globalDomain = 'recaptcha.net';
        this.defaultDomain = 'google.com';
    }
    /**
     * @param {?} useGlobalDomain
     * @param {?} render
     * @param {?} onLoad
     * @param {?=} language
     * @return {?}
     */
    registerCaptchaScript(useGlobalDomain, render, onLoad, language) {
        if (this.grecaptchaScriptLoaded()) {
            // recaptcha script is already loaded
            // just call the callback
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onLoad(window[this.windowGrecaptcha]);
            }));
            return;
        }
        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = (/** @type {?} */ (((/**
         * @return {?}
         */
        () => this.zone.run(onLoad.bind(this, window[this.windowGrecaptcha]))))));
        // prepare script elem
        /** @type {?} */
        const scriptElem = document.createElement('script');
        scriptElem.innerHTML = '';
        scriptElem.src = this.getCaptchaScriptUrl(useGlobalDomain, render, language);
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }
    /**
     * @return {?}
     */
    cleanup() {
        window[this.windowOnLoadCallbackProperty] = undefined;
        window[this.windowGrecaptcha] = undefined;
    }
    /**
     * Indicates if google recaptcha script is available and ready to be used
     * @private
     * @return {?}
     */
    grecaptchaScriptLoaded() {
        if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha]) {
            return true;
        }
        return false;
    }
    /**
     * Gets language param used in script url
     * @private
     * @param {?=} hl
     * @return {?}
     */
    getLanguageParam(hl) {
        if (!hl) {
            return '';
        }
        return `&hl=${hl}`;
    }
    /**
     * Url to google api script
     * @private
     * @param {?} useGlobalDomain
     * @param {?} render
     * @param {?=} language
     * @return {?}
     */
    getCaptchaScriptUrl(useGlobalDomain, render, language) {
        /** @type {?} */
        const domain = useGlobalDomain ? this.globalDomain : this.defaultDomain;
        // tslint:disable-next-line:max-line-length
        return `https://www.${domain}/recaptcha/api.js?onload=${this.windowOnLoadCallbackProperty}&render=${render}${this.getLanguageParam(language)}`;
    }
}
ScriptService.ɵfac = function ScriptService_Factory(t) { return new (t || ScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
ScriptService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScriptService, factory: ScriptService.ɵfac });
/** @nocollapse */
ScriptService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/base-recaptcha.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class BaseReCaptchaComponent {
    /**
     * @protected
     * @param {?} renderer
     * @param {?} zone
     * @param {?} injector
     * @param {?} scriptService
     */
    constructor(renderer, zone, injector, scriptService) {
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
         * Prefix of the captcha element
         */
        this.captchaElemPrefix = 'ngx_captcha_id_';
        this.setupCaptcha = true;
        /**
         * Indicates if global domain 'recaptcha.net' should be used instead of default domain ('google.com')
         */
        this.useGlobalDomain = false;
        /**
         * Type
         */
        this.type = 'image';
        /**
         * Tab index
         */
        this.tabIndex = 0;
        /**
         * Called when captcha receives successful response.
         * Captcha response token is passed to event.
         */
        this.success = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when captcha is loaded. Event receives id of the captcha
         */
        this.load = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when captcha is reset.
         */
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
         */
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Error callback
         */
        this.error = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Expired callback
         */
        this.expire = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        /**
         * Indicates if captcha should be set on load
         */
        this.setupAfterLoad = false;
        /**
         * If enabled, captcha will reset after receiving success response. This is useful
         * when invisible captcha need to be resolved multiple times on same page
         */
        this.resetCaptchaAfterSuccess = false;
        /**
         * Indicates if captcha is loaded
         */
        this.isLoaded = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.control = this.injector.get(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControl).control;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.setupCaptcha) {
            this.setupCaptcha = false;
            this.setupComponent();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // cleanup scripts if language changed because they need to be reloaded
        if (changes && changes.hl) {
            // cleanup scripts when language changes
            if (!changes.hl.firstChange && (changes.hl.currentValue !== changes.hl.previousValue)) {
                this.scriptService.cleanup();
            }
        }
        if (changes && changes.useGlobalDomain) {
            // cleanup scripts when domain changes
            if (!changes.useGlobalDomain.firstChange && (changes.useGlobalDomain.currentValue !== changes.useGlobalDomain.previousValue)) {
                this.scriptService.cleanup();
            }
        }
        this.setupCaptcha = true;
    }
    /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    getResponse() {
        return this.reCaptchaApi.getResponse(this.captchaId);
    }
    /**
     * Gets Id of captcha widget
     * @return {?}
     */
    getCaptchaId() {
        return this.captchaId;
    }
    /**
     * Resets captcha
     * @return {?}
     */
    resetCaptcha() {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            // reset captcha using Google js api
            this.reCaptchaApi.reset();
            // required due to forms
            this.onChange(undefined);
            this.onTouched(undefined);
            // trigger reset event
            this.reset.next();
        }));
    }
    /**
     * Gets last submitted captcha response
     * @return {?}
     */
    getCurrentResponse() {
        return this.currentResponse;
    }
    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    reloadCaptcha() {
        this.setupComponent();
    }
    /**
     * @protected
     * @param {?} captchaElemId
     * @return {?}
     */
    ensureCaptchaElem(captchaElemId) {
        /** @type {?} */
        const captchaElem = document.getElementById(captchaElemId);
        if (!captchaElem) {
            throw Error(`Captcha element with id '${captchaElemId}' was not found`);
        }
        // assign captcha alem
        this.captchaElem = captchaElem;
    }
    /**
     * Responsible for instantiating captcha element
     * @protected
     * @return {?}
     */
    renderReCaptcha() {
        // run outside angular zone due to timeout issues when testing
        // details: https://github.com/Enngage/ngx-captcha/issues/26
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.captchaId = this.reCaptchaApi.render(this.captchaElemId, this.getCaptchaProperties());
            this.ready.next();
        }));
    }
    /**
     * Called when captcha receives response
     * @protected
     * @param {?} callback Callback
     * @return {?}
     */
    handleCallback(callback) {
        this.currentResponse = callback;
        this.success.next(callback);
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.onChange(callback);
            this.onTouched(callback);
        }));
        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    }
    /**
     * @private
     * @return {?}
     */
    getPseudoUniqueNumber() {
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
    }
    /**
     * @private
     * @return {?}
     */
    setupComponent() {
        // captcha specific setup
        this.captchaSpecificSetup();
        // create captcha wrapper
        this.createAndSetCaptchaElem();
        this.scriptService.registerCaptchaScript(this.useGlobalDomain, 'explicit', (/**
         * @param {?} grecaptcha
         * @return {?}
         */
        (grecaptcha) => {
            this.onloadCallback(grecaptcha);
        }), this.hl);
    }
    /**
     * Called when google's recaptcha script is ready
     * @private
     * @param {?} grecapcha
     * @return {?}
     */
    onloadCallback(grecapcha) {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecapcha;
        if (!this.reCaptchaApi) {
            throw Error(`ReCaptcha Api was not initialized correctly`);
        }
        // loaded flag
        this.isLoaded = true;
        // fire load event
        this.load.next();
        // render captcha
        this.renderReCaptcha();
        // setup component if it was flagged as such
        if (this.setupAfterLoad) {
            this.setupAfterLoad = false;
            this.setupComponent();
        }
    }
    /**
     * @private
     * @return {?}
     */
    generateNewElemId() {
        return this.captchaElemPrefix + this.getPseudoUniqueNumber();
    }
    /**
     * @private
     * @return {?}
     */
    createAndSetCaptchaElem() {
        // generate new captcha id
        this.captchaElemId = this.generateNewElemId();
        if (!this.captchaElemId) {
            throw Error(`Captcha elem Id is not set`);
        }
        if (!this.captchaWrapperElem) {
            throw Error(`Captcha DOM element is not initialized`);
        }
        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';
        // create new wrapper for captcha
        /** @type {?} */
        const newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;
        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
        // when use captcha in cdk stepper then throwing error Captcha element with id 'ngx_captcha_id_XXXX' not found
        // to fix it checking ensureCaptchaElem in timeout so that its check in next call and its able to find element
        setTimeout((/**
         * @return {?}
         */
        () => {
            // update captcha elem
            if (this.captchaElemId) {
                this.ensureCaptchaElem(this.captchaElemId);
            }
        }), 0);
    }
    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) { }
    /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Handles error callback
     * @protected
     * @return {?}
     */
    handleErrorCallback() {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.onChange(undefined);
            this.onTouched(undefined);
        }));
        this.error.next();
    }
    /**
     * Handles expired callback
     * @protected
     * @return {?}
     */
    handleExpireCallback() {
        this.expire.next();
        // reset captcha on expire callback
        this.resetCaptcha();
    }
}
BaseReCaptchaComponent.ɵfac = function BaseReCaptchaComponent_Factory(t) { return new (t || BaseReCaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptService)); };
BaseReCaptchaComponent.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BaseReCaptchaComponent, inputs: { useGlobalDomain: "useGlobalDomain", type: "type", tabIndex: "tabIndex", siteKey: "siteKey", hl: "hl" }, outputs: { success: "success", load: "load", reset: "reset", ready: "ready", error: "error", expire: "expire" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
BaseReCaptchaComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: ScriptService }
];
BaseReCaptchaComponent.propDecorators = {
    siteKey: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    useGlobalDomain: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    type: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    tabIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    success: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    load: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    reset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    expire: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BaseReCaptchaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: ScriptService }]; }, { useGlobalDomain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], tabIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], success: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], load: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], reset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], expire: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], siteKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/recaptcha-type.enum.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const ReCaptchaType = {
    InvisibleReCaptcha: 0,
    ReCaptcha2: 1,
};
ReCaptchaType[ReCaptchaType.InvisibleReCaptcha] = 'InvisibleReCaptcha';
ReCaptchaType[ReCaptchaType.ReCaptcha2] = 'ReCaptcha2';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/invisible-recaptcha.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InvisibleReCaptchaComponent extends BaseReCaptchaComponent {
    /**
     * @param {?} renderer
     * @param {?} zone
     * @param {?} injector
     * @param {?} scriptService
     */
    constructor(renderer, zone, injector, scriptService) {
        super(renderer, zone, injector, scriptService);
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
         * This size representing invisible captcha
         */
        this.size = 'invisible';
        /**
         * Theme
         */
        this.theme = 'light';
        /**
         * Badge
         */
        this.badge = 'bottomright';
        this.recaptchaType = ReCaptchaType.InvisibleReCaptcha;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    execute() {
        // execute captcha
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.reCaptchaApi.execute(this.captchaId)));
    }
    /**
     * @protected
     * @return {?}
     */
    captchaSpecificSetup() {
    }
    /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    getCaptchaProperties() {
        return {
            'sitekey': this.siteKey,
            'callback': (/**
             * @param {?} response
             * @return {?}
             */
            (response) => this.zone.run((/**
             * @return {?}
             */
            () => this.handleCallback(response)))),
            'expired-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleExpireCallback()))),
            'error-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleErrorCallback()))),
            'badge': this.badge,
            'type': this.type,
            'tabindex': this.tabIndex,
            'size': this.size,
            'theme': this.theme
        };
    }
}
InvisibleReCaptchaComponent.ɵfac = function InvisibleReCaptchaComponent_Factory(t) { return new (t || InvisibleReCaptchaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptService)); };
InvisibleReCaptchaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvisibleReCaptchaComponent, selectors: [["ngx-invisible-recaptcha"]], viewQuery: function InvisibleReCaptchaComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.captchaWrapperElem = _t.first);
    } }, inputs: { theme: "theme", badge: "badge", hl: "hl" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                 * @return {?}
                 */() => InvisibleReCaptchaComponent)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["captchaWrapperElem", ""]], template: function InvisibleReCaptchaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    } }, encapsulation: 2 });
/** @nocollapse */
InvisibleReCaptchaComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: ScriptService }
];
InvisibleReCaptchaComponent.propDecorators = {
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    badge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    captchaWrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['captchaWrapperElem', { static: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvisibleReCaptchaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-invisible-recaptcha',
                template: `
  <div #captchaWrapperElem></div>`,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                         * @return {?}
                         */() => InvisibleReCaptchaComponent)),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: ScriptService }]; }, { theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], badge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], captchaWrapperElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['captchaWrapperElem', { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/recaptcha-2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReCaptcha2Component extends BaseReCaptchaComponent {
    /**
     * @param {?} renderer
     * @param {?} zone
     * @param {?} injector
     * @param {?} scriptService
     */
    constructor(renderer, zone, injector, scriptService) {
        super(renderer, zone, injector, scriptService);
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
         * Name of the global expire callback
         */
        this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
        /**
         * Name of the global error callback
         */
        this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
        /**
         * Theme
         */
        this.theme = 'light';
        /**
         * Size
         */
        this.size = 'normal';
        this.recaptchaType = ReCaptchaType.ReCaptcha2;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        window[this.windowOnErrorCallbackProperty] = {};
        window[this.windowOnExpireCallbackProperty] = {};
    }
    /**
     * @protected
     * @return {?}
     */
    captchaSpecificSetup() {
        this.registerCallbacks();
    }
    /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    getCaptchaProperties() {
        return {
            'sitekey': this.siteKey,
            'callback': (/**
             * @param {?} response
             * @return {?}
             */
            (response) => this.zone.run((/**
             * @return {?}
             */
            () => this.handleCallback(response)))),
            'expired-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleExpireCallback()))),
            'error-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleErrorCallback()))),
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabIndex
        };
    }
    /**
     * Registers global callbacks
     * @private
     * @return {?}
     */
    registerCallbacks() {
        window[this.windowOnErrorCallbackProperty] = super.handleErrorCallback.bind(this);
        window[this.windowOnExpireCallbackProperty] = super.handleExpireCallback.bind(this);
    }
}
ReCaptcha2Component.ɵfac = function ReCaptcha2Component_Factory(t) { return new (t || ReCaptcha2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ScriptService)); };
ReCaptcha2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReCaptcha2Component, selectors: [["ngx-recaptcha2"]], viewQuery: function ReCaptcha2Component_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.captchaWrapperElem = _t.first);
    } }, inputs: { theme: "theme", size: "size", hl: "hl" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                 * @return {?}
                 */() => ReCaptcha2Component)),
                multi: true
            }
        ]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["captchaWrapperElem", ""]], template: function ReCaptcha2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    } }, encapsulation: 2 });
/** @nocollapse */
ReCaptcha2Component.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector },
    { type: ScriptService }
];
ReCaptcha2Component.propDecorators = {
    theme: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    hl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    captchaWrapperElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['captchaWrapperElem', { static: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReCaptcha2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                selector: 'ngx-recaptcha2',
                template: `
  <div #captchaWrapperElem></div>`,
                providers: [
                    {
                        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                        useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(( /**
                         * @return {?}
                         */() => ReCaptcha2Component)),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector }, { type: ScriptService }]; }, { theme: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], hl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], captchaWrapperElem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['captchaWrapperElem', { static: false }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/recaptcha_v3.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ReCaptchaV3Service {
    /**
     * @param {?} scriptService
     * @param {?} zone
     */
    constructor(scriptService, zone) {
        this.scriptService = scriptService;
        this.zone = zone;
    }
    /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param {?} siteKey Site key found in your google admin panel
     * @param {?} action Action to log
     * @param {?} callback Callback function to to handle token
     * @param {?=} config Optional configuration like useGlobalDomain to be provided
     * @param {?=} errorCallback Optional Callback function to handle errors
     * @return {?}
     */
    execute(siteKey, action, callback, config, errorCallback) {
        this.executeAsPromise(siteKey, action, config)
            .then(callback)
            .catch((/**
         * @param {?} error
         * @return {?}
         */
        (error) => errorCallback ? errorCallback(error) : console.error(error)));
    }
    /**
     * Executes reCaptcha v3 with given action and returns token via Promise. You need to verify
     * this token in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param {?} siteKey Site key found in your google admin panel
     * @param {?} action Action to log
     * @param {?=} config
     * @return {?}
     */
    executeAsPromise(siteKey, action, config) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const useGlobalDomain = config && config.useGlobalDomain ? true : false;
            /** @type {?} */
            const onRegister = (/**
             * @param {?} grecaptcha
             * @return {?}
             */
            grecaptcha => {
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    try {
                        grecaptcha
                            .execute(siteKey, { action })
                            .then((/**
                         * @param {?} token
                         * @return {?}
                         */
                        token => this.zone.run((/**
                         * @return {?}
                         */
                        () => resolve(token)))));
                    }
                    catch (error) {
                        reject(error);
                    }
                }));
            });
            this.scriptService.registerCaptchaScript(useGlobalDomain, siteKey, onRegister);
        }));
    }
}
ReCaptchaV3Service.ɵfac = function ReCaptchaV3Service_Factory(t) { return new (t || ReCaptchaV3Service)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScriptService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
ReCaptchaV3Service.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReCaptchaV3Service, factory: ReCaptchaV3Service.ɵfac });
/** @nocollapse */
ReCaptchaV3Service.ctorParameters = () => [
    { type: ScriptService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReCaptchaV3Service, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: ScriptService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-captcha.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxCaptchaModule {
}
NgxCaptchaModule.ɵfac = function NgxCaptchaModule_Factory(t) { return new (t || NgxCaptchaModule)(); };
NgxCaptchaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxCaptchaModule });
NgxCaptchaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        ScriptService,
        ReCaptchaV3Service
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxCaptchaModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
                ],
                declarations: [
                    ReCaptcha2Component,
                    InvisibleReCaptchaComponent
                ],
                providers: [
                    ScriptService,
                    ReCaptchaV3Service
                ],
                exports: [
                    ReCaptcha2Component,
                    InvisibleReCaptchaComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxCaptchaModule, { declarations: function () { return [ReCaptcha2Component, InvisibleReCaptchaComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [ReCaptcha2Component, InvisibleReCaptchaComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-captcha.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-captcha.js.map

/***/ }),

/***/ 40431:
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageRoutingModule": () => (/* binding */ AuthPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _gr_validate_gr_validate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gr-validate/gr-validate.component */ 59807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page */ 13561);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 67225);
/* harmony import */ var _validate_validate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate/validate.component */ 57799);







const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent,
    },
    {
        path: 'validate/:id',
        component: _validate_validate_component__WEBPACK_IMPORTED_MODULE_3__.ValidateComponent,
    },
    {
        path: 'validategr/:id',
        component: _gr_validate_gr_validate_component__WEBPACK_IMPORTED_MODULE_0__.GrValidateComponent,
    },
    {
        path: 'login',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_1__.AuthPage,
    },
    {
        path: 'forgot',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_forgot_forgot_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./forgot/forgot.module */ 73810)).then(m => m.ForgotPageModule)
    },
    {
        path: 'reset',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_auth_reset_reset_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./reset/reset.module */ 88403)).then(m => m.ResetPageModule)
    },
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ 71674:
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPageModule": () => (/* binding */ AuthPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _gr_validate_gr_validate_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gr-validate/gr-validate.component */ 59807);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-routing.module */ 40431);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ 67225);
/* harmony import */ var _validate_validate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validate/validate.component */ 57799);
/* harmony import */ var ngx_captcha__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-captcha */ 33679);
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.page */ 13561);











let AuthPageModule = class AuthPageModule {
};
AuthPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_1__.AuthPageRoutingModule,
            ngx_captcha__WEBPACK_IMPORTED_MODULE_10__.NgxCaptchaModule
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_4__.AuthPage, _register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent, _validate_validate_component__WEBPACK_IMPORTED_MODULE_3__.ValidateComponent, _gr_validate_gr_validate_component__WEBPACK_IMPORTED_MODULE_0__.GrValidateComponent],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_6__.CUSTOM_ELEMENTS_SCHEMA]
    })
], AuthPageModule);



/***/ }),

/***/ 13561:
/*!***********************************!*\
  !*** ./src/app/auth/auth.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthPage": () => (/* binding */ AuthPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./auth.page.html */ 21643);
/* harmony import */ var _auth_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.page.scss */ 90957);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ 88368);








let AuthPage = class AuthPage {
    constructor(route, router, authenticationService, loadingController, toastController) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.captchaIsLoaded = false;
        this.captchaSuccess = false;
        this.captchaIsExpired = false;
        this.theme = 'dark';
        this.size = 'normal';
        this.lang = 'en';
        this.model = {};
        this.showPass = false;
        if (this.authenticationService.userValue) {
            this.router.navigate(['/tabs']);
        }
    }
    ngOnInit() { }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 1000,
            });
            toast.present();
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(this.model);
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            // this.loading = true;
            this.authenticationService
                .login(this.model.email, this.model.password, this.model.gresponse)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                if (res.status === 'success') {
                    const color = 'success';
                    this.presentToast(color, res.message);
                    // const api_token = res.result.api_token;
                    const returnUrl = this.route.snapshot.queryParams.returnUrl || '/tabs';
                    this.router.navigateByUrl(returnUrl);
                }
                else {
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.error = res.message;
                    // this.loading = false;
                }
            }), (err) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                this.error = err;
            }));
        });
    }
    handleSuccess(event) {
        // console.log('e', event);
    }
};
AuthPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
AuthPage.propDecorators = {
    captchaElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['captchaElem',] }],
    langInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['langInput',] }]
};
AuthPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-auth',
        template: _raw_loader_auth_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_auth_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AuthPage);



/***/ }),

/***/ 59807:
/*!***********************************************************!*\
  !*** ./src/app/auth/gr-validate/gr-validate.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GrValidateComponent": () => (/* binding */ GrValidateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_gr_validate_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./gr-validate.component.html */ 24383);
/* harmony import */ var _gr_validate_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gr-validate.component.scss */ 66517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ 88368);



/* eslint-disable @typescript-eslint/naming-convention */





let GrValidateComponent = class GrValidateComponent {
    constructor(route, router, authenticationService, loadingController, toastController) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.model = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield localStorage.getItem('greenroom_token');
            this.greenroom_token = data;
            // alert(this.ch_token);
            this.api_token = this.route.snapshot.paramMap.get('id');
        });
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 1000
            });
            toast.present();
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.authenticationService
                .validategr(this.api_token, this.model.firstname, this.model.lastname, this.model.ch_username)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    const color = 'success';
                    this.presentToast(color, res.message);
                    this.authenticationService
                        .getDetails(this.api_token)
                        // tslint:disable-next-line: no-shadowed-variable
                        .subscribe((_res) => {
                        // console.log(res);
                        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app/home';
                        this.router.navigateByUrl('/tabs');
                    });
                }
                else {
                    // this.alertService.danger(res.message);
                    this.error = res.message;
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.loading = false;
                }
            }), (err) => {
                this.error = err;
                // this.loading = false;
            });
        });
    }
    logOut() {
        // alert(1);
        this.authenticationService.logout();
    }
};
GrValidateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
GrValidateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-gr-validate',
        template: _raw_loader_gr_validate_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_gr_validate_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], GrValidateComponent);



/***/ }),

/***/ 67225:
/*!*****************************************************!*\
  !*** ./src/app/auth/register/register.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.component.html */ 86613);
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss */ 32948);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ 88368);








let RegisterComponent = class RegisterComponent {
    constructor(route, router, authenticationService, loadingController, toastController) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.captchaIsLoaded = false;
        this.captchaSuccess = false;
        this.captchaIsExpired = false;
        this.theme = 'light';
        this.size = 'normal';
        this.lang = 'en';
        this.model = {};
        this.showPass = false;
    }
    ngOnInit() { }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 1000,
            });
            toast.present();
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(this.model);
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading',
            });
            yield loading.present();
            this.authenticationService
                .register(this.model.email, this.model.password, this.model.name, this.model.gresponse)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    const color = 'success';
                    this.presentToast(color, res.message);
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app/home';
                    this.router.navigateByUrl('/tabs');
                }
                else {
                    // this.alertService.danger(res.message);
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    this.error = res.message;
                    // this.loading = false;
                }
            }), (err) => {
                this.error = err;
                console.log(err);
            });
        });
    }
    handleSuccess(event) {
        // console.log('e', event);
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
RegisterComponent.propDecorators = {
    captchaElem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['captchaElem',] }],
    langInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['langInput',] }]
};
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterComponent);



/***/ }),

/***/ 57799:
/*!*****************************************************!*\
  !*** ./src/app/auth/validate/validate.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidateComponent": () => (/* binding */ ValidateComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_validate_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./validate.component.html */ 73798);
/* harmony import */ var _validate_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate.component.scss */ 78725);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 28049);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_services/auth.service */ 88368);



/* eslint-disable @typescript-eslint/naming-convention */





let ValidateComponent = class ValidateComponent {
    constructor(route, router, authenticationService, loadingController, toastController) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loadingController = loadingController;
        this.toastController = toastController;
        this.model = {};
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const data = yield localStorage.getItem('ch_token');
            this.ch_token = data;
            // alert(this.ch_token);
            this.api_token = this.route.snapshot.paramMap.get('id');
        });
    }
    presentToast(color, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message,
                color,
                duration: 1000
            });
            toast.present();
        });
    }
    onSubmit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                spinner: null,
                cssClass: 'custom-loading'
            });
            yield loading.present();
            this.authenticationService
                .validate(this.api_token, this.model.ch_username)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.first)())
                .subscribe((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                yield loading.dismiss();
                // console.log(res);
                if (res.status === 'success') {
                    const color = 'success';
                    this.presentToast(color, res.message);
                    this.authenticationService
                        .getDetails(this.api_token)
                        // tslint:disable-next-line: no-shadowed-variable
                        .subscribe((_res) => {
                        // console.log(res);
                        // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/app/home';
                        this.router.navigateByUrl('/tabs');
                    });
                }
                else {
                    // this.alertService.danger(res.message);
                    this.error = res.message;
                    const color = 'danger';
                    this.presentToast(color, res.message);
                    // this.loading = false;
                }
            }), (err) => {
                this.error = err;
                // this.loading = false;
            });
        });
    }
    logOut() {
        // alert(1);
        this.authenticationService.logout();
    }
};
ValidateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController }
];
ValidateComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-validate',
        template: _raw_loader_validate_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_validate_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ValidateComponent);



/***/ }),

/***/ 90957:
/*!*************************************!*\
  !*** ./src/app/auth/auth.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content .logo {\n  /* width: 30vh; */\n  height: 30vh;\n  margin: 0vh auto;\n  text-align: center;\n  background: url('socialConnector.jpeg') 0px 0%/100% 100% no-repeat;\n}\n\nion-item.mb {\n  margin-bottom: 20px !important;\n}\n\n.errors {\n  font-size: small;\n  color: red !important;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.captchaspace {\n  width: 100%;\n  overflow: hidden !important;\n  text-align: center !important;\n  background-color: transparent !important;\n}\n\n.white {\n  margin: 0 auto !important;\n  background-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGgucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGtFQUFBO0FBREo7O0FBS0E7RUFDRSw4QkFBQTtBQUZGOztBQUtBO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBRUUsV0FBQTtFQUNBLDJCQUFBO0VBRUEsNkJBQUE7RUFDQSx3Q0FBQTtBQUxGOztBQVFBO0VBSUUseUJBQUE7RUFDQSx3Q0FBQTtBQVJGIiwiZmlsZSI6ImF1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5sb2dvIHtcclxuICAgIC8qIHdpZHRoOiAzMHZoOyAqL1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgbWFyZ2luOiAwdmggYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9zb2NpYWxDb25uZWN0b3IuanBlZ1wiKSAwcHggMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtLm1iIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lcnJvcnMge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5jYXB0Y2hhc3BhY2V7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG4gIC8vIGhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi53aGl0ZXtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAvLyBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAvLyB3aWR0aDogNTB2dyAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 66517:
/*!*************************************************************!*\
  !*** ./src/app/auth/gr-validate/gr-validate.component.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnci12YWxpZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 32948:
/*!*******************************************************!*\
  !*** ./src/app/auth/register/register.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content .logo {\n  /* width: 30vh; */\n  height: 30vh;\n  margin: 0vh auto;\n  text-align: center;\n  background: url('socialConnector.jpeg') 0px 0%/100% 100% no-repeat;\n}\n\n.errors {\n  font-size: small;\n  color: red !important;\n  padding-left: 15px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\n\n.captchaspace {\n  width: 100%;\n  overflow: hidden !important;\n  text-align: center !important;\n}\n\n.white {\n  margin: 0 auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUVELGtFQUFBO0FBRkg7O0FBU0E7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBVUE7RUFFRSxXQUFBO0VBQ0EsMkJBQUE7RUFFQSw2QkFBQTtBQVRGOztBQVlBO0VBSUUseUJBQUE7QUFaRiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLyAtLWJhY2tncm91bmQ6ICNmMWVlZTMgIWltcG9ydGFudDtcclxuICAubG9nbyB7XHJcbiAgICAvKiB3aWR0aDogMzB2aDsgKi9cclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIG1hcmdpbjogMHZoIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9zb2NpYWxDb25uZWN0b3IuanBlZ1wiKSAwcHggMCUvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxuICB9XHJcbn1cclxuXHJcbi8vIGlvbi1pdGVtIHtcclxuLy8gICBtYXJnaW4tYm90dG9tOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLmVycm9ycyB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLmNhcHRjaGFzcGFjZXtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbiAgLy8gaGVpZ2h0OiA1MHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi53aGl0ZXtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAvLyBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAvLyB3aWR0aDogNTB2dyAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjowIGF1dG8gIWltcG9ydGFudDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 78725:
/*!*******************************************************!*\
  !*** ./src/app/auth/validate/validate.component.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWxpZGF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 21643:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/auth.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n\n  <div class=\"logo\">\n\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <!-- <ion-card-title>Welcome</ion-card-title> -->\n      <ion-card-subtitle class=\"ion-text-center\">Please Sign in with credentials</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <form name=\"form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginForm.valid && onSubmit()\">\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\"\n            pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\"\n            [ngClass]=\"{ 'is-invalid': loginForm.submitted && email.invalid }\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"errors\">\n          <span *ngIf=\"email.errors?.required\">Email is required</span>\n          <span *ngIf=\"email.errors?.pattern\">Email is invalid</span>\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input minlength=\"6\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n            [ngClass]=\"{ 'is-invalid': loginForm.submitted && password.invalid }\" required\n            type=\"{{showPass ? 'text' : 'password'}}\"></ion-input>\n          <ion-icon size=\"large\" style=\"margin-top: 16px;\" item-end slot=\"end\" name=\"{{showPass ? 'eye-off' : 'eye'}}\"\n            (click)=\"showPass=!showPass\"></ion-icon>\n        </ion-item>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"errors\">\n          <span *ngIf=\"password.errors?.minlength\">Password cannot be less than 6 characters</span>\n          <span *ngIf=\"password.errors?.required\">Password is required</span>\n        </div>\n        <br>\n        <div class=\"captchaspace\">\n          <div class=\"white\">\n            <ngx-recaptcha2 #captchaElem [siteKey]=\"'6Lfmwq0aAAAAAESadMQxlzNREQ6LCqbrUCmWWDDd'\"\n              (success)=\"handleSuccess($event)\" [useGlobalDomain]=\"false\" [size]=\"size\" [hl]=\"lang\" [theme]=\"theme\"\n              [type]=\"type\" name=\"gresponse\" [(ngModel)]=\"model.gresponse\" #gresponse=\"ngModel\" required>\n            </ngx-recaptcha2>\n          </div>\n\n        </div>\n\n        <ion-button type=\"submit\" [disabled]=\"!loginForm.valid\" expand=\"full\" color=\"primary\">Login</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col size=\"6\">\n        <h5 class=\"ion-text-center\" style=\"font-size: .9em !important;\">\n          <a [routerLink]=\"['/auth/forgot']\" routerLinkActive=\"router-link-active\">Forgot Password?</a>\n        </h5>\n      </ion-col>\n      <ion-col size=\"6\">\n        <h5 class=\"ion-text-center\" style=\"font-size: .9em !important;\">\n          <a [routerLink]=\"['/auth/register']\" routerLinkActive=\"router-link-active\">Create new Account</a>\n        </h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ 24383:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/gr-validate/gr-validate.component.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <ion-card  class=\"ion-margin-top\">\n    <ion-card-header>\n      <ion-card-title>We need your Greenroom details in order to verify it's really you.</ion-card-title>\n      <ion-card-subtitle>Please Follow the following steps</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">Open your Greenroom app</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">Enter the code below this line and paste it anywhere in your Greenroom bio*</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n          <ion-label>\n            <h1> {{ greenroom_token }} </h1>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">After saving your bio*, click the \"I DID IT\" button below:* After completing the verification process,\n              you can remove the code from your bio.</h3>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <br>\n      <form name=\"form\" #validateForm=\"ngForm\" (ngSubmit)=\"validateForm.valid && onSubmit()\">\n        <ion-item>\n          <ion-label position=\"floating\">First name</ion-label>\n          <ion-input type=\"text\" name=\"firstname\"\n           [(ngModel)]=\"model.firstname\"\n           #firstname=\"ngModel\"\n           [ngClass]=\"{ 'is-invalid': validateForm.submitted && firstname.invalid }\"\n           required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Last Name</ion-label>\n          <ion-input type=\"text\" name=\"lastname\"\n           [(ngModel)]=\"model.lastname\"\n           #lastname=\"ngModel\"\n           [ngClass]=\"{ 'is-invalid': validateForm.submitted && lastname.invalid }\"\n           required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Username</ion-label>\n          <ion-input type=\"text\" name=\"ch_username\"\n           [(ngModel)]=\"model.ch_username\"\n           #ch_username=\"ngModel\"\n           [ngClass]=\"{ 'is-invalid': validateForm.submitted && ch_username.invalid }\"\n           required></ion-input>\n        </ion-item>\n        <br>\n        <ion-button type=\"submit\" [disabled]=\"!validateForm.valid\" expand=\"full\" color=\"primary\">i Did It</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <h5 class=\"ion-text-center\">\n    <ion-button color=\"secondary\" (click)=\"logOut()\" expand=\"full\">\n      <ion-icon slot=\"start\" name=\"log-out-outline\" ></ion-icon>Log Out\n    </ion-button>\n  </h5>\n</ion-content>\n");

/***/ }),

/***/ 86613:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/register/register.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n\n  <div class=\"logo\">\n\n  </div>\n  <ion-card>\n    <ion-card-header>\n      <!-- <ion-card-title>Welcome</ion-card-title> -->\n      <ion-card-subtitle class=\"ion-text-center\">Please Sign up with credentials</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <form name=\"form\" #registerForm=\"ngForm\" (ngSubmit)=\"registerForm.valid && onSubmit()\">\n        <ion-item>\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input type=\"text\" name=\"name\" [(ngModel)]=\"model.name\" #name=\"ngModel\"\n            [ngClass]=\"{ 'is-invalid': registerForm.submitted && name.invalid }\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"errors\">\n          <span *ngIf=\"name.errors?.required\">Name is required</span>\n          <!-- <span *ngIf=\"name.errors?.pattern\">Name is invalid</span> -->\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Email</ion-label>\n          <ion-input type=\"email\" name=\"email\" aria-autocomplete=\"email\" autocomplete=\"email\" name=\"email\"\n            [(ngModel)]=\"model.email\" #email=\"ngModel\" pattern=\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$\"\n            [ngClass]=\"{ 'is-invalid': registerForm.submitted && email.invalid }\" required></ion-input>\n        </ion-item>\n        <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"errors\">\n          <span *ngIf=\"email.errors?.required\">Email is required</span>\n          <span *ngIf=\"email.errors?.pattern\">Email is invalid</span>\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input name=\"password\" type=\"{{showPass ? 'text' : 'password'}}\" minlength=\"6\" name=\"password\"\n            autocomplete=\"password\" aria-autocomplete=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\"\n            [ngClass]=\"{ 'is-invalid': registerForm.submitted && password.invalid }\" required></ion-input>\n          <ion-icon size=\"large\" style=\"margin-top: 16px;\" item-end slot=\"end\" name=\"{{showPass ? 'eye-off' :'eye'}}\"\n            (click)=\"showPass=!showPass\"></ion-icon>\n        </ion-item>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"errors\">\n          <span *ngIf=\"password.errors?.minlength\">Password cannot be less than 6 characters</span>\n          <span *ngIf=\"password.errors?.required\">Password is required</span>\n        </div>\n        <br>\n        <div class=\"captchaspace\">\n          <div class=\"white\">\n            <ngx-recaptcha2 #captchaElem [siteKey]=\"'6Lfmwq0aAAAAAESadMQxlzNREQ6LCqbrUCmWWDDd'\"\n              (success)=\"handleSuccess($event)\" [useGlobalDomain]=\"false\" [size]=\"size\" [hl]=\"lang\" [theme]=\"theme\"\n              [type]=\"type\" name=\"gresponse\" [(ngModel)]=\"model.gresponse\" #gresponse=\"ngModel\">\n            </ngx-recaptcha2>\n          </div>\n\n        </div>\n\n        <ion-button type=\"submit\" [disabled]=\"!registerForm.valid\" expand=\"full\" color=\"primary\">Register</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <h5 class=\"ion-text-center\" style=\"font-size: .8em !important;\">\n    <a [routerLink]=\"['/auth']\" routerLinkActive=\"router-link-active\">Sign In</a>\n  </h5>\n</ion-content>\n");

/***/ }),

/***/ 73798:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/validate/validate.component.html ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content class=\"ion-padding\">\n  <div style=\"height: 3vh; margin: 2vh auto;\"></div>\n  <ion-card >\n    <ion-card-header>\n      <ion-card-title>We need your Clubhouse username in order to verify it's really you.</ion-card-title>\n      <ion-card-subtitle>Please Follow the following steps</ion-card-subtitle>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">Open your Clubhouse app</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">Enter the code below this line and paste it anywhere in your Clubhouse bio*</h3>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n          <ion-label>\n            <h1> {{ ch_token }} </h1>\n          </ion-label>\n        </ion-item>\n        <ion-item>\n          <ion-icon slot=\"start\" name=\"arrow-forward-circle-outline\"></ion-icon>\n          <ion-label>\n            <h3 class=\"ion-text-wrap\">After saving your bio*, click the \"I DID IT\" button below:* After completing the verification process,\n              you can remove the code from your bio.</h3>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <br>\n      <form name=\"form\" #validateForm=\"ngForm\" (ngSubmit)=\"validateForm.valid && onSubmit()\">\n        <ion-item>\n          <ion-label position=\"floating\">Clubhouse Username</ion-label>\n          <ion-input type=\"text\" name=\"ch_username\"\n           [(ngModel)]=\"model.ch_username\"\n           #ch_username=\"ngModel\"\n           [ngClass]=\"{ 'is-invalid': validateForm.submitted && ch_username.invalid }\"\n           required></ion-input>\n        </ion-item>\n        <br>\n        <ion-button type=\"submit\" [disabled]=\"!validateForm.valid\" expand=\"full\" color=\"primary\">i Did It</ion-button>\n      </form>\n    </ion-card-content>\n  </ion-card>\n  <h5 class=\"ion-text-center\">\n    <ion-button color=\"secondary\" (click)=\"logOut()\" expand=\"full\">\n      <ion-icon slot=\"start\" name=\"log-out-outline\" ></ion-icon>Log Out\n    </ion-button>\n  </h5>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_auth_auth_module_ts.js.map