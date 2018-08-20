import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../models/listing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [ListingsService]
})
export class CommunityComponent implements OnInit {
  listings: Listing[];

  constructor(private listingsService: ListingsService, private router: Router) { }

  ngOnInit() {
    this.listings = this.listingsService.getListings();
  }

  goToDetails(clickedListing: Listing){
    this.router.navigate(['community', clickedListing.id])
  }

}
