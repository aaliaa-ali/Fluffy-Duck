import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector:'[favourite]'
})

export class FavouriteDirective implements OnInit {
    constructor(public element:ElementRef){}

ngOnInit(): void {
    this.element.nativeElement.style.color  = 'red';
}
    
}