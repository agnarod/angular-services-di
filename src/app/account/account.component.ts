import { Component, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { LogginService } from '../login.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LogginService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private loggingService: LogginService, private accountService: AccountService) { }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
