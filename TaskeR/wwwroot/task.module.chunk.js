webpackJsonp(["task.module"],{

/***/ "../../../../../src/app/comment/add-comment/add-comment.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Dodaj komentarz</h1>\r\n<div mat-dialog-content class=\"add-comment-form\">\r\n    <mat-form-field class=\"full-width\">\r\n        <textarea matInput [(ngModel)]=\"commentToAdd.Content\" placeholder=\"Komentarz...\" tabindex=\"1\"></textarea>\r\n    </mat-form-field>\r\n\r\n    <div mat-dialog-actions>\r\n        <button mat-button (click)=\"addComment()\" tabindex=\"2\">Add</button>\r\n        <button mat-button (click)=\"no()\" tabindex=\"-1\">Cancel</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/comment/add-comment/add-comment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-comment-form {\n  min-width: 150px;\n  max-width: 500px;\n  min-height: 150px;\n  width: 100%; }\n\n.full-width {\n  width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment/add-comment/add-comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_comment_service__ = __webpack_require__("../../../../../src/app/comment/shared/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_comment_add__ = __webpack_require__("../../../../../src/app/comment/shared/comment-add.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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




var AddCommentComponent = (function () {
    function AddCommentComponent(commentService, dialogRef, data) {
        this.commentService = commentService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.commentToAdd = new __WEBPACK_IMPORTED_MODULE_1__shared_comment_add__["a" /* CommentAdd */]();
    }
    AddCommentComponent.prototype.addComment = function () {
        var _this = this;
        this.commentToAdd.Date = new Date();
        this.commentToAdd.MilestoneID = null;
        this.commentToAdd.UserId = JSON.parse(localStorage.getItem('currentUser')).id;
        this.commentToAdd.TaskId = +this.data.taskId;
        this.commentService.addTaskComment(this.commentToAdd)
            .subscribe(function (res) {
            _this.comment = res;
            _this.dialogRef.close(_this.comment);
        });
    };
    AddCommentComponent.prototype.no = function () {
        this.dialogRef.close();
    };
    AddCommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'tskr-add-comment',
            template: __webpack_require__("../../../../../src/app/comment/add-comment/add-comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comment/add-comment/add-comment.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */], Object])
    ], AddCommentComponent);
    return AddCommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"comment-section\" *ngIf=\"commentList.length !== 0\">\r\n    <mat-card-title>\r\n        <p>{{commentList.length}} comments</p>\r\n    </mat-card-title>\r\n    <mat-card-content>\r\n        <div style=\"margin-top: 4px;\" *ngFor=\"let comment of commentList\">\r\n            <div fxLayout=\"row\">\r\n                <div fxFlex=\"10%\">\r\n                    <img style=\"margin-top: 8px;\" mat-card-avatar src=\"assets/images/avatar_tmp.png\" />\r\n                </div>\r\n                <div fxFlex=\"90%\">\r\n                    <div fxLayout=\"column\" fxFlexFill>\r\n                        <p>{{comment.user}}</p>\r\n                        <p>{{comment.content}}</p>\r\n                        <p>{{comment.date | amTimeAgo}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <hr/>\r\n        </div>\r\n    </mat-card-content>\r\n\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card.comment-section {\n  color: #3f3f3f;\n  margin-top: 16px; }\n\n.comment {\n  margin: 15px;\n  padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_comment_service__ = __webpack_require__("../../../../../src/app/comment/shared/comment.service.ts");
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


var CommentComponent = (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
        this.commentList = [];
    }
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'tskr-comment',
            template: __webpack_require__("../../../../../src/app/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__shared_comment_service__["a" /* CommentService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/comment/comment.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tasker_material_module__ = __webpack_require__("../../../../../src/app/tasker-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_comment_service__ = __webpack_require__("../../../../../src/app/comment/shared/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_comment_add_comment_component__ = __webpack_require__("../../../../../src/app/comment/add-comment/add-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment__ = __webpack_require__("../../../../angular2-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CommentModule = (function () {
    function CommentModule() {
    }
    CommentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__tasker_material_module__["a" /* TaskerMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_moment__["MomentModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__comment_component__["a" /* CommentComponent */],
                __WEBPACK_IMPORTED_MODULE_6__add_comment_add_comment_component__["a" /* AddCommentComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__add_comment_add_comment_component__["a" /* AddCommentComponent */], __WEBPACK_IMPORTED_MODULE_5__comment_component__["a" /* CommentComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_comment_service__["a" /* CommentService */]]
        })
    ], CommentModule);
    return CommentModule;
}());



/***/ }),

/***/ "../../../../../src/app/comment/shared/comment-add.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentAdd; });
var CommentAdd = (function () {
    function CommentAdd() {
    }
    return CommentAdd;
}());



/***/ }),

/***/ "../../../../../src/app/comment/shared/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
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


var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
        this.getCommentsURL = '/api/comment/';
        this.addCommentUrl = '/api/comment';
    }
    CommentService.prototype.getTaskComments = function (taskId) {
        return this.http.get(this.getCommentsURL + taskId);
    };
    CommentService.prototype.addTaskComment = function (commentAdd) {
        return this.http.post(this.addCommentUrl, commentAdd);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/task/shared/change-status-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeStatusModel; });
var ChangeStatusModel = (function () {
    function ChangeStatusModel() {
    }
    return ChangeStatusModel;
}());



/***/ }),

/***/ "../../../../../src/app/task/shared/task-filters.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskFiltersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskFiltersService = (function () {
    function TaskFiltersService() {
        var _this = this;
        this.filteredTasks = [];
        this.filteredMilestones = [];
        this.SharedList$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (x) { return _this.listObserver = x; }).share();
        this.SharedList2$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */](function (x) { return _this.listObserver2 = x; }).share();
    }
    TaskFiltersService.prototype.getList = function () {
        // Get the data from somewhere, i.e. http call
        //console.log(this.filteredTasks)
        this.listObserver.next(this.filteredTasks);
        this.listObserver2.next(this.filteredMilestones);
        // the important part is after getting the data you want, observer.next it
    };
    TaskFiltersService.prototype.updateUsers = function (item) {
        this.filteredTasks = item;
        this.listObserver.next(this.filteredTasks);
    };
    TaskFiltersService.prototype.updateMilestones = function (item) {
        this.filteredMilestones = item;
        this.listObserver2.next(this.filteredMilestones);
    };
    TaskFiltersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TaskFiltersService);
    return TaskFiltersService;
}());



/***/ }),

/***/ "../../../../../src/app/task/shared/task-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskResolverService = (function () {
    function TaskResolverService(_taskService) {
        this._taskService = _taskService;
    }
    TaskResolverService.prototype.resolve = function (route) {
        return this._taskService.getTask(route.params['id']);
    };
    TaskResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]])
    ], TaskResolverService);
    return TaskResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/task/shared/task-tree-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskTreeResolverService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskTreeResolverService = (function () {
    function TaskTreeResolverService(_taskService) {
        this._taskService = _taskService;
    }
    TaskTreeResolverService.prototype.resolve = function () {
        console.log("resolver");
        return this._taskService.getTasksDb();
    };
    TaskTreeResolverService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__task_service__["a" /* TaskService */]])
    ], TaskTreeResolverService);
    return TaskTreeResolverService;
}());



/***/ }),

/***/ "../../../../../src/app/task/shared/task.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskStatus; });
var TaskStatus;
(function (TaskStatus) {
    TaskStatus[TaskStatus["Not started"] = 1] = "Not started";
    TaskStatus[TaskStatus["In progress"] = 2] = "In progress";
    TaskStatus[TaskStatus["Done"] = 3] = "Done";
})(TaskStatus || (TaskStatus = {}));


/***/ }),

/***/ "../../../../../src/app/task/status-chooser/status-chooser.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Change task status</h1>\n<div mat-dialog-content class=\"overflow\">\n  <div class=\"center-align\">\n    <div [ngClass]=\"{'standard-color': status!==1, 'red': status===1}\" (click)=\"status=1\">\n        <span class=\"new-status\">Not started</span>        \n    </div>\n    <div [ngClass]=\"{'standard-color': status!==2, 'blue': status===2}\" (click)=\"status=2\">\n        <i class=\"material-icons progress-status\">cached</i>        \n    </div>\n    <div [ngClass]=\"{'standard-color': status!==3, 'green': status===3}\" (click)=\"status=3\">\n        <i class=\"material-icons done-status\">done</i>        \n    </div>\n  </div>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"saveStatus()\">Ok</button>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n</div>"

/***/ }),

/***/ "../../../../../src/app/task/status-chooser/status-chooser.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-status {\n  border: 1px solid;\n  border-radius: 8px;\n  padding: 2px;\n  margin-top: 10px;\n  cursor: pointer; }\n\n.progress-status {\n  padding: 2px;\n  margin-top: 10px;\n  cursor: pointer; }\n\n.done-status {\n  margin-top: 10px;\n  cursor: pointer; }\n\n.center-align {\n  text-align: center; }\n\n.overflow {\n  overflow: visible; }\n\n.standard-color {\n  color: grey; }\n\n.green {\n  color: green;\n  font-weight: bold; }\n\n.red {\n  color: red; }\n\n.blue {\n  color: blue; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/status-chooser/status-chooser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatusChooserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_change_status_model__ = __webpack_require__("../../../../../src/app/task/shared/change-status-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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




