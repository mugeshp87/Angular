import { Directive, ElementRef ,Input} from '@angular/core';
import { HostListener } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    constructor(private el: ElementRef) {
       
    }
    @HostListener('mouseenter') onmouseEnter()
    {
      this.highlight('blue')
    }
    @HostListener('mouseleave') onMouseLeave()
    {
      this.highlight('')
    }
private highlight(color: String)
{
  this.el.nativeElement.style.backgroundColor = color;
}
@Input() appHighlight='';

  }
