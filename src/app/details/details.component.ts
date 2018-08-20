import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../models/listing.model'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers: [ListingsService]
})
export class DetailsComponent implements OnInit {
  listingId: number = null;
  listingToDisplay: Listing;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private listingsService: ListingsService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = parseInt(urlParameters['id']);
    })
    
    this.listingToDisplay = this.listingsService.getListingById(this.listingId);
  }

}
