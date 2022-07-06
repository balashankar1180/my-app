import { Component, OnInit } from '@angular/core';


@Component({
selector: 'app-single-a',

template: `
<div>
<p> single-a works! </p>
</div>
  `,
  styles: ['div { width : 200px; height : 100px; border : 4px solid black;}']
})
export class SingleAComponent implements OnInit {

  constructor(  ) { }

  ngOnInit() {
  }

}
