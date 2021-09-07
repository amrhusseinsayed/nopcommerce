import { Selector, t } from "testcafe";
import Actions from "../utils/Actions";
import CommonTemplate from "./CommonTemplate";
import RegistrationResultPage from "./RegistrationResultPage";

const eyes = require("../utils/common").eyes;

export default class RegistrationPage extends CommonTemplate {
    constructor() {
        super();
        this.maleOption = Selector("#gender-male");
        this.femaleOption = Selector("#gender-female");
        this.firstName = Selector("#FirstName");
        this.lastName = Selector("#LastName");
        this.birthDay = Selector("[name='DateOfBirthDay']");
        this.birthMonth = Selector("[name='DateOfBirthMonth']");
        this.birthYear = Selector("[name='DateOfBirthYear']");
        this.email = Selector("#Email");
        this.password = Selector("#Password");
        this.confirmPassword = Selector("#ConfirmPassword");
        this.registerBtn = Selector("#register-button");
    }

    async fillRegistrationForm(user) {
        await t.click(this.maleOption)
            .typeText(this.firstName, user.firstName, { replace: true })
            .typeText(this.lastName, user.lastName, { replace: true });

        await (await (await Actions.selectFromList(this.birthDay, user.birthDay))
            .selectFromList(this.birthMonth, user.birthMonth))
            .selectFromList(this.birthYear, user.birthYear);

        await t.typeText(this.email, user.email, { replace: true })
            .typeText(this.password, user.password, { replace: true })
            .typeText(this.confirmPassword, user.confirmPassword, { replace: true })
            .click(this.registerBtn);

        await eyes.checkWindow({
            tag: "Registration Result",
            target: 'window',
            fully: true
        });
    }

    async registerWithValidData(user) {
        await this.fillRegistrationForm(user);
        return new RegistrationResultPage();
    }
}