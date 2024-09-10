const userImageLocator = "span.oxd-userdropdown-tab img"
const logoutLocator = "li a:contains('Logout')"
class TopNavPageObjects{
    getUserImageLocator(){
        return userImageLocator
    }
    getLogoutLocator(){
        return logoutLocator
    }
}
export default TopNavPageObjects