import RegistrationPage from "../pages/RegistrationPage";

const user = new RegistrationPage();
const data = require("../data/data.json");
const users = data.users;
const eyes = require("../utils/common").eyes;

fixture("Registration Fixture")
    .page("https://demo.nopcommerce.com/")
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    })
    .afterEach(async () => eyes.close())
    .after(async () => {
        await eyes.waitForResults(true);
    });

test.meta({ Priority: "High" })
    ("User1 Registration with valid data", async (t) => {
        const userData = users.user1;

        await eyes.open({
            t,
            appName: 'NopCommerce App',
            testName: 'User Registration With Valid Data',
        });

        await (await (await (await (await (await user.navigateToRegistrationPage())
            .registerWithValidData(userData))
            .verifySuccessfulRegistration())
            .continueToHomepage())
            .chooseCurrency(userData.currency))
            .logout();
    });