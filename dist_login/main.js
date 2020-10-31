(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./pages/content-pages/content-pages.module": [
		"./src/app/pages/content-pages/content-pages.module.ts",
		"pages-content-pages-content-pages-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/routes/full-layout.routes */ "./src/app/shared/routes/full-layout.routes.ts");
/* harmony import */ var _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/routes/content-layout.routes */ "./src/app/shared/routes/content-layout.routes.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _dashboard_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/auth/auth.component */ "./src/app/dashboard/auth/auth.component.ts");
/* harmony import */ var _dashboard_reset_reset_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/reset/reset.component */ "./src/app/dashboard/reset/reset.component.ts");
/* harmony import */ var _dashboard_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/forgot/forgot.component */ "./src/app/dashboard/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    {
        path: '',
        redirectTo: 'auth',
        pathMatch: 'full',
    },
    { path: 'auth', component: _dashboard_auth_auth_component__WEBPACK_IMPORTED_MODULE_7__["AuthComponent"] },
    { path: 'reset/:id', component: _dashboard_reset_reset_component__WEBPACK_IMPORTED_MODULE_8__["ResetComponent"] },
    { path: 'forgot/:id', component: _dashboard_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_9__["ForgotComponent"] },
    { path: '', component: _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_2__["FullLayoutComponent"], data: { title: 'full Views' }, children: _shared_routes_full_layout_routes__WEBPACK_IMPORTED_MODULE_4__["Full_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: '', component: _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"], data: { title: 'content Views' }, children: _shared_routes_content_layout_routes__WEBPACK_IMPORTED_MODULE_5__["CONTENT_ROUTES"], canActivate: [_shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n    <span *ngIf=\"showLoader\" class=\"loading\"></span>\r\n</router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/content/content-layout.component */ "./src/app/layouts/content/content-layout.component.ts");
/* harmony import */ var _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/full/full-layout.component */ "./src/app/layouts/full/full-layout.component.ts");
/* harmony import */ var _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/auth/auth.service */ "./src/app/shared/auth/auth.service.ts");
/* harmony import */ var _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/auth/auth-guard.service */ "./src/app/shared/auth/auth-guard.service.ts");
/* harmony import */ var _dashboard_auth_auth_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/auth/auth.component */ "./src/app/dashboard/auth/auth.component.ts");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var _dashboard_reset_reset_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/reset/reset.component */ "./src/app/dashboard/reset/reset.component.ts");
/* harmony import */ var _dashboard_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/forgot/forgot.component */ "./src/app/dashboard/forgot/forgot.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _layouts_full_full_layout_component__WEBPACK_IMPORTED_MODULE_16__["FullLayoutComponent"],
                _layouts_content_content_layout_component__WEBPACK_IMPORTED_MODULE_15__["ContentLayoutComponent"],
                _dashboard_auth_auth_component__WEBPACK_IMPORTED_MODULE_19__["AuthComponent"],
                _dashboard_reset_reset_component__WEBPACK_IMPORTED_MODULE_22__["ResetComponent"],
                _dashboard_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_23__["ForgotComponent"],
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_10__["StoreModule"].forRoot({}),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_11__["DragulaModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]]
                    }
                }),
                _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
                }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                ngx_cookie__WEBPACK_IMPORTED_MODULE_13__["CookieModule"].forRoot(),
            ],
            providers: [
                _shared_auth_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _shared_auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"],
                _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_20__["ToasterService"],
                _shared_services_loader_service__WEBPACK_IMPORTED_MODULE_21__["LoaderService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/auth/auth.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/auth/auth.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Login Page Starts-->\r\n<section id=\"login\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row full-height-vh\">\r\n            <div class=\"col-12 d-flex align-items-center justify-content-center\">\r\n                <div class=\"card gradient-indigo-purple text-center width-400\">\r\n                    <div class=\"card-img overlap\">\r\n                        <img alt=\"element 06\" class=\"mb-1\" src=\"assets/img/portrait/avatars/avatar-08.png\" width=\"190\">\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"card-block\">\r\n                            <h2 class=\"white\">Login</h2>\r\n                            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                                <div class=\"form-group\" [ngClass]=\"{'has-error': loginForm.get('email').errors}\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                                            placeholder=\"Email\" required email>\r\n                                        <span class=\"form-text text-muted danger\"\r\n                                            *ngIf=\"loginForm.get('email').errors && (loginForm.get('email').touched || loginForm.get('email').dirty)\">\r\n                                            <span *ngIf=\"loginForm.get('email').errors.required\">Email is required</span>\r\n                                            <span *ngIf=\"loginForm.get('email').errors.email\">Invalid Email ID</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\" [ngClass]=\"{'has-error': loginForm.get('password').errors}\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                                            placeholder=\"Password\" required>\r\n                                        <span class=\"form-text text-muted danger\"\r\n                                            *ngIf=\"loginForm.get('password').errors && (loginForm.get('password').touched || loginForm.get('password').dirty)\">\r\n                                            <span *ngIf=\"loginForm.get('password').errors.required\">Password is\r\n                                                required</span>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                                <span *ngIf=\"showErrorMsg\" style=\"color: red\">{{showErrorMsg}}</span>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <button type=\"submit\" [disabled]=\"!loginForm.valid\"\r\n                                            class=\"btn btn-pink btn-block btn-raised\">Submit</button>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Login Page Ends-->"

/***/ }),

