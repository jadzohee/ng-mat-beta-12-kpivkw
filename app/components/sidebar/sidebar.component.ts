import { Component, Input } from '@angular/core';

@Component({
  selector: 'solution-sidebar',
  templateUrl: 'sidebar.component.html',
})

export class SidebarComponent {
    private googleUrl:string = 'https://plus.google.com/+MuhammadFaisal04';
  constructor() { }

  ngOnInit() {
  }
}
