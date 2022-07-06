import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
selector: 'app-single',
templateUrl: './single.component.html',
styleUrls: ['./single.component.css'],
styles: ['button {top: 50%; text-align: center;border-radius: 15px; border: 2px solid #73AD21; width: fit-content; margin: 20px; padding: 20px;}']
})
export class SingleComponent implements OnInit {
constructor( private route: ActivatedRoute, private router: Router ) { }
ngOnInit() { }
coins() {
this.router.navigate(['sing-a'], {relativeTo:this.route}); // sing-a : It is path for SingleAComponent
}
notes() {
this.router.navigate(['sing-b'], {relativeTo:this.route}); // sing-b : It is path for SingleBComponent
}
}
