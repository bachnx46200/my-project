import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './front-end/post/posts/posts.component';
import { PostDetailComponent } from './front-end/post/post-detail/post-detail.component';
import { IndexComponent } from './front-end/base/index/index.component';
import { SignInComponent } from './front-end/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './front-end/authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './front-end/authentication/forgot-password/forgot-password.component';
const routes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  {
    path: "index",
    component: IndexComponent,
    children: [
      {
        path: "posts",
        component: PostsComponent
      },
      {
        path: "detail",
        component: PostDetailComponent
      },
    ]
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
