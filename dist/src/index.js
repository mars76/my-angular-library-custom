var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { SampleComponent } from './components/sample.component';
import { ChildComponent } from './components/child.component';
export * from './components/sample.component';
export * from './components/child.component';
var SampleModule = SampleModule_1 = (function () {
    function SampleModule() {
    }
    SampleModule.forRoot = function () {
        return {
            ngModule: SampleModule_1,
        };
    };
    return SampleModule;
}());
SampleModule = SampleModule_1 = __decorate([
    NgModule({
        imports: [],
        declarations: [
            SampleComponent,
            ChildComponent,
        ],
        exports: [
            SampleComponent,
            ChildComponent,
        ]
    })
], SampleModule);
export { SampleModule };
var SampleModule_1;
//# sourceMappingURL=index.js.map