import { Injectable } from '@angular/core';
import { Listing } from './models/listing.model';
import { LISTINGS } from './mock-listings';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

 
@Injectable()
export class ListingsService {
  listings: FirebaseListObservable <any[]>;

  constructor(private database: AngularFireDatabase) {
    this.listings = database.list('listings');
   }

  getListings() {
    return this.listings;
  }

  addListing(newListing){
    this.listings.push(newListing)
  }

  getListingById(listingId: string) {
    return this.database.object('listings/' + listingId)
  }

}
