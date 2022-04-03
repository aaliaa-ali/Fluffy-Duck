import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'discount'
})

export class DiscountPipe implements PipeTransform{
transform(value: string) {
   let  discount=`${value}%-`
    return discount
}
}