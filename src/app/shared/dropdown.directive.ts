import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') open = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.open = false;
  }

  @HostListener('click') mouseclick(eventData: Event) {
    this.open = !this.open;
    const menu: HTMLCollection = this.elRef.nativeElement.children;
    if (this.open) {
      this.renderer.addClass(menu.item(1), 'show');
    } else {
      this.renderer.removeClass(menu.item(1), 'show');
    }
  }

}
