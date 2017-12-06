webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/task/task.module": [
		"../../../../../src/app/task/task.module.ts",
		"task.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-alert',
            template: __webpack_require__("../../../../../src/app/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__alert_service__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/alert/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<tskr-navbar></tskr-navbar>\r\n<!-- <div > -->\r\n<router-outlet></router-outlet>\r\n<!-- </div> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_project_add_project_add_component__ = __webpack_require__("../../../../../src/app/project/project-add/project-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__milestone_milestone_component__ = __webpack_require__("../../../../../src/app/milestone/milestone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert_component__ = __webpack_require__("../../../../../src/app/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modals_yes_no_modal_yes_no_modal_component__ = __webpack_require__("../../../../../src/app/modals/yes-no-modal/yes-no-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_project_module__ = __webpack_require__("../../../../../src/app/project/project.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tasker_material_module__ = __webpack_require__("../../../../../src/app/tasker-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__milestone_milestone_module__ = __webpack_require__("../../../../../src/app/milestone/milestone.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__auth_authentication_token_service__ = __webpack_require__("../../../../../src/app/auth/authentication/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__auth_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/auth/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__users_user_user_service__ = __webpack_require__("../../../../../src/app/users/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__alert_alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__auth_interceptors_jwt_interceptor__ = __webpack_require__("../../../../../src/app/auth/interceptors/jwt-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__auth_interceptors_token_interceptor__ = __webpack_require__("../../../../../src/app/auth/interceptors/token-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__auth_guard_auth_guard__ = __webpack_require__("../../../../../src/app/auth/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_swiper_wrapper__ = __webpack_require__("../../../../ngx-swiper-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_swiper_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ngx_swiper_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__task_shared_users_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/users-filters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__task_shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Trzymajcie prosze porządek
// Components







// Modules








// Services




// Interceptors & others





// Swiper




var SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    keyboardControl: true
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_11__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_5__auth_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__modals_yes_no_modal_yes_no_modal_component__["a" /* YesNoModalComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__tasker_material_module__["a" /* TaskerMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_16__milestone_milestone_module__["a" /* MilestoneModule */],
                __WEBPACK_IMPORTED_MODULE_9__project_project_module__["a" /* ProjectModule */],
                __WEBPACK_IMPORTED_MODULE_26_angular2_moment__["MomentModule"],
                __WEBPACK_IMPORTED_MODULE_24__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_25_ngx_swiper_wrapper__["SwiperModule"].forRoot(SWIPER_CONFIG)
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_22__auth_interceptors_token_interceptor__["a" /* TokenInterceptor */],
                    multi: true
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_21__auth_interceptors_jwt_interceptor__["a" /* JwtInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_17__auth_authentication_token_service__["a" /* TokenService */],
                __WEBPACK_IMPORTED_MODULE_18__auth_authentication_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_19__users_user_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_27__task_shared_users_filters_service__["a" /* UsersFiltersService */],
                __WEBPACK_IMPORTED_MODULE_28__task_shared_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_20__alert_alert_service__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_23__auth_guard_auth_guard__["a" /* AuthGuard */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__modals_yes_no_modal_yes_no_modal_component__["a" /* YesNoModalComponent */],
                __WEBPACK_IMPORTED_MODULE_0__project_project_add_project_add_component__["a" /* ProjectAddComponent */],
                __WEBPACK_IMPORTED_MODULE_1__milestone_milestone_component__["a" /* MilestoneComponent */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_register_register_component__ = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_guard_auth_guard__ = __webpack_require__("../../../../../src/app/auth/guard/auth.guard.ts");






var appRoutes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'tasks', loadChildren: 'app/task/task.module#TaskModule', canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_guard_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__["a" /* LoginComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_0__project_project_component__["a" /* ProjectComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__auth_register_register_component__["a" /* RegisterComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/auth/authentication/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this._loggedIn = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.loggedIn = this._loggedIn.asObservable();
    }
    AuthenticationService.prototype.changeLoggedIn = function (loggedIn) {
        this._loggedIn.next(loggedIn);
    };
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/api/user/authenticate', { username: username, password: password });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        // ustaw usera jako wylogowanego
        this.changeLoggedIn(false);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/authentication/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = (function () {
    function TokenService() {
    }
    TokenService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser === null) {
            return 'no token';
        }
        return currentUser.token;
    };
    TokenService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        return Object(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])(null, token);
    };
    TokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/auth/interceptors/jwt-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JwtInterceptor = (function () {
    function JwtInterceptor(router) {
        this.router = router;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["f" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.router.navigate(['/login']);
                }
            }
        });
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/auth/interceptors/token-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_token_service__ = __webpack_require__("../../../../../src/app/auth/authentication/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = (function () {
    function TokenInterceptor(tokenService) {
        this.tokenService = tokenService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        request = request.clone({
            setHeaders: { Authorization: 'Bearer ' + this.tokenService.getToken() }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__authentication_token_service__["a" /* TokenService */]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div flex class=\"login-container\">\r\n    <mat-card>\r\n        <mat-card-content>\r\n            <form role=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\">\r\n                <div class=\"login-box-header\">\r\n                    <img src=\"assets/images/tasker-logo.png\">\r\n                </div>\r\n                <hr/>\r\n                <!-- Username -->\r\n                <mat-grid-list cols=\"9\" rowHeight=\"75px\">\r\n                    <mat-grid-tile class=\"login-icon\">\r\n                        <mat-icon color=\"primary\">lock</mat-icon>\r\n                    </mat-grid-tile>\r\n                    <mat-grid-tile colspan=\"7\">\r\n                        <mat-input-container class=\"justifier\">\r\n                            <input matInput required placeholder=\"Nazwa użytkownika\" type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\">\r\n                            <mat-error *ngIf=\"formControl.hasError('required')\">\r\n                                Nazwa użytkownika jest\r\n                                <strong>wymagana</strong>\r\n                            </mat-error>\r\n                        </mat-input-container>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n                <!-- Password -->\r\n                <mat-grid-list cols=\"9\" rowHeight=\"75px\">\r\n                    <mat-grid-tile class=\"login-icon\">\r\n                        <mat-icon color=\"primary\">remove_red_eye</mat-icon>\r\n                    </mat-grid-tile>\r\n                    <mat-grid-tile colspan=\"7\">\r\n                        <mat-input-container class=\"justifier\">\r\n                            <input matInput required placeholder=\"Haslo\" type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n                            <mat-error *ngIf=\"formControl.hasError('required')\">\r\n                                Haslo jest\r\n                                <strong>wymagane</strong>\r\n                            </mat-error>\r\n                        </mat-input-container>\r\n                    </mat-grid-tile>\r\n                </mat-grid-list>\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" name=\"action\" class=\"login-button\" [disabled]=\"loading\">\r\n                    Zaloguj się\r\n                </button>\r\n            </form>\r\n            <p mat-accent>Nie masz konta?\r\n                <a routerLink=\"/register\"> Zarejestruj się</a>\r\n            </p>\r\n        </mat-card-content>\r\n    </mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/bg.png") + ");\n  background-size: cover;\n  min-height: 100% !important;\n  min-width: 100% !important; }\n\nmat-card {\n  margin: 2em auto;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.9) !important; }\n\n.login-box-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .login-box-header img {\n    max-width: 60%; }\n\n.justifier {\n  width: 100%;\n  padding-bottom: 2%; }\n\n.login-icon {\n  margin-top: -2px; }\n\n.login-button {\n  width: 100%;\n  padding: 1.5% !important;\n  font-size: 1.5em;\n  color: #fff !important; }\n\nhr {\n  display: block;\n  margin: 10px 0 10px 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__ = __webpack_require__("../../../../../src/app/auth/authentication/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.errorMsg = '';
        this.formControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required
        ]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        // domyślnie użytkownik jest wylogowany
        this.authenticationService.changeLoggedIn(false);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password).subscribe(function (data) {
            var user = JSON.parse(JSON.stringify(data));
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.authenticationService.changeLoggedIn(true);
            }
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
            _this.authenticationService.changeLoggedIn(false);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__authentication_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4__alert_alert_service__["a" /* AlertService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div flex class=\"register-container\">\r\n\t<mat-card>\r\n\t\t<mat-card-content>\r\n\t\t\t<form name=\"form\" role=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\">\r\n\t\t\t\t<div class=\"register-box-header\">\r\n\t\t\t\t\t<img src=\"assets/images/tasker-logo.png\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<hr/>\r\n\t\t\t\t<!-- First Name -->\r\n\t\t\t\t<mat-grid-list cols=\"9\" rowHeight=\"75px\">\r\n\t\t\t\t\t<mat-grid-tile class=\"icon-aligner\">\r\n\t\t\t\t\t\t<mat-icon color=\"primary\">account_circle</mat-icon>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t\t<mat-grid-tile colspan=\"7\">\r\n\t\t\t\t\t\t<mat-input-container class=\"justifier\">\r\n\t\t\t\t\t\t\t<input matInput required placeholder=\"First name\" type=\"text\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"formControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tFirst name is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-input-container>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t</mat-grid-list>\r\n\r\n\t\t\t\t<!-- Last Name -->\r\n\t\t\t\t<mat-grid-list cols=\"9\" rowHeight=\"75px\">\r\n\t\t\t\t\t<mat-grid-tile class=\"icon-aligner\">\r\n\t\t\t\t\t\t<mat-icon color=\"primary\">account_circle</mat-icon>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t\t<mat-grid-tile colspan=\"7\">\r\n\t\t\t\t\t\t<mat-input-container class=\"justifier\">\r\n\t\t\t\t\t\t\t<input matInput required placeholder=\"Last name\" type=\"text\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"formControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tLast name is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-input-container>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t</mat-grid-list>\r\n\r\n\t\t\t\t<!-- Username -->\r\n\t\t\t\t<mat-grid-list cols=\"9\" rowHeight=\"75px\">\r\n\t\t\t\t\t<mat-grid-tile class=\"icon-aligner\">\r\n\t\t\t\t\t\t<mat-icon color=\"primary\">lock</mat-icon>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t\t<mat-grid-tile colspan=\"7\">\r\n\t\t\t\t\t\t<mat-input-container class=\"justifier\">\r\n\t\t\t\t\t\t\t<input matInput required placeholder=\"Username\" type=\"text\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"formControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tUsername is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-input-container>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t</mat-grid-list>\r\n\r\n\t\t\t\t<!-- Email Address -->\r\n\t\t\t\t<mat-grid-list cols=\"9\" rowHeight=\"75px\">\r\n\t\t\t\t\t<mat-grid-tile class=\"icon-aligner\">\r\n\t\t\t\t\t\t<mat-icon color=\"primary\">mail</mat-icon>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t\t<mat-grid-tile colspan=\"7\">\r\n\t\t\t\t\t\t<mat-input-container class=\"justifier\">\r\n\t\t\t\t\t\t\t<input matInput required placeholder=\"E-mail address\" type=\"text\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"formControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tE-mail address is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-input-container>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t</mat-grid-list>\r\n\r\n\t\t\t\t<!-- Password -->\r\n\t\t\t\t<mat-grid-list cols=\"9\" rowHeight=\"75px\">\r\n\t\t\t\t\t<mat-grid-tile class=\"login-icon\">\r\n\t\t\t\t\t\t<mat-icon color=\"primary\">remove_red_eye</mat-icon>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t\t<mat-grid-tile colspan=\"7\">\r\n\t\t\t\t\t\t<mat-input-container class=\"justifier\">\r\n\t\t\t\t\t\t\t<input matInput required placeholder=\"Password\" type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\">\r\n\t\t\t\t\t\t\t<mat-error *ngIf=\"formControl.hasError('required')\">\r\n\t\t\t\t\t\t\t\tPassword is\r\n\t\t\t\t\t\t\t\t<strong>required</strong>\r\n\t\t\t\t\t\t\t</mat-error>\r\n\t\t\t\t\t\t</mat-input-container>\r\n\t\t\t\t\t</mat-grid-tile>\r\n\t\t\t\t</mat-grid-list>\r\n\t\t\t\t<button mat-raised-button color=\"primary\" type=\"submit\" name=\"action\" class=\"register-button\" [disabled]=\"loading\">\r\n\t\t\t\t\tRegister\r\n\t\t\t\t</button>\r\n\t\t\t</form>\r\n\t\t\t<p mat-accent>Already have an account?\r\n\t\t\t\t<a routerLink=\"/login\">Log in</a>\r\n\t\t\t</p>\r\n\t\t</mat-card-content>\r\n\t</mat-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".register-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/bg.png") + ");\n  background-size: cover;\n  min-height: 100% !important;\n  min-width: 100% !important; }\n\nmat-card {\n  margin: 2em auto;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.9) !important; }\n\n.register-box-header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .register-box-header img {\n    max-width: 60%; }\n\n.justifier {\n  width: 100%;\n  padding-bottom: 2%; }\n\n.icon-aligner {\n  margin-top: -2px; }\n\n.register-button {\n  width: 100%;\n  padding: 1.5% !important;\n  font-size: 1.5em;\n  color: #fff !important; }\n\nhr {\n  display: block;\n  margin: 10px 0 10px 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_user_service__ = __webpack_require__("../../../../../src/app/users/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__ = __webpack_require__("../../../../../src/app/alert/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
        this.formControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required
        ]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].email,
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required
        ]);
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model).subscribe(function (data) {
            _this.loading = false;
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error._body);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-register',
            template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__users_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__alert_alert_service__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <mat-card>\r\n        <mat-card-header class=\"greeter\">\r\n            <div>\r\n                <p>Dzień dobry, {{currentUser.firstName}}!</p>\r\n            </div>\r\n            <div class=\"avatar-container\">\r\n                <img mat-card-avatar src=\"assets/images/avatar_tmp.png\" (click)=\"changeAvatar()\"/>\r\n                <input type=\"file\" #fileInput hidden/>                \r\n            </div>\r\n            <hr/>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n            <mat-nav-list>\r\n                <mat-list-item *ngFor=\"let project of userProjects\">\r\n                    <a matLine (click)=\"goToTasks(project.id)\">{{ project.name }}</a>\r\n                    <button mat-icon-button (click)=\"showInfo(link)\">\r\n                        <mat-icon>info</mat-icon>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"goToSettings(project.id)\">\r\n                        <i class=\"material-icons\">settings</i>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"deleteProject(project)\">\r\n                        <i class=\"material-icons\">delete</i>\r\n                    </button>\r\n\r\n                </mat-list-item>\r\n            </mat-nav-list>\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n            <button ttle=\"Dodaj projekt\" mat-fab color=\"primary\" mat-button (click)=\"addProject()\">\r\n                <mat-icon>add</mat-icon>\r\n            </button>\r\n        </mat-card-actions>\r\n    </mat-card>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: absolute;\n  background-image: url(\"/assets/images/bg.png\");\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-height: 100% !important;\n  min-width: 100% !important;\n  z-index: -1; }\n\n.greeter {\n  display: block; }\n  .greeter p {\n    font-size: 2em;\n    font-weight: 200 !important;\n    color: #4e4e4e; }\n  .greeter .avatar-container {\n    margin-top: -20px; }\n    .greeter .avatar-container img {\n      width: 20%;\n      height: 20%; }\n\nmat-card {\n  margin: 2em auto;\n  text-align: center;\n  background-color: rgba(255, 255, 255, 0.9) !important; }\n  mat-card mat-card-actions button {\n    float: right;\n    margin-right: 20px;\n    color: white; }\n\n.addProject {\n  color: orange;\n  font-weight: bold;\n  margin: 15px; }\n\nhr {\n  display: block;\n  margin: 10px 0 10px 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_project_add_project_add_component__ = __webpack_require__("../../../../../src/app/project/project-add/project-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_shared_project_service__ = __webpack_require__("../../../../../src/app/project/shared/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__users_user_user_service__ = __webpack_require__("../../../../../src/app/users/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__task_shared_users_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/users-filters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomeComponent = (function () {
    function HomeComponent(userService, projectService, filtersService, taskService, router, dialog) {
        this.userService = userService;
        this.projectService = projectService;
        this.filtersService = filtersService;
        this.taskService = taskService;
        this.router = router;
        this.dialog = dialog;
        this.users = [];
        this.userProjects = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadAllUsers();
        this.projectService.getProjectsFromUser(this.currentUser.id)
            .subscribe(function (res) { _this.userProjects = res; });
    };
    HomeComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        this.userService.delete(_id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    HomeComponent.prototype.goToTasks = function (projectId) {
        if (localStorage.getItem('currentProject') !== undefined) {
            localStorage.removeItem('currentProject');
            localStorage.setItem('currentProject', projectId.toString());
            this.filtersService.updateData();
            this.taskService.updateList();
        }
        else {
            localStorage.setItem('currentProject', projectId.toString());
            this.filtersService.updateData();
            this.taskService.updateList();
        }
        this.router.navigate(['/tasks']);
    };
    HomeComponent.prototype.goToSettings = function (projectId) {
        if (localStorage.getItem('currentProject') !== undefined) {
            localStorage.removeItem('currentProject');
            localStorage.setItem('currentProject', projectId.toString());
            this.filtersService.updateData();
            this.taskService.updateList();
        }
        else {
            localStorage.setItem('currentProject', projectId.toString());
            this.filtersService.updateData();
            this.taskService.updateList();
        }
        this.router.navigate(['/project', projectId]);
    };
    HomeComponent.prototype.addProject = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__project_project_add_project_add_component__["a" /* ProjectAddComponent */], {
            width: '480px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.userProjects.push(result);
            }
        });
    };
    HomeComponent.prototype.deleteProject = function (project) {
        var index = this.userProjects.indexOf(project, 0);
        this.userProjects.splice(index, 1);
        this.projectService.deleteProject(project.id).subscribe();
    };
    HomeComponent.prototype.changeAvatar = function () {
        console.log('test');
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'tskr-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__users_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__project_shared_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_6__task_shared_users_filters_service__["a" /* UsersFiltersService */],
            __WEBPACK_IMPORTED_MODULE_7__task_shared_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/milestone/milestone-add/milestone-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Dodaj punkt kontrolny</h1>\r\n<div mat-dialog-content>\r\n    <p>Wypenij poniższe dane</p>\r\n    <mat-form-field>\r\n        <input matInput tabindex=\"1\" [(ngModel)]=\"data.milestone.name\" placeholder=\"Nazwa punktu kontrolnego\" required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"data.milestone.endDate\" [matDatepicker]=\"picker\" placeholder=\"Termin\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"data.milestone\" tabindex=\"2\">Dodaj</button>\r\n    <button mat-button (click)=\"onCancelClick()\" tabindex=\"-1\">Anuluj</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/milestone/milestone-add/milestone-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/milestone/milestone-add/milestone-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilestoneAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MilestoneAddComponent = (function () {
    function MilestoneAddComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MilestoneAddComponent.prototype.ngOnInit = function () {
    };
    MilestoneAddComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    MilestoneAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-milestone-add',
            template: __webpack_require__("../../../../../src/app/milestone/milestone-add/milestone-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/milestone/milestone-add/milestone-add.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], MilestoneAddComponent);
    return MilestoneAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/milestone/milestone-edit/milestone-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Dodaj punkt kontrolny</h1>\r\n<div mat-dialog-content>\r\n    <p>Wypenij poniższe dane</p>\r\n    <mat-form-field>\r\n        <input matInput tabindex=\"1\" [(ngModel)]=\"data.milestone.name\" placeholder=\"Nazwa punktu kontrolnego\" required>\r\n    </mat-form-field>\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"data.milestone.endDate\" [matDatepicker]=\"picker\" placeholder=\"Termin\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"data.milestone\" tabindex=\"2\">Zapisz</button>\r\n    <button mat-button (click)=\"onCancelClick()\" tabindex=\"-1\">Anuluj</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/milestone/milestone-edit/milestone-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/milestone/milestone-edit/milestone-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilestoneEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var MilestoneEditComponent = (function () {
    function MilestoneEditComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    MilestoneEditComponent.prototype.ngOnInit = function () {
    };
    MilestoneEditComponent.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    MilestoneEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-milestone-edit',
            template: __webpack_require__("../../../../../src/app/milestone/milestone-edit/milestone-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/milestone/milestone-edit/milestone-edit.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], MilestoneEditComponent);
    return MilestoneEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/milestone/milestone-thumbnail/milestone-thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-header>\r\n        <div mat-card-avatar class=\"day\">\r\n            <p>{{day}}</p>\r\n        </div>\r\n        <mat-card-title>{{dayOfWeek}}</mat-card-title>\r\n        <mat-card-subtitle>{{monthAndYear}}</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <mat-card-content>\r\n        <p>{{milestone.name}}</p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n        <button mat-icon-button (click)=\"editMilestone()\">\r\n            <mat-icon>mode_edit</mat-icon>\r\n        </button>\r\n        <div fxFlex></div>\r\n        <button mat-icon-button (click)=\"deleteMilestone()\">\r\n            <mat-icon>cancel</mat-icon>\r\n        </button>\r\n    </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/milestone/milestone-thumbnail/milestone-thumbnail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card {\n  min-height: 50px;\n  min-width: 200px; }\n  mat-card mat-card-header .day {\n    margin-top: -40px; }\n    mat-card mat-card-header .day p {\n      font-size: 2.5em; }\n  mat-card mat-card-actions button {\n    display: inline-block;\n    color: rgba(0, 0, 0, 0.13); }\n  mat-card mat-card-actions button:hover {\n    transition: color 0.5s ease;\n    color: #FF9700; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/milestone/milestone-thumbnail/milestone-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilestoneThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_milestone_model__ = __webpack_require__("../../../../../src/app/milestone/shared/milestone-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__milestone_edit_milestone_edit_component__ = __webpack_require__("../../../../../src/app/milestone/milestone-edit/milestone-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_milestone_service__ = __webpack_require__("../../../../../src/app/milestone/shared/milestone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modals_yes_no_modal_yes_no_modal_component__ = __webpack_require__("../../../../../src/app/modals/yes-no-modal/yes-no-modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MilestoneThumbnailComponent = (function () {
    function MilestoneThumbnailComponent(milestoneService, dialog, snackBar) {
        this.milestoneService = milestoneService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.milestoneDeleted = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    MilestoneThumbnailComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_moment__["locale"]('pl');
        var formattedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.milestone.endDate).format('LLLL');
        var splitted = formattedDate.split(' ');
        this.dayOfWeek = splitted[0].slice(0, -1);
        this.day = splitted[1];
        this.monthAndYear = splitted[2] + " " + splitted[3];
    };
    MilestoneThumbnailComponent.prototype.ngOnChanges = function (changes) {
    };
    MilestoneThumbnailComponent.prototype.editMilestone = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__milestone_edit_milestone_edit_component__["a" /* MilestoneEditComponent */], {
            width: '450px',
            data: { milestone: this.milestone }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.milestoneService.editMilestone(result).subscribe(function () {
                    _this.milestone = result;
                });
                _this.snackBar.open('Zakończono edycje punktu kontrolnego', '', { duration: 2000 });
            }
        });
    };
    MilestoneThumbnailComponent.prototype.deleteMilestone = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__modals_yes_no_modal_yes_no_modal_component__["a" /* YesNoModalComponent */], {
            width: '250px',
            data: { message: 'Czy na pewno chcesz usunąć ten punkt kontrolny?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.milestoneService.deleteMilestone(_this.milestone.id).subscribe(function () {
                    _this.snackBar.open('Pomyślnie usunięto punkt kontrolny', '', { duration: 2000 });
                    _this.milestoneDeleted.emit();
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__shared_milestone_model__["a" /* MilestoneModel */])
    ], MilestoneThumbnailComponent.prototype, "milestone", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], MilestoneThumbnailComponent.prototype, "milestoneDeleted", void 0);
    MilestoneThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-milestone-thumbnail',
            template: __webpack_require__("../../../../../src/app/milestone/milestone-thumbnail/milestone-thumbnail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/milestone/milestone-thumbnail/milestone-thumbnail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_milestone_service__["a" /* MilestoneService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatSnackBar */]])
    ], MilestoneThumbnailComponent);
    return MilestoneThumbnailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/milestone/milestone.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"divek\">\r\n    <p>Dodawanie</p>\r\n    <input type=\"text\" [(ngModel)]=\"milestoneToAdd.Name\" placeholder=\"name\" />\r\n    <mat-form-field>\r\n        <input matInput [(ngModel)]=\"milestoneToAdd.EndDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n    <button (click)=\"addMilestone(milestoneToAdd)\">Add milestone</button>\r\n</div> -->\r\n\r\n<mat-card class=\"milestones-header\">\r\n    <mat-card-header>\r\n        <div mat-card-avatar>\r\n            <mat-icon>timeline</mat-icon>\r\n        </div>\r\n        <mat-card-title>Oś czasu</mat-card-title>\r\n        <mat-card-subtitle>Dodaj, edytuj lub usuń punkty kontrolne z projektu</mat-card-subtitle>\r\n        <div class=\"add-milestone-button\">\r\n            <button title=\"Edytuj\" mat-mini-fab color=\"primary\" mat-button (click)=\"addMilestone()\">\r\n                <mat-icon>add</mat-icon>\r\n            </button>\r\n        </div>\r\n    </mat-card-header>\r\n</mat-card>\r\n\r\n<div class=\"milestone-timeline-container\">\r\n    <div class=\"marker\">\r\n        <p>START</p>\r\n    </div>\r\n    <div class=\"timeline\">\r\n        <div class=\"milestone-row\" *ngFor=\"let milestone of milestones; let i = index\">\r\n            <div *ngIf=\"i % 2 === 0\">\r\n                <svg>\r\n                    <g>\r\n                        <line class=\"right\" x1=\"50%\" y1=\"50%\" x2=\"95%\" y2=\"50%\"></line>\r\n                        <circle cx=\"50%\" cy=\"50%\" r=\"0.3em\"></circle>\r\n                    </g>\r\n                </svg>\r\n                <div class=\"milestone-right\">\r\n                    <tskr-milestone-thumbnail [milestone]=\"milestone\" (milestoneDeleted)=\"onMilestoneDeleted(milestone)\"></tskr-milestone-thumbnail>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"i % 2 === 1\">\r\n                <svg>\r\n                    <g>\r\n                        <line class=\"left\" x1=\"5%\" y1=\"50%\" x2=\"50%\" y2=\"50%\"></line>\r\n                        <circle cx=\"50%\" cy=\"50%\" r=\"0.3em\"></circle>\r\n                    </g>\r\n                </svg>\r\n                <div class=\"milestone-left\">\r\n                    <tskr-milestone-thumbnail [milestone]=\"milestone\" (milestoneDeleted)=\"onMilestoneDeleted(milestone)\"></tskr-milestone-thumbnail>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <div class=\"center\">\r\n  <div class=\"divek\">\r\n    <p>Dodawanie</p>\r\n      <input type=\"text\" [(ngModel)]=\"milestoneToAdd.Name\" placeholder=\"name\"/>\r\n      <mat-form-field>\r\n          <input matInput [(ngModel)]=\"milestoneToAdd.EndDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n      <button (click)=\"addMilestone(milestoneToAdd)\">Add milestone</button>  \r\n  </div>\r\n    <p>Lista: </p>\r\n      <div *ngFor=\"let milestone of milestones\">\r\n          <div class=\"divek\">\r\n            Nazwa: <p>{{milestone.name}}</p>\r\n            Data: <p>{{milestone.endDate}}</p>\r\n          </div>\r\n          <button (click)=\"deleteMilestone(milestone)\">Delete</button>\r\n          <button (click)=\"turnEditMode(milestone)\">Edit</button>         \r\n      </div>\r\n</div>\r\n<div class=\"divek\" *ngIf=\"editMode\">\r\n    <p>Edytowanie</p>\r\n      <input type=\"text\" [(ngModel)]=\"milestoneToEdit.name\" placeholder=\"name\"/>\r\n      <mat-form-field>\r\n          <input matInput [(ngModel)]=\"milestoneToEdit.endDate\" [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker></mat-datepicker>\r\n      </mat-form-field>\r\n      <button (click)=\"editMilestone()\">Save</button>  \r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/milestone/milestone.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  display: none; }\n\nmat-card.milestones-header mat-card-header mat-icon {\n  color: gray; }\n\nmat-card.milestones-header mat-card-header .add-milestone-button {\n  position: absolute;\n  right: 16px; }\n  mat-card.milestones-header mat-card-header .add-milestone-button mat-icon {\n    color: white; }\n\n.milestone-timeline-container {\n  margin-top: 16px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  background: url(\"/assets/images/timeline_thin.png\") repeat-y center; }\n  .milestone-timeline-container div.marker {\n    margin: 0 auto;\n    background: #C6CED6;\n    border-radius: 5px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 35px;\n    width: 100px; }\n    .milestone-timeline-container div.marker p {\n      color: white;\n      font-weight: bold; }\n  .milestone-timeline-container div.timeline {\n    margin: 0 auto;\n    min-height: 500px;\n    max-height: 650px; }\n    .milestone-timeline-container div.timeline .milestone-row {\n      height: 100px;\n      margin: 0 auto;\n      position: relative; }\n      .milestone-timeline-container div.timeline .milestone-row svg {\n        width: 100%;\n        height: 100%;\n        position: absolute; }\n        .milestone-timeline-container div.timeline .milestone-row svg g line.left {\n          stroke: gray;\n          stroke-width: 0.5px; }\n        .milestone-timeline-container div.timeline .milestone-row svg g line.right {\n          stroke: gray;\n          stroke-width: 0.5px; }\n        .milestone-timeline-container div.timeline .milestone-row svg g circle {\n          stroke: gray;\n          stroke-width: 0.5px;\n          fill: #FF9700; }\n      .milestone-timeline-container div.timeline .milestone-row .milestone-left {\n        z-index: 10;\n        position: absolute;\n        width: 40%;\n        margin-left: 5px; }\n      .milestone-timeline-container div.timeline .milestone-row .milestone-right {\n        z-index: 10;\n        position: absolute;\n        right: 0;\n        margin-right: 5px;\n        width: 40%; }\n\n.divek {\n  border-color: red;\n  border: solid 1px;\n  border-radius: 8px;\n  padding: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-align: center;\n  margin: 10px; }\n\n.center {\n  text-align: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/milestone/milestone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilestoneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_milestone_service__ = __webpack_require__("../../../../../src/app/milestone/shared/milestone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_milestone_model__ = __webpack_require__("../../../../../src/app/milestone/shared/milestone-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__milestone_add_milestone_add_component__ = __webpack_require__("../../../../../src/app/milestone/milestone-add/milestone-add.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MilestoneComponent = (function () {
    function MilestoneComponent(milestoneService, dialog, snackBar) {
        this.milestoneService = milestoneService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.milestones = [];
        this.editMode = false;
    }
    MilestoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.milestoneService.getAllMilestones().subscribe(function (res) {
            res.sort(function (a, b) {
                return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
            });
            _this.milestones = res;
        });
    };
    MilestoneComponent.prototype.deleteMilestone = function (milestone) {
        this.milestoneService.deleteMilestone(milestone.id).subscribe();
        var index = this.milestones.indexOf(milestone);
        this.milestones.splice(index, 1);
    };
    MilestoneComponent.prototype.addMilestone = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__milestone_add_milestone_add_component__["a" /* MilestoneAddComponent */], {
            width: '450px',
            data: { milestone: new __WEBPACK_IMPORTED_MODULE_1__shared_milestone_model__["a" /* MilestoneModel */]() }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var newMilestone = result;
                newMilestone.ProjectId = +localStorage.getItem('currentProject');
                _this.milestoneService.addMilestone(newMilestone).subscribe(function (newId) {
                    result.id = newId;
                });
                _this.milestones.push(result);
                _this.milestones.sort(function (a, b) {
                    return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
                });
                _this.snackBar.open('Nowy punkt kontrolny został dodany', '', { duration: 2000 });
            }
        });
    };
    MilestoneComponent.prototype.turnEditMode = function (milestone) {
        // this.milestoneToEdit.id = milestone.id;
        this.editMode = true;
    };
    MilestoneComponent.prototype.onMilestoneDeleted = function (milestone) {
        this.milestones = this.milestones.filter(function (item) { return item.id !== milestone.id; });
    };
    MilestoneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'tskr-milestone',
            template: __webpack_require__("../../../../../src/app/milestone/milestone.component.html"),
            styles: [__webpack_require__("../../../../../src/app/milestone/milestone.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_milestone_service__["a" /* MilestoneService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["r" /* MatSnackBar */]])
    ], MilestoneComponent);
    return MilestoneComponent;
}());



