import React, {useContext} from 'react';
import { UserContext } from '../../components/store';
import classes from './about.module.scss';

function AboutPage() {
    const { user } = useContext(UserContext);
    console.log(classes, '==============context value')
    return (
        <><h1 className={classes.tag}>This is AboutPage page</h1>
        </>
    )
}

AboutPage.getInitialProps = async ({query}) => {
    console.log('===========in AboutPage.js');
      return {};
};

export default AboutPage