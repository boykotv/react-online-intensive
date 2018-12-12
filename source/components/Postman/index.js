// Core
import React from 'react';
import { Transition } from 'react-transition-group';
import { fromTo } from 'gsap';

//Components
import { withProfile } from 'components/HOC/withProfile';

//Instruments
import Styles from './styles.m.css';

const Postman = (props) => {

    const _animatePostmanEnter = (postman) => {
        fromTo(
            postman, 
            1, 
            { x: 300 }, 
            { x: 0 },
        );
    }

    const _animatePostmanEntered = (postman) => {
        fromTo(
            postman, 
            1, 
            { x: 0 }, 
            { x: 300 },
        );
    }

    return (
        <Transition
        appear
        in
        onEnter = { _animatePostmanEnter }
        onEntered = { _animatePostmanEntered }
        timeout = { 4000 }>
            <section className = { Styles.postman }>
                <img src = { props.avatar } />
                <span>Welcome online, { props.currentUserFirstName }</span>
            </section>
        </Transition>  
    );
};

export default withProfile(Postman);