/***/ }),

/***/ "../../../../../src/app/milestone/milestone.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilestoneModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tasker_material_module__ = __webpack_require__("../../../../../src/app/tasker-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_milestone_service__ = __webpack_require__("../../../../../src/app/milestone/shared/milestone.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__milestone_component__ = __webpack_require__("../../../../../src/app/milestone/milestone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__milestone_thumbnail_milestone_thumbnail_component__ = __webpack_require__("../../../../../src/app/milestone/milestone-thumbnail/milestone-thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__milestone_add_milestone_add_component__ = __webpack_require__("../../../../../src/app/milestone/milestone-add/milestone-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__milestone_edit_milestone_edit_component__ = __webpack_require__("../../../../../src/app/milestone/milestone-edit/milestone-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { MilestoneDeleteComponent } from './milestone-delete/milestone-delete.component';
var MilestoneModule = (function () {
    function MilestoneModule() {
    }
    MilestoneModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__tasker_material_module__["a" /* TaskerMaterialModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_milestone_service__["a" /* MilestoneService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__milestone_component__["a" /* MilestoneComponent */], __WEBPACK_IMPORTED_MODULE_6__milestone_thumbnail_milestone_thumbnail_component__["a" /* MilestoneThumbnailComponent */], __WEBPACK_IMPORTED_MODULE_7__milestone_add_milestone_add_component__["a" /* MilestoneAddComponent */], __WEBPACK_IMPORTED_MODULE_8__milestone_edit_milestone_edit_component__["a" /* MilestoneEditComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_5__milestone_component__["a" /* MilestoneComponent */], __WEBPACK_IMPORTED_MODULE_6__milestone_thumbnail_milestone_thumbnail_component__["a" /* MilestoneThumbnailComponent */], __WEBPACK_IMPORTED_MODULE_7__milestone_add_milestone_add_component__["a" /* MilestoneAddComponent */], __WEBPACK_IMPORTED_MODULE_8__milestone_edit_milestone_edit_component__["a" /* MilestoneEditComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__milestone_add_milestone_add_component__["a" /* MilestoneAddComponent */],
                __WEBPACK_IMPORTED_MODULE_8__milestone_edit_milestone_edit_component__["a" /* MilestoneEditComponent */]
            ]
        })
    ], MilestoneModule);
    return MilestoneModule;
}());