var StatusChooserComponent = (function () {
    function StatusChooserComponent(dialogRef, taskService, data) {
        this.dialogRef = dialogRef;
        this.taskService = taskService;
        this.data = data;
        this.status = 0;
    }
    StatusChooserComponent.prototype.saveStatus = function () {
        if (this.status !== 0) {
            var status_1 = new __WEBPACK_IMPORTED_MODULE_0__shared_change_status_model__["a" /* ChangeStatusModel */]();
            status_1.Status = this.status;
            status_1.TaskId = this.data.id;
            this.taskService.changeTaskStatus(status_1).subscribe();
            this.data.statusId = this.status;
        }
        this.dialogRef.close();
    };
    StatusChooserComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    StatusChooserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'tskr-status-chooser',
            template: __webpack_require__("../../../../../src/app/task/status-chooser/status-chooser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/status-chooser/status-chooser.component.scss")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_1__shared_task_service__["a" /* TaskService */], Object])
    ], StatusChooserComponent);
    return StatusChooserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task-details/task-details.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"task-details-container\">\r\n        <mat-card-title>\r\n                {{Title}}\r\n        </mat-card-title>\r\n        <hr/>\r\n        <mat-chip-list>\r\n                <p>Punkty kontrolne zadania: </p>\r\n                <mat-chip class=\"milestone-chip\" *ngFor=\"let mil of ControlPointsInUse\">{{mil.name}}</mat-chip>\r\n        </mat-chip-list>\r\n\r\n        <mat-chip-list>\r\n                <p>Osoba odpowiedzialna: </p>\r\n                <mat-chip class=\"main-performer-chip\" color=\"primary\" selected=\"true\" *ngIf=\"mainPerformer\">{{mainPerformer.username}}</mat-chip>\r\n        </mat-chip-list>\r\n\r\n        <mat-chip-list>\r\n                <p>Wykonawcy zadania: </p>\r\n                <mat-chip class=\"task-performer-chip\" *ngFor=\"let usr of taskPerformers\">{{usr.username}}</mat-chip>\r\n        </mat-chip-list>\r\n        <hr>\r\n        <!-- <mat-card-content class=\"details-content\"> -->\r\n        <p>Opis zadania: </p>\r\n\r\n        <p class=\"details-content\">\r\n                {{Description}}\r\n        </p>\r\n        <!-- </mat-card-content> -->\r\n\r\n        <!-- <mat-card-header> -->\r\n        {{TaskStatus}}\r\n        <!-- </mat-card-header> -->\r\n        <hr>\r\n        <mat-card-actions class=\"task-details-actions\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"editTask()\">Edytuj</button>\r\n                <button mat-raised-button color=\"warn\" (click)=\"deleteTask()\">Usuń</button>\r\n                <button mat-raised-button (click)=\"deleteTask()\">Anuluj</button>\r\n                <button mat-raised-button (click)=\"addComment()\">Dodaj komentarz</button>                \r\n        </mat-card-actions>\r\n</mat-card>\r\n<tskr-comment #Comments></tskr-comment>"

/***/ }),

/***/ "../../../../../src/app/task/task-details/task-details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-details-container hr {\n  border-top: 1px solid rgba(0, 0, 0, 0.12); }\n\n.task-details-container mat-chip.milestone-chip {\n  margin-left: 16px; }\n\n.task-details-container mat-chip.main-performer-chip {\n  color: white;\n  font-weight: bold;\n  margin-left: 16px; }\n\n.task-details-container mat-chip.task-performer-chip {\n  margin-left: 16px; }\n\n.task-details-container .task-details-actions {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/task-details/task-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_shared_comment_service__ = __webpack_require__("../../../../../src/app/comment/shared/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comment_add_comment_add_comment_component__ = __webpack_require__("../../../../../src/app/comment/add-comment/add-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__users_user_user_service__ = __webpack_require__("../../../../../src/app/users/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_task_model__ = __webpack_require__("../../../../../src/app/task/shared/task.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TaskDetailsComponent = (function () {
    function TaskDetailsComponent(_route, commentService, _navRoute, _taskService, _userService, dialog) {
        var _this = this;
        this._route = _route;
        this.commentService = commentService;
        this._navRoute = _navRoute;
        this._taskService = _taskService;
        this._userService = _userService;
        this.dialog = dialog;
        this.UserNames = new Array();
        this.DaysRemaining = new Array();
        this.ControlPointsInUse = new Array();
        this.AllUsers = new Array();
        this.taskPerformers = new Array();
        this._navRoute.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this._navRoute.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* NavigationEnd */]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this._navRoute.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskPerformers.length = 0;
        this.ControlPointsInUse.length = 0;
        this._route.data.forEach(function (data) {
            _this._route.params.subscribe(function (params) { return _this.TaskID = params['id']; });
            _this.commentService.getTaskComments(_this.TaskID).subscribe(function (res) { return _this.commentComponent.commentList = res; });
            var task;
            task = _this._taskService.getChosenTask(_this.TaskID);
            if (task !== undefined) {
                _this.Task = task;
                _this.Title = task.title;
                _this.Description = task.description;
                _this.ControlPointsInUse.length = 0;
                _this.ControlPointsInUse = task.controlPointIds;
                _this.taskPerformers.length = 0;
                _this.taskPerformers = task.taskPerformers;
                _this.TaskStatus = __WEBPACK_IMPORTED_MODULE_8__shared_task_model__["a" /* TaskStatus */][task.statusId];
                _this.loadAllUsers(task.mainPerformer);
            }
            else {
                _this._navRoute.navigate(['/tasks']);
            }
        });
    };
    TaskDetailsComponent.prototype.loadAllUsers = function (mainPerformerID) {
        var _this = this;
        this._userService.getAll().subscribe(function (users) {
            _this.AllUsers = users;
            _this.AllUsers.forEach(function (element) {
                if (element.id === mainPerformerID)
                    _this.mainPerformer = element;
            });
        });
    };
    TaskDetailsComponent.prototype.isMilestoneInUse = function (selecded) {
        this.ControlPointsInUse.forEach(function (element) {
            if (selecded.id === element.id)
                return "primary";
        });
    };
    TaskDetailsComponent.prototype.deleteTask = function () {
        //this._taskService.deleteTask(this.TaskID);
        this._navRoute.navigate(['/tasks']);
    };
    TaskDetailsComponent.prototype.editTask = function () {
        this._navRoute.navigate(['/tasks/edit/' + this.TaskID]);
    };
    TaskDetailsComponent.prototype.addComment = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__comment_add_comment_add_comment_component__["a" /* AddCommentComponent */], {
            width: '480px',
            data: { taskId: this.TaskID }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.commentComponent.commentList.push(result);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewChild"])('Comments'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__comment_comment_component__["a" /* CommentComponent */])
    ], TaskDetailsComponent.prototype, "commentComponent", void 0);
    TaskDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'tskr-task-details',
            template: __webpack_require__("../../../../../src/app/task/task-details/task-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/task-details/task-details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__comment_shared_comment_service__["a" /* CommentService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__shared_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_6__users_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */]])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task-edit/task-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"Aligner\">\r\n    <mat-card-header class=\"details-header\">\r\n      <mat-card-title class=\"details-content\">\r\n        <mat-form-field class=\"details-content\">\r\n          <textarea class=\"details-content\" id=\"taskName\" [(ngModel)]=\"Title\" value={{Title}} [ngModelOptions]=\"{standalone: true}\" matInput\r\n            placeholder=\"Task title\">{{Title}}</textarea>\r\n          <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n            <mat-icon>close</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n      </mat-card-title>\r\n    </mat-card-header>\r\n    <mat-card-header>\r\n  \r\n      <div *ngFor=\"let mil of AllMilestones\">\r\n        <button draggable mat-raised-button [color]=\"isMilestoneInChosen(mil)\" (click)=\"toggleMilestone(mil)\">{{mil.name}}</button>\r\n      </div>\r\n  \r\n    </mat-card-header>\r\n  \r\n    <mat-card-header>\r\n  \r\n      <div *ngFor=\"let usr of AllUsers\">\r\n        <button draggable mat-raised-button [dragData]=\"usr\" [color]=\"isUserInPerformers(usr)\" (click)=\"toggleUser(usr)\">{{usr.username}}</button>\r\n      </div>\r\n  \r\n    </mat-card-header>\r\n  \r\n    <mat-card-header>\r\n  \r\n      <mat-card droppable [dropEnabled]=\"enableDrop\" (onDrop)=\"userDropped($event)\">Drop here main performer\r\n        <button mat-raised-button color=\"accent\" (click)=\"deleteMainPerformer()\" *ngIf=\"mainPerformer\">\r\n        {{mainPerformer.username}}</button>\r\n      </mat-card>\r\n  \r\n  \r\n    </mat-card-header>\r\n    <mat-card-content class=\"details-content\">\r\n  \r\n        <mat-form-field>\r\n            <textarea [(ngModel)]=\"Description\" value={{Description}} [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Please enter task description\">{{Description}}</textarea>\r\n          </mat-form-field>\r\n    </mat-card-content>\r\n  \r\n    <mat-card-header>\r\n  \r\n        <mat-form-field>\r\n            <mat-select [(ngModel)]=\"taskStatus\"  [ngModelOptions]=\"{standalone: true}\" [placeholder]=\"TaskStatus\">\r\n              <mat-option  *ngFor=\"let key of keys \"  [value]=\"key\">\r\n                {{ enumStatus[key]}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n  \r\n    </mat-card-header>\r\n    <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\" (click)=\"saveTask()\">Save</button>\r\n      <button mat-raised-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\r\n    </mat-card-actions>\r\n  </mat-card>"

/***/ }),

