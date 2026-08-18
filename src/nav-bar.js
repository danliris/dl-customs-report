import { inject, computedFrom } from 'aurelia-framework';
import { AuthService } from "aurelia-authentication";

@inject(AuthService)
export class NavBar {
    constructor(authService) {
        this.authService = authService;
    }

    @computedFrom('authService.authenticated')
    get isAuthenticated() {
        if (this.authService.authenticated) {
            this.authService.getMe()
                .then((result) => {
                    this.me = result.data;
                    var expiredDateTime = new Date(this.me.expiredDateTime);
                    if (!expiredDateTime) {
                        return;
                    }else {
                        var now = new Date();
                        console.log(expiredDateTime);
                        console.log(now);
                        if (expiredDateTime < now) {
                            this.logout();
                        }
                    }
                })
        }
        else {
            this.me = null;
        }

        return this.authService.authenticated;
    }

    logout() {
        this.authService.logout("#/login");
    }
}
