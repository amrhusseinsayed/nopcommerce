import { Selector, t } from "testcafe";
import Actions from "../utils/Actions";

const eyes = require("../utils/common").eyes;

export default class CommonTemplate {
    constructor() {
        this.registerLink = Selector(".ico-register");
        this.loginLink = Selector(".ico-login");
        this.logoutLink = Selector(".ico-logout");
        this.myAccountLink = Selector(".ico-account");
        this.currenciesList = Selector("#customerCurrency");
    }

    async navigateToRegistrationPage() {
        await t.click(this.registerLink);

        await eyes.checkWindow({
            tag: "Registration Page",
            target: 'window',
            fully: true
        });

        return this;
    }

    async navigateToLoginPage() {
        await t.click(this.loginLink);

        await eyes.checkWindow({
            tag: "Login Page",
            target: 'window',
            fully: true
        });

        return this;
    }

    async verifySuccessfulLoginOrRegistration() {
        await eyes.checkWindow({
            tag: "Successful login or registration",
            target: 'window',
            fully: true
        });

        await t.expect(this.logoutLink.exists)
            .ok("Logout button does not exist in DOM")
            .expect(this.loginLink.exists)
            .notOk("Login button exits in the DOM")
            .expect(this.myAccountLink.exists)
            .ok("My Account button does not exists in DOM");
    }

    async logout() {
        await t.click(this.logoutLink);

        await eyes.checkWindow({
            tag: "Successful logout",
            target: 'window',
            fully: true
        });

        await t.expect(this.loginLink.exists)
            .ok("Login button does not exist in the DOM")
            .expect(this.registerLink.exists)
            .ok("Registration button does not exist in the DOM")
            .expect(this.logoutLink.exists)
            .notOk("Logout button exists in DOM");

        return this;
    }

    async chooseCurrency(currency) {
        await Actions.selectFromList(this.currenciesList, currency);

        await eyes.checkWindow({
            tag: "Selected currency as " + currency,
            target: 'window',
            fully: true
        });

        return this;
    }
}