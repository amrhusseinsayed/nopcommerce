import { t } from 'testcafe';

export default class Actions {
    /**
     *
     * @param list {Selector}
     * @param selection {String}
     * @returns {Promise<void>}
     */
    static async selectFromList(list, selection) {
        const listOptions = list.find("option");
        const option = listOptions.withExactText(selection);

        if (!(await option.getAttribute("selected") === "")) {
            await t.expect(option.count).eql(1)
                .click(list).click(option);
        }

        return this;
    }
}