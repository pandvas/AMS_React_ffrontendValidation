import React from 'react'
import UserNavigationMenu from './UserNavigationMenu';
import UserFooter from './UserFooter';
import UserMain from './UserMain';

const UserHome = () => {
    return (
        <div>
            <UserNavigationMenu />
            <UserMain />
            <UserFooter />
        </div>
    )
}

export default UserHome
