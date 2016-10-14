import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

import {createContainer} from 'meteor/react-meteor-data';

import React, {Component} from 'react';

import Header from './layout/Header.js';
import Footer from './layout/Footer.js';

import ItemC from './Item/Item.js';
import {ItemData} from '../api/Items.js';

export default class Items extends Component {

    renderTasks() {
        return this.props.items.map((item) => (<ItemC key={item._id} item={item}/>));
    }
    render() {
        return (
            <div>
                <Header/>
                <ul></ul>
                <div className="detail">
                    <ul>
                      {this.renderTasks()}
                    </ul>
                </div>
                    <div>{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}

export default createContainer(() => {
    return {items: ItemData.find({}).fetch()};
}, Items);
