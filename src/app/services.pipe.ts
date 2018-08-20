import {Pipe, PipeTransform} from '@angular/core';
import { Listing } from './models/listing.model';

@Pipe({
  name: "servicesposting",
  pure: false
})

export class ServicesPipe implements PipeTransform{
  transform(input: Listing[]){
    let output: Listing[]= [];
    for(let i = 0; i<input.length; i++){
      if(input[i].category === "services"){
        output.push(input[i]);
      }
    }
    return output;    
  }

}