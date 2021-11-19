import React from 'react';
import Navbar from './navbar';
import LoginForm from './LoginForm';


export default class Homepage extends React.Component {
    render () {
        return (
            <div className='container'>
                <Navbar />
                <LoginForm />
            </div>
    );

    }
}