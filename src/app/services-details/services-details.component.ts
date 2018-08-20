import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../models/listing.model';
import { Location } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router'; 

@Component({
  selector: 'app-services-details',
  templateUrl: './services-details.component.html',
  styleUrls: ['./services-details.component.css'],
  providers: [ListingsService]
})
export class ServicesDetailsComponent implements OnInit {
  listingId: number = null;
  listingToDisplay: Listing;

  constructor(private route: ActivatedRoute, private location: Location, private listingsService: ListingsService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.listingId = parseInt(urlParameters['id'])
    });

    this.listingToDisplay = this.listingsService.getListingById(this.listingId);
  }

}