/***/ }),

/***/ "../../../../../src/app/milestone/shared/milestone-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilestoneModel; });
var MilestoneModel = (function () {
    function MilestoneModel() {
        this.endDate = new Date();
        this.name = '';
    }
    return MilestoneModel;
}());



/***/ }),

/***/ "../../../../../src/app/milestone/shared/milestone.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MilestoneService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MilestoneService = (function () {
    function MilestoneService(http) {
        this.http = http;
        this.addMilestoneURL = '/api/Milestones';
        this.deleteMilestoneURL = '/api/Milestones/';
        this.getAllMilestonesUrl = '/api/milestones/getall/';
    }
    MilestoneService.prototype.addMilestone = function (milestoneAdd) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.addMilestoneURL, milestoneAdd, { headers: headers });
    };
    MilestoneService.prototype.getAllMilestones = function () {
        return this.http.get(this.getAllMilestonesUrl + localStorage.getItem('currentProject'));
    };
    MilestoneService.prototype.deleteMilestone = function (milestoneId) {
        return this.http.delete(this.deleteMilestoneURL + milestoneId);
    };
    MilestoneService.prototype.editMilestone = function (milestoneModel) {
        return this.http.put(this.addMilestoneURL, milestoneModel);
    };
    MilestoneService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], MilestoneService);
    return MilestoneService;
}());



