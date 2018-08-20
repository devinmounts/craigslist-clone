import { Injectable } from '@angular/core';
import { Listing } from './models/listing.model';
import { LISTINGS } from './mock-listings';

@Injectable()
export class ListingsService {

  constructor() { }

  getListings() {
    return LISTINGS;
  }

  getListingById(listingId: number) {
    for (let i = 0; i <= LISTINGS.length - 1; i++) {
      if (LISTINGS[i].id === listingId) {
        return LISTINGS[i];
      }
    }
  }

}
