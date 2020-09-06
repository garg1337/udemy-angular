import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthInterceptorService } from './auth-interceptor.service';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AuthComponent,
    ],
    imports: [
        HttpClientModule,
        SharedModule,
        ReactiveFormsModule,
        [RouterModule.forChild([{ path: '', component: AuthComponent }])]
    ],
    providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
})
export class AuthModule { }