import { NgModule } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { AuthComponent } from '../auth/auth.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        DropdownDirective,
        LoadingSpinnerComponent,
        AlertComponent,
        PlaceholderDirective,
        CommonModule,
    ]
})
export class SharedModule {}