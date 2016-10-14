import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import {ItemData} from '../api/Items.js';

export default class Item extends Component {
    renderUser() {

        let data = ItemData.findOne({_id:new Mongo.ObjectID(this.props.params.itemId)})
        if(data){
            return data.name + '---' + this.props.params.itemId;
        }

    }

    render() {

        return (
            <div>
                <h2>{this.renderUser()}</h2>
            </div>
        );
    }
}


// export default createContainer(() => {
//     //console.log(this.props.params.userId);
//     return {users: UserData.find({}).fetch()};
// }, User);
