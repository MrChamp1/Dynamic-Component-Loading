
import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef } from '@angular/core';
import { ComponentType, ComponentPortal, DomPortalHost } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  // 1. Reference to our ComponentPortal.
  //    This is the portal we'll use to attach our Component.
  private portal: ComponentPortal<ComponentType<any>>;

  // 2. Reference to our Portal Host.
  //    We use DOMPortalHost as we'll be using document.body as our anchor.
  private bodyPortalHost: DomPortalHost;

  // 3. Inject the dependencies needed by the DOMPortalHost constructor
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
    // 4. Create a PortalHost with document.body as its anchor element
    this.bodyPortalHost = new DomPortalHost(
      document.body,
      this.componentFactoryResolver,
      this.appRef,
      this.injector);
  }

  create(component: ComponentType<any>) {
    // 5. Create a Portal based on Component Type
    this.portal = new ComponentPortal(component);
  }

  reveal() {
    // 6. Attach the Portal to the PortalHost.
    this.bodyPortalHost.attach(this.portal);
  }

  hide() {
    // 7. Detach the Portal from the PortalHost
    this.bodyPortalHost.detach();
  }

}