/***/ "./src/app/dashboard/auth/auth.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/auth/auth.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host /deep/ .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1); }\n\n:host /deep/ .ct-label {\n  font-size: 0.9rem; }\n\n:host /deep/ .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important; }\n\n:host /deep/ .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9; }\n\n:host /deep/ .lineArea .ct-line {\n  stroke-width: 0px; }\n\n:host /deep/ .lineArea .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important; }\n\n:host /deep/ .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #e9e9e9; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important; }\n\n:host /deep/ .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #843cf7; }\n\n:host /deep/ .lineArea2 .ct-series-b .ct-line {\n  stroke: #A675F4; }\n\n:host /deep/ .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #31afb2; }\n\n:host /deep/ .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px; }\n\n:host /deep/ .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: white; }\n\n:host /deep/ .lineChart .ct-series-a .ct-point-circle {\n  stroke: white; }\n\n:host /deep/ .lineChart .ct-line {\n  fill: none;\n  stroke: white;\n  stroke-width: 1px; }\n\n:host /deep/ .lineChart .ct-label {\n  color: #FFF; }\n\n:host /deep/ .lineChartShadow {\n  -webkit-filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .donut .ct-done .ct-slice-donut {\n  stroke: #0CC27E;\n  stroke-width: 24px !important; }\n\n:host /deep/ .donut .ct-progress .ct-slice-donut {\n  stroke: #FFC107;\n  stroke-width: 16px !important; }\n\n:host /deep/ .donut .ct-outstanding .ct-slice-donut {\n  stroke: #7E57C2;\n  stroke-width: 8px !important; }\n\n:host /deep/ .donut .ct-started .ct-slice-donut {\n  stroke: #2196F3;\n  stroke-width: 32px !important; }\n\n:host /deep/ .donut .ct-label {\n  text-anchor: middle;\n  alignment-baseline: middle;\n  font-size: 20px;\n  fill: #868e96; }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\"); }\n\n:host /deep/ .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\"); }\n\n:host /deep/ .BarChartShadow {\n  -webkit-filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\n:host /deep/ .WidgetlineChart .ct-point {\n  stroke-width: 0px; }\n\n:host /deep/ .WidgetlineChart .ct-line {\n  stroke: #fff; }\n\n:host /deep/ .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(255, 255, 255, 0.2); }\n\n:host /deep/ .WidgetlineChartshadow {\n  -webkit-filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.8));\n  /* Same syntax as box-shadow, except \r\n                                                       for the spread property */ }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2F1dGgvRDpcXGhpcmluZy9zcmNcXGFwcFxcZGFzaGJvYXJkXFxhdXRoXFxhdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0JBQXFCO0VBQ3JCLDJCQUEwQixFQUM3Qjs7QUFFRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFJRDtFQUNJLGtCQUFpQjtFQUNqQix3REFBNEQsRUFDL0Q7O0FBRUQ7RUFDSSx1REFBNEQ7RUFDNUQsa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQU1EO0VBR1ksdURBQTRELEVBQy9EOztBQUpUO0VBUVksZ0JBQWUsRUFDbEI7O0FBUVQ7RUFDSSx3REFBNkQsRUFDaEU7O0FBRUQ7RUFDSSx3REFBNkQsRUFDaEU7O0FBRUQ7RUFDSSxrQkFBaUI7RUFDakIsWUFBVyxFQUNkOztBQUVEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBRUQ7RUFDSSxnQkFBZSxFQUNsQjs7QUFFRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLGtCQUFpQixFQUNwQjs7QUFNRDtFQUNJLGtCQUFpQjtFQUNqQixZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSxjQUFhLEVBQ2hCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLGNBQWE7RUFDYixrQkFBaUIsRUFDcEI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDSSw2REFBMkQ7RUFDbkQscURBQW1EO0VBQUU7aUZBQ2dCLEVBQ2hGOztBQUtDO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBQ0Q7RUFDRSxnQkFBZTtFQUNmLDhCQUE2QixFQUM5Qjs7QUFDRDtFQUNFLGdCQUFlO0VBQ2YsNkJBQTRCLEVBQzdCOztBQUVEO0VBQ0UsZ0JBQWU7RUFDZiw4QkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSxvQkFBbUI7RUFDbkIsMkJBQTBCO0VBQzFCLGdCQUFlO0VBQ2YsY0FBYSxFQUNkOztBQU1EO0VBQ0UsK0NBQW9ELEVBQ3JEOztBQUNEO0VBQ0UsK0NBQW9ELEVBQ3JEOztBQUNEO0VBQ0UsK0NBQW9ELEVBQ3JEOztBQUNEO0VBQ0UsK0NBQW9ELEVBQ3JEOztBQUVEO0VBQ0UsNkRBQTJEO0VBQ25ELHFEQUFtRDtFQUFFO2lGQUNnQixFQUNoRjs7QUFNRDtFQUNJLGtCQUFpQixFQUNwQjs7QUFDRDtFQUNJLGFBQVksRUFDZjs7QUFHRDtFQUNJLHNCQUFxQjtFQUNwQixpQ0FBZ0MsRUFDcEM7O0FBRUQ7RUFDSSw2REFBMkQ7RUFDbkQscURBQW1EO0VBQUU7aUZBQ2dCLEVBQ2hGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Fzcy9zY3NzL2dyYWRpZW50LXZhcmlhYmxlc1wiO1xyXG5cclxuOmhvc3QgL2RlZXAvIC5jdC1ncmlke1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xyXG4gICAgc3Ryb2tlOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAuY3QtbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYSAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xyXG4gICAgZmlsbC1vcGFjaXR5OiAwLjc7XHJcbiAgICBmaWxsOnVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDEpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudCkgIWltcG9ydGFudDtcclxuICAgIGZpbGwtb3BhY2l0eTogMC45O1xyXG59XHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEgLmN0LWxpbmV7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhIC5jdC1wb2ludCB7XHJcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcclxufVxyXG5cclxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMSBDU1MgRW5kc1xyXG5cclxuLy8gU3RhY2sgQmFyIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAuU3RhY2tiYXJjaGFydHtcclxuICAgIC5jdC1zZXJpZXMtYSB7XHJcbiAgICAgICAgLmN0LWJhcntcclxuICAgICAgICAgICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjbGluZWFyKSAhaW1wb3J0YW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmN0LXNlcmllcy1iIHtcclxuICAgICAgICAuY3QtYmFye1xyXG4gICAgICAgICAgICBzdHJva2U6ICNlOWU5ZTk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBTdGFjayBCYXIgQ2hhcnQgQ1NTIEVuZHNcclxuXHJcbi8vIExpbmUgd2l0aCBBcmVhIENoYXJ0IDIgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcclxuICAgIGZpbGw6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtYXJlYSB7XHJcbiAgICBmaWxsOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQzKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG4gICAgZmlsbDogd2hpdGU7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xle1xyXG4gICAgc3Ryb2tlOiAjODQzY2Y3O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVBcmVhMiAuY3Qtc2VyaWVzLWIgLmN0LWxpbmV7XHJcbiAgICBzdHJva2U6ICNBNjc1RjQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcclxuICAgIHN0cm9rZTogIzMxYWZiMjtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQXJlYTIgLmN0LWxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xyXG59XHJcblxyXG4vLyBMaW5lIHdpdGggQXJlYSBDaGFydCAyIENTUyBFbmRzXHJcblxyXG4vLyBMaW5lIENoYXJ0IENTUyBTdGFydHNcclxuXHJcbjpob3N0IC9kZWVwLyAubGluZUNoYXJ0IC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAycHg7XHJcbiAgICBmaWxsOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xyXG4gICAgc3Ryb2tlOiB3aGl0ZTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxpbmUge1xyXG4gICAgZmlsbDogbm9uZTtcclxuICAgIHN0cm9rZTogd2hpdGU7XHJcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5saW5lQ2hhcnQgLmN0LWxhYmVsIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gLmxpbmVDaGFydFNoYWRvdyB7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAyNXB4IDhweCByZ2JhKDAsMCwwLDAuMykgKTtcclxuICAgICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDI1cHggOHB4IHJnYmEoMCwwLDAsMC4zKSApOyAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xyXG59XHJcblxyXG4vLyBMaW5lIENoYXJ0ICBDU1MgRW5kc1xyXG4gXHJcbiAgLy8gRG9udXQgQ2hhcnQgIENTUyBFbmRzXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xyXG4gICAgc3Ryb2tlOiAjMENDMjdFO1xyXG4gICAgc3Ryb2tlLXdpZHRoOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LXByb2dyZXNzIC5jdC1zbGljZS1kb251dCB7XHJcbiAgICBzdHJva2U6ICNGRkMxMDc7XHJcbiAgICBzdHJva2Utd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzdFNTdDMjtcclxuICAgIHN0cm9rZS13aWR0aDogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IC9kZWVwLyAuZG9udXQgLmN0LXN0YXJ0ZWQgLmN0LXNsaWNlLWRvbnV0IHtcclxuICAgIHN0cm9rZTogIzIxOTZGMztcclxuICAgIHN0cm9rZS13aWR0aDogMzJweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgOmhvc3QgL2RlZXAvIC5kb251dCAuY3QtbGFiZWwge1xyXG4gICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcclxuICAgIGFsaWdubWVudC1iYXNlbGluZTogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmlsbDogIzg2OGU5NjtcclxuICB9XHJcblxyXG4gIC8vIERvbnV0IENoYXJ0ICBDU1MgRW5kc1xyXG5cclxuICAvLyBCYXIgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzEpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nyk7XHJcbiAgfVxyXG4gIDpob3N0IC9kZWVwLyAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMikge1xyXG4gICAgc3Ryb2tlOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ1KTtcclxuICB9XHJcbiAgOmhvc3QgL2RlZXAvIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0biszKSB7XHJcbiAgICBzdHJva2U6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDYpO1xyXG4gIH1cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzQpIHtcclxuICAgIHN0cm9rZTogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NCk7XHJcbiAgfVxyXG5cclxuICA6aG9zdCAvZGVlcC8gLkJhckNoYXJ0U2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggMHB4IDIwcHggOHB4IHJnYmEoMCwwLDAsMC4zKSApO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMjBweCA4cHggcmdiYSgwLDAsMCwwLjMpICk7IC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciB0aGUgc3ByZWFkIHByb3BlcnR5ICovXHJcbn1cclxuXHJcbi8vIEJhciBDaGFydCBDU1MgRW5kc1xyXG5cclxuLy8gV2lkZ2V0IGxpbmUgQ2hhcnQgQ1NTIFN0YXJ0c1xyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LXBvaW50IHtcclxuICAgIHN0cm9rZS13aWR0aDogMHB4O1xyXG59XHJcbjpob3N0IC9kZWVwLyAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5le1xyXG4gICAgc3Ryb2tlOiAjZmZmO1xyXG59XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnQgLmN0LWdyaWQge1xyXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMHB4OyAgICBcclxuICAgICBzdHJva2U6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIC5XaWRnZXRsaW5lQ2hhcnRzaGFkb3cge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KCAwcHggMTVweCA1cHggcmdiYSgwLDAsMCwwLjgpICk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogZHJvcC1zaGFkb3coIDBweCAxNXB4IDVweCByZ2JhKDAsMCwwLDAuOCkgKTsgLyogU2FtZSBzeW50YXggYXMgYm94LXNoYWRvdywgZXhjZXB0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cclxufVxyXG5cclxuLy8gV2lkZ2V0IGxpbmUgQ2hhcnQgQ1NTIEVuZHMiXX0= */"

/***/ }),

