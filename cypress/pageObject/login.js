import LoginPageLocators from "../pages/loginPageLocators";
import GenericActions from "../utilities/genericActions";
import WebText from '../ui/webText';
import Decryption from "../utilities/decryption";
import WebTextBox from '../ui/webTextBox';
import WebButton from "../ui/webButton";
import WebXpath from "../ui/webXpath";
import Url from '../urls/url.json'

const generic = new GenericActions();
const login = new LoginPageLocators();
const webText = new WebText();
const decode = new Decryption();
const webTextBox = new WebTextBox();
const webButton = new WebButton();
const webXpath = new WebXpath();

class LoginPage {


    visit(page) {
        generic.visit(Url[page]);
    }

    checkVisibilityOfHeading(heading) {
        webText.verifyExactText(login.getHeading(), heading)
    }

    checkVisibilityOfSubHeading(subheading) {
        webText.verifyExactText(login.getSubHeading(), subheading)
    }

    typeEmailOnEmailInputField(email) {
        let decodedEmail = decode.getDecodedString(email);
        webTextBox.typeText(login.getEmailField(), decodedEmail)
    }

    typePasswordOnPasswordInputField(password) {
        let decodedPassword = decode.getDecodedString(password);
        webTextBox.typeText(login.getPasswordField(), decodedPassword)
    }

    checkRememberMeCheckbox() {
        webButton.check(login.getRememberMeCheckBox())
    }

    clickButtonByVisibleText(string) {
        webXpath.clickByXpath("visibleText", string)
    }

    checkUrlContainsText(url) {
        generic.wait(3000);
        generic.checkUrl(url);
    }

    checkMessageVisibility(string) {
        webXpath.shouldContainTextByXpath("visibleText", string)
    }

    iloginWithUserCredentials(user) {

        generic.visit();
        let decodedEmail = decode.getDecodedString(`${user}_email`);
        webTextBox.typeText(login.getEmailField(), decodedEmail);
        let decodedPassword = decode.getDecodedString(`${user}_password`);
        webTextBox.typeText(login.getPasswordField(), decodedPassword);
        webButton.check(login.getRememberMeCheckBox());
        webXpath.clickByXpath("visibleText", "Log in")
    }
}

export default LoginPage;