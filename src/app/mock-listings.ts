import { Listing } from './models/listing.model';

let date = new Date('August 20, 2018');

export const LISTINGS: Listing[] = [
    new Listing(1, "Looking for a friend", date, "Does anyone want to be my friend?", false, "community", "123 Ryan's House St. Lonely,OR" ),
    new Listing(2, "Free Puppy", date, "Does anyone want my puppy?", true, "services", "123 Ryan's House St. Lonely,OR" ),
    new Listing(3, "Free Dirt", date, "Does anyone want some dirt, includes cat dropping nutrient fertilizer?", true, "services", "123 Ryan's House St. Lonely,OR" ),
    new Listing(4, "Door Needed", date, "My door is broken, and it's a piece of plywood. Help!", true, "services", "123 Ryan's House St. Lonely,OR" ),
    new Listing(5, "Crazy Neighbor", date, "My neighbor is crazy!! Help!", true, "services", "123 Ryan's House St. Lonely,OR" ),
    new Listing(6, "I love walnuts", date, "Let me tell you about the power of walnuts", true, "services", "456 Devin's Mom's House Ave. Washedup,OR" ),
    new Listing(7, "Want to see what's in my jar", date, "Don't be scared, it's healthy mold", true, "services", "456 Devin's Mom's House Ave. Washedup,OR" ),
    new Listing(8, "Make granola with me!", date, "Does anyone want to make granola with me?", true, "community", "456 Devin's Mom's House Ave. Washedup,OR" ),
    new Listing(9, "Take a walk together", date, "Lets put on our hipster jeans and walk Hawthorne!!", true, "community", "456 Devin's Mom's House Ave. Washedup,OR" ),
    new Listing(10, "Sweat it out with me", date, "My AC sucks, come sweat with me..", true, "community", "789 Elly's House Blvd. Curly,OR" ),
    new Listing(11, "My jelly donut is leaking!!", date, "Does anyone know how to get a stain out of my pineapple shirt?", true, "community", "789 Elly's House Blvd. Curly,OR" ),
    new Listing(12, "My bike squeaks", date, "Will anyone bring some chain grease to my house, I'm in the garage", true, "community", "789 Elly's House Blvd. Curly,OR" ),
]