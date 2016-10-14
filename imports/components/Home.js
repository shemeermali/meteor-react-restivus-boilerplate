import React, {Component} from 'react';

import Header from './layout/Header.js';
import Footer from './layout/Footer.js';

export default class Home extends Component {

    render() {

        return (
            <div>
                <Header/>
                    <div>Home</div>
                <Footer/>
            </div>
        );
    }
}
