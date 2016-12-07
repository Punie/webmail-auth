import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './_guards/index';
import { HomeComponent } from './home/index';
import { InboxComponent } from "./inbox/inbox.component";
import { LoginComponent } from './login/index';
import { OutboxComponent } from "./outbox/outbox.component";
import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'inbox', component: InboxComponent, canActivate: [AuthGuard] },
  { path: 'outbox', component: OutboxComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