/***/ }),

/***/ "../../../../../src/app/modals/yes-no-modal/yes-no-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{data.message}}</h1>\r\n<div mat-dialog-content>\r\n</div>    \r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"yes()\">Tak</button>\r\n  <button mat-button (click)=\"no()\">Nie</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modals/yes-no-modal/yes-no-modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modals/yes-no-modal/yes-no-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YesNoModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var YesNoModalComponent = (function () {
    function YesNoModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    YesNoModalComponent.prototype.yes = function () {
        this.dialogRef.close(true);
    };
    YesNoModalComponent.prototype.no = function () {
        this.dialogRef.close();
    };
    YesNoModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'tskr-yes-no-modal',
            template: __webpack_require__("../../../../../src/app/modals/yes-no-modal/yes-no-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modals/yes-no-modal/yes-no-modal.component.scss")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatDialogRef */], Object])
    ], YesNoModalComponent);
    return YesNoModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"app-toolbar mat-elevation-z4\" > <!--*ngIf=\"isLoggedIn | async\" -->\r\n  <span>\r\n    <img class=\"toolbar-brand\" src=\"assets/images/tasker-logo.png\">\r\n  </span>\r\n\r\n  <span class=\"toolbar-buttons\">\r\n    <a mat-icon-button class=\"medium\" [routerLink]=\"['/']\">\r\n      <mat-icon color=\"primary\">home</mat-icon>\r\n    </a>\r\n    <a mat-icon-button class=\"medium\" [routerLink]=\"['/tasks']\">\r\n      <mat-icon color=\"primary\">list</mat-icon>\r\n    </a>\r\n    <!-- <a mat-icon-button class=\"medium\">\r\n      <mat-icon color=\"primary\">timeline</mat-icon>\r\n    </a> -->\r\n    <a mat-icon-button [routerLink]=\"['/tasks/new']\" class=\"medium\">\r\n      <mat-icon color=\"primary\">playlist_add</mat-icon>\r\n    </a>\r\n  </span>\r\n\r\n  <span>{{loggedUser}}</span>\r\n\r\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-icon-button.medium {\n  width: 48px;\n  height: 48px;\n  line-height: 48px;\n  margin-right: 20px; }\n  .mat-icon-button.medium .mat-icon, .mat-icon-button.medium .mat-icon-button i {\n    line-height: 32px; }\n  .mat-icon-button.medium .mat-icon {\n    width: 32px;\n    height: 32px; }\n  .mat-icon-button.medium .material-icons {\n    font-size: 32px; }\n\n.toolbar-buttons {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n  margin-left: 20px; }\n\n.toolbar-brand {\n  height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_authentication_authentication_service__ = __webpack_require__("../../../../../src/app/auth/authentication/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.loggedUser = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = this.authService.loggedIn;
        this.loggedUser = JSON.parse(localStorage.getItem('currentUser')).firstName
            + ' ' + JSON.parse(localStorage.getItem('currentUser')).lastName;
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.isLoggedIn = this.authService.loggedIn;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_authentication_authentication_service__["a" /* AuthenticationService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/project-add/project-add.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Dodaj projekt</h1>\r\n<div mat-dialog-actions class=\"add-project-container\">\r\n    <mat-form-field class=\"full-width\">\r\n        <textarea matInput [(ngModel)]=\"projectToAdd.Name\" placeholder=\"Nazwa projektu\"></textarea>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"full-width\">\r\n        <textarea matInput [(ngModel)]=\"projectToAdd.Description\" placeholder=\"Opis projektu\"></textarea>\r\n    </mat-form-field>\r\n\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n    <button mat-button (click)=\"addProject()\">Dodaj</button>\r\n    <button mat-button (click)=\"no()\">Anuluj</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/project-add/project-add.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-project-container {\n  min-width: 150px;\n  max-width: 500px;\n  min-height: 200px;\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project-add/project-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project_service__ = __webpack_require__("../../../../../src/app/project/shared/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_project_add__ = __webpack_require__("../../../../../src/app/project/shared/project-add.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProjectAddComponent = (function () {
    function ProjectAddComponent(projectService, dialogRef, data) {
        this.projectService = projectService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.projectToAdd = new __WEBPACK_IMPORTED_MODULE_2__shared_project_add__["a" /* ProjectAdd */]();
    }
    ProjectAddComponent.prototype.addProject = function () {
        var _this = this;
        this.projectToAdd.OwnerId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.projectService.addProject(this.projectToAdd)
            .subscribe(function (res) {
            _this.project = res;
            _this.dialogRef.close(_this.project);
        });
    };
    ProjectAddComponent.prototype.no = function () {
        this.dialogRef.close();
    };
    ProjectAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'tskr-project-add',
            template: __webpack_require__("../../../../../src/app/project/project-add/project-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/project-add/project-add.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatDialogRef */], Object])
    ], ProjectAddComponent);
    return ProjectAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/project-edit/project-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Edytuj projekt</h1>\r\n<div mat-dialog-content>\r\n    <div>\r\n        <mat-form-field>\r\n            <textarea matInput [(ngModel)]=\"projectToEdit.Name\" placeholder=\"Nazwa projektu\"></textarea>\r\n        </mat-form-field>\r\n        <mat-form-field>\r\n            <textarea matInput [(ngModel)]=\"projectToEdit.Description\" placeholder=\"Opis projektu\"></textarea>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <div>\r\n        <button mat-button (click)=\"editProject()\" >Edytuj</button>\r\n        <button mat-button (click)=\"no()\">Anuluj</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/project/project-edit/project-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project-edit/project-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_project_service__ = __webpack_require__("../../../../../src/app/project/shared/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_project_edit__ = __webpack_require__("../../../../../src/app/project/shared/project-edit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ProjectEditComponent = (function () {
    function ProjectEditComponent(projectService, dialogRef, data) {
        this.projectService = projectService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.projectToEdit = new __WEBPACK_IMPORTED_MODULE_2__shared_project_edit__["a" /* ProjectEdit */]();
        this.projectToEdit.Id = data.id;
        this.projectToEdit.Name = data.name;
        this.projectToEdit.Description = data.description;
    }
    ProjectEditComponent.prototype.editProject = function () {
        var _this = this;
        this.projectService.editProject(this.projectToEdit)
            .subscribe(function (res) {
            _this.project = res;
            _this.dialogRef.close(_this.project);
        });
    };
    ProjectEditComponent.prototype.no = function () {
        this.dialogRef.close();
    };
    ProjectEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'tskr-project-edit',
            template: __webpack_require__("../../../../../src/app/project/project-edit/project-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/project-edit/project-edit.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MatDialogRef */], Object])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"project-view-container\">\r\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxFlex>\r\n        <div fxFlex=\"50%\" class=\"project-details-container\">\r\n            <mat-card class=\"\">\r\n                <mat-card-title>\r\n                    <div class=\"project-title\">\r\n                        <p>{{project.name}}</p>\r\n                    </div>\r\n                    <div class=\"edit-button\">\r\n                        <button title=\"Edytuj\" mat-fab color=\"primary\" mat-button (click)=\"editProject()\">\r\n                            <mat-icon>mode_edit</mat-icon>\r\n                        </button>\r\n                    </div>\r\n                </mat-card-title>\r\n                <mat-card-content>\r\n                    <!-- TODO -->\r\n                    <p>Opis projektu</p>\r\n                    <br/> {{project.description}}\r\n                    <br/>\r\n                    <br/>\r\n                    <p>Czlonkowie zespolu</p>\r\n                </mat-card-content>\r\n            </mat-card>\r\n        </div>\r\n        <div fxFlex=\"50%\" class=\"timeline-container\">\r\n            <tskr-milestone></tskr-milestone>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- <div flex>\r\n  <mat-card class=\"main-container\">\r\n\r\n    <mat-card-title>\r\n      <mat-grid-list cols=\"8\">\r\n          <mat-grid-tile class=\"project-name\" colspan=\"6\">\r\n              <strong>{{project.name}}</strong>\r\n          </mat-grid-tile>\r\n          <mat-grid-tile colspan=\"2\">\r\n              <button (click)=\"editProject()\" mat-raised-button color=\"primary\"><mat-icon class=\"white-icon\">edit</mat-icon></button>\r\n          </mat-grid-tile>\r\n      </mat-grid-list>\r\n    </mat-card-title>\r\n    <mat-card-content>{{project.description}}</mat-card-content>\r\n    <hr/>\r\n\r\n    <h3 style=\"margin-bottom: -15px\">Team members</h3>\r\n  <p *ngIf=\"members.length===0\">This project has no members.</p>\r\n  \r\n  <mat-grid-list cols=\"8\" rowHeight=\"80px\" class=\"margin-top\">\r\n    <mat-grid-tile colspan=\"1\">\r\n      <mat-icon color=\"primary\">mail</mat-icon>\r\n    </mat-grid-tile>   \r\n    <br/>\r\n    <br/>\r\n    <mat-grid-tile colspan=\"5\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input matInput placeholder=\"Email\" [formControl]=\"emailFormControl\" [(ngModel)]=\"newUserEmail\">\r\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">Please enter a valid email address</mat-error>\r\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">Email is <strong>required</strong></mat-error>\r\n      </mat-form-field>\r\n    </mat-grid-tile>\r\n    <mat-grid-tile colspan=\"2\">\r\n      <button mat-raised-button color=\"primary\" class=\"white-icon\" (click)=\"addMember()\">Invite</button>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>\r\n \r\n  <mat-grid-list *ngFor=\"let member of members\" cols=\"8\" rowHeight=\"40px\" class=\"margin-top\">\r\n      <mat-grid-tile colspan=\"1\">\r\n          <mat-icon color=\"primary\">account_circle</mat-icon>\r\n        </mat-grid-tile>   \r\n        <mat-grid-tile colspan=\"5\" class=\"user-box\">\r\n            {{member.firstName}} {{member.lastName}}\r\n        </mat-grid-tile>\r\n        <mat-grid-tile colspan=\"2\" >\r\n          <button mat-raised-button color=\"primary\" class=\"white-icon\" (click)=\"removeMember(member)\"> <i class=\"material-icons\">clear</i> </button>\r\n        </mat-grid-tile>\r\n\r\n  </mat-grid-list>\r\n  </mat-card>\r\n</div> -->\r\n\r\n<!-- <tskr-milestone></tskr-milestone> -->"

/***/ }),

