import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { Logging } from '../loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [Logging]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: Logging,
              private accountService: AccountsService) {
                
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    console.log('A server status changed, new status: ' + accountStatus);

    /* even though this works, this is not the way how to use a service
       do not create an instances(Angular provides a better way)
       const service = new Logging()
       service.logStatusChange(accountStatus)
    */
    this.loggingService.logStatusChange(accountStatus)
    this.accountService.addAccount(accountName, accountStatus)
  }
}
