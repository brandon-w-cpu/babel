//represents a request for a new password 
import IAuthentication from "./IAuthentication"; 
import LoginAuthentication from "./LoginAuthentication"
import Match from "./Match"
import MyAccount from "./MyAccount"
import MyFile from "./MyFile"
import PlagiarismDetector from "./PlagiarismDetector"
import Program from "./Program"
import Region from "./Region"
import RegisterAuthentication from "./RegisterAuthentication"
class PasswordResetAuthentication implements IAuthentication {
    authenticate(a :MyAccount):Boolean{
        return false; 
    }
    
    getAuthenticator() {
        return this; 
    }

    isLogin() :boolean {
        return false; 
    }

    isRegister() :boolean {
        return false; 
    }

    isReset() :boolean {
        return true; 
    }

    equals(other :IAuthentication) :boolean {
        return other.isReset()

    } 
}

export default PasswordResetAuthentication