// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Instruments
import Styles from './styles.m.css';

export default class Composer extends Component {
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
            <section className = { Styles.composer }>
                <img src = { avatar } />
                <form>
                    <textarea placeholder = { `What's on your mind, ${ currentUserFirstName }?` } />
                    <input type = 'submit' value = 'Post' />
                </form>
            </section>
        );
    }
}
