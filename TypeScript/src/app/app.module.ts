import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmEqualValidator } from './Shared/confirm-equal-validator';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { appRoutes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ApplicationEffects } from './store/effects/application.effects';
import { AdminModule } from './admin/admin.module';


@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        ConfirmEqualValidator,
        LoginComponent
    ],
    imports: [
        BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, HttpClientModule, AdminModule,
        RouterModule.forRoot(appRoutes, { enableTracing: false }),
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([ApplicationEffects]),
        NgIdleKeepaliveModule.forRoot()
    ],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
