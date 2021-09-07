import { Selector, t } from "testcafe";
import CommonTemplate from "./CommonTemplate";
import Homepage from "./Homepage";

const eyes = require("../utils/common").eyes;

export default class RegistrationResultPage extends CommonTemplate {
    constructor() {
        super();
        this.result = Selector(".result");
        this.continueBtn = Selector(".register-continue-button");
    }

    async verifySuccessfulRegistration() {
        await t.expect(this.result.innerText)
            .eql("Your registration completed")
            .expect(this.continueBtn.exists)
            .ok("Continue button does not exist in DOM");

        await this.verifySuccessfulLoginOrRegistration();

        return this;
    }

    async continueToHomepage() {
        await t.click(this.continueBtn);

        await eyes.checkWindow({
            tag: "Homepage",
            target: 'window',
            fully: true
        });

        return new Homepage();
    }
}