import React, { Component } from 'react';
import {RoomContext} from '../context';


class FeaturedRooms extends Component {
    static contextType = RoomContext;
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

export default FeaturedRooms