/***/ "./src/app/dashboard/auth/auth.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/auth/auth.component.ts ***!
  \**************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthComponent = /** @class */ (function () {
    function AuthComponent(appservice, route, cookieservice, loaderservice) {
        this.appservice = appservice;
        this.route = route;
        this.cookieservice = cookieservice;
        this.loaderservice = loaderservice;
    }
    AuthComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
    };
    AuthComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.loginForm.invalid) {
            return;
        }
        if (this.loginForm.valid) {
            this.loaderservice.display(true);
            this.appservice.userLogin(this.loginForm.value.email, this.loginForm.value.password)
                .subscribe(function (data) {
                if (data.status == "1") {
                    _this.showErrorMsg = "";
                    _this.loginData = data.data;
                    _this.cookieservice.put("loginuserMerck", JSON.stringify(_this.loginData));
                    _this.loginForm.reset();
                    _this.route.navigate(['/dashboard']);
                }
                else {
                    _this.showErrorMsg = data.message;
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/dashboard/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/dashboard/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie__WEBPACK_IMPORTED_MODULE_4__["CookieService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/forgot/forgot.component.html":
/*!********************************************************!*\
  !*** ./src/app/dashboard/forgot/forgot.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [dir]=\"options.direction\">\r\n    <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <div class=\"main-content\">\r\n            <section id=\"basic-form-layouts\">\r\n                <div class=\"row text-left\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"content-header\">Forgot Password</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row text-left\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"px-3\">\r\n                                    <form [formGroup]=\"ResetForm\"  novalidate>\r\n                                        <div class=\"form-body\">\r\n                                            <h4 class=\"form-section\"><i class=\"ft-user\"></i> Password Info</h4>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"projectinput1\">Password</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-5\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"password\" placeholder=\"Enter password\" class=\"form-control\" formControlName=\"password\" required password>\r\n                                                        <span class=\"form-text text-muted danger\"\r\n                                                            *ngIf=\"ResetForm.get('password').errors && (ResetForm.get('password').touched || ResetForm.get('password').dirty)\">\r\n                                                            <span *ngIf=\"ResetForm.get('password').errors.required\">Password is required</span>\r\n                                                            <span *ngIf=\"ResetForm.get('password').errors.minLength\">Password must be at least 10 characters long</span>\r\n                                                            <span *ngIf=\"ResetForm.get('password').errors.pattern\">Your password must contain at least 10 characters, one uppercase, one lowercase, and one number</span>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"projectinput1\">Confirm Password</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-5\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"password\" placeholder=\"Enter confirm password\" class=\"form-control\" formControlName=\"cpassword\" required cpassword>\r\n                                                        <span class=\"form-text text-muted danger\"\r\n                                                            *ngIf=\"ResetForm.get('cpassword').errors && (ResetForm.get('cpassword').touched || ResetForm.get('cpassword').dirty)\">\r\n                                                            <span *ngIf=\"ResetForm.get('cpassword').errors.required\">Confirm password is required</span>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n            \r\n                                        <div class=\"form-actions center\">\r\n                                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                                <i class=\"ft-x\"></i> Cancel\r\n                                            </button>\r\n                                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" (click)=\"resetpassword()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                         </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <!--Footer Starts-->\r\n        <footer>\r\n            <div class=\"container-fluid\">\r\n                <p class=\"copyright text-center\">\r\n                        Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"#\">Erbitux</a>, All rights reserved.          \r\n                </p>\r\n                \r\n            </div>\r\n        </footer>\r\n        <!--Footer Ends-->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/forgot/forgot.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dashboard/forgot/forgot.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9mb3Jnb3QvZm9yZ290LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboard/forgot/forgot.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dashboard/forgot/forgot.component.ts ***!
  \******************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(appservice, router, route, toasterservice, loaderservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            console.log(this.id);
            this.ResetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                //password: new FormControl("", [Validators.required]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=^.{10,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$') //this is for the letters (both uppercase and lowercase) and numbers validation
                ])),
                cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
        }
    };
    ForgotComponent.prototype.resetpassword = function () {
        var _this = this;
        if (this.ResetForm.invalid) {
            return;
        }
        if (this.ResetForm.valid) {
            this.loaderservice.display(true);
            this.appservice.resetpassword(this.ResetForm.value, this.id)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/auth']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/forgot/', _this.id]);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    ForgotComponent.prototype.Gotolist = function () {
        this.router.navigate(['/auth']);
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/dashboard/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/app/dashboard/forgot/forgot.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/reset/reset.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/reset/reset.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [dir]=\"options.direction\">\r\n    <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <div class=\"main-content\">\r\n            <section id=\"basic-form-layouts\">\r\n                <div class=\"row text-left\">\r\n                    <div class=\"col-sm-12\">\r\n                        <div class=\"content-header\">Set Password</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row text-left\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"card\">\r\n                            <div class=\"card-body\">\r\n                                <div class=\"px-3\">\r\n                                    <form [formGroup]=\"ResetForm\"  novalidate>\r\n                                        <div class=\"form-body\">\r\n                                            <h4 class=\"form-section\"><i class=\"ft-user\"></i> Password Info</h4>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"projectinput1\">Password</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-5\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"password\" placeholder=\"Enter password\" class=\"form-control\" formControlName=\"password\" required password>\r\n                                                        <span class=\"form-text text-muted danger\"\r\n                                                            *ngIf=\"ResetForm.get('password').errors && (ResetForm.get('password').touched || ResetForm.get('password').dirty)\">\r\n                                                            <span *ngIf=\"ResetForm.get('password').errors.required\">Password is required</span>\r\n                                                            <span *ngIf=\"ResetForm.get('password').errors.minLength\">Password must be at least 10 characters long</span>\r\n                                                            <span *ngIf=\"ResetForm.get('password').errors.pattern\">Your password must contain at least 10 characters, one uppercase, one lowercase, and one number</span>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-2\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <label for=\"projectinput1\">Confirm Password</label>\r\n                                                    </div>\r\n                                                </div>\r\n                                                <div class=\"col-md-5\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"password\" placeholder=\"Enter confirm password\" class=\"form-control\" formControlName=\"cpassword\" required cpassword>\r\n                                                        <span class=\"form-text text-muted danger\"\r\n                                                            *ngIf=\"ResetForm.get('cpassword').errors && (ResetForm.get('cpassword').touched || ResetForm.get('cpassword').dirty)\">\r\n                                                            <span *ngIf=\"ResetForm.get('cpassword').errors.required\">Confirm password is required</span>\r\n                                                        </span>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n            \r\n                                        <div class=\"form-actions center\">\r\n                                            <button type=\"button\" class=\"btn btn-raised btn-raised btn-warning mr-1\" (click)=\"Gotolist()\">\r\n                                                <i class=\"ft-x\"></i> Cancel\r\n                                            </button>\r\n                                            <button type=\"submit\" class=\"btn btn-raised btn-raised btn-primary\" (click)=\"resetpassword()\"> <i class=\"fa fa-check-square-o\"></i>Submit</button>\r\n                                         </div>\r\n                                    </form>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/reset/reset.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/reset/reset.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9yZXNldC9yZXNldC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/reset/reset.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/reset/reset.component.ts ***!
  \****************************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResetComponent = /** @class */ (function () {
    function ResetComponent(appservice, router, route, toasterservice, loaderservice) {
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
    }
    ResetComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            console.log(this.id);
            this.ResetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                // password: new FormControl("", [Validators.required]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=^.{10,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$') //this is for the letters (both uppercase and lowercase) and numbers validation
                ])),
                cpassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            });
        }
    };
    ResetComponent.prototype.resetpassword = function () {
        var _this = this;
        if (this.ResetForm.invalid) {
            return;
        }
        if (this.ResetForm.valid) {
            this.loaderservice.display(true);
            this.appservice.resetpassword(this.ResetForm.value, this.id)
                .subscribe(function (data) {
                console.log(data);
                if (data.status == '1') {
                    _this.toasterservice.Success(data.message);
                    _this.router.navigate(['/auth']);
                }
                else if (data.status == '2') {
                    _this.toasterservice.Error(data.message);
                    _this.router.navigate(['/reset/', _this.id]);
                }
                else {
                    _this.toasterservice.Error(data.message);
                }
            });
        }
    };
    ResetComponent.prototype.Gotolist = function () {
        this.router.navigate(['/auth']);
    };
    ResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset',
            template: __webpack_require__(/*! ./reset.component.html */ "./src/app/dashboard/reset/reset.component.html"),
            styles: [__webpack_require__(/*! ./reset.component.scss */ "./src/app/dashboard/reset/reset.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"]])
    ], ResetComponent);
    return ResetComponent;
}());



