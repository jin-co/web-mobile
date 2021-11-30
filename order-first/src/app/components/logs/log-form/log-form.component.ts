import { Component, OnInit, ViewChild } from '@angular/core';
import { Form } from '@angular/forms';
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


  constructor(private ownerService:DataOwnerService,
    private dataService:DataService) { 
    this.owners = ownerService.getOwners()
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.owner.email, this.owner.password)
    this.dataService.logIn(this.ownerService.validateOwner(this.owner.email, this.owner.password)) 
  }
}
