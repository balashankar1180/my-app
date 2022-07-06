import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-b',
  template: `
  <div>
  <p>
      single-b works!
    </p>
  </div>
    
  `,
  styles: ['div { width : 200px; height : 100px; border : 4px solid black;}']
})
export class SingleBComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
