// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//Instruments
import Styles from './styles.m.css';

export default class StatusBar extends Component {
    static propTypes = {
        currentUserFirstName: PropTypes.string.isRequired,
        currentUserLastName: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }

    render() {
        const {
            currentUserFirstName, 
            currentUserLastName, 
            avatar, 
        } = this.props;

        return (
                <section className = { Styles.statusBar } >            
                    <button>
                        <img src = { avatar } />
                        <span>{ currentUserFirstName }</span>
                        &nbsp;
                        <span>{ currentUserLastName }</span>
                    </button>
                </section>
        );
    }
}
