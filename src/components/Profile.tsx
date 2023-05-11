import React from 'react';
import './Profile.css';

const Profile = () => {
    return (
        <div className='content'>
            <div>
                <img
                    src="https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg"
                    alt="img"/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    )
}

export default Profile;