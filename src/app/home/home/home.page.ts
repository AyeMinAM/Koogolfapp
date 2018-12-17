import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service'


@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(private accountService: AccountService) { }

    ngOnInit() {
    }


    hello(){
        this.accountService.testMethod();
    }

}
