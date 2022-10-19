import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { DemoComponent } from './demo/demo.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustPipe } from './cust.pipe';
// import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child/child.component';
import { ServicedataComponent } from './servicedata/servicedata.component';
import {HttpClientModule} from '@angular/common/http';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CustpipePipe } from './custpipe.pipe';
import { CrudappComponent } from './crudapp/crudapp.component';
import { CappComponent } from './capp/capp.component';
import { BindingComponent } from './binding/binding.component';
// import { PracticsComponent } from './practics/practics.component';
import { PromiseComponent } from './promise/promise.component';
import { Directive1Component } from './directive1/directive1.component';
import { RrformComponent } from './rrform/rrform.component';
import { LivecodeComponent } from './livecode/livecode.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { Date15Component } from './date15/date15.component';
// import { DirectivesComponent } from './directives/directives.component';

// import { TaskComponent } from './task/task.component'

@NgModule({
  declarations: [
    AppComponent,
    TformComponent,
    RformComponent,
    DemoComponent,
    PipeComponent,
    CustPipe,
    // LifecycleComponent,
    ChildComponent,
    ServicedataComponent,
    RxjsComponent,
    CustpipePipe,
    CrudappComponent,
    CappComponent,
    BindingComponent,
    // PracticsComponent,
    PromiseComponent,
    Directive1Component,
    RrformComponent,
    LivecodeComponent,
    ProfileEditorComponent,
    Date15Component,
    //  DirectivesComponent
   
    // TaskComponent,

    
    //RformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
