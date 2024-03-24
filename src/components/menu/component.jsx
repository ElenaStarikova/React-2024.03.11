import { MenuItem } from '../menuItem/component';


export const Menu = ({menu}) => {
    console.log(menu)
    return (
        <ul>
            {menu.map((menuItem) => (
                <li>
                    <MenuItem menuItem = {menuItem} />
                </li>                
            ))}
        </ul>
    )
};