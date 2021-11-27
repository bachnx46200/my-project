import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { vi_VN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivitiesComponent } from './drawer/activities/activities.component';
import { ChatComponent } from './drawer/chat/chat.component';
import { ExploreComponent } from './drawer/explore/explore.component';
import { InviteFriendsComponent } from './modal/invite-friends/invite-friends.component';
import { CreateAppComponent } from './modal/create-app/create-app.component';
import { UpgradePlanComponent } from './modal/upgrade-plan/upgrade-plan.component';
import { AsideComponent } from './common/aside/aside.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { NgZorroAntdModule } from './NgZorroAntdModule .module';
import { PostsComponent } from './posts/posts.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

import { PostService } from './service/post.service';
import { IndexComponent } from './common/index/index.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { SecondaryComponent } from './common/aside/secondary/secondary.component';
import { PrimaryComponent } from './common/aside/primary/primary.component';
registerLocaleData(vi);

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ChatComponent,
    ExploreComponent,
    InviteFriendsComponent,
    CreateAppComponent,
    UpgradePlanComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    PostsComponent,
    PostDetailComponent,
    IndexComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    SecondaryComponent,
    PrimaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: vi_VN },
    PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
