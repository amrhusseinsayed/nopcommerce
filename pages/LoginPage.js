import { Selector, t } from "testcafe";
import CommonTemplate from "./CommonTemplate";
import Homepage from "./Homepage";

export default class LoginPage extends CommonTemplate {
    constructor() {
        super();
        this.email = Selector("#Email");
        this.password = Selector("#Password");
        this.loginBtn = Selector(".login-button");
    }

    /**
     *
     * @param user {Object}
     * @returns {Promise<LoginPage>}
     */
    async fillLoginForm(user) {
        await t.typeText(this.email, user.email, { replace: true })
            .typeText(this.password, user.password, { replace: true })
            .click(this.loginBtn);

        return this;
    }

    async verifySuccessfulLogin() {
        await this.verifySuccessfulLoginOrRegistration();
        return new Homepage();
    }
}