import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { ArmComponent } from './arm/arm.component';
import { StomachComponent } from './stomach/stomach.component';
import { CombinedComponent } from './combined/combined.component';
import { AliftComponent } from './alift/alift.component';
import { PolishComponent } from './polish/polish.component';

const routes: Routes = [
  {path: "demo", component: DemoComponent},
  {path: "arm", component: ArmComponent},
  {path: "stomach", component: StomachComponent},
  {path: "combined", component: CombinedComponent},
  {path: "alift", component: AliftComponent},
  {path: "polish", component: PolishComponent},
  {path: "**", redirectTo: "/alift"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
