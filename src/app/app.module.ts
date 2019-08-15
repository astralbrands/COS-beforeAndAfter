import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ArmComponent } from './arm/arm.component';
import { StomachComponent } from './stomach/stomach.component';
import { CombinedComponent } from './combined/combined.component';
import { AliftComponent } from './alift/alift.component';
import { PolishComponent } from './polish/polish.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ArmComponent,
    StomachComponent,
    CombinedComponent,
    AliftComponent,
    PolishComponent,
    DisclaimerComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
