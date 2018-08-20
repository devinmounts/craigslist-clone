import { Component, OnInit } from '@angular/core';
import { Listing } from '../models/listing.model';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ListingsService]
})
export class AdminComponent implements OnInit {

  constructor(private listingService: ListingsService) { }

  ngOnInit() {
  }

  submitForm(date: Date, title: string, details: string, photo: boolean, category: string, address: string) {
    const newListing: Listing = new Listing(title, date, details, photo, category, address);
    this.listingService.addListing(newListing);
    
  }

}