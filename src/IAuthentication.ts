//Represents one of three different types of authentication requests. Each has an authenticate method that it calls to verify 
//the account's credentials as well as do any necessary updates to the login information
import LoginAuthentication from "./LoginAuthentication"
import Match from "./Match"
import MyAccount from "./MyAccount"
import MyFile from "./MyFile"
import PasswordResetAuthentication from "./PasswordResetAuthentication"
import PlagiarismDetector from "./PlagiarismDetector"
import Program from "./Program"
import Region from "./Region"
import RegisterAuthentication from "./RegisterAuthentication"
interface IAuthentication {

    //authenticates based on which type of IAuthentication it is 
    authenticate(a :MyAccount) :Boolean
    //returns itself (dynamic dispatch tool)
    getAuthenticator() :IAuthentication
    //returns true if it is the same type as the other authentication type 
    equals(other :IAuthentication) :boolean
    //returns true if it is a LoginAuthentication
    isLogin(): boolean
    //returns true if it is a RegisterAuthentication
    isRegister(): boolean
    //returns true if it is a ResetPasswordAuthentication 
    isReset(): boolean
}

export default IAuthentication