import { Component, Input, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css'],
  providers: [ListingsService]
})
export class EditListingComponent implements OnInit {
  @Input() selectedListing;

  constructor(private listingsService: ListingsService) { }

  ngOnInit() {
  }

  beginUpdatingListing(listingToUpdate){
    this.listingsService.updateListing(listingToUpdate);
  }

  beginDeletingListing(listingToDelete){
    if(confirm("Are you sure you want to delete this listing?")){
      this.listingsService.deleteListing(listingToDelete);
    }
  }
}
