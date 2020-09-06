import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appPlaceholder]',
    exportAs: 'appPlaceholder'
})
export class PlaceholderDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}
}