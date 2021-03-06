import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

import { ScreenService } from '../services/screen.service';
import { Subscription } from 'rxjs/Subscription';

// tslint:disable-next-line:directive-selector
@Directive({selector: '[screenLarge]'})
export class ScreenLargeDirective implements OnInit, OnDestroy {
  private hasView = false;
  private screenSubscription: Subscription;

  constructor(private viewContainer: ViewContainerRef,
                private template: TemplateRef<Object>,
                private screenService: ScreenService) {

    this.screenSubscription = screenService.resize$.subscribe(() => this.onResize());

  }

  ngOnInit() {
    this.onResize();
  }

  ngOnDestroy() {
    this.screenSubscription.unsubscribe();
  }

  onResize() {
    const condition = this.screenService.screenWidth >= this.screenService.largeBreakpoint;

    if (condition && !this.hasView) {
      this.hasView = true;
      this.viewContainer.createEmbeddedView(this.template);
    } else if (!condition && this.hasView) {
      this.hasView = false;
      this.viewContainer.clear();
    }
  }
}
