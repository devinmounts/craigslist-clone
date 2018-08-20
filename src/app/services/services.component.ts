import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';
import { ListingsService } from '../listings.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ListingsService]
})
export class ServicesComponent implements OnInit {
listings: Listing[];
  constructor(private router: Router, private listingsService: ListingsService) { }

  ngOnInit() {
    this.listings = this.listingsService.getListings();
  }

  goToDetails(clickedService: Listing){
    this.router.navigate(['services', clickedService.id])
  }

}
