//represents a request to register a new account 
import MyAccount from "./MyAccount"
import IAuthentication from "./IAuthentication"
class RegisterAuthentication implements IAuthentication {
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
        return other.isRegister()

    } 
}

export default RegisterAuthentication