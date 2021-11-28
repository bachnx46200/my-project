import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//base
import { AsideComponent } from './base/aside/aside.component';
import { HeaderComponent } from './base/header/header.component';
import { FooterComponent } from './base/footer/footer.component';
import { SecondaryComponent } from './base/aside/secondary/secondary.component';
import { PrimaryComponent } from './base/aside/primary/primary.component';
import { IndexComponent } from './base/index/index.component';

////authentication
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';

///common
import { ActivitiesComponent } from './common/drawer/activities/activities.component';
import { ChatComponent } from './common/drawer/chat/chat.component';
import { ExploreComponent } from './common/drawer/explore/explore.component';
import { InviteFriendsComponent } from './common/modal/invite-friends/invite-friends.component';
import { CreateAppComponent } from './common/modal/create-app/create-app.component';
import { UpgradePlanComponent } from './common/modal/upgrade-plan/upgrade-plan.component';


//post
import { PostsComponent } from './post/posts/posts.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';








@NgModule({
  declarations: [
    ActivitiesComponent,
    ChatComponent,
    ExploreComponent,
    InviteFriendsComponent,
    CreateAppComponent,
    UpgradePlanComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    PostDetailComponent,
    IndexComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SecondaryComponent,
    PrimaryComponent,
    PostsComponent,
    ],
  imports: [ BrowserModule,CommonModule,RouterModule, ]
})
export class FrontEndModule {}