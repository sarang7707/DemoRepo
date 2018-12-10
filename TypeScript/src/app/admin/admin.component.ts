import { Component, OnInit } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    title = 'Registration Page';
    idleState = 'Not started.';
    timedOut = false;
    lastPing?: Date = null;
    constructor(private idle: Idle, private keepalive: Keepalive, private router: Router) {
        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(300);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(10);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

        idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
        idle.onTimeout.subscribe(() => {
            this.idleState = 'Timed out!';
            this.timedOut = true;
            sessionStorage.clear();
            this.router.navigate(['/login']);
        });
        idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
        idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

        // sets the ping interval to 15 seconds
        keepalive.interval(15);

        keepalive.onPing.subscribe(() => this.lastPing = new Date());

        this.reset();
    }

    ngOnInit() {
    }
    Logout() {
        sessionStorage.clear();
        this.router.navigate(['/login']);
    }
    reset() {
        this.idle.watch();
        this.idleState = '';
        this.timedOut = false;
    }
}
