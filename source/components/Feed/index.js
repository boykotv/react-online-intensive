// Core
import React, { Component } from 'react';
import moment from 'moment';

//Components
import { withProfile } from 'components/HOC/withProfile';
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner'; 

//Instruments
import Styles from './styles.m.css';
import {getUniqueID, delay} from 'instruments';

@withProfile
export default class Feed extends Component {
    state = {
        posts: [
            { 
                id: '123', 
                comment: 'Hi!', 
                created: 1526825076849,
                likes: [],
            }, 
            { 
                id: '1234', 
                comment: 'Hiiiiiiiiiiiiiiii!', 
                created: 1526825076855,
                likes: [],
            },
            { 
                id: '12345', 
                comment: 'Hiiiiii!', 
                created: 1526825076855,
                likes: [],
            }
        ],
        isPostFetching: false,
    }

    _setPostsFetchingState = (state) => {
        this.setState({
            isPostFetching: state,
        })
    }

    _createPost = async (comment) => {
        this._setPostsFetchingState(true);

        const post = {
            id:      getUniqueID(),
            created: moment().utc(),
            comment,
            likes:   [],
        };

        await delay(1200);

        this.setState (({ posts }) => ({
            posts: [post, ...posts],
            isPostFetching: false,
        }));
    }

    _likePost = async (id) => {
        const { currentUserFirstName, currentUserLastName } = this.props;
        this._setPostsFetchingState(true);

        await delay(1200);

        const newPosts = this.state.posts.map((post) => {
            if ( post.id === id ) {
                return {
                    ...post,
                    likes: [
                        {
                            id:         getUniqueID(),
                            firstName:  currentUserFirstName,
                            lastName:   currentUserLastName,
                        }
                    ],
                };
            }

            return post;
        });

        this.setState({
            posts: newPosts,
            isPostFetching: false,
        })
    }

    _removePost = async (id) => {
        const { posts } = this.state;
        this._setPostsFetchingState(true);

        await delay(1200);

        const newPosts = posts.filter(post => post.id != id);
        
        this.setState({
            posts: newPosts,
            isPostFetching: false,
        })
    }

    render() {
        const { posts, isPostFetching } = this.state;
        const postsJSX = posts.map((post) => {
            return <Post key = { post.id } { ...post } _likePost = { this._likePost } _removePost = { this._removePost } />;
        });

        return (
                <section className = { Styles.feed }>
                    <Spinner isSpinning = { isPostFetching } />
                    <StatusBar />
                    <Composer _createPost = { this._createPost }/>
                    { postsJSX }
                </section>            
        );
    }
}