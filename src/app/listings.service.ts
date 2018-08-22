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

  updateListing(localUpdatedListing){
    let listingEntryInFirebase = this.getListingById(localUpdatedListing.$key);
    listingEntryInFirebase.update({title: localUpdatedListing.title,
                                  postingDate: localUpdatedListing.postingDate,
                                  details: localUpdatedListing.details,
                                  photo: localUpdatedListing.photo,
                                  category: localUpdatedListing.category,
                                  address: localUpdatedListing.address})
  }

  deleteListing(localDeletedListing){
    let listingEntryInFirebase = this.getListingById(localDeletedListing.$key);
    listingEntryInFirebase.remove();
  }
}
