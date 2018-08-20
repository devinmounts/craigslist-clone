import {Pipe, PipeTransform} from '@angular/core';
import { Listing } from './models/listing.model';

@Pipe({
  name: "communityposting",
  pure: false
})

export class CommunityPipe implements PipeTransform {
  transform(input: Listing[]) {
    let output: Listing[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].category === "community") {
        output.push(input[i]);
      }
    }
    return output; 
  }
}