/***/ "../../../../../src/app/project/project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-view-container {\n  margin: 16px; }\n  .project-view-container .project-details-container mat-card {\n    min-height: 500px; }\n    .project-view-container .project-details-container mat-card mat-card-title {\n      margin-top: 50px; }\n      .project-view-container .project-details-container mat-card mat-card-title .project-title {\n        display: inline-block;\n        font-size: 1.5em;\n        font-weight: 200; }\n      .project-view-container .project-details-container mat-card mat-card-title .edit-button {\n        float: right; }\n        .project-view-container .project-details-container mat-card mat-card-title .edit-button button {\n          color: white; }\n  .project-view-container .timeline-container {\n    margin-left: 16px; }\n\n.member {\n  background: white;\n  border-radius: 8px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-top: 5px; }\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.addMember {\n  margin-left: 10%;\n  margin-top: 30px;\n  width: 30%; }\n\n.white-icon {\n  color: white !important; }\n\n.project-name {\n  -webkit-box-align: left;\n      -ms-flex-align: left;\n          align-items: left;\n  text-align: left; }\n\n.margin-top {\n  margin-top: 20px; }\n\n.user-box {\n  border: solid 1px #dddddd; }\n\n.main-container {\n  max-width: 600px;\n  margin: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__project_edit_project_edit_component__ = __webpack_require__("../../../../../src/app/project/project-edit/project-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_project_member__ = __webpack_require__("../../../../../src/app/project/shared/project-member.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_project_model__ = __webpack_require__("../../../../../src/app/project/shared/project.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_project_service__ = __webpack_require__("../../../../../src/app/project/shared/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProjectComponent = (function () {
    function ProjectComponent(route, dialog, projectService) {
        this.route = route;
        this.dialog = dialog;
        this.projectService = projectService;
        this.project = new __WEBPACK_IMPORTED_MODULE_3__shared_project_model__["a" /* ProjectModel */]();
        this.members = [];
        this.newUserEmail = '';
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].email,
        ]);
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.projectService.getProjectDetails(+params['id']).subscribe(function (res) { return _this.project = res; });
            _this.projectService.getAllMembers(+params['id']).subscribe(function (res) { return _this.members = res; });
        });
    };
    ProjectComponent.prototype.removeMember = function (member) {
        this.projectService.removeMember(member.Id, this.project.id).subscribe();
        var index = this.members.indexOf(member, 0);
        this.members.splice(index, 1);
    };
    ProjectComponent.prototype.addMember = function () {
        var _this = this;
        this.projectService.addMember(this.newUserEmail, this.project.id).subscribe(function (res) {
            var newMembers = new __WEBPACK_IMPORTED_MODULE_2__shared_project_member__["a" /* ProjectMember */]();
            newMembers = res;
            _this.members.push(newMembers);
            _this.newUserEmail = '';
        });
    };
    ProjectComponent.prototype.editProject = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__project_edit_project_edit_component__["a" /* ProjectEditComponent */], {
            width: '480px',
            data: { description: this.project.description, name: this.project.name, id: this.project.id }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.project.name = result.name;
                _this.project.description = result.description;
            }
        });
    };
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Component"])({
            selector: 'tskr-project',
            template: __webpack_require__("../../../../../src/app/project/project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project/project.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_4__shared_project_service__["a" /* ProjectService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project/project.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__milestone_milestone_module__ = __webpack_require__("../../../../../src/app/milestone/milestone.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasker_material_module__ = __webpack_require__("../../../../../src/app/tasker-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_project_service__ = __webpack_require__("../../../../../src/app/project/shared/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__project_add_project_add_component__ = __webpack_require__("../../../../../src/app/project/project-add/project-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__project_edit_project_edit_component__ = __webpack_require__("../../../../../src/app/project/project-edit/project-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ProjectModule = (function () {
    function ProjectModule() {
    }
    ProjectModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_0__milestone_milestone_module__["a" /* MilestoneModule */],
                __WEBPACK_IMPORTED_MODULE_2__tasker_material_module__["a" /* TaskerMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__shared_project_service__["a" /* ProjectService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__project_add_project_add_component__["a" /* ProjectAddComponent */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__project_component__["a" /* ProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_7__project_add_project_add_component__["a" /* ProjectAddComponent */],
                __WEBPACK_IMPORTED_MODULE_8__project_edit_project_edit_component__["a" /* ProjectEditComponent */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__project_edit_project_edit_component__["a" /* ProjectEditComponent */]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "../../../../../src/app/project/shared/project-add.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectAdd; });
var ProjectAdd = (function () {
    function ProjectAdd() {
    }
    return ProjectAdd;
}());



/***/ }),

/***/ "../../../../../src/app/project/shared/project-edit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEdit; });
var ProjectEdit = (function () {
    function ProjectEdit() {
    }
    return ProjectEdit;
}());



/***/ }),

/***/ "../../../../../src/app/project/shared/project-member.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectMember; });
var ProjectMember = (function () {
    function ProjectMember() {
    }
    return ProjectMember;
}());



/***/ }),

/***/ "../../../../../src/app/project/shared/project.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectModel; });
var ProjectModel = (function () {
    function ProjectModel() {
    }
    return ProjectModel;
}());



/***/ }),

