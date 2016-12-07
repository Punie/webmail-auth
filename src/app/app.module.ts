import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AlertComponent } from './_directives/alert.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AlertService } from "./_services/alert.service";
import { AuthenticationService } from "./_services/authentication.service";
import { AuthGuard } from "./_guards/auth.guard";
import { MailService } from "./_services/mail.service";
import { UserService } from "./_services/user.service";
import { routing } from "./app.routing";
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './_directives/dropdown.directive';
import { InboxComponent } from './inbox/inbox.component';
import { OutboxComponent } from './outbox/outbox.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    DropdownDirective,
    InboxComponent,
    OutboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    MailService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
