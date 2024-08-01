import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginPageComponent } from './Component/user-login-page/user-login-page.component';
import { RegistrationComponent } from './Component/registration/registration.component';

const routes: Routes = [
  {path: '', component: RegistrationComponent },
  {path: 'login', component: UserLoginPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
