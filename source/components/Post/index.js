// Core
import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

//Instruments
import Styles from './styles.m.css';

export default class Post extends Component {
    static propTypes = {
        currentUserFirstName: PropTypes.string,
        currentUserLastName: PropTypes.string,
        avatar: PropTypes.string,
    }

    render() {
        const {
            currentUserFirstName, 
            currentUserLastName, 
            avatar, 
        } = this.props;

        return (
            <section className = {Styles.post}>
                <img src = { avatar } />
                <a>{ `${ currentUserFirstName } ${ currentUserLastName }` }</a>
                <time>{moment().format('MMMM D h:mm:ss a')}</time>
                <p>Howdy!</p>
            </section>
        );
    }
}
