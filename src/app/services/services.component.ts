import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';
import { ListingsService } from '../listings.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [ListingsService]
})
export class ServicesComponent implements OnInit {
listings: FirebaseListObservable <any[]>;
  constructor(private router: Router, private listingsService: ListingsService) { }

  ngOnInit() {
    this.listings = this.listingsService.getListings();
  }

  goToDetails(clickedService){
    this.router.navigate(['services', clickedService.$key])
  }

}
