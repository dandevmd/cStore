import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { signOutAuthUser } from '../../database/firebase.config'
import { selectCurrentUser } from '../../redux/selectors/userSelector';
import { selectIsOpenState } from '../../redux/selectors/cartSelector';

import CardIcon from '../../components/card-icon/CardIcon';
import CardDropdown from '../../components/card-dropdown/CardDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles.jsx';



const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isOpen = useSelector(selectIsOpenState);
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOutAuthUser()
        navigate('/auth')
    }

    return (
        <>
            <NavigationContainer>
                <LogoContainer to='/' >
                    <Logo className='logo' />
                </LogoContainer>
                <NavLinksContainer>
                    <NavLink to='/shop' >SHOP</NavLink>
                    {
                        !currentUser ? (<NavLink to='/auth'>SIGN IN </NavLink>
                        )
                            : (
                                <NavLink
                                    as='span'
                                    onClick={handleSignOut}
                                >
                                    SIGN OUT
                                </NavLink>
                            )

                    }
                    <CardIcon />
                </NavLinksContainer>
                {isOpen && <CardDropdown />}
            </NavigationContainer>
            <Outlet />
        </>
    )
}

export default Navigation