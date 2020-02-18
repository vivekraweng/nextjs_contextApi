import React, {useContext} from 'react';
import { UserContext } from '../components/store';
import Link from 'next/link';

function HomePage() {
    const { user } = useContext(UserContext);
    console.log(user, '==============context value')
    return (
        <>
            <h1>This is Home page</h1>
            <Link href='/about'><a>about</a></Link>
        </>
    )
}

HomePage.getInitialProps = async ({query}) => {
    console.log('===========in index.js');
      return {};
};

export default HomePage