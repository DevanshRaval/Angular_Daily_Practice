import { Directive , Input , ElementRef , HostListener , HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyDir]'
})
export class MyDirDirective {

  constructor(private element : ElementRef , private renderer : Renderer2) { }
   @HostBinding('style.color') @Input() receivedColorValue :string = ''; 

  @HostListener('mouseover') over(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor',this.receivedColorValue)
    this.renderer.setStyle(this.element.nativeElement,'color','white')
    this.renderer.setStyle(this.element.nativeElement,'height','10vh')
    this.renderer.setStyle(this.element.nativeElement,'transition','2s')
    this.renderer.setStyle(this.element.nativeElement,'lineHeight','10vh')
    

  }

  @HostListener('mouseleave') leave(){
    this.renderer.setStyle(this.element.nativeElement,'backgroundColor','rgb(207, 240, 245)');
    this.renderer.setStyle(this.element.nativeElement,'color','grey');
    this.renderer.setStyle(this.element.nativeElement,'height','5vh');
    this.renderer.setStyle(this.element.nativeElement,'lineHeight','5vh')
  }

}