/***/ "../../../../../src/app/project/shared/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.getProjectsFromUserURL = '/api/Project/user/';
        this.getProjectURL = '/api/Project/';
        this.getMembersURL = '/api/Project/members?';
        this.deleteMemberURL = 'api/Project/unassign/';
        this.addMemberURL = 'api/Project/assign';
        this.addProjectUrl = '/api/Project';
        this.editProjectUrl = '/api/Project';
        this.deleteProjectUrl = '/api/Project/';
    }
    ProjectService.prototype.getProjectsFromUser = function (userId) {
        return this.http.get(this.getProjectsFromUserURL + userId);
    };
    ProjectService.prototype.getProjectDetails = function (projectId) {
        return this.http.get(this.getProjectURL + projectId);
    };
    ProjectService.prototype.addProject = function (projectToAdd) {
        return this.http.post(this.addProjectUrl, projectToAdd);
    };
    ProjectService.prototype.editProject = function (projectToEdit) {
        return this.http.put(this.editProjectUrl, projectToEdit);
    };
    ProjectService.prototype.getAllMembers = function (projectId) {
        return this.http.get(this.getMembersURL + 'projectId=' + projectId);
    };
    ProjectService.prototype.removeMember = function (memberId, projectId) {
        return this.http.delete(this.deleteMemberURL + memberId + '/' + projectId);
    };
    ProjectService.prototype.addMember = function (memberEmail, projectId) {
        return this.http.post(this.addMemberURL, { UserEmail: memberEmail, ProjectId: projectId });
    };
    ProjectService.prototype.deleteProject = function (projectId) {
        return this.http.delete(this.deleteProjectUrl + projectId);
    };
    ProjectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "../../../../../src/app/task/shared/task.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable-next-line:import-blacklist


