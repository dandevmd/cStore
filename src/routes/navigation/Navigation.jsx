import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { signOutAuthUser } from '../../database/firebase.config'

import UserContext from '../../contexts/UserContext'
import DropdownContext from '../../contexts/DropdownContext';

import CardIcon from '../../components/card-icon/CardIcon';
import CardDropdown from '../../components/card-dropdown/CardDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx';



const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isOpen } = useContext(DropdownContext)


    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/' >
                    <Logo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop' >SHOP</NavLink>
                    {currentUser ? (
                        <NavLink
                        as='span'
                            onClick={signOutAuthUser}
                        >
                            SIGN OUT
                        </NavLink>)
                        : (<NavLink to='/auth'>SIGN IN </NavLink>
                        )}
                    <CardIcon />
                </NavLinksContainer>
                {isOpen && <CardDropdown/> }
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation