import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @Input() colorChange: string = 'violet';
  @HostBinding('style.color') color: string = '';

  constructor() {}

  ngOnInit() {
    this.color = this.colorChange;
  }
}
