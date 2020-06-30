import React, { Component } from 'react'
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {

    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
    };

    render() {
        return (
            <RoomContext.Provider value={{...this.state}}>
                {this.props.children}
            </RoomContext.Provider>

        )
    }
}

componentDidMount()
{
    let rooms = this.formatData(items)    
}

formatData(items)
{
    let tempItems = items.map(item=> {
        let id = item.sys.id.
    })
}
const RoomConsumer = RoomContext.Consumer;


export {RoomProvider, RoomConsumer, RoomContext};

