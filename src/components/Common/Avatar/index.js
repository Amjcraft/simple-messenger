import React from 'react';
import './Avatar.scss';


function Avatar({name, profileImage}) {

    const avatar = () => {
        if(profileImage) {
            return <img className="c-avatar c-avatar__img" src={profileImage} alt="Avatar"></img>
        }
        return <span className="c-avatar c-avatar__text">{ name.split('')[0]} </span>;
    }

    return (
        <span className="c-avatar">
            { avatar() }
        </span>
    );
}

export default Avatar;


