import { Injectable } from '@angular/core';

@Injectable({
providedIn: 'root'
})
export class UsercolorService {
constructor() { console.log("New Instance of Service Created.") }
userColor : string = "yellow";
}
