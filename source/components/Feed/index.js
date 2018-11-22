// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';

//Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    static propTypes = {
        currentUserFirstName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }

    render() {
        const {
            currentUserFirstName,  
            avatar, 
        } = this.props;
        return (
                <section className = { Styles.feed }>
                    <StatusBar { ...this.props } />
                    <Composer 
                        avatar = { avatar }
                        currentUserFirstName = { currentUserFirstName }    
                    />
                    <Post { ...this.props} />
                </section>            
        );
    }
}
