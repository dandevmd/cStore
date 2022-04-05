import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { signOutAuthUser } from '../../database/firebase.config'

import UserContext from '../../contexts/UserContext'
import DropdownContext from '../../contexts/DropdownContext';

import CardIcon from '../../components/card-icon/CardIcon';
import CardDropdown from '../../components/card-dropdown/CardDropdown';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './navigation.styles.scss';



const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isOpen } = useContext(DropdownContext)


    return (
        <>
            <div className='navigation'>
                <Link to='/' className='logo-container'>
                    <Logo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    <Link to='/shop' className='nav-link'>SHOP</Link>
                    {currentUser ? (
                        <span
                            onClick={signOutAuthUser}
                            className='nav-link'
                        >
                            SIGN OUT
                        </span>)
                        : (<Link to='/auth' className='nav-link'>SIGN IN </Link>
                        )}
                    <CardIcon />
                </div>
                {isOpen && <CardDropdown/> }
            </div>
            <Outlet />
        </>
    )
}

export default Navigation