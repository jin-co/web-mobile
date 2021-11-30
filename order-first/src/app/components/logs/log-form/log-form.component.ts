import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { Owner } from 'src/app/models/owner';
import { DataOwnerService } from 'src/app/services/data-owner.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {
  owners!:Owner[]
  owner:Owner = {
    email: '',
    password: ''
  }
  loggedIn:boolean = false

  constructor(
    private ownerService:DataOwnerService,
    private dataService:DataService,
    private router:Router
    ) { 
    this.owners = ownerService.getOwners()
  }

  ngOnInit(): void {
    this.loggedIn = this.dataService.getLogStatus()
    if (this.loggedIn) {
      this.router.navigate(['/restaurant'])
    }
  }

  ngDocheck() {
    this.router.navigate(['/restaurant'])
  }

  onSubmit() {
    this.loggedIn = this.ownerService.validateOwner(this.owner.email, this.owner.password)
    this.dataService.logIn(this.ownerService.validateOwner(this.owner.email, this.owner.password)) 
    if (this.loggedIn) {
      this.router.navigate(['/restaurant'])
    }
  }
}
