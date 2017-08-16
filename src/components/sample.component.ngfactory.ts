/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './sample.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './child.component';
import * as import9 from './child.component.ngfactory';
export class Wrapper_SampleComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SampleComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.SampleComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_SampleComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_SampleComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.SampleComponent>;
  _SampleComponent_0_3:Wrapper_SampleComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SampleComponent_Host0,renderType_SampleComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'sample-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SampleComponent0(this.viewUtils,this,0,this._el_0);
    this._SampleComponent_0_3 = new Wrapper_SampleComponent();
    this.compView_0.create(this._SampleComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SampleComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SampleComponent) && (0 === requestNodeIndex))) { return this._SampleComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SampleComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SampleComponentNgFactory:import7.ComponentFactory<import0.SampleComponent> = new import7.ComponentFactory<import0.SampleComponent>('sample-component',View_SampleComponent_Host0,import0.SampleComponent);
const styles_SampleComponent:any[] = ([] as any[]);
var renderType_SampleComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,styles_SampleComponent,{});
export class View_SampleComponent0 extends import1.AppView<import0.SampleComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  compView_2:import1.AppView<import8.ChildComponent>;
  _ChildComponent_2_3:import9.Wrapper_ChildComponent;
  _text_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SampleComponent0,renderType_SampleComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    This is a Simple Container Component which includes another Component\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'child-component',new import3.InlineArray2(2,'name','test'),(null as any));
    this.compView_2 = new import9.View_ChildComponent0(this.viewUtils,this,2,this._el_2);
    this._ChildComponent_2_3 = new import9.Wrapper_ChildComponent();
    this.compView_2.create(this._ChildComponent_2_3.context);
    this._text_3 = this.renderer.createText(this._el_0,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import8.ChildComponent) && (2 === requestNodeIndex))) { return this._ChildComponent_2_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = 'test';
    this._ChildComponent_2_3.check_name(currVal_2_0_0,throwOnChange,false);
    this._ChildComponent_2_3.ngDoCheck(this,this._el_2,throwOnChange);
    this.compView_2.internalDetectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_2.destroy();
  }
}