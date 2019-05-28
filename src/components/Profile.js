import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User
                src="https://i.pinimg.com/736x/f8/a1/db/f8a1db3ff13d591102fede56be70610e--cool-men-hairstyles-full-beard.jpg"
                alt="men"
                name="some_cool_men"/>

                <Palette/>
        </div>
    )
}

export default Profile;