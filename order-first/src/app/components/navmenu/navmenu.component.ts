import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.scss']
})
export class NavmenuComponent implements OnInit {
  loggedIn:boolean = false
  constructor(private dataService:DataService) { 
    
  }

  ngOnInit(): void {
    this.loggedIn = this.dataService.getLogStatus()
  }

  ngDoCheck() {
    this.loggedIn = this.dataService.getLogStatus()
  }

  onLogOut() {
    this.dataService.logIn(false)
  }
}
