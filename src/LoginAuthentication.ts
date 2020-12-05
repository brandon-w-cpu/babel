//represents a request to log in to the client's account 
import IAuthentication from "./IAuthentication"; 
import Match from "./Match"
import MyAccount from "./MyAccount"
import MyFile from "./MyFile"
import PasswordResetAuthentication from "./PasswordResetAuthentication"
import PlagiarismDetector from "./PlagiarismDetector"
import Program from "./Program"
import Region from "./Region"
import RegisterAuthentication from "./RegisterAuthentication"

class LoginAuthentication implements IAuthentication {
    authenticate(a :MyAccount):Boolean{
        return false; 
    }
    //same as parent interface
    getAuthenticator() {
        return this; 
    }

    //same as parent interface
    isLogin() :boolean {
        return false; 
    }

    //same as parent interface
    isRegister() :boolean {
        return true; 
    }

    //same as parent interface
    isReset() :boolean {
        return false; 
    }

    //same as parent interface
    equals(other :IAuthentication) :boolean {
        return other.isLogin()

    } 




}

export default LoginAuthentication