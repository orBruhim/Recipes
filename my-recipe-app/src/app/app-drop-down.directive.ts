import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appAppDropDown]'
})
export class AppDropDownDirective {

  constructor() { }
  @HostBinding ('class.open') isOpen = false;
  @HostListener ('click') toggleOpen() {
  this.isOpen = !this.isOpen;
}

}
