import { useCurrentUser } from '../../contexts/user.js';
import { Button } from '../button/component.jsx';
import { SIZES } from "../../constants/sizes.js"

export const UserButtons = () => {
 const {user, login, logout} = useCurrentUser()
 

 const isAuthorized = !!user
 return(
    <div>
        {!!user && <span>{user}</span>}
         <Button onClick={() => {() => (isAuthorized ? logout(): login('Lena'))}} viewVariant='secondary' size={SIZES.l}>
            {isAuthorized ? "logout" : "login"}
         </Button>
    </div>
 )
}