var TaskService = (function () {
    function TaskService(_http) {
        var _this = this;
        this._http = _http;
        this.list = [];
        this.deleteTaskURL = '/api/Task/';
        this.SharedTasksList$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (x) { return _this.listObserver = x; }).share();
        this.getTasksDb().subscribe(function (res) {
            _this.list = res;
            if (_this.listObserver !== undefined)
                _this.listObserver.next(_this.list);
        });
    }
    TaskService.prototype.isGut = function () {
        return this.list.length > 0;
    };
    TaskService.prototype.getList = function () {
        if (this.listObserver !== undefined)
            this.listObserver.next(this.list);
    };
    TaskService.prototype.updateList = function () {
        var _this = this;
        this.getTasksDb().subscribe(function (res) {
            _this.list = res;
            if (_this.listObserver !== undefined)
                _this.listObserver.next(_this.list);
            console.log(_this.list);
        });
    };
    TaskService.prototype.deleteLocalTask = function (task) {
        var _this = this;
        this.chosenTask = task;
        var parent;
        if (task.parentTaskId !== null) {
            if (this.chosenTask.children.length > 0) {
                this.chosenTask.children.forEach(function (element) {
                    element.parentTaskId = _this.chosenTask.parentTaskId;
                });
            }
            parent = this.takeTaskByID(this.list, task.parentTaskId);
            parent.children = this.chosenTask.children.slice();
        }
        else {
            if (this.chosenTask.children.length > 0) {
                this.chosenTask.children.forEach(function (element) {
                    element.parentTaskId = _this.chosenTask.parentTaskId;
                    _this.list.push(element);
                });
            }
            this.list.forEach(function (element, index) {
                if (element.id === _this.chosenTask.id) {
                    _this.list.splice(index, 1);
                    return;
                }
            });
        }
        this.listObserver.next(this.list);
        console.log(this.list);
        //this.editTTask(parent);
    };
    TaskService.prototype.addTask = function (task) {
        if (task.parentTaskId === null) {
            this.list.push(task);
            console.log(this.list);
            this.listObserver.next(this.list);
        }
        else {
            task.showChildren = true;
            this.chosenTask.children.push(task);
            this.editTaskRecursive(this.list);
            this.listObserver.next(this.list);
        }
    };
    TaskService.prototype.editTTask = function (task) {
        this.chosenTask.controlPointIds = task.controlPointIds;
        this.chosenTask.description = task.description;
        this.chosenTask.mainPerformer = task.mainPerformer;
        this.chosenTask.taskPerformers = task.taskPerformers;
        this.chosenTask.statusId = task.statusId;
        this.chosenTask.children = task.children;
        this.chosenTask.id = task.id;
        this.chosenTask.parentTaskId = task.parentTaskId;
        this.chosenTask.showChildren = task.showChildren;
        this.chosenTask.title = task.title;
        this.editTaskRecursive(this.list);
        this.listObserver.next(this.list);
    };
    TaskService.prototype.editTask = function (task) {
        this.chosenTask.controlPointIds = task.ControlPointIds;
        this.chosenTask.description = task.Description;
        this.chosenTask.mainPerformer = task.MainPerformer;
        this.chosenTask.taskPerformers = task.TaskPerformers;
        this.chosenTask.statusId = task.TaskStatusId;
        this.chosenTask.title = task.Title;
        this.editTaskRecursive(this.list);
        this.listObserver.next(this.list);
    };
    TaskService.prototype.getChosenTask = function (Id) {
        if (this.chosenTask == undefined) {
            this.chosenTask = this.takeTaskByID(this.list, Id);
        }
        return this.chosenTask;
    };
    TaskService.prototype.takeTaskByID = function (list, Id) {
        var _this = this;
        var returnedTask;
        list.forEach(function (task) {
            if (+task.id === +Id) {
                returnedTask = task;
            }
            if (returnedTask === undefined && task.children.length > 0)
                returnedTask = _this.takeTaskByID(task.children, Id);
        });
        return returnedTask;
    };
    TaskService.prototype.editTaskRecursive = function (list) {
        var _this = this;
        list.forEach(function (task) {
            if (task.id === _this.chosenTask.id) {
                task.controlPointIds = _this.chosenTask.controlPointIds;
                task.children = _this.chosenTask.children;
                task.description = _this.chosenTask.description;
                task.mainPerformer = _this.chosenTask.mainPerformer;
                task.parentTaskId = _this.chosenTask.parentTaskId;
                task.taskPerformers = _this.chosenTask.taskPerformers;
                task.statusId = _this.chosenTask.statusId;
                task.title = _this.chosenTask.title;
            }
            else {
                if (task.children.length > 0) {
                    _this.editTaskRecursive(task.children);
                }
            }
        });
    };
    TaskService.prototype.getTasksDb = function () {
        var currentProject = localStorage.getItem('currentProject');
        return this._http.get("http://localhost:4200/api/task/gettasks/" + currentProject).catch(this.handleError);
    };
    TaskService.prototype.getTask = function (id) {
        return this._http.get("http://localhost:4200/api/task/" + id).catch(this.handleError);
    };
    TaskService.prototype.getAllMilestones = function () {
        return this._http.get("http://localhost:4200/api/milestones/getall/" + localStorage.getItem('currentProject')).catch(this.handleError);
    };
    TaskService.prototype.saveNewTask = function (task) {
        return this._http.post('http://localhost:4200/api/task', task).catch(this.handleError);
    };
    TaskService.prototype.saveTask = function (task) {
        return this._http.put('http://localhost:4200/api/task', task).catch(this.handleError);
    };
    TaskService.prototype.changeTaskStatus = function (statusModel) {
        return this._http.post('http://localhost:4200/api/task/status', statusModel).catch(this.handleError);
    };
    TaskService.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error.statusText);
    };
    TaskService.prototype.deleteTask = function (id) {
        return this._http.delete(this.deleteTaskURL + id).catch(this.handleError);
    };
    TaskService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "../../../../../src/app/task/shared/users-filters.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersFiltersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_user_service__ = __webpack_require__("../../../../../src/app/users/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersFiltersService = (function () {
    function UsersFiltersService(userService, taskService) {
        var _this = this;
        this.userService = userService;
        this.taskService = taskService;
        this.Users = [];
        this.Milestones = [];
        this.loadAllUsers();
        this.loadAllMilestones();
        this.UsersList$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (x) { return _this.listUsersObserver = x; }).share();
        this.MilestonesList$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (x) { return _this.listMilestonesObserver = x; }).share();
    }
    UsersFiltersService.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.Users = users; if (_this.listUsersObserver !== undefined)
            _this.listUsersObserver.next(_this.Users); });
    };
    UsersFiltersService.prototype.loadAllMilestones = function () {
        var _this = this;
        this.taskService.getAllMilestones().subscribe(function (milestones) { _this.Milestones = milestones; if (_this.listMilestonesObserver !== undefined)
            _this.listMilestonesObserver.next(_this.Milestones); });
    };
    UsersFiltersService.prototype.updateData = function () {
        this.loadAllUsers();
        this.loadAllMilestones();
        this.getList();
    };
    UsersFiltersService.prototype.getList = function () {
        // Get the data from somewhere, i.e. http call
        //console.log(this.filteredTasks)
        if (this.listUsersObserver !== undefined)
            this.listUsersObserver.next(this.Users);
        if (this.listMilestonesObserver !== undefined)
            this.listMilestonesObserver.next(this.Milestones);
        // the important part is after getting the data you want, observer.next it
    };
    UsersFiltersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__users_user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__task_service__["a" /* TaskService */]])
    ], UsersFiltersService);
    return UsersFiltersService;
}());



/***/ }),

/***/ "../../../../../src/app/tasker-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskerMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskerMaterialModule = (function () {
    function TaskerMaterialModule() {
    }
    TaskerMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatTooltipModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["t" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["q" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["s" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["u" /* MatTooltipModule */]
            ]
        })
    ], TaskerMaterialModule);
    return TaskerMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/users/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:4200/api';
    }
    UserService.prototype.getAll = function () {
        return this.http.get(this.apiUrl + '/user/getall/' + localStorage.getItem('currentProject'));
    };
    UserService.prototype.getById = function (_id) {
        return this.http.get(this.apiUrl + '/user/' + _id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post(this.apiUrl + '/user', user, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpHeaders */]().set('Content-Type', 'application/json'),
            responseType: 'text'
        });
    };
    UserService.prototype.update = function (user) {
        return this.http.put(this.apiUrl + '/user/' + user.id, user);
    };
    UserService.prototype.delete = function (_id) {
        return this.http.delete(this.apiUrl + '/user/' + _id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/assets/images/bg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bg.f1465407a5c88fdbbdff.png";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map