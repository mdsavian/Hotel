import React from 'react'
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../context';
import Loading from './loading';

function RoomContainer({ context }) {
    const { loading, sortedRooms, rooms } = value;

    if (loading) {
        return <Loading />;
    }

    return (

        <div>
            hello from rooms container
            <RoomFilter rooms={rooms}></RoomFilter>
            <RoomList rooms={sortedRooms}></RoomList>
        </div>
    )
}

export default withRoomConsumer(RoomContainer);