/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n\r\n"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvY29udGVudC9jb250ZW50LWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/content/content-layout.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layouts/content/content-layout.component.ts ***!
  \*************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContentLayoutComponent = /** @class */ (function () {
    function ContentLayoutComponent() {
    }
    ContentLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-layout',
            template: __webpack_require__(/*! ./content-layout.component.html */ "./src/app/layouts/content/content-layout.component.html"),
            styles: [__webpack_require__(/*! ./content-layout.component.scss */ "./src/app/layouts/content/content-layout.component.scss")]
        })
    ], ContentLayoutComponent);
    return ContentLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" [dir]=\"options.direction\">\r\n    <div class=\"app-sidebar\" data-active-color=\"white\" data-background-color=\"black\" data-image=\"assets/img/sidebar-bg/01.jpg\">\r\n        <app-sidebar></app-sidebar>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <app-navbar></app-navbar>\r\n    <div class=\"main-panel\">\r\n        <div class=\"main-content\">\r\n            <div class=\"content-wrapper\">\r\n                <div class=\"container-fluid\">\r\n                    <router-outlet></router-outlet>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <app-footer></app-footer>\r\n    </div>\r\n    <app-notification-sidebar></app-notification-sidebar>\r\n    <app-customizer (directionEvent)=\"getOptions($event)\"></app-customizer>\r\n</div>"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZnVsbC9mdWxsLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/layouts/full/full-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/full/full-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: FullLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullLayoutComponent", function() { return FullLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var fireRefreshEventOnWindow = function () {
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent('resize', true, false);
    window.dispatchEvent(evt);
};
var FullLayoutComponent = /** @class */ (function () {
    function FullLayoutComponent(elementRef) {
        this.elementRef = elementRef;
        this.options = {
            direction: 'ltr'
        };
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
        //sidebar toggle event listner
        this.elementRef.nativeElement.querySelector('#sidebarToggle')
            .addEventListener('click', this.onClick.bind(this));
        //customizer events
        //this.elementRef.nativeElement.querySelector('#cz-compact-menu')
        //  .addEventListener('click', this.onClick.bind(this));
        //this.elementRef.nativeElement.querySelector('#cz-sidebar-width')
        //  .addEventListener('click', this.onClick.bind(this));
    };
    FullLayoutComponent.prototype.onClick = function (event) {
        //initialize window resizer event on sidebar toggle click event
        setTimeout(function () { fireRefreshEventOnWindow(); }, 300);
    };
    FullLayoutComponent.prototype.getOptions = function ($event) {
        this.options = $event;
    };
    FullLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-layout',
            template: __webpack_require__(/*! ./full-layout.component.html */ "./src/app/layouts/full/full-layout.component.html"),
            styles: [__webpack_require__(/*! ./full-layout.component.scss */ "./src/app/layouts/full/full-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FullLayoutComponent);
    return FullLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/auth/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/shared/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService) {
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/auth/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/auth/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.signupUser = function (email, password) {
        //your code for signing up the new user
    };
    AuthService.prototype.signinUser = function (email, password) {
        //your code for checking credentials and getting tokens for for signing in user
    };
    AuthService.prototype.logout = function () {
        this.token = null;
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        // here you can check if user is authenticated or not through his token 
        return true;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".customizer {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  .customizer.open {\n    right: 0; }\n  .customizer .customizer-content {\n    position: relative;\n    height: 100%; }\n  .customizer a.customizer-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  .customizer a.customizer-close {\n    color: #000; }\n  .customizer .customizer-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  .customizer .customizer-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  .customizer .color-options a {\n    white-space: pre; }\n  .customizer .cz-bg-color {\n    margin: 0 auto; }\n  .customizer .cz-bg-color span:hover {\n      cursor: pointer; }\n  .customizer .cz-bg-color span.white {\n      color: #ddd !important; }\n  .customizer .cz-bg-color .selected {\n      border: 3px solid #314fe5; }\n  .customizer .cz-bg-image:hover {\n    cursor: pointer; }\n  .customizer .cz-bg-image img.rounded {\n    border-radius: 1rem !important;\n    border: 2px solid #e6e6e6; }\n  .customizer .cz-bg-image img.rounded.selected {\n      border: 2px solid #FF586B; }\n  [dir=rtl] :host ::ng-deep .customizer {\n  left: -400px;\n  right: auto;\n  border-right: 1px solid rgba(0, 0, 0, 0.05);\n  border-left: 0px; }\n  [dir=rtl] :host ::ng-deep .customizer.open {\n    left: 0;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-close {\n    left: 10px;\n    right: auto; }\n  [dir=rtl] :host ::ng-deep .customizer .customizer-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2N1c3RvbWl6ZXIvRDpcXGhpcmluZy9zcmNcXGFwcFxcc2hhcmVkXFxjdXN0b21pemVyXFxjdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY3VzdG9taXplci9jdXN0b21pemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsYUFBWTtFQUNULGNBQWE7RUFDaEIsV0FBVTtFQUNQLHVCQUFzQjtFQUN6QixjQUFhO0VBQ1YsZ0JBQWU7RUFDZixPQUFNO0VBQ04sVUFBUztFQUNULGNBQWE7RUFDYiwyREFBMEQ7RUFDMUQsb0NBQTJCO1VBQTNCLDRCQUEyQjtFQUMzQiwyQ0FBMEM7RUFDMUMsdUNBQXNDLEVBd0V6QztFQXJGRDtJQWdCRSxTQUFRLEVBQ1I7RUFqQkY7SUFvQkUsbUJBQWtCO0lBQ2YsYUFBWSxFQUNmO0VBdEJGO0lBeUJFLGlCQUFnQjtJQUNoQiw4QkFBNEI7SUFDNUIsZUFBYztJQUNYLDRDQUEyQyxFQUM5QztFQTdCRjtJQStCSyxZQUFXLEVBQ2Q7RUFoQ0Y7SUFrQ0UsbUJBQWtCO0lBQ2YsWUFBVztJQUNYLFVBQVM7SUFDVCxhQUFZO0lBQ1osWUFBVztJQUNYLFlBQVcsRUFDZDtFQXhDRjtJQTBDRSxtQkFBa0I7SUFDZixTQUFRO0lBQ1IsWUFBVztJQUNYLGFBQVk7SUFDWixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNsQjtFQWxERjtJQXFERyxpQkFBZSxFQUNmO0VBdERIO0lBMERLLGVBQWMsRUFZakI7RUF0RUY7TUE2REksZ0JBQWUsRUFDZjtFQTlESjtNQWdFSSx1QkFBc0IsRUFDdEI7RUFqRUo7TUFvRUcsMEJBQXlCLEVBQ3pCO0VBckVIO0lBMEVHLGdCQUFlLEVBQ2Y7RUEzRUg7SUE2RUcsK0JBQThCO0lBQzlCLDBCQUF5QixFQUl6QjtFQWxGSDtNQWdGSSwwQkFBeUIsRUFDekI7RUNyQko7RUQ2QkUsYUFBWTtFQUNaLFlBQVU7RUFDViw0Q0FBMkM7RUFDM0MsaUJBQWdCLEVBaUJoQjtFQzVDQTtJRDhCQyxRQUFPO0lBQ1AsWUFBVSxFQUNWO0VDN0JEO0lEZ0NDLFdBQVU7SUFDVixZQUFXLEVBRVg7RUNoQ0Q7SURrQ0MsYUFBWTtJQUNaLFdBQVUsRUFDViIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jdXN0b21pemVyL2N1c3RvbWl6ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9taXplcntcclxuXHR3aWR0aDogNDAwcHg7XHJcbiAgICByaWdodDogLTQwMHB4O1xyXG5cdHBhZGRpbmc6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG5cdHotaW5kZXg6IDEwNTE7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cclxuXHQmLm9wZW57XHJcblx0XHRyaWdodDogMDtcclxuXHR9XHJcblxyXG5cdC5jdXN0b21pemVyLWNvbnRlbnR7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcdGhlaWdodDogMTAwJTtcclxuXHR9XHJcblxyXG5cdGEuY3VzdG9taXplci10b2dnbGV7XHJcblx0XHRiYWNrZ3JvdW5kOiAjRkZGO1xyXG5cdFx0Y29sb3I6dGhlbWUtY29sb3IoJ3ByaW1hcnknKTtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgXHRib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG5cdH1cclxuXHRhLmN1c3RvbWl6ZXItY2xvc2Uge1xyXG4gICAgXHRjb2xvcjogIzAwMDtcclxuXHR9XHJcblx0LmN1c3RvbWl6ZXItY2xvc2V7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHJpZ2h0OiAxMHB4O1xyXG5cdCAgICB0b3A6IDEwcHg7XHJcblx0ICAgIHBhZGRpbmc6IDdweDtcclxuXHQgICAgd2lkdGg6IGF1dG87XHJcblx0ICAgIHotaW5kZXg6IDEwO1xyXG5cdH1cclxuXHQuY3VzdG9taXplci10b2dnbGV7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0ICAgIHRvcDogMzUlO1xyXG5cdCAgICB3aWR0aDogNTRweDtcclxuXHQgICAgaGVpZ2h0OiA1MHB4O1xyXG5cdCAgICBsZWZ0OiAtNTRweDtcclxuXHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdCAgICBsaW5lLWhlaWdodDogNTBweDtcclxuXHQgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cdH1cclxuXHQuY29sb3Itb3B0aW9uc3tcclxuXHRcdGF7XHJcblx0XHRcdHdoaXRlLXNwYWNlOnByZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5jei1iZy1jb2xvciB7XHJcbiAgICBcdG1hcmdpbjogMCBhdXRvO1xyXG5cdFx0c3BhbntcclxuXHRcdFx0Jjpob3ZlcntcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdFx0Ji53aGl0ZXtcclxuXHRcdFx0XHRjb2xvcjogI2RkZCAhaW1wb3J0YW50O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuc2VsZWN0ZWR7XHJcblx0XHRcdGJvcmRlcjogM3B4IHNvbGlkICMzMTRmZTU7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQuY3otYmctaW1hZ2V7XHJcblx0XHQmOmhvdmVye1xyXG5cdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHR9XHJcblx0XHRpbWcucm91bmRlZHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMXJlbSAhaW1wb3J0YW50O1xyXG5cdFx0XHRib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2O1xyXG5cdFx0XHQmLnNlbGVjdGVke1xyXG5cdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkICNGRjU4NkI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG59XHJcblxyXG5bZGlyPXJ0bF0gOmhvc3QgOjpuZy1kZWVwe1xyXG5cdC5jdXN0b21pemVye1x0XHJcblx0XHRsZWZ0OiAtNDAwcHg7XHJcblx0XHRyaWdodDphdXRvO1x0XHJcblx0XHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IDBweDtcclxuXHJcblx0XHQmLm9wZW57XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdHJpZ2h0OmF1dG87XHJcblx0XHR9XHRcclxuXHRcdFxyXG5cdFx0LmN1c3RvbWl6ZXItY2xvc2V7XHRcdFxyXG5cdFx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0XHRyaWdodDogYXV0bztcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHQuY3VzdG9taXplci10b2dnbGV7XHRcdFxyXG5cdFx0XHRyaWdodDogLTU0cHg7XHJcblx0XHRcdGxlZnQ6IGF1dG87XHQgICBcclxuXHRcdH1cclxuXHJcblx0fVx0XHJcbn0iLCIuY3VzdG9taXplciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcmlnaHQ6IC00MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgei1pbmRleDogMTA1MTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gIC5jdXN0b21pemVyLm9wZW4ge1xuICAgIHJpZ2h0OiAwOyB9XG4gIC5jdXN0b21pemVyIC5jdXN0b21pemVyLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgLmN1c3RvbWl6ZXIgYS5jdXN0b21pemVyLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICBjb2xvcjogdGhlbWUtY29sb3IoXCJwcmltYXJ5XCIpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgLmN1c3RvbWl6ZXIgYS5jdXN0b21pemVyLWNsb3NlIHtcbiAgICBjb2xvcjogIzAwMDsgfVxuICAuY3VzdG9taXplciAuY3VzdG9taXplci1jbG9zZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHRvcDogMTBweDtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgei1pbmRleDogMTA7IH1cbiAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItdG9nZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNSU7XG4gICAgd2lkdGg6IDU0cHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGxlZnQ6IC01NHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmN1c3RvbWl6ZXIgLmNvbG9yLW9wdGlvbnMgYSB7XG4gICAgd2hpdGUtc3BhY2U6IHByZTsgfVxuICAuY3VzdG9taXplciAuY3otYmctY29sb3Ige1xuICAgIG1hcmdpbjogMCBhdXRvOyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW46aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LWJnLWNvbG9yIHNwYW4ud2hpdGUge1xuICAgICAgY29sb3I6ICNkZGQgIWltcG9ydGFudDsgfVxuICAgIC5jdXN0b21pemVyIC5jei1iZy1jb2xvciAuc2VsZWN0ZWQge1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgIzMxNGZlNTsgfVxuICAuY3VzdG9taXplciAuY3otYmctaW1hZ2U6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuY3VzdG9taXplciAuY3otYmctaW1hZ2UgaW1nLnJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTZlNmU2OyB9XG4gICAgLmN1c3RvbWl6ZXIgLmN6LWJnLWltYWdlIGltZy5yb3VuZGVkLnNlbGVjdGVkIHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNGRjU4NkI7IH1cblxuW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciB7XG4gIGxlZnQ6IC00MDBweDtcbiAgcmlnaHQ6IGF1dG87XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlci1sZWZ0OiAwcHg7IH1cbiAgW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplci5vcGVuIHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvOyB9XG4gIFtkaXI9cnRsXSA6aG9zdCA6Om5nLWRlZXAgLmN1c3RvbWl6ZXIgLmN1c3RvbWl6ZXItY2xvc2Uge1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1ydGxdIDpob3N0IDo6bmctZGVlcCAuY3VzdG9taXplciAuY3VzdG9taXplci10b2dnbGUge1xuICAgIHJpZ2h0OiAtNTRweDtcbiAgICBsZWZ0OiBhdXRvOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/shared/customizer/customizer.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/customizer/customizer.component.ts ***!
  \***********************************************************/
/*! exports provided: CustomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomizerComponent", function() { return CustomizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomizerComponent = /** @class */ (function () {
    function CustomizerComponent() {
        this.options = {
            direction: 'ltr'
        };
        this.directionEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CustomizerComponent.prototype.ngOnInit = function () {
        // Customizer JS File
        $.getScript('./assets/js/customizer.js');
    };
    CustomizerComponent.prototype.ngAfterViewChecked = function () {
        // setTimeout(() => {
        //   var wrapperDiv = document.getElementsByClassName("wrapper")[0];
        //   var dir = wrapperDiv.getAttribute("dir");      
        //   this.options.direction = dir;      
        // }, 3000);
    };
    CustomizerComponent.prototype.sendOptions = function () {
        this.directionEvent.emit(this.options);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CustomizerComponent.prototype, "directionEvent", void 0);
    CustomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customizer',
            template: __webpack_require__(/*! ./customizer.component.html */ "./src/app/shared/customizer/customizer.component.html"),
            styles: [__webpack_require__(/*! ./customizer.component.scss */ "./src/app/shared/customizer/customizer.component.scss")]
        })
    ], CustomizerComponent);
    return CustomizerComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/directives/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullscreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullscreenDirective", function() { return ToggleFullscreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = /** @class */ (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Footer Starts-->\r\n<footer>\r\n    <div class=\"row  gradient-blackberry\" *ngIf=\"!checkfooter\">\r\n        <div class=\"card-body\">\r\n            <div class=\"white text-center font-medium-2\">\r\n                Know Us\r\n            </div>\r\n            <p class=\"text-center\">About Us</p>\r\n            <p class=\"text-center\">Contact Us</p>\r\n            <p class=\"text-center\">Press Coverage</p> \r\n            <p class=\"text-center\">Business Partnership</p>\r\n            <p class=\"text-center\">Careers</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"white text-center font-medium-2\">\r\n                Our Policies\r\n            </div>\r\n            <p class=\"text-center\">Privacy Policy</p>\r\n            <p class=\"text-center\">Terms and Conditions</p>\r\n            <p class=\"text-center\">Editorial Policy</p> \r\n            <p class=\"text-center\">Return Policy</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"white text-center font-medium-2\">\r\n                Our Services\r\n            </div> \r\n            <p class=\"text-center\">Order Medicines</p>\r\n            <p class=\"text-center\">Book Lab Tests</p>\r\n            <p class=\"text-center\">Ayurveda Articles</p>\r\n            <p class=\"text-center\">Diabetes Care Plan</p>\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <div class=\"white text-center font-medium-2\">\r\n                Connect\r\n            </div>\r\n            <p class=\"text-center\">\r\n                Social Links\r\n            </p>\r\n            <p class=\"text-center\">\r\n                <i class=\"ft-facebook\"></i>\r\n                <i class=\"ft-twitter\"></i>\r\n                <i class=\"ft-instagram\"></i>\r\n                <i class=\"ft-mail\"></i>\r\n            </p>\r\n         </div> \r\n    </div>\r\n    <p class=\"copyright text-center\">\r\n        Copyright  &copy;  {{currentDate | date: 'yyyy'}} <a id=\"pixinventLink\" href=\"#\">Hiring</a>, All rights reserved.          \r\n    </p>\r\n</footer>\r\n<!--Footer Ends-->"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(cookieservice, router) {
        this.cookieservice = cookieservice;
        this.router = router;
        //Variables
        this.checkfooter = true;
        this.currentDate = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
        if (!this.cookieservice.get("loginuserMerck")) {
            this.checkfooter = false;
        }
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_cookie__WEBPACK_IMPORTED_MODULE_1__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar (Header) Starts -->\r\n<nav class=\"header-navbar navbar navbar-expand-lg navbar-light bg-faded\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle d-lg-none float-left\" data-toggle=\"collapse\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <span class=\"d-lg-none navbar-right navbar-collapse-toggle\">\r\n                <a class=\"open-navbar-container\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"navbarSupportedContent\">\r\n                    <i class=\"ft-more-vertical\"></i>\r\n                </a>\r\n            </span>\r\n        </div>\r\n        <div class=\"navbar-container\">\r\n            <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngbCollapse]=\"isCollapsed\">\r\n                <ul class=\"navbar-nav\">\r\n                    <li class=\"nav-item mr-2  d-none d-lg-block\">\r\n                        <a href=\"javascript:;\" class=\"nav-link\" id=\"navbar-fullscreen\" appToggleFullscreen (click)=\"ToggleClass()\">                            \r\n                            <i class=\"{{toggleClass}} font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">fullscreen</p>\r\n                        </a>\r\n                    </li>\r\n                    <!--<li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownLang\" ngbDropdownToggle>\r\n                            <i class=\"ft-flag font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Language</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownLang\" class=\"dropdownLang text-left\">                           \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('en')\">\r\n                                <img src=\"./assets/img/flags/us.png\" alt=\"English\" class=\"langimg\">\r\n                                <span>English</span>\r\n                            </a>\r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('es')\">\r\n                                <img src=\"./assets/img/flags/es.png\" alt=\"Spanish\" class=\"langimg\">\r\n                                <span>Spanish</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('pt')\">\r\n                                <img src=\"./assets/img/flags/br.png\" alt=\"Portuguese\" class=\"langimg\">\r\n                                <span>Portuguese</span>\r\n                            </a> \r\n                            <a class=\"dropdown-item py-1 lang\" href=\"javascript:;\" (click)=\"ChangeLanguage('de')\">\r\n                                <img src=\"./assets/img/flags/de.png\" alt=\"German\" class=\"langimg\">\r\n                                <span>German</span>\r\n                            </a>                            \r\n                        </div>\r\n                    </li>-->\r\n                    \r\n                    <li class=\"nav-item\" ngbDropdown [placement]=\"placement\">\r\n                        <a class=\"nav-link position-relative\" id=\"dropdownBasic3\" ngbDropdownToggle>\r\n                            <i class=\"ft-user font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">User Settings</p>\r\n                        </a>\r\n                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\" class=\"text-left\">                           \r\n                           <!-- <a class=\"dropdown-item py-1\" routerLink=\"/pages/profile\">\r\n                                <i class=\"ft-edit mr-2\"></i>\r\n                                <span>My Profile</span>\r\n                            </a>-->\r\n                           <div class=\"dropdown-divider\"></div>\r\n                            <a class=\"dropdown-item\" href=\"javascript:;\">\r\n                                <i class=\"ft-power mr-2\"></i>\r\n                                <span (click)=\"logout()\">Logout</span>\r\n                            </a>\r\n                        </div>\r\n                    </li>\r\n                    <!--<li class=\"nav-item d-none d-lg-block\">\r\n                        <a class=\"nav-link position-relative notification-sidebar-toggle\">\r\n                            <i class=\"ft-align-left font-medium-3 blue-grey darken-4\"></i>\r\n                            <p class=\"d-none\">Notifications Sidebar</p>\r\n                        </a>\r\n                    </li>-->\r\n                   \r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</nav>\r\n<!-- Navbar (Header) Ends -->"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/service */ "./src/app/shared/services/service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/toaster.service */ "./src/app/shared/services/toaster.service.ts");
/* harmony import */ var app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/loader.service */ "./src/app/shared/services/loader.service.ts");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(translate, appservice, router, route, toasterservice, loaderservice, cookieservice) {
        this.translate = translate;
        this.appservice = appservice;
        this.router = router;
        this.route = route;
        this.toasterservice = toasterservice;
        this.loaderservice = loaderservice;
        this.cookieservice = cookieservice;
        this.currentLang = 'en';
        this.toggleClass = 'ft-maximize';
        this.placement = 'bottom-right';
        this.isCollapsed = true;
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
    }
    NavbarComponent.prototype.ngAfterViewChecked = function () {
        // setTimeout(() => {
        //     var wrapperDiv = document.getElementsByClassName("wrapper")[0];
        //     var dir = wrapperDiv.getAttribute("dir");           
        //     if (dir === 'rtl') {
        //         this.placement = 'bottom-left';
        //     }
        //     else if (dir === 'ltr') {
        //         this.placement = 'bottom-right';
        //     }
        // }, 3000);
    };
    NavbarComponent.prototype.ChangeLanguage = function (language) {
        this.translate.use(language);
    };
    NavbarComponent.prototype.ToggleClass = function () {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        }
        else
            this.toggleClass = 'ft-maximize';
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.appservice.logout()
            .subscribe(function (data) {
            console.log(data);
            if (data.status == '1') {
                _this.cookieservice.removeAll();
                _this.toasterservice.Success(data.message);
                _this.router.navigate(['/auth']);
            }
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"], _shared_services_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _shared_services_toaster_service__WEBPACK_IMPORTED_MODULE_4__["ToasterService"], app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_5__["LoaderService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- //////////////////////////////////////////////////////////////////////////// -->\r\n<!-- START Notification Sidebar -->\r\n<aside id=\"notification-sidebar\" class=\"notification-sidebar d-none d-sm-none d-md-block\">\r\n  <a class=\"notification-sidebar-close\">\r\n    <i class=\"ft-x font-medium-3\"></i>\r\n  </a>\r\n  <div class=\"side-nav notification-sidebar-content\">\r\n    <div class=\"row\">\r\n      <div class=\"col-12 mt-1\">\r\n        <ngb-tabset>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Activity</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"activity\" class=\"col-12 timeline-left\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT ACTIVITY</h6>\r\n                <div id=\"timeline\" class=\"timeline-left timeline-wrapper\">\r\n                  <ul class=\"timeline\">\r\n                    <li class=\"timeline-line\"></li>\r\n                    <li class=\"timeline-item text-left text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-purple bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-shopping-cart\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">just now</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jim Doe Purchased new equipments for zonal office.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-info bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"cyan-text medium-small\">Yesterday</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Your Next flight for USA will be on 15th August 2015.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-success bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"green-text medium-small\">5 Days Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-warning bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"amber-text medium-small\">1 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-orange-text medium-small\">2 Week Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-cyan bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-mic\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"brown-text medium-small\">1 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Natalya Parker Send you a voice mail for next conference.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-amber bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-map-pin\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"deep-purple-text medium-small\">3 Month Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">Jessy Jay open a new store at S.G Road.</p>\r\n                      </div>\r\n                    </li>\r\n                    <li class=\"timeline-item text-left\">\r\n                      <div class=\"timeline-badge\">\r\n                        <span class=\"bg-grey bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"ft-inbox\"></i></span>\r\n                      </div>\r\n                      <div class=\"col s9 recent-activity-list-text\">\r\n                        <a href=\"#\" class=\"grey-text medium-small\">1 Year Ago</a>\r\n                        <p class=\"mt-0 mb-2 fixed-line-height font-weight-300 medium-small\">voice mail for conference.</p>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Chat</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"chatapp\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">RECENT CHAT</h6>\r\n                <div class=\"collection border-none\">\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-12.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Elizabeth Elliott </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-6.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Mary Adams </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Hello Boo </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-11.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Caleb Richards </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Keny ! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-18.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">June Lane </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.14 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Ohh God </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-1.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Edward Fletcher </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.15 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Love you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-2.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Crystal Bates </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">8.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can we </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Nathan Watts </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">9.53 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Great! </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-15.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Willard Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.20 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Do it </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-19.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Ronnie Ellis </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">5.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Got that </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-14.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Gwendolyn Wood </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">4.34 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Like you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-13.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Daniel Russell </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">12.00 AM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Thank you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-22.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Sarah Graves </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">11.14 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Okay you </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Andrew Hoffman </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">7.30 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Can do </p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"media mb-1\">\r\n                    <a> \r\n                      <img alt=\"96x96\" class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-20.png\">\r\n                    </a>\r\n                    <div class=\"media-body text-left\">\r\n                      <div class=\"clearfix\">\r\n                        <h4 class=\"font-medium-1 primary mt-1 mb-0 mr-auto float-left\">Camila Lynch </h4>\r\n                        <span class=\"medium-small float-right blue-grey-text text-lighten-3\">2.00 PM</span>\r\n                      </div>\r\n                      <p class=\"text-muted font-small-3\">Leave it </p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle><b>Settings</b></ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div id=\"settings\" class=\"col-12\">\r\n                <h6 class=\"mt-1 mb-3 text-bold-400 text-left\">GENERAL SETTINGS</h6>\r\n                <ul class=\"list-unstyled\">\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"notifications1\">\r\n                            <label class=\"custom-control-label\" for=\"notifications1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input checked=\"checked\" class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"recent-activity1\">\r\n                            <label class=\"custom-control-label\" for=\"recent-activity1\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Notifications</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"notifications2\">\r\n                            <label class=\"custom-control-label\" for=\"notifications2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show recent activity</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"recent-activity2\">\r\n                            <label class=\"custom-control-label\" for=\"recent-activity2\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show your emails</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-emails\">\r\n                            <label class=\"custom-control-label\" for=\"show-emails\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>Use checkboxes when looking for yes or no answers.</p>\r\n                  </li>\r\n                  <li class=\"text-left\">\r\n                    <div class=\"togglebutton\">\r\n                      <div class=\"switch\">\r\n                        <span class=\"text-bold-500\">Show Task statistics</span>\r\n                        <div class=\"float-right\">\r\n                          <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\r\n                            <input class=\"custom-control-input cz-bg-image-display\" type=\"checkbox\" id=\"show-stats\">\r\n                            <label class=\"custom-control-label\" for=\"show-stats\"></label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <p>The for attribute is necessary to bind our custom checkbox with the input.</p>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</aside>\r\n<!-- END Notification Sidebar -->\r\n"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notification-sidebar {\n  width: 400px;\n  right: -400px;\n  padding: 0;\n  background-color: #FFF;\n  z-index: 1051;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  height: 100vh;\n  transition: right 0.4s cubic-bezier(0.05, 0.74, 0.2, 0.99);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  border-left: 1px solid rgba(0, 0, 0, 0.05);\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar.open {\n    right: 0; }\n  #notification-sidebar .notification-sidebar-content {\n    position: relative;\n    height: 100%;\n    padding: 10px; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:before {\n      border: none; }\n  #notification-sidebar .notification-sidebar-content #timeline.timeline-left .timeline-item:after {\n      border: none; }\n  #notification-sidebar a.notification-sidebar-toggle {\n    background: #FFF;\n    color: theme-color(\"primary\");\n    display: block;\n    box-shadow: -3px 0px 8px rgba(0, 0, 0, 0.1); }\n  #notification-sidebar a.notification-sidebar-close {\n    color: #000; }\n  #notification-sidebar .notification-sidebar-close {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    padding: 7px;\n    width: auto;\n    z-index: 10; }\n  #notification-sidebar .notification-sidebar-toggle {\n    position: absolute;\n    top: 35%;\n    width: 54px;\n    height: 50px;\n    left: -54px;\n    text-align: center;\n    line-height: 50px;\n    cursor: pointer; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar {\n  left: -400px;\n  right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar.open {\n    left: 0;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-close {\n    left: 10px;\n    right: auto; }\n  [dir=\"rtl\"] :host ::ng-deep #notification-sidebar .notification-sidebar-toggle {\n    right: -54px;\n    left: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL0Q6XFxoaXJpbmcvc3JjXFxhcHBcXHNoYXJlZFxcbm90aWZpY2F0aW9uLXNpZGViYXJcXG5vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvbm90aWZpY2F0aW9uLXNpZGViYXIvbm90aWZpY2F0aW9uLXNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFZO0VBQ1QsY0FBYTtFQUNoQixXQUFVO0VBQ1AsdUJBQXNCO0VBQ3pCLGNBQWE7RUFDVixnQkFBZTtFQUNmLE9BQU07RUFDTixVQUFTO0VBQ1QsY0FBYTtFQUNiLDJEQUEwRDtFQUMxRCxvQ0FBMkI7VUFBM0IsNEJBQTJCO0VBQzNCLDJDQUEwQztFQUMxQyx1Q0FBc0MsRUF3RHpDO0VBckVEO0lBZ0JFLFNBQVEsRUFDUjtFQWpCRjtJQW9CRSxtQkFBa0I7SUFDZixhQUFZO0lBQ1osY0FBYSxFQWNoQjtFQXBDRjtNQTRCTSxhQUFXLEVBQ1I7RUE3QlQ7TUErQk0sYUFBVyxFQUNSO0VBaENUO0lBdUNFLGlCQUFnQjtJQUNoQiw4QkFBNEI7SUFDNUIsZUFBYztJQUNYLDRDQUEyQyxFQUM5QztFQTNDRjtJQTZDSyxZQUFXLEVBQ2Q7RUE5Q0Y7SUFnREUsbUJBQWtCO0lBQ2YsWUFBVztJQUNYLFVBQVM7SUFDVCxhQUFZO0lBQ1osWUFBVztJQUNYLFlBQVcsRUFDZDtFQXRERjtJQXdERSxtQkFBa0I7SUFDZixTQUFRO0lBQ1IsWUFBVztJQUNYLGFBQVk7SUFDWixZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLGtCQUFpQjtJQUNqQixnQkFBZSxFQUNsQjtFQ2hCRjtFRHlCRSxhQUFZO0VBQ1osWUFBVyxFQWFYO0VDcENBO0lEeUJDLFFBQU87SUFDUCxZQUFXLEVBQ1g7RUN4QkQ7SUQwQkMsV0FBVTtJQUNWLFlBQVcsRUFDWDtFQ3pCRDtJRDJCQyxhQUFZO0lBQ1osV0FBVSxFQUNWIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25vdGlmaWNhdGlvbi1zaWRlYmFyL25vdGlmaWNhdGlvbi1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25vdGlmaWNhdGlvbi1zaWRlYmFye1xyXG5cdHdpZHRoOiA0MDBweDtcclxuICAgIHJpZ2h0OiAtNDAwcHg7XHJcblx0cGFkZGluZzogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblx0ei1pbmRleDogMTA1MTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiByaWdodCAwLjRzIGN1YmljLWJlemllcigwLjA1LCAwLjc0LCAwLjIsIDAuOTkpO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblxyXG5cdCYub3BlbntcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdH1cclxuXHJcblx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnR7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBcdGhlaWdodDogMTAwJTtcclxuICAgIFx0cGFkZGluZzogMTBweDtcclxuXHJcbiAgICBcdCN0aW1lbGluZXtcclxuICAgIFx0XHQmLnRpbWVsaW5lLWxlZnR7XHJcbiAgICBcdFx0XHQudGltZWxpbmUtaXRlbXtcclxuICAgIFx0XHRcdFx0JjpiZWZvcmV7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xyXG4gICAgXHRcdFx0XHR9XHJcbiAgICBcdFx0XHRcdCY6YWZ0ZXJ7XHJcblx0XHRcdFx0XHRcdGJvcmRlcjpub25lO1xyXG4gICAgXHRcdFx0XHR9XHJcbiAgICBcdFx0XHR9XHJcbiAgICBcdFx0fVxyXG4gICAgXHR9XHJcblx0fVxyXG5cclxuXHRhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZXtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkY7XHJcblx0XHRjb2xvcjp0aGVtZS1jb2xvcigncHJpbWFyeScpO1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcbiAgICBcdGJveC1zaGFkb3c6IC0zcHggMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcblx0fVxyXG5cdGEubm90aWZpY2F0aW9uLXNpZGViYXItY2xvc2Uge1xyXG4gICAgXHRjb2xvcjogIzAwMDtcclxuXHR9XHJcblx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3Nle1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdCAgICByaWdodDogMTBweDtcclxuXHQgICAgdG9wOiAxMHB4O1xyXG5cdCAgICBwYWRkaW5nOiA3cHg7XHJcblx0ICAgIHdpZHRoOiBhdXRvO1xyXG5cdCAgICB6LWluZGV4OiAxMDtcclxuXHR9XHJcblx0Lm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZXtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHQgICAgdG9wOiAzNSU7XHJcblx0ICAgIHdpZHRoOiA1NHB4O1xyXG5cdCAgICBoZWlnaHQ6IDUwcHg7XHJcblx0ICAgIGxlZnQ6IC01NHB4O1xyXG5cdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0ICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG5cdCAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblx0fVxyXG5cdFxyXG5cclxuXHRcclxuXHJcbn1cclxuXHJcbltkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwe1xyXG5cdCNub3RpZmljYXRpb24tc2lkZWJhcntcdFxyXG5cdFx0bGVmdDogLTQwMHB4O1x0XHJcblx0XHRyaWdodDogYXV0bztcdCAgIFxyXG5cdFx0Ji5vcGVue1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRyaWdodDogYXV0bztcclxuXHRcdH1cclxuXHRcdC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZXtcclxuXHRcdFx0bGVmdDogMTBweDtcclxuXHRcdFx0cmlnaHQ6IGF1dG87XHJcblx0XHR9XHJcblx0XHQubm90aWZpY2F0aW9uLXNpZGViYXItdG9nZ2xle1x0XHJcblx0XHRcdHJpZ2h0OiAtNTRweDtcclxuXHRcdFx0bGVmdDogYXV0bztcclxuXHRcdH1cdFxyXG5cdH1cclxufSIsIiNub3RpZmljYXRpb24tc2lkZWJhciB7XG4gIHdpZHRoOiA0MDBweDtcbiAgcmlnaHQ6IC00MDBweDtcbiAgcGFkZGluZzogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgei1pbmRleDogMTA1MTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdHJhbnNpdGlvbjogcmlnaHQgMC40cyBjdWJpYy1iZXppZXIoMC4wNSwgMC43NCwgMC4yLCAwLjk5KTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhci5vcGVuIHtcbiAgICByaWdodDogMDsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDsgfVxuICAgICNub3RpZmljYXRpb24tc2lkZWJhciAubm90aWZpY2F0aW9uLXNpZGViYXItY29udGVudCAjdGltZWxpbmUudGltZWxpbmUtbGVmdCAudGltZWxpbmUtaXRlbTpiZWZvcmUge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gICAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jb250ZW50ICN0aW1lbGluZS50aW1lbGluZS1sZWZ0IC50aW1lbGluZS1pdGVtOmFmdGVyIHtcbiAgICAgIGJvcmRlcjogbm9uZTsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgYS5ub3RpZmljYXRpb24tc2lkZWJhci10b2dnbGUge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgY29sb3I6IHRoZW1lLWNvbG9yKFwicHJpbWFyeVwiKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2hhZG93OiAtM3B4IDBweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG4gICNub3RpZmljYXRpb24tc2lkZWJhciBhLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBjb2xvcjogIzAwMDsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLWNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICB6LWluZGV4OiAxMDsgfVxuICAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzUlO1xuICAgIHdpZHRoOiA1NHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBsZWZ0OiAtNTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbltkaXI9XCJydGxcIl0gOmhvc3QgOjpuZy1kZWVwICNub3RpZmljYXRpb24tc2lkZWJhciB7XG4gIGxlZnQ6IC00MDBweDtcbiAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyLm9wZW4ge1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IGF1dG87IH1cbiAgW2Rpcj1cInJ0bFwiXSA6aG9zdCA6Om5nLWRlZXAgI25vdGlmaWNhdGlvbi1zaWRlYmFyIC5ub3RpZmljYXRpb24tc2lkZWJhci1jbG9zZSB7XG4gICAgbGVmdDogMTBweDtcbiAgICByaWdodDogYXV0bzsgfVxuICBbZGlyPVwicnRsXCJdIDpob3N0IDo6bmctZGVlcCAjbm90aWZpY2F0aW9uLXNpZGViYXIgLm5vdGlmaWNhdGlvbi1zaWRlYmFyLXRvZ2dsZSB7XG4gICAgcmlnaHQ6IC01NHB4O1xuICAgIGxlZnQ6IGF1dG87IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/notification-sidebar/notification-sidebar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NotificationSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSidebarComponent", function() { return NotificationSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotificationSidebarComponent = /** @class */ (function () {
    function NotificationSidebarComponent() {
    }
    NotificationSidebarComponent.prototype.ngOnInit = function () {
        // notification-sidebar JS File
        $.getScript('./assets/js/notification-sidebar.js');
    };
    NotificationSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification-sidebar',
            template: __webpack_require__(/*! ./notification-sidebar.component.html */ "./src/app/shared/notification-sidebar/notification-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./notification-sidebar.component.scss */ "./src/app/shared/notification-sidebar/notification-sidebar.component.scss")]
        })
    ], NotificationSidebarComponent);
    return NotificationSidebarComponent;
}());



/***/ }),

