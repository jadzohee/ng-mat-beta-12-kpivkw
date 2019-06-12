import { Component, VERSION } from '@angular/core';
import { OnInit, AfterViewInit } from '@angular/core';
import { SharedDataService } from './services/shared-data.service';

@Component({
  selector: 'solution-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  private ngVersion: string = VERSION.full;
  private isDarkThemeActive:boolean;
  name = 'Angular 4';
  private _opened: boolean = false;

  private _toggleSidebar() {
    this._opened = !this._opened;
  }
  constructor(private readonly _sharedDataService: SharedDataService) {    
    this._sharedDataService.OnThemeSwitch.subscribe( value => {
      this.isDarkThemeActive = value;
    });
  }

  ngOnInit(){
  }

  ngAfterViewInit() {
  }

} // End of class:AppComponent 