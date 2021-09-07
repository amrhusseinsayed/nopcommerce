import LoginPage from "../pages/LoginPage";

const user = new LoginPage();
const data = require("../data/data.json");
const users = data.users;

fixture("Login Fixture")
    .page("https://demo.nopcommerce.com/")
    .beforeEach(async (t) => {
        await t.maximizeWindow();
    });

test.meta({ Priority: "High" })
    ("Login with valid data", async () => {
        const userData = users.user1;

        await (await (await (await (await user.navigateToLoginPage())
            .fillLoginForm(userData))
            .verifySuccessfulLogin())
            .chooseCurrency(userData.currency))
            .logout();
    });
