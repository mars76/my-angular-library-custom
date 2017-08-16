(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
    (factory((global['ng2-fone'] = global['ng2-fone'] || {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.SampleComponent = (function () {
    function SampleComponent() {
    }
    return SampleComponent;
}());
exports.SampleComponent = __decorate$1([
    _angular_core.Component({
        selector: 'sample-component',
        templateUrl: './sample.component.html'
    })
], exports.SampleComponent);

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.ChildComponent = (function () {
    function ChildComponent() {
    }
    return ChildComponent;
}());
__decorate$2([
    _angular_core.Input()
], exports.ChildComponent.prototype, "name", void 0);
exports.ChildComponent = __decorate$2([
    _angular_core.Component({
        selector: 'child-component',
        templateUrl: './child.component.html'
    })
], exports.ChildComponent);

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.SampleModule = SampleModule_1 = (function () {
    function SampleModule() {
    }
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule_1,
        };
    };
    return SampleModule;
}());
exports.SampleModule = SampleModule_1 = __decorate([
    _angular_core.NgModule({
        imports: [],
        declarations: [
            exports.SampleComponent,
            exports.ChildComponent,
        ],
        exports: [
            exports.SampleComponent,
            exports.ChildComponent,
        ]
    })
], exports.SampleModule);
var SampleModule_1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
