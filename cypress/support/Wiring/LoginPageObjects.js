const username = "input[name='username']"
const password = "input[name='password']"
const submitButton = "[type='submit']"
class LoginPageObjects{
    getUsername(){
        return username
    }
    getPassword(){
        return password
    }
    getSubmitButton(){
        return submitButton
    }

}
export default LoginPageObjects