/***/ "../../../../../src/app/task/task-edit/task-edit.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Aligner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.details-header {\n  background-color: #ff9800;\n  width: 100%; }\n\n.details-content {\n  width: 100%; }\n\np {\n  width: 100%; }\n\nmat-card-header {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\nmat-chip {\n  margin-right: 5px; }\n\nmat-form-field {\n  width: 100%; }\n\nmat-card-title {\n  width: 100%; }\n\n.mat-card-header-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nbutton {\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/task-edit/task-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_model__ = __webpack_require__("../../../../../src/app/task/shared/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_user_service__ = __webpack_require__("../../../../../src/app/users/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_users_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/users-filters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskEditComponent = (function () {
    function TaskEditComponent(_route, snackBar, usermilestoneService, _navRoute, _taskService, _userService) {
        var _this = this;
        this._route = _route;
        this.snackBar = snackBar;
        this.usermilestoneService = usermilestoneService;
        this._navRoute = _navRoute;
        this._taskService = _taskService;
        this._userService = _userService;
        this.UserNames = new Array();
        this.DaysRemaining = new Array();
        this.AllUsers = new Array();
        this.taskPerformers = new Array();
        this.AllMilestones = new Array();
        this.ChosedMilestones = new Array();
        this.enableDrop = true;
        this.enumStatus = __WEBPACK_IMPORTED_MODULE_1__shared_task_model__["a" /* TaskStatus */];
        this.taskStatus = 1;
        this.keys = Object.keys(this.enumStatus).filter(Number);
        this._navRoute.routeReuseStrategy.shouldReuseRoute = function () {
            return false;
        };
        this._navRoute.events.subscribe(function (evt) {
            if (evt instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]) {
                // trick the Router into believing it's last link wasn't previously loaded
                _this._navRoute.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskPerformers.length = 0;
        this.ChosedMilestones.length = 0;
        this._route.data.forEach(function (data) {
            _this._route.params.subscribe(function (params) { return _this.TaskID = params['id']; });
            var task;
            task = _this._taskService.getChosenTask(_this.TaskID);
            if (task != null) {
                _this.ParentTaskID = task.parentTaskId;
                _this.Task = task;
                _this.Title = task.title;
                _this.Description = task.description;
                _this.ChosedMilestones = task.controlPointIds;
                _this.taskPerformers = task.taskPerformers;
                _this.TaskStatus = __WEBPACK_IMPORTED_MODULE_1__shared_task_model__["a" /* TaskStatus */][task.statusId];
                _this.loadAllUsers(task.mainPerformer);
                _this.loadAllMilestones();
                _this.usermilestoneService.getList();
            }
            else {
                _this._navRoute.navigate(['/tasks']);
            }
        });
    };
    TaskEditComponent.prototype.loadAllUsers = function (mainPerformerID) {
        var _this = this;
        this.usermilestoneService.UsersList$.subscribe(function (users) {
            _this.AllUsers = users.slice();
            _this.AllUsers.forEach(function (element, index) {
                if (element.id === mainPerformerID) {
                    _this.mainPerformer = element;
                    _this.AllUsers.splice(index, 1);
                    return;
                }
            });
        });
    };
    TaskEditComponent.prototype.loadAllMilestones = function () {
        var _this = this;
        this.usermilestoneService.MilestonesList$.subscribe(function (lst) {
            _this.AllMilestones = lst.slice();
            console.log(_this.AllMilestones);
        });
    };
    TaskEditComponent.prototype.userDropped = function (e) {
        this.mainPerformer = e.dragData;
        this.deleteUserFromPerformers(this.mainPerformer);
        this.enableDrop = false;
        if (this.taskPerformers.includes(this.mainPerformer)) {
            var i = 0;
            for (var _i = 0, _a = this.taskPerformers; _i < _a.length; _i++) {
                var usr = _a[_i];
                if (usr.id === this.mainPerformer.id) {
                    this.taskPerformers.splice(i, 1);
                    break;
                }
                i++;
            }
        }
    };
    TaskEditComponent.prototype.toggleUser = function (selected) {
        if (this.taskPerformers.includes(selected)) {
            var i = 0;
            for (var _i = 0, _a = this.taskPerformers; _i < _a.length; _i++) {
                var usr = _a[_i];
                if (usr.id === selected.id) {
                    this.taskPerformers.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        else {
            this.taskPerformers.push(selected);
        }
    };
    TaskEditComponent.prototype.toggleMilestone = function (selected) {
        if (this.ChosedMilestones.includes(selected)) {
            var i = 0;
            for (var _i = 0, _a = this.ChosedMilestones; _i < _a.length; _i++) {
                var mil = _a[_i];
                if (mil.id === selected.id) {
                    this.ChosedMilestones.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        else {
            this.ChosedMilestones.push(selected);
        }
    };
    TaskEditComponent.prototype.deleteUserFromPerformers = function (user) {
        if (this.AllUsers.includes(user)) {
            var i = 0;
            for (var _i = 0, _a = this.AllUsers; _i < _a.length; _i++) {
                var usr = _a[_i];
                if (usr.id === user.id) {
                    this.AllUsers.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        console.log(this.AllUsers);
    };
    TaskEditComponent.prototype.isMilestoneInChosen = function (selected) {
        var flag = false;
        this.ChosedMilestones.forEach(function (element) {
            if (element.id === selected.id)
                flag = true;
        });
        if (flag) {
            return "primary";
        }
    };
    TaskEditComponent.prototype.isUserInPerformers = function (selected) {
        var flag = false;
        this.taskPerformers.forEach(function (element) {
            if (element.id === selected.id)
                flag = true;
        });
        if (flag) {
            return "primary";
        }
    };
    TaskEditComponent.prototype.deleteMainPerformer = function () {
        this.AllUsers.push(this.mainPerformer);
        this.mainPerformer = undefined;
        this.enableDrop = true;
    };
    TaskEditComponent.prototype.saveTask = function () {
        var _this = this;
        var savingTask = {
            Id: this.TaskID,
            Title: this.Title,
            Description: this.Description,
            ParentTaskId: +this.ParentTaskID,
            ControlPointIds: this.ChosedMilestones,
            MainPerformer: this.mainPerformer ? +this.mainPerformer.id : null,
            TaskStatusId: this.enumStatus[this.TaskStatus],
            TaskPerformers: this.taskPerformers
        };
        console.log(savingTask);
        this._taskService.saveTask(savingTask).subscribe(function (res) {
            console.log(res);
            var newTask;
            newTask = res;
            _this._taskService.editTask(savingTask);
            console.log(newTask);
            _this.snackBar.open('Zadanie zostalo zaktualizowane!', '', { duration: 2000 });
        });
        this._navRoute.navigate(['/tasks/']);
    };
    TaskEditComponent.prototype.cancel = function () {
        this._navRoute.navigate(['/tasks/']);
    };
    TaskEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-task-edit',
            template: __webpack_require__("../../../../../src/app/task/task-edit/task-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/task-edit/task-edit.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatSnackBar */], __WEBPACK_IMPORTED_MODULE_5__shared_users_filters_service__["a" /* UsersFiltersService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_task_service__["a" /* TaskService */], __WEBPACK_IMPORTED_MODULE_4__users_user_user_service__["a" /* UserService */]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task-main/task-main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"task-main-container\">\r\n    <div class=\"users-filters-container\">\r\n        <mat-card class=\"users-filters\">\r\n            <swiper [config]=\"config\">\r\n                <div class=\"user-container\" *ngFor=\"let user of users\">\r\n                    <button mat-fab (click)=\"changeUserFilter(user)\" [color]=\"isUserInFilters(user)\">\r\n                        <mat-icon>person</mat-icon>\r\n                    </button>\r\n                    <br> {{user.username}}\r\n                </div>\r\n            </swiper>\r\n        </mat-card>\r\n    </div>\r\n    <div class=\"milestones-filters-container\">\r\n        <mat-card class=\"milestones-filters\">\r\n            <swiper [config]=\"config\" class=\"milestones-filters\">\r\n                <div class=\"milestone-container\" *ngFor=\"let milestone of allMilestones\">\r\n                    <i *ngIf=\"milestone.id === closestMilestone\" class=\"material-icons closest\">error_outline</i>    \r\n                    <div>\r\n                        <button     matTooltip=\"{{milestone?.endDate | date: 'dd/MM/yyyy'}}\" \r\n                                matTooltipPosition=\"above\" \r\n                                matTooltipClass=\"tooltipClass\" \r\n                                mat-fab (click)=\"changeMilestoneFilter(milestone)\" \r\n                                [color]=\"isMilestoneInFilters(milestone)\">\r\n                        <mat-icon>timeline</mat-icon>\r\n                        </button>                \r\n                        <br> {{milestone?.name}} \r\n                    </div>\r\n                    \r\n                </div>\r\n            </swiper>\r\n        </mat-card>\r\n    </div>\r\n\r\n    <div class=\"tasks-master-details-container\">\r\n        <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayout.sm=\"column\" fxFlex>\r\n            <div fxFlex class=\"tasks-master-container\">\r\n                <router-outlet></router-outlet>\r\n            </div>\r\n            <div fxFlex class=\"tasks-details-container\">\r\n                <router-outlet name=\"details\"></router-outlet>\r\n                <router-outlet name=\"new\"></router-outlet>\r\n                <router-outlet name=\"edit\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/task/task-main/task-main.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".task-main-container {\n  margin: 16px; }\n  .task-main-container .users-filters-container mat-card.users-filters .user-container {\n    min-width: 32px;\n    display: inline-block;\n    text-align: center; }\n    .task-main-container .users-filters-container mat-card.users-filters .user-container button {\n      margin-bottom: 5px; }\n  .task-main-container .milestones-filters-container {\n    margin-top: 16px; }\n    .task-main-container .milestones-filters-container mat-card.milestones-filters .milestone-container {\n      min-width: 32px;\n      display: inline-block;\n      margin-right: 30px;\n      text-align: center; }\n      .task-main-container .milestones-filters-container mat-card.milestones-filters .milestone-container button {\n        margin-bottom: 5px; }\n  .task-main-container .tasks-master-details-container {\n    margin-top: 16px; }\n    .task-main-container .tasks-master-details-container .tasks-details-container {\n      margin-left: 16px; }\n\n.tooltipClass {\n  background-color: orange !important;\n  border-radius: 18px !important;\n  font-size: 40px !important; }\n\n.closest {\n  position: absolute;\n  z-index: 1;\n  margin-left: 30px;\n  margin-top: -1px;\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/task-main/task-main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskMainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__users_user_user_service__ = __webpack_require__("../../../../../src/app/users/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_task_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/task-filters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_users_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/users-filters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskMainComponent = (function () {
    function TaskMainComponent(userService, _taskService, _navRoute, usermilestoneService, _taskFilterService) {
        this.userService = userService;
        this._taskService = _taskService;
        this._navRoute = _navRoute;
        this.usermilestoneService = usermilestoneService;
        this._taskFilterService = _taskFilterService;
        this.users = [];
        this.allMilestones = [];
        this.filteredMilestones = [];
        this.filteredUsers = [];
        this.config = {
            scrollbar: null,
            direction: 'horizontal',
            slidesPerView: 4,
            scrollbarHide: false,
            keyboardControl: true,
            mousewheelControl: true,
            scrollbarDraggable: true,
            scrollbarSnapOnRelease: false,
            pagination: null,
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'
        };
    }
    TaskMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('currentProject') === null)
            this._navRoute.navigate(['/']);
        this.loadAllUsers();
        this.loadAllMilestones();
        this._taskFilterService.SharedList$.subscribe(function (lst) { return _this.filteredUsers = lst; });
        this._taskFilterService.SharedList2$.subscribe(function (lst) { return _this.filteredMilestones = lst; });
        this._taskFilterService.getList();
    };
    TaskMainComponent.prototype.changeUserFilter = function (_user) {
        if (this.filteredUsers.includes(_user)) {
            var i = 0;
            for (var _i = 0, _a = this.filteredUsers; _i < _a.length; _i++) {
                var usr = _a[_i];
                if (usr.username === _user.username) {
                    this.filteredUsers.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        else {
            this.filteredUsers.push(_user);
        }
        this._taskFilterService.updateUsers(this.filteredUsers);
    };
    TaskMainComponent.prototype.changeMilestoneFilter = function (_milestone) {
        if (this.filteredMilestones.includes(_milestone)) {
            var i = 0;
            for (var _i = 0, _a = this.filteredMilestones; _i < _a.length; _i++) {
                var mil = _a[_i];
                if (mil.id === _milestone.id) {
                    this.filteredMilestones.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        else {
            this.filteredMilestones.push(_milestone);
        }
        this._taskFilterService.updateMilestones(this.filteredMilestones);
    };
    TaskMainComponent.prototype.isUserInFilters = function (_user) {
        if (this.filteredUsers.includes(_user)) {
            return "primary";
        }
    };
    TaskMainComponent.prototype.isMilestoneInFilters = function (_milestone) {
        if (this.filteredMilestones.includes(_milestone)) {
            return "primary";
        }
    };
    TaskMainComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.usermilestoneService.UsersList$.subscribe(function (lst) {
            _this.users = lst;
        });
    };
    TaskMainComponent.prototype.loadAllMilestones = function () {
        var _this = this;
        this.usermilestoneService.MilestonesList$.subscribe(function (lst) {
            _this.allMilestones = lst;
            _this.allMilestones = _this.allMilestones.sort(function (n1, n2) {
                var n1Any = n1;
                var n1Date = new Date(n1Any.endDate);
                var n2Any = n2;
                var n2Date = new Date(n2Any.endDate);
                if (n1Date > n2Date) {
                    return 1;
                }
                if (n1Date < n2Date) {
                    return -1;
                }
                return 0;
            });
            _this.setClosestMilestone();
        });
        this.usermilestoneService.getList();
    };
    TaskMainComponent.prototype.setClosestMilestone = function () {
        var _this = this;
        var lastItem;
        var thisDate = new Date();
        this.allMilestones.forEach(function (item) {
            var items = item;
            var date = new Date(items.endDate);
            if (date < thisDate) {
                console.log('przeszly');
            }
            else if (lastItem === undefined) {
                lastItem = date;
                _this.closestMilestone = +items.id;
            }
            else if (date < lastItem) {
                lastItem = date;
                _this.closestMilestone = +items.id;
            }
        });
    };
    TaskMainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-task-main',
            template: __webpack_require__("../../../../../src/app/task/task-main/task-main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/task-main/task-main.component.scss")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__users_user_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_users_filters_service__["a" /* UsersFiltersService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_task_filters_service__["a" /* TaskFiltersService */]])
    ], TaskMainComponent);
    return TaskMainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task-new/task-new.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"Aligner\">\r\n  <mat-card-header class=\"details-header\">\r\n    <mat-card-title class=\"details-content\">\r\n      <mat-form-field class=\"details-content\">\r\n        <input class=\"details-content\" id=\"taskName\" [(ngModel)]=\"Title\" value={{Title}} [ngModelOptions]=\"{standalone: true}\" matInput\r\n          placeholder=\"Task title\">\r\n        <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </mat-form-field>\r\n    </mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-header>\r\n\r\n    <div *ngFor=\"let mil of AllMilestones\">\r\n      <button draggable mat-raised-button [color]=\"isMilestoneInChosen(mil)\" (click)=\"toggleMilestone(mil)\">{{mil.name}}</button>\r\n    </div>\r\n\r\n  </mat-card-header>\r\n\r\n  <mat-card-header>\r\n\r\n    <div *ngFor=\"let usr of AllUsers\">\r\n      <button draggable mat-raised-button [dragData]=\"usr\" [color]=\"isUserInPerformers(usr)\" (click)=\"toggleUser(usr)\">{{usr.username}}</button>\r\n    </div>\r\n\r\n  </mat-card-header>\r\n\r\n  <mat-card-header>\r\n\r\n    <mat-card droppable [dropEnabled]=\"enableDrop\" (onDrop)=\"userDropped($event)\">Drop here main performer\r\n      <button mat-raised-button color=\"accent\" (click)=\"deleteMainPerformer()\" *ngIf=\"mainPerformer\">\r\n      {{mainPerformer.username}}</button>\r\n    </mat-card>\r\n\r\n\r\n  </mat-card-header>\r\n  <mat-card-content class=\"details-content\">\r\n\r\n      <mat-form-field>\r\n          <textarea [(ngModel)]=\"Description\" value={{Description}} [ngModelOptions]=\"{standalone: true}\" matInput placeholder=\"Please enter task description\">{{Description}}</textarea>\r\n        </mat-form-field>\r\n  </mat-card-content>\r\n\r\n  <mat-card-header>\r\n\r\n      <mat-form-field>\r\n          <mat-select [(ngModel)]=\"taskStatus\"  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Please chose status\">\r\n            <mat-option  *ngFor=\"let key of keys \"  [value]=\"key\">\r\n              {{ enumStatus[key]}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n  </mat-card-header>\r\n  <mat-card-actions>\r\n    <button mat-raised-button color=\"primary\" (click)=\"saveTask()\">Save</button>\r\n    <button mat-raised-button color=\"warn\" (click)=\"cancel()\">Cancel</button>\r\n  </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/task/task-new/task-new.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".Aligner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.details-header {\n  background-color: #ff9800;\n  width: 100%; }\n\n.details-content {\n  width: 100%; }\n\np {\n  width: 100%; }\n\nmat-card-header {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\nmat-chip {\n  margin-right: 5px; }\n\nmat-form-field {\n  width: 100%; }\n\nmat-card-title {\n  width: 100%; }\n\n.mat-card-header-text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nbutton {\n  margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/task-new/task-new.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskNewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_task_model__ = __webpack_require__("../../../../../src/app/task/shared/task.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__users_user_user_service__ = __webpack_require__("../../../../../src/app/users/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_users_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/users-filters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TaskNewComponent = (function () {
    function TaskNewComponent(_route, _navRoute, snackBar, _taskService, usermilestoneService, _userService) {
        this._route = _route;
        this._navRoute = _navRoute;
        this.snackBar = snackBar;
        this._taskService = _taskService;
        this.usermilestoneService = usermilestoneService;
        this._userService = _userService;
        this.UserNames = new Array();
        this.DaysRemaining = new Array();
        this.ControlPointsInUse = new Array();
        this.AllUsers = new Array();
        this.taskPerformers = new Array();
        this.AllMilestones = new Array();
        this.ChosedMilestones = new Array();
        this.enableDrop = true;
        this.enumStatus = __WEBPACK_IMPORTED_MODULE_1__shared_task_model__["a" /* TaskStatus */];
        this.taskStatus = 1;
        this.keys = Object.keys(this.enumStatus).filter(Number);
    }
    TaskNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.keys);
        this.taskPerformers.length = 0;
        this.ControlPointsInUse.length = 0;
        this._route.data.forEach(function (data) {
            _this._route.params.subscribe(function (params) { return _this.ParentTaskID = params['id']; });
        });
        this.loadAllUsers();
        this.loadAllMilestones();
    };
    TaskNewComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.usermilestoneService.UsersList$.subscribe(function (lst) {
            _this.AllUsers = lst.slice();
        });
    };
    TaskNewComponent.prototype.loadAllMilestones = function () {
        var _this = this;
        this.usermilestoneService.MilestonesList$.subscribe(function (lst) {
            _this.AllMilestones = lst.slice();
        });
        this.usermilestoneService.getList();
    };
    TaskNewComponent.prototype.userDropped = function (e) {
        this.mainPerformer = e.dragData;
        this.deleteUserFromPerformers(this.mainPerformer);
        this.enableDrop = false;
        if (this.taskPerformers.includes(this.mainPerformer)) {
            var i = 0;
            for (var _i = 0, _a = this.taskPerformers; _i < _a.length; _i++) {
                var usr = _a[_i];
                if (usr.id === this.mainPerformer.id) {
                    this.taskPerformers.splice(i, 1);
                    break;
                }
                i++;
            }
        }
    };
    TaskNewComponent.prototype.toggleUser = function (selected) {
        if (this.taskPerformers.includes(selected)) {
            var i = 0;
            for (var _i = 0, _a = this.taskPerformers; _i < _a.length; _i++) {
                var usr = _a[_i];
                if (usr.id === selected.id) {
                    this.taskPerformers.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        else {
            this.taskPerformers.push(selected);
        }
    };
    TaskNewComponent.prototype.toggleMilestone = function (selected) {
        if (this.ChosedMilestones.includes(selected)) {
            var i = 0;
            for (var _i = 0, _a = this.ChosedMilestones; _i < _a.length; _i++) {
                var mil = _a[_i];
                if (mil.id === selected.id) {
                    this.ChosedMilestones.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        else {
            this.ChosedMilestones.push(selected);
        }
    };
    TaskNewComponent.prototype.deleteUserFromPerformers = function (user) {
        if (this.AllUsers.includes(user)) {
            var i = 0;
            for (var _i = 0, _a = this.AllUsers; _i < _a.length; _i++) {
                var usr = _a[_i];
                if (usr.id === user.id) {
                    this.AllUsers.splice(i, 1);
                    break;
                }
                i++;
            }
        }
        console.log(this.AllUsers);
    };
    TaskNewComponent.prototype.isMilestoneInChosen = function (selected) {
        if (this.ChosedMilestones.includes(selected)) {
            return "primary";
        }
    };
    TaskNewComponent.prototype.isUserInPerformers = function (selected) {
        if (this.taskPerformers.includes(selected)) {
            return "primary";
        }
    };
    TaskNewComponent.prototype.deleteMainPerformer = function () {
        this.AllUsers.push(this.mainPerformer);
        this.mainPerformer = undefined;
        this.enableDrop = true;
    };
    TaskNewComponent.prototype.saveTask = function () {
        var _this = this;
        var savingTask = {
            Title: this.Title,
            Description: this.Description,
            ControlPointIds: this.ChosedMilestones,
            MainPerformer: this.mainPerformer ? +this.mainPerformer.id : null,
            TaskStatusId: +this.taskStatus,
            TaskPerformers: this.taskPerformers,
            ParentTaskId: +this.ParentTaskID,
            ProjectId: +localStorage.getItem('currentProject')
        };
        this._taskService.saveNewTask(savingTask).subscribe(function (res) {
            var newTask;
            newTask = res;
            console.log(newTask);
            _this._taskService.addTask(newTask);
            _this.snackBar.open('Nowe zadanie zostalo zapisane!', '', { duration: 2000 });
        });
        this._navRoute.navigate(['/tasks/']);
    };
    TaskNewComponent.prototype.cancel = function () {
        this._navRoute.navigate(['/tasks/']);
    };
    TaskNewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'tskr-task-new',
            template: __webpack_require__("../../../../../src/app/task/task-new/task-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/task-new/task-new.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["r" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_3__shared_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_users_filters_service__["a" /* UsersFiltersService */],
            __WEBPACK_IMPORTED_MODULE_4__users_user_user_service__["a" /* UserService */]])
    ], TaskNewComponent);
    return TaskNewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task-thumbnail/task-thumbnail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"task\">\r\n    <i (click)=\"showChildernChange(task)\" *ngIf=\"task.showChildren === false && task.children.length !== 0\" class=\"material-icons pointer\">keyboard_arrow_down</i>\r\n    <i (click)=\"showChildernChange(task)\" *ngIf=\"task.showChildren === true && task.children.length !== 0\" class=\"material-icons pointer\">keyboard_arrow_up</i>\r\n\r\n    <a mat-button (click)=\"setChosenTask(task)\" color=\"\" [routerLink]=\"['/tasks', task.id]\" *ngIf=\"task\" class=\"list-group-item\" draggable=\"true\">\r\n        {{task.title}}\r\n    </a>\r\n\r\n\r\n    <span class=\"status-icon\" [ngSwitch]=\"task.statusId\">\r\n        <mat-icon *ngSwitchCase=\"1\" (click)=\"openDialog()\" class=\"status-not-started\">highlight_off</mat-icon>\r\n        <mat-icon *ngSwitchCase=\"2\" (click)=\"openDialog()\" class=\"status-in-progress\">cached</mat-icon>\r\n        <mat-icon *ngSwitchCase=\"3\" (click)=\"openDialog()\" class=\"status-done\">done</mat-icon>\r\n    </span>\r\n    <button mat-icon-button (click)=\"deleteTask(task.id)\" class=\"remove\">\r\n        <i class=\"material-icons remove\">clear</i>\r\n    </button>\r\n    <a mat-mini-fab color=\"primary\" (click)=\"setChosenTask(task)\" [routerLink]=\"['/tasks/new/', task.id]\" class=\"add-button\">\r\n        <mat-icon>add</mat-icon>\r\n    </a>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/task/task-thumbnail/task-thumbnail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  border: solid 0px black; }\n\n.task {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: whitesmoke;\n  margin-bottom: 4px;\n  margin-top: 4px;\n  border-radius: 8px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n  height: 40px; }\n  .task a.add-button {\n    position: relative;\n    width: 24px;\n    height: 24px;\n    line-height: 24px;\n    min-height: 24px;\n    vertical-align: top;\n    font-size: 10px;\n    padding: 0 0;\n    margin-top: 20px;\n    margin-right: -10px; }\n    .task a.add-button mat-icon {\n      color: white;\n      line-height: 8px; }\n  .task .status-icon {\n    margin-right: 20px;\n    cursor: pointer; }\n    .task .status-icon .status-in-progress {\n      color: rgba(0, 0, 255, 0.5); }\n    .task .status-icon .status-not-started {\n      color: rgba(255, 0, 0, 0.5); }\n    .task .status-icon .status-done {\n      color: rgba(0, 100, 0, 0.5); }\n  .task .list-group-item {\n    padding-left: 20px;\n    text-align: left;\n    font-weight: bold;\n    color: rgba(0, 0, 0, 0.7);\n    display: inline-block;\n    width: 100%;\n    height: 100%; }\n\n.remove {\n  color: red;\n  padding-right: 15px; }\n\n.pointer {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/task-thumbnail/task-thumbnail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskThumbnailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modals_yes_no_modal_yes_no_modal_component__ = __webpack_require__("../../../../../src/app/modals/yes-no-modal/yes-no-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__status_chooser_status_chooser_component__ = __webpack_require__("../../../../../src/app/task/status-chooser/status-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskThumbnailComponent = (function () {
    function TaskThumbnailComponent(dialog, _navRoute, deleteDialog, taskService) {
        this.dialog = dialog;
        this._navRoute = _navRoute;
        this.deleteDialog = deleteDialog;
        this.taskService = taskService;
    }
    TaskThumbnailComponent.prototype.ngOnInit = function () { };
    TaskThumbnailComponent.prototype.getDeadlineBadgeClass = function () {
        return 'bg-success';
    };
    TaskThumbnailComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__status_chooser_status_chooser_component__["a" /* StatusChooserComponent */], {
            width: '250px',
            data: this.task
        });
        dialogRef.afterClosed().subscribe();
    };
    TaskThumbnailComponent.prototype.deleteTask = function (ID) {
        var _this = this;
        var dialogRef = this.deleteDialog.open(__WEBPACK_IMPORTED_MODULE_1__modals_yes_no_modal_yes_no_modal_component__["a" /* YesNoModalComponent */], {
            width: '480px',
            data: { message: 'Czy aby na pewno chcesz usunać tego taska ?' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.taskService.deleteTask(_this.task.id).subscribe(function (res) {
                    _this.taskService.deleteLocalTask(_this.task);
                });
                _this._navRoute.navigate(['/tasks/']);
            }
        });
    };
    TaskThumbnailComponent.prototype.setChosenTask = function (task) {
        this.taskService.chosenTask = task;
    };
    TaskThumbnailComponent.prototype.showChildernChange = function (task) {
        if (task.showChildren === false && task.children.length !== 0) {
            task.showChildren = true;
        }
        else {
            task.showChildren = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TaskThumbnailComponent.prototype, "task", void 0);
    TaskThumbnailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'tskr-task-thumbnail',
            template: __webpack_require__("../../../../../src/app/task/task-thumbnail/task-thumbnail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/task-thumbnail/task-thumbnail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDialog */],
            __WEBPACK_IMPORTED_MODULE_0__shared_task_service__["a" /* TaskService */]])
    ], TaskThumbnailComponent);
    return TaskThumbnailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/task/task-tree/task-tree.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"task-tree-container\">\r\n  <mat-card-title>\r\n    Drzewo zadań\r\n  </mat-card-title>\r\n  <!-- <mat-card-subtitle>\r\n    Zaaplikowane filtry (Użytkownicy):\r\n    <div style=\"display: inline-block\">\r\n      <p *ngFor=\"let user of UsersFilters\">{{user.username}}</p>\r\n    </div>\r\n\r\n    <br> Zaaplikowane filtry (Punkty kontrolne):\r\n    <div style=\"display: inline-block\">\r\n      <p *ngFor=\"let milestone of MilestonesFilters\">{{milestone.name}}</p>\r\n    </div>\r\n\r\n  </mat-card-subtitle> -->\r\n  <mat-card-content>\r\n    <mat-nav-list>\r\n      <ng-template #recursiveList let-test=\"test\" let-list>\r\n        <div class=\"indented\" *ngFor=\"let item of list; let i = index\">\r\n          <tskr-task-thumbnail *ngIf=\"filters===undefined || (filters!==undefined && test[i].visible)\" [task]=\"item\"></tskr-task-thumbnail>\r\n          <div *ngIf=\"item.children.length > 0 && test[i].childrens.length > 0 && item.showChildren === true\">\r\n            <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: item.children, test: test[i].childrens}\"></ng-container>\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n      <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: list, test: filters}\"></ng-container>\r\n    </mat-nav-list>\r\n  </mat-card-content>\r\n\r\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/task/task-tree/task-tree.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\n  border: solid 0px;\n  border-color: black; }\n\n.bg-error {\n  background-color: #b94a48; }\n\n.bg-success {\n  background-color: #468847; }\n\n.bg-warning {\n  background-color: #f89406; }\n\n.indented {\n  margin-left: 15px;\n  margin-bottom: -1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/task/task-tree/task-tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskTreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_guard_auth_guard__ = __webpack_require__("../../../../../src/app/auth/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_task_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/task-filters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_users_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/users-filters.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskTreeComponent = (function () {
    function TaskTreeComponent(_route, _taskService, _navRoute, usermilestoneService, _taskFiltersService) {
        this._route = _route;
        this._taskService = _taskService;
        this._navRoute = _navRoute;
        this.usermilestoneService = usermilestoneService;
        this._taskFiltersService = _taskFiltersService;
        this.UsersFilters = new Array();
        this.MilestonesFilters = new Array();
        // this._navRoute.routeReuseStrategy.shouldReuseRoute = function () {
        //   return false;
        // }
        // this._navRoute.events.subscribe((evt) => {
        //   if (evt instanceof NavigationEnd) {
        //     // trick the Router into believing it's last link wasn't previously loaded
        //     this._navRoute.navigated = false;
        //     // if you need to scroll back to top, here is the right place
        //     window.scrollTo(0, 0);
        //   }
        // });
    }
    TaskTreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if (this._taskService.isGut()) {
        //   this.list = this._taskService.getList();
        //   this.buildVisibilityTree();
        // }
        this._taskService.getList();
        this.loadAllUsers();
        // this.list = this._route.snapshot.data['tasks']; 
        this._taskService.SharedTasksList$.subscribe(function (lst) {
            _this.list = lst;
            _this.buildVisibilityTree();
        });
        // this._taskFiltersService.SharedList$.subscribe(lst => {
        //   this.UsersFilters = lst;
        //   if (this.list !== undefined) {
        //     this.buildVisibilityTree();
        //   }
        // });
        this._taskFiltersService.SharedList2$.subscribe(function (lst) {
            _this.MilestonesFilters = lst;
            if (_this.list !== undefined) {
                _this.buildVisibilityTree();
            }
        });
        this._taskService.getList();
        this._taskFiltersService.getList();
    };
    TaskTreeComponent.prototype.buildVisibilityTree = function () {
        var _this = this;
        this.filters = new Array(this.list.length);
        this.list.forEach(function (task, index) {
            if (task.children.length > 0) {
                var vis = void 0;
                _this.filters[index] = new TreeVisible();
                _this.filters[index].childrens = new Array(task.children.length);
                _this.filters[index].visible = vis = _this.makeVisibilityTree(task.children, _this.filters[index].childrens);
                if (!vis)
                    _this.filters[index].visible = _this.checkUsersFilters(task) && _this.checkMilestonesFilters(task);
            }
            else {
                _this.filters[index] = new TreeVisible();
                _this.filters[index].visible = _this.checkUsersFilters(task) && _this.checkMilestonesFilters(task);
            }
        });
    };
    TaskTreeComponent.prototype.makeVisibilityTree = function (list, filters) {
        var _this = this;
        var flag = false;
        var vis;
        list.forEach(function (task, index) {
            if (task.children.length > 0) {
                filters[index] = new TreeVisible();
                filters[index].childrens = new Array(task.children.length);
                vis = _this.makeVisibilityTree(task.children, filters[index].childrens);
                filters[index].visible = vis;
                flag = vis || flag;
                if (!flag) {
                    flag = _this.checkUsersFilters(task) && _this.checkMilestonesFilters(task);
                    filters[index].visible = flag;
                }
            }
            else {
                filters[index] = new TreeVisible();
                vis = filters[index].visible = _this.checkUsersFilters(task) && _this.checkMilestonesFilters(task);
                flag = vis || flag;
            }
        });
        return flag;
    };
    TaskTreeComponent.prototype.checkUsersFilters = function (task) {
        var allPerformers = [];
        allPerformers = task.taskPerformers.slice();
        if (this.allUsers)
            this.allUsers.forEach(function (element) {
                if (element.id === task.mainPerformer)
                    allPerformers.push(element);
            });
        if (this.UsersFilters.length === 0 && allPerformers.length > 0) {
            return true;
        }
        if (this.UsersFilters.length > 0 && allPerformers.length === 0) {
            return false;
        }
        if (this.UsersFilters.length === 0 && allPerformers.length === 0) {
            return true;
        }
        var flag = true;
        this.UsersFilters.forEach(function (user) {
            //  if(!task.taskPerformers.some((el)=>{ return el.id ===user.id}))return false;
            for (var i = 0; i < allPerformers.length; i++) {
                if (allPerformers[i].id === user.id)
                    return;
            }
            flag = false;
        });
        return flag;
    };
    TaskTreeComponent.prototype.checkMilestonesFilters = function (task) {
        if (this.MilestonesFilters.length === 0 && task.controlPointIds.length > 0) {
            return true;
        }
        if (this.MilestonesFilters.length > 0 && task.controlPointIds.length === 0) {
            return false;
        }
        if (this.MilestonesFilters.length === 0 && task.controlPointIds.length === 0) {
            return true;
        }
        var flag = true;
        this.MilestonesFilters.forEach(function (milestone) {
            for (var i = 0; i < task.controlPointIds.length; i++) {
                if (task.controlPointIds[i].id === milestone.id)
                    return;
            }
            flag = false;
            // for (let i = 0; i < task.controlPointIds.length; i++) {
            //   if (task.controlPointIds[i].id !== milestone.id && i === task.controlPointIds.length - 1) flag = false;
            // }
        });
        return flag;
    };
    TaskTreeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.usermilestoneService.UsersList$.subscribe(function (lst) {
            _this.allUsers = lst;
        });
        this.usermilestoneService.getList();
    };
    TaskTreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'tskr-task-tree',
            template: __webpack_require__("../../../../../src/app/task/task-tree/task-tree.component.html"),
            styles: [__webpack_require__("../../../../../src/app/task/task-tree/task-tree.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__auth_guard_auth_guard__["a" /* AuthGuard */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__shared_task_service__["a" /* TaskService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__shared_users_filters_service__["a" /* UsersFiltersService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_task_filters_service__["a" /* TaskFiltersService */]])
    ], TaskTreeComponent);
    return TaskTreeComponent;
}());

var TreeVisible = (function () {
    function TreeVisible() {
        this.childrens = [];
    }
    return TreeVisible;
}());


/***/ }),

/***/ "../../../../../src/app/task/task.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__comment_comment_module__ = __webpack_require__("../../../../../src/app/comment/comment.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__comment_add_comment_add_comment_component__ = __webpack_require__("../../../../../src/app/comment/add-comment/add-comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tasker_material_module__ = __webpack_require__("../../../../../src/app/tasker-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__task_thumbnail_task_thumbnail_component__ = __webpack_require__("../../../../../src/app/task/task-thumbnail/task-thumbnail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__task_tree_task_tree_component__ = __webpack_require__("../../../../../src/app/task/task-tree/task-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__task_details_task_details_component__ = __webpack_require__("../../../../../src/app/task/task-details/task-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__task_main_task_main_component__ = __webpack_require__("../../../../../src/app/task/task-main/task-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_task_tree_resolver_service__ = __webpack_require__("../../../../../src/app/task/shared/task-tree-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_task_resolver_service__ = __webpack_require__("../../../../../src/app/task/shared/task-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_task_service__ = __webpack_require__("../../../../../src/app/task/shared/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_task_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/task-filters.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__task_routing__ = __webpack_require__("../../../../../src/app/task/task.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__task_new_task_new_component__ = __webpack_require__("../../../../../src/app/task/task-new/task-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_drag_drop__ = __webpack_require__("../../../../ng-drag-drop/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng_drag_drop___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_ng_drag_drop__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__task_edit_task_edit_component__ = __webpack_require__("../../../../../src/app/task/task-edit/task-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__status_chooser_status_chooser_component__ = __webpack_require__("../../../../../src/app/task/status-chooser/status-chooser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_swiper_wrapper__ = __webpack_require__("../../../../ngx-swiper-wrapper/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_swiper_wrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ngx_swiper_wrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_users_filters_service__ = __webpack_require__("../../../../../src/app/task/shared/users-filters.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto',
    keyboardControl: true
};
var TaskModule = (function () {
    function TaskModule() {
    }
    TaskModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__tasker_material_module__["a" /* TaskerMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0__comment_comment_module__["a" /* CommentModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_15__task_routing__["a" /* taskRouting */],
                __WEBPACK_IMPORTED_MODULE_17_ng_drag_drop__["NgDragDropModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_20_ngx_swiper_wrapper__["SwiperModule"].forChild()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__task_tree_task_tree_component__["a" /* TaskTreeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__task_thumbnail_task_thumbnail_component__["a" /* TaskThumbnailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__task_details_task_details_component__["a" /* TaskDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__task_main_task_main_component__["a" /* TaskMainComponent */],
                __WEBPACK_IMPORTED_MODULE_16__task_new_task_new_component__["a" /* TaskNewComponent */],
                __WEBPACK_IMPORTED_MODULE_18__task_edit_task_edit_component__["a" /* TaskEditComponent */],
                __WEBPACK_IMPORTED_MODULE_19__status_chooser_status_chooser_component__["a" /* StatusChooserComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__shared_task_tree_resolver_service__["a" /* TaskTreeResolverService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_task_resolver_service__["a" /* TaskResolverService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_task_service__["a" /* TaskService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_task_filters_service__["a" /* TaskFiltersService */],
                __WEBPACK_IMPORTED_MODULE_21__shared_users_filters_service__["a" /* UsersFiltersService */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_19__status_chooser_status_chooser_component__["a" /* StatusChooserComponent */],
                __WEBPACK_IMPORTED_MODULE_1__comment_add_comment_add_comment_component__["a" /* AddCommentComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
            ]
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ }),

/***/ "../../../../../src/app/task/task.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export taskRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return taskRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__task_tree_task_tree_component__ = __webpack_require__("../../../../../src/app/task/task-tree/task-tree.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_details_task_details_component__ = __webpack_require__("../../../../../src/app/task/task-details/task-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_main_task_main_component__ = __webpack_require__("../../../../../src/app/task/task-main/task-main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_new_task_new_component__ = __webpack_require__("../../../../../src/app/task/task-new/task-new.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__task_edit_task_edit_component__ = __webpack_require__("../../../../../src/app/task/task-edit/task-edit.component.ts");






var taskRoutes = [
    // { path: 'tasks/new', component: CreateTaskComponent }, // TODO: Dodać , canDeactivate: ['canDeactivateCreateEvent']
    // { path: 'tasks', component: TaskTreeComponent, resolve: { tasks: TaskTreeResolverService } },
    // { path: 'tasks/:id', component: TaskDetailsComponent, resolve: { task: TaskResolverService } },
    // { path: '', redirectTo: '/tasks', pathMatch: 'full' },
    // { path: '**', component: TaskTreeComponent }
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_3__task_main_task_main_component__["a" /* TaskMainComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__task_tree_task_tree_component__["a" /* TaskTreeComponent */],
            }
        ]
    },
    //   {
    //     path: 'new', component: TaskTreeComponent,
    //     children: [
    //       {
    //         path: '',
    //         component: DragonsListComponent,
    //         resolve: { list: DragonsListResolveService }
    //       },
    //       {
    //         path: '',
    //         component: DragonsDetailsComponent,
    //         outlet: 'details'
    //       }
    //     ]
    //   },
    {
        path: 'new', component: __WEBPACK_IMPORTED_MODULE_3__task_main_task_main_component__["a" /* TaskMainComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__task_tree_task_tree_component__["a" /* TaskTreeComponent */],
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__task_new_task_new_component__["a" /* TaskNewComponent */],
                outlet: 'new',
            }
        ]
    },
    {
        path: 'new/:id', component: __WEBPACK_IMPORTED_MODULE_3__task_main_task_main_component__["a" /* TaskMainComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__task_tree_task_tree_component__["a" /* TaskTreeComponent */],
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__task_new_task_new_component__["a" /* TaskNewComponent */],
                outlet: 'new',
            }
        ]
    },
    {
        path: 'edit/:id', component: __WEBPACK_IMPORTED_MODULE_3__task_main_task_main_component__["a" /* TaskMainComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__task_tree_task_tree_component__["a" /* TaskTreeComponent */],
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_5__task_edit_task_edit_component__["a" /* TaskEditComponent */],
                outlet: 'edit',
            }
        ]
    },
    {
        path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__task_main_task_main_component__["a" /* TaskMainComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_1__task_tree_task_tree_component__["a" /* TaskTreeComponent */],
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__task_details_task_details_component__["a" /* TaskDetailsComponent */],
                outlet: 'details',
            }
        ]
    },
];
var taskRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["e" /* RouterModule */].forChild(taskRoutes);


/***/ }),

/***/ "../../../../ng-drag-drop/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ng_drag_drop_module_1 = __webpack_require__("../../../../ng-drag-drop/src/ng-drag-drop.module.js");
exports.NgDragDropModule = ng_drag_drop_module_1.NgDragDropModule;
var drop_event_model_1 = __webpack_require__("../../../../ng-drag-drop/src/shared/drop-event.model.js");
exports.DropEvent = drop_event_model_1.DropEvent;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../ng-drag-drop/src/directives/draggable.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ng_drag_drop_service_1 = __webpack_require__("../../../../ng-drag-drop/src/services/ng-drag-drop.service.js");
var dom_helper_1 = __webpack_require__("../../../../ng-drag-drop/src/shared/dom-helper.js");
/**
 * Makes an element draggable by adding the draggable html attribute
 */
var Draggable = /** @class */ (function () {
    function Draggable(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         * Currently not used
         */
        this.dragEffect = 'move';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dragScope = 'default';
        /**
         * The CSS class applied to a draggable element. If a dragHandle is defined then its applied to that handle
         * element only. By default it is used to change the mouse over pointer.
         */
        this.dragHandleClass = 'drag-handle';
        /**
         * CSS class applied on the source draggable element while being dragged.
         */
        this.dragClass = 'drag-border';
        /**
         * CSS class applied on the drag ghost when being dragged.
         */
        this.dragTransitClass = 'drag-transit';
        /**
         * Event fired when Drag is started
         */
        this.onDragStart = new core_1.EventEmitter();
        /**
         * Event fired while the element is being dragged
         */
        this.onDrag = new core_1.EventEmitter();
        /**
         * Event fired when drag ends
         */
        this.onDragEnd = new core_1.EventEmitter();
        /**
         * @private
         * Backing field for the dragEnabled property
         */
        this._dragEnabled = true;
    }
    Object.defineProperty(Draggable.prototype, "dragImage", {
        get: function () {
            return this._dragImage;
        },
        /**
         * The url to image that will be used as custom drag image when the draggable is being dragged.
         */
        set: function (value) {
            this._dragImage = value;
            this.dragImageElement = new Image();
            this.dragImageElement.src = this.dragImage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Draggable.prototype, "dragEnabled", {
        get: function () {
            return this._dragEnabled;
        },
        /**
         * Defines if drag is enabled. `true` by default.
         */
        set: function (value) {
            this._dragEnabled = value;
            this.applyDragHandleClass();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Draggable.prototype.ngOnInit = function () {
        this.applyDragHandleClass();
    };
    Draggable.prototype.ngOnDestroy = function () {
        this.unbindDragListeners();
    };
    Draggable.prototype.dragStart = function (e) {
        var _this = this;
        if (this.allowDrag()) {
            // This is a kludgy approach to apply CSS to the drag helper element when an image is being dragged. 
            dom_helper_1.DomHelper.addClass(this.el, this.dragTransitClass);
            setTimeout(function () {
                dom_helper_1.DomHelper.addClass(_this.el, _this.dragClass);
                dom_helper_1.DomHelper.removeClass(_this.el, _this.dragTransitClass);
            }, 10);
            this.ng2DragDropService.dragData = this.dragData;
            this.ng2DragDropService.scope = this.dragScope;
            // Firefox requires setData() to be called otherwise the drag does not work.
            // We don't use setData() to transfer data anymore so this is just a dummy call.
            if (e.dataTransfer != null) {
                e.dataTransfer.setData('text', '');
            }
            // Set dragImage
            if (this.dragImage) {
                e.dataTransfer.setDragImage(this.dragImageElement, 0, 0);
            }
            e.stopPropagation();
            this.onDragStart.emit(e);
            this.ng2DragDropService.onDragStart.next();
            this.zone.runOutsideAngular(function () {
                _this.unbindDragListener = _this.renderer.listen(_this.el.nativeElement, 'drag', function (dragEvent) {
                    _this.drag(dragEvent);
                });
            });
        }
        else {
            e.preventDefault();
        }
    };
    Draggable.prototype.drag = function (e) {
        this.onDrag.emit(e);
    };
    Draggable.prototype.dragEnd = function (e) {
        this.unbindDragListeners();
        dom_helper_1.DomHelper.removeClass(this.el, this.dragClass);
        this.ng2DragDropService.onDragEnd.next();
        this.onDragEnd.emit(e);
        e.stopPropagation();
        e.preventDefault();
    };
    Draggable.prototype.mousedown = function (e) {
        this.mouseDownElement = e.target;
    };
    Draggable.prototype.allowDrag = function () {
        if (this.dragHandle) {
            return dom_helper_1.DomHelper.matches(this.mouseDownElement, this.dragHandle) && this.dragEnabled;
        }
        else {
            return this.dragEnabled;
        }
    };
    Draggable.prototype.applyDragHandleClass = function () {
        var dragElement = this.getDragHandleElement();
        if (!dragElement) {
            return;
        }
        if (this.dragEnabled) {
            dom_helper_1.DomHelper.addClass(dragElement, this.dragHandleClass);
        }
        else {
            dom_helper_1.DomHelper.removeClass(this.el, this.dragHandleClass);
        }
    };
    Draggable.prototype.getDragHandleElement = function () {
        var dragElement = this.el;
        if (this.dragHandle) {
            dragElement = this.el.nativeElement.querySelector(this.dragHandle);
        }
        return dragElement;
    };
    Draggable.prototype.unbindDragListeners = function () {
        if (this.unbindDragListener) {
            this.unbindDragListener();
        }
    };
    Draggable.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[draggable]'
                },] },
    ];
    /** @nocollapse */
    Draggable.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
        { type: ng_drag_drop_service_1.NgDragDropService, },
        { type: core_1.NgZone, },
    ]; };
    Draggable.propDecorators = {
        'dragData': [{ type: core_1.Input },],
        'dragHandle': [{ type: core_1.Input },],
        'dragEffect': [{ type: core_1.Input },],
        'dragScope': [{ type: core_1.Input },],
        'dragHandleClass': [{ type: core_1.Input },],
        'dragClass': [{ type: core_1.Input },],
        'dragTransitClass': [{ type: core_1.Input },],
        'dragImage': [{ type: core_1.Input },],
        'dragEnabled': [{ type: core_1.HostBinding, args: ['draggable',] }, { type: core_1.Input },],
        'onDragStart': [{ type: core_1.Output },],
        'onDrag': [{ type: core_1.Output },],
        'onDragEnd': [{ type: core_1.Output },],
        'dragStart': [{ type: core_1.HostListener, args: ['dragstart', ['$event'],] },],
        'dragEnd': [{ type: core_1.HostListener, args: ['dragend', ['$event'],] },],
        'mousedown': [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
    };
    return Draggable;
}());
exports.Draggable = Draggable;
//# sourceMappingURL=draggable.directive.js.map

/***/ }),

/***/ "../../../../ng-drag-drop/src/directives/droppable.directive.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var drop_event_model_1 = __webpack_require__("../../../../ng-drag-drop/src/shared/drop-event.model.js");
var ng_drag_drop_service_1 = __webpack_require__("../../../../ng-drag-drop/src/services/ng-drag-drop.service.js");
var dom_helper_1 = __webpack_require__("../../../../ng-drag-drop/src/shared/dom-helper.js");
var Observable_1 = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
__webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var Droppable = /** @class */ (function () {
    function Droppable(el, renderer, ng2DragDropService, zone) {
        this.el = el;
        this.renderer = renderer;
        this.ng2DragDropService = ng2DragDropService;
        this.zone = zone;
        /**
         *  Event fired when Drag dragged element enters a valid drop target.
         */
        this.onDragEnter = new core_1.EventEmitter();
        /**
         * Event fired when an element is being dragged over a valid drop target
         */
        this.onDragOver = new core_1.EventEmitter();
        /**
         * Event fired when a dragged element leaves a valid drop target.
         */
        this.onDragLeave = new core_1.EventEmitter();
        /**
         * Event fired when an element is dropped on a valid drop target.
         */
        this.onDrop = new core_1.EventEmitter();
        /**
         * CSS class that is applied when a compatible draggable is being dragged over this droppable.
         */
        this.dragOverClass = 'drag-over-border';
        /**
         * CSS class applied on this droppable when a compatible draggable item is being dragged.
         * This can be used to visually show allowed drop zones.
         */
        this.dragHintClass = 'drag-hint-border';
        /**
         * Defines compatible drag drop pairs. Values must match both in draggable and droppable.dropScope.
         */
        this.dropScope = 'default';
        /**
         * @private
         * Backing field for the dropEnabled property
         */
        this._dropEnabled = true;
        /**
         * @private
         * Field for tracking drag state. Helps when
         * drag stop event occurs before the allowDrop()
         * can be calculated (async).
         */
        this._isDragActive = false;
        /**
         * @private
         * Field for tracking if service is subscribed.
         * Avoids creating multiple subscriptions of service.
         */
        this._isServiceActive = false;
    }
    Object.defineProperty(Droppable.prototype, "dropEnabled", {
        get: function () {
            return this._dropEnabled;
        },
        /**
         * Defines if drop is enabled. `true` by default.
         */
        set: function (value) {
            this._dropEnabled = value;
            if (this._dropEnabled === true) {
                this.subscribeService();
            }
            else {
                this.unsubscribeService();
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Droppable.prototype.ngOnInit = function () {
        if (this.dropEnabled === true) {
            this.subscribeService();
        }
    };
    Droppable.prototype.ngOnDestroy = function () {
        this.unsubscribeService();
        this.unbindDragListeners();
    };
    Droppable.prototype.dragEnter = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.onDragEnter.emit(e);
    };
    Droppable.prototype.dragOver = function (e, result) {
        if (result) {
            dom_helper_1.DomHelper.addClass(this.el, this.dragOverClass);
            e.preventDefault();
            this.onDragOver.emit(e);
        }
    };
    Droppable.prototype.dragLeave = function (e) {
        dom_helper_1.DomHelper.removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        this.onDragLeave.emit(e);
    };
    Droppable.prototype.drop = function (e) {
        dom_helper_1.DomHelper.removeClass(this.el, this.dragOverClass);
        e.preventDefault();
        e.stopPropagation();
        this.ng2DragDropService.onDragEnd.next();
        this.onDrop.emit(new drop_event_model_1.DropEvent(e, this.ng2DragDropService.dragData));
        this.ng2DragDropService.dragData = null;
        this.ng2DragDropService.scope = null;
    };
    Droppable.prototype.allowDrop = function () {
        var _this = this;
        var allowed = false;
        /* tslint:disable:curly */
        /* tslint:disable:one-line */
        if (typeof this.dropScope === 'string') {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.ng2DragDropService.scope === this.dropScope;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.ng2DragDropService.scope.indexOf(this.dropScope) > -1;
        }
        else if (this.dropScope instanceof Array) {
            if (typeof this.ng2DragDropService.scope === 'string')
                allowed = this.dropScope.indexOf(this.ng2DragDropService.scope) > -1;
            else if (this.ng2DragDropService.scope instanceof Array)
                allowed = this.dropScope.filter(function (item) {
                    return _this.ng2DragDropService.scope.indexOf(item) !== -1;
                }).length > 0;
        }
        else if (typeof this.dropScope === 'function') {
            allowed = this.dropScope(this.ng2DragDropService.dragData);
            if (allowed instanceof Observable_1.Observable) {
                return allowed.map(function (result) { return result && _this.dropEnabled; });
            }
        }
        /* tslint:enable:curly */
        /* tslint:disable:one-line */
        return Observable_1.Observable.of(allowed && this.dropEnabled);
    };
    Droppable.prototype.subscribeService = function () {
        var _this = this;
        if (this._isServiceActive === true) {
            return;
        }
        this._isServiceActive = true;
        this.dragStartSubscription = this.ng2DragDropService.onDragStart.subscribe(function () {
            _this._isDragActive = true;
            _this.allowDrop().subscribe(function (result) {
                if (result && _this._isDragActive) {
                    dom_helper_1.DomHelper.addClass(_this.el, _this.dragHintClass);
                    _this.zone.runOutsideAngular(function () {
                        _this.unbindDragEnterListener = _this.renderer.listen(_this.el.nativeElement, 'dragenter', function (dragEvent) {
                            _this.dragEnter(dragEvent);
                        });
                        _this.unbindDragOverListener = _this.renderer.listen(_this.el.nativeElement, 'dragover', function (dragEvent) {
                            _this.dragOver(dragEvent, result);
                        });
                        _this.unbindDragLeaveListener = _this.renderer.listen(_this.el.nativeElement, 'dragleave', function (dragEvent) {
                            _this.dragLeave(dragEvent);
                        });
                    });
                }
            });
        });
        this.dragEndSubscription = this.ng2DragDropService.onDragEnd.subscribe(function () {
            _this._isDragActive = false;
            dom_helper_1.DomHelper.removeClass(_this.el, _this.dragHintClass);
            _this.unbindDragListeners();
        });
    };
    Droppable.prototype.unsubscribeService = function () {
        this._isServiceActive = false;
        if (this.dragStartSubscription) {
            this.dragStartSubscription.unsubscribe();
        }
        if (this.dragEndSubscription) {
            this.dragEndSubscription.unsubscribe();
        }
    };
    Droppable.prototype.unbindDragListeners = function () {
        if (this.unbindDragEnterListener) {
            this.unbindDragEnterListener();
        }
        if (this.unbindDragOverListener) {
            this.unbindDragOverListener();
        }
        if (this.unbindDragLeaveListener) {
            this.unbindDragLeaveListener();
        }
    };
    Droppable.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[droppable]'
                },] },
    ];
    /** @nocollapse */
    Droppable.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: core_1.Renderer2, },
        { type: ng_drag_drop_service_1.NgDragDropService, },
        { type: core_1.NgZone, },
    ]; };
    Droppable.propDecorators = {
        'onDragEnter': [{ type: core_1.Output },],
        'onDragOver': [{ type: core_1.Output },],
        'onDragLeave': [{ type: core_1.Output },],
        'onDrop': [{ type: core_1.Output },],
        'dragOverClass': [{ type: core_1.Input },],
        'dragHintClass': [{ type: core_1.Input },],
        'dropScope': [{ type: core_1.Input },],
        'dropEnabled': [{ type: core_1.Input },],
        'drop': [{ type: core_1.HostListener, args: ['drop', ['$event'],] },],
    };
    return Droppable;
}());
exports.Droppable = Droppable;
//# sourceMappingURL=droppable.directive.js.map

/***/ }),

/***/ "../../../../ng-drag-drop/src/ng-drag-drop.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var draggable_directive_1 = __webpack_require__("../../../../ng-drag-drop/src/directives/draggable.directive.js");
var droppable_directive_1 = __webpack_require__("../../../../ng-drag-drop/src/directives/droppable.directive.js");
var ng_drag_drop_service_1 = __webpack_require__("../../../../ng-drag-drop/src/services/ng-drag-drop.service.js");
var NgDragDropModule = /** @class */ (function () {
    function NgDragDropModule() {
    }
    NgDragDropModule.forRoot = function () {
        return {
            ngModule: NgDragDropModule,
            providers: [ng_drag_drop_service_1.NgDragDropService]
        };
    };
    NgDragDropModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [],
                    declarations: [
                        draggable_directive_1.Draggable,
                        droppable_directive_1.Droppable
                    ],
                    exports: [
                        draggable_directive_1.Draggable,
                        droppable_directive_1.Droppable
                    ]
                },] },
    ];
    /** @nocollapse */
    NgDragDropModule.ctorParameters = function () { return []; };
    return NgDragDropModule;
}());
exports.NgDragDropModule = NgDragDropModule;
//# sourceMappingURL=ng-drag-drop.module.js.map