/***/ "./src/app/shared/routes/content-layout.routes.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/routes/content-layout.routes.ts ***!
  \********************************************************/
/*! exports provided: CONTENT_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_ROUTES", function() { return CONTENT_ROUTES; });
//Route for content layout without sidebar, navbar and footer for pages like Login, Registration etc...
var CONTENT_ROUTES = [
    {
        path: 'pages',
        loadChildren: './pages/content-pages/content-pages.module#ContentPagesModule'
    }
];


/***/ }),

/***/ "./src/app/shared/routes/full-layout.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/routes/full-layout.routes.ts ***!
  \*****************************************************/
/*! exports provided: Full_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Full_ROUTES", function() { return Full_ROUTES; });
//Route for content layout with sidebar, navbar and footer.
var Full_ROUTES = [
    {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
];


/***/ }),

/***/ "./src/app/shared/services/loader.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.status = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoaderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/shared/services/service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/services/service.ts ***!
  \********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        //baseurl = "http://localhost:8086/";
        this.baseurl = "http://ec2-13-233-172-180.ap-south-1.compute.amazonaws.com:5000/";
    }
    AppService.prototype.users = function (pagevalue, totalrecord) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "alldata", { pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.posttype = function (id, feature) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "changeposttype", { id: id, feature: feature }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.servicetype = function (pagevalue, totalrecord, id, service) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "changeservicetype", { pagevalue: pagevalue, totalrecord: totalrecord, id: id, service: service }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.logout = function () {
        return this.http.get(this.baseurl + "userout");
    };
    AppService.prototype.country = function () {
        return this.http.get(this.baseurl + "country");
    };
    AppService.prototype.postdata = function () {
        return this.http.get(this.baseurl + "post");
    };
    AppService.prototype.socialpostdata = function () {
        return this.http.get(this.baseurl + "socialpost");
    };
    AppService.prototype.upcoming = function (pagevalue, totalrecord) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "upcoming", { pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.category = function (pagevalue, totalrecord) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "categorys", { pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.bookingdata = function () {
        return this.http.get(this.baseurl + "allbooking");
    };
    AppService.prototype.followData = function () {
        return this.http.get(this.baseurl + "follow");
    };
    AppService.prototype.paymentdata = function (pagevalue, totalrecord) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "payment", { pagevalue: pagevalue, totalrecord: totalrecord }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.adduser = function (id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "register", { fname: id.fname, city: id.city, country: id.country, lname: id.lname, hospital: id.hospital, email: id.email, mobile: id.mobile }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.edituser = function (formdata, id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "edituser", { fname: formdata.fname, city: formdata.city, country: formdata.country, lname: formdata.lname, hospital: formdata.hospital, email: formdata.email, mobile: formdata.mobile }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.resetpassword = function (formdata, id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "setpassword", { password: formdata.password, cpassword: formdata.cpassword, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.forgotpassword = function (formdata, id) {
        //console.log(id);return;
        return this.http.post(this.baseurl + "setpassword", { password: formdata.password, cpassword: formdata.cpassword, id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.userDetail = function (id) {
        return this.http.post(this.baseurl + "alldatabyuser", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addPostdata = function (id, file) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("title", id.title);
        uploaddata.append("description", id.description);
        uploaddata.append("budget", id.budget);
        uploaddata.append("team", id.team);
        uploaddata.append("category", id.category);
        return this.http.post(this.baseurl + "createpost", uploaddata);
    };
    AppService.prototype.addEventdata = function (id, file, edate) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("title", id.title);
        uploaddata.append("description", id.description);
        uploaddata.append("eventdate", edate);
        return this.http.post(this.baseurl + "createevent", uploaddata);
    };
    AppService.prototype.editeventdata = function (formdata, id, file, edate) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("title", formdata.title);
        uploaddata.append("description", formdata.description);
        uploaddata.append("eventdate", edate);
        uploaddata.append("id", id);
        return this.http.post(this.baseurl + "updateevent", uploaddata);
    };
    AppService.prototype.editpostdata = function (formdata, id, file) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("title", formdata.title);
        uploaddata.append("description", formdata.description);
        uploaddata.append("budget", formdata.budget);
        uploaddata.append("team", formdata.team);
        uploaddata.append("category", formdata.category);
        uploaddata.append("id", id);
        return this.http.post(this.baseurl + "updatepost", uploaddata);
    };
    AppService.prototype.PostDataid = function (id) {
        return this.http.post(this.baseurl + "postid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.EventDataid = function (id) {
        return this.http.post(this.baseurl + "eventid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletepost = function (id) {
        return this.http.post(this.baseurl + "deletepost", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.addcategory = function (id, file) {
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", id.name);
        uploaddata.append("popular", id.popular);
        return this.http.post(this.baseurl + "createcategory", uploaddata);
    };
    AppService.prototype.editcategory = function (formdata, id, file) {
        //console.log(formdata);return;
        if (file == undefined) {
            file = '';
        }
        var uploaddata = new FormData();
        uploaddata.append("image", file);
        uploaddata.append("name", formdata.name);
        uploaddata.append("popular", formdata.popular);
        uploaddata.append("id", id);
        return this.http.post(this.baseurl + "updatecategory", uploaddata);
    };
    AppService.prototype.CategoryDetail = function (id) {
        return this.http.post(this.baseurl + "categoryid", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deletecategory = function (id) {
        return this.http.post(this.baseurl + "deletecategory", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.deleteupcoming = function (id) {
        return this.http.post(this.baseurl + "deleteupcoming", { id: id }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService.prototype.userLogin = function (email, password) {
        return this.http.post(this.baseurl + "login", { email: email, password: password }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        });
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/shared/services/toaster.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/toaster.service.ts ***!
  \****************************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToasterService = /** @class */ (function () {
    function ToasterService() {
        this.setting();
    }
    ToasterService.prototype.Success = function (message) {
        toastr.success(message);
    };
    ToasterService.prototype.Error = function (message) {
        toastr.error(message);
    };
    ToasterService.prototype.setting = function () {
        toastr.options = {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "4000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        };
    };
    ToasterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ToasterService);
    return ToasterService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/shared/sidebar/sidebar.component.ts");
/* harmony import */ var _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customizer/customizer.component */ "./src/app/shared/customizer/customizer.component.ts");
/* harmony import */ var _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notification-sidebar/notification-sidebar.component */ "./src/app/shared/notification-sidebar/notification-sidebar.component.ts");
/* harmony import */ var _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/toggle-fullscreen.directive */ "./src/app/shared/directives/toggle-fullscreen.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_10__["ToggleFullscreenDirective"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"],
                _customizer_customizer_component__WEBPACK_IMPORTED_MODULE_8__["CustomizerComponent"],
                _notification_sidebar_notification_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["NotificationSidebarComponent"],
                _directives_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_10__["ToggleFullscreenDirective"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sidebar/sidebar-routes.config.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar-routes.config.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
//Sidebar menu Routes and data
var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/appuser', title: 'App User', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/category', title: 'Category', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: '/upcoming', title: 'Upcoming Event', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    {
        path: '', title: 'Post', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/post', title: 'Artist Post', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/socialpost', title: 'Social Post', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/follow', title: 'User Follow', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    {
        path: '', title: 'Booking', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
            { path: '/booking', title: 'Artist Booking', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
            { path: '/bookingstatus', title: 'Booking Status', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
    },
    { path: '/payment', title: 'Payment', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
];


/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.html":
/*!*******************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar Header starts -->\r\n<div class=\"sidebar-header\">\r\n    <div class=\"logo clearfix\">\r\n        <a [routerLink]=\"['/']\" class=\"logo-text float-left\">\r\n            <div class=\"logo-img\">\r\n                <img src=\"assets/img/logo.png\" />\r\n            </div>\r\n            <span class=\"text align-middle\">Hiring</span>\r\n        </a>\r\n        <a class=\"nav-toggle d-none d-sm-none d-md-none d-lg-block\" id=\"sidebarToggle\" href=\"javascript:;\">\r\n            <i class=\"ft-toggle-right toggle-icon\" data-toggle=\"expanded\"></i>\r\n        </a>\r\n        <a class=\"nav-close d-block d-md-block d-lg-none d-xl-none\" id=\"sidebarClose\" href=\"javascript:;\">\r\n            <i class=\"ft-x\"></i>\r\n        </a>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Header Ends -->\r\n\r\n<!-- Sidebar Content starts -->\r\n<div class=\"sidebar-content\">\r\n    <div class=\"nav-container\">\r\n        <ul class=\"navigation\">\r\n            <!-- First level menu -->\r\n             <li *ngFor=\"let menuItem of menuItems\" [ngClass]=\"[menuItem.class]\" [routerLinkActive]=\"menuItem.submenu.length != 0 ? '' : 'active'\"\r\n                [routerLinkActiveOptions]=\"{exact: true}\">\r\n                <a [routerLink]=\"menuItem.class === '' ? [menuItem.path] : null\" *ngIf=\"!menuItem.isExternalLink; else externalLinkBlock\">\r\n                    <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                    <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                    <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                </a>\r\n                <ng-template #externalLinkBlock>\r\n                    <a [href]=\"[menuItem.path]\" target=\"_blank\">\r\n                        <i [ngClass]=\"[menuItem.icon]\"></i>\r\n                        <span class=\"menu-title\">{{menuItem.title | translate }}</span>\r\n                        <span *ngIf=\"menuItem.badge != '' \" [ngClass]=\"[menuItem.badgeClass]\">{{menuItem.badge}}</span>\r\n                    </a>\r\n                </ng-template>\r\n                <!-- Second level menu -->\r\n                <ul class=\"menu-content\" *ngIf=\"menuItem.submenu.length > 0\">\r\n                    <li *ngFor=\"let menuSubItem of menuItem.submenu\" [routerLinkActive]=\"menuSubItem.submenu.length > 0 ? '' : 'active'\" [ngClass]=\"[menuSubItem.class]\">\r\n                        <a [routerLink]=\"menuSubItem.submenu.length > 0 ? null : [menuSubItem.path]\" *ngIf=\"!menuSubItem.isExternalLink; else externalSubLinkBlock\">\r\n                            <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                            <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                            <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                        </a>\r\n                        <ng-template #externalSubLinkBlock>\r\n                            <a [href]=\"[menuSubItem.path]\">\r\n                                <i [ngClass]=\"[menuSubItem.icon]\"></i>\r\n                                <span class=\"menu-title\">{{menuSubItem.title | translate }}</span>\r\n                                <span *ngIf=\"menuSubItem.badge != '' \" [ngClass]=\"[menuSubItem.badgeClass]\">{{menuSubItem.badge}}</span>\r\n                            </a>\r\n                        </ng-template>\r\n                        <!-- Third level menu -->\r\n                        <ul class=\"menu-content\" *ngIf=\"menuSubItem.submenu.length > 0\">\r\n                            <li *ngFor=\"let menuSubsubItem of menuSubItem.submenu\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n                                [ngClass]=\"[menuSubsubItem.class]\">\r\n                                <a [routerLink]=\"[menuSubsubItem.path]\" *ngIf=\"!menuSubsubItem.isExternalLink; else externalSubSubLinkBlock\">\r\n                                    <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                    <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                    <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                </a>\r\n                                <ng-template #externalSubSubLinkBlock>\r\n                                    <a [href]=\"[menuSubsubItem.path]\">\r\n                                        <i [ngClass]=\"[menuSubsubItem.icon]\"></i>\r\n                                        <span class=\"menu-title\">{{menuSubsubItem.title | translate }}</span>\r\n                                        <span *ngIf=\"menuSubsubItem.badge != '' \" [ngClass]=\"[menuSubsubItem.badgeClass]\">{{menuSubsubItem.badge}}</span>\r\n                                    </a>\r\n                                </ng-template>\r\n                            </li>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<!-- Sidebar Content Ends -->"

/***/ }),

/***/ "./src/app/shared/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar-routes.config */ "./src/app/shared/sidebar/sidebar-routes.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm5/ngx-cookie.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, route, translate, cookieservice) {
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.cookieservice = cookieservice;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        $.getScript('./assets/js/app-sidebar.js');
        this.menuItems = _sidebar_routes_config__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (menuItem) { return menuItem; });
    };
    //NGX Wizard - skip url change
    SidebarComponent.prototype.ngxWizardFunction = function (path) {
        if (path.indexOf('forms/ngx') !== -1)
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/shared/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], ngx_cookie__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\hiring\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map