import React from 'react';
import App from 'next/app';
import { UserContext } from '../components/store';

class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        console.log(Component,'in app.js===============')
        return {
            pageProps: Component.getInitialProps ? await Component.getInitialProps(ctx) : {},
            userData: 'vivek'
        }
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <UserContext.Provider value={{ user: this.props.userData, signIn: 'user signed in', signOut: 'user Signed out' }}>
                <Component {...pageProps} />
            </UserContext.Provider>
        )
    }
}

export default MyApp;