/***/ }),

/***/ "../../../../ng-drag-drop/src/services/ng-drag-drop.service.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by orehman on 2/22/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var Subject_1 = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var NgDragDropService = /** @class */ (function () {
    function NgDragDropService() {
        this.onDragStart = new Subject_1.Subject();
        this.onDragEnd = new Subject_1.Subject();
    }
    NgDragDropService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    NgDragDropService.ctorParameters = function () { return []; };
    return NgDragDropService;
}());
exports.NgDragDropService = NgDragDropService;
//# sourceMappingURL=ng-drag-drop.service.js.map

/***/ }),

/***/ "../../../../ng-drag-drop/src/shared/dom-helper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by orehman on 2/22/2017.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DomHelper = /** @class */ (function () {
    function DomHelper() {
    }
    /**
     * Polyfill for element.matches()
     * See: https://developer.mozilla.org/en/docs/Web/API/Element/matches#Polyfill
     * @param element
     * @param selectorName
     */
    DomHelper.matches = function (element, selectorName) {
        var proto = Element.prototype;
        var func = proto['matches'] ||
            proto.matchesSelector ||
            proto.mozMatchesSelector ||
            proto.msMatchesSelector ||
            proto.oMatchesSelector ||
            proto.webkitMatchesSelector ||
            function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s), i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {
                }
                return i > -1;
            };
        return func.call(element, selectorName);
    };
    /**
     * Applies the specified css class on nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.addClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.add(className);
        }
    };
    /**
     * Removes the specified class from nativeElement
     * @param elementRef
     * @param className
     */
    DomHelper.removeClass = function (elementRef, className) {
        var e = this.getElementWithValidClassList(elementRef);
        if (e) {
            e.classList.remove(className);
        }
    };
    /**
     * Gets element with valid classList
     *
     * @param elementRef
     * @returns ElementRef | null
     */
    DomHelper.getElementWithValidClassList = function (elementRef) {
        var e = elementRef instanceof core_1.ElementRef ? elementRef.nativeElement : elementRef;
        if (e.classList !== undefined && e.classList !== null) {
            return e;
        }
        return null;
    };
    return DomHelper;
}());
exports.DomHelper = DomHelper;
//# sourceMappingURL=dom-helper.js.map

/***/ }),

/***/ "../../../../ng-drag-drop/src/shared/drop-event.model.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DropEvent = /** @class */ (function () {
    function DropEvent(event, data) {
        this.nativeEvent = event;
        this.dragData = data;
    }
    return DropEvent;
}());
exports.DropEvent = DropEvent;
//# sourceMappingURL=drop-event.model.js.map

/***/ })

});
//# sourceMappingURL=task.module.chunk.js.map