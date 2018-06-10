# Dynamic Component Loader

This is a service that dynamically adds a component to the DOM.

---

### Uses
npm install --save @angular/cdk

# Usage

    constructor(private loaderservice: LoaderService){  }
    
    attach() {
        this.loaderservice.create(COMPONENT);
        this.loaderservice.reveal();
    }
    
    detach(){
        this.loaderservice.hide();
    }
