import { Component, OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../models/listing.model';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [ListingsService]
})
export class CommunityComponent implements OnInit {
  listings: FirebaseListObservable <any[]>;
  currentRoute: string = this.router.url;

  constructor(private listingsService: ListingsService, private router: Router) { }

  ngOnInit() {
    this.listings = this.listingsService.getListings();
    console.log(this.router.url);
  }

  goToDetails(clickedListing){
    this.router.navigate(['community', clickedListing.$key])
  }

}
