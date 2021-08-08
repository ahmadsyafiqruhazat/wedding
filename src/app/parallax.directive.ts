import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1
  @Input('initialTop') initialTop: number = 0
  @Input('max') max: number = 0
  @Input('bounce') bounce: number = 215

  constructor(private eleRef: ElementRef) {
    this.initialTop = this.eleRef.nativeElement.getBoundingClientRect().top
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: any) {
    if((this.initialTop - (window.scrollY * this.parallaxRatio)) > this.bounce) {
      this.parallaxRatio = -this.parallaxRatio;
    }
    this.eleRef.nativeElement.style.top = (this.initialTop - (window.scrollY * this.parallaxRatio)) + 'px'
  }

}
