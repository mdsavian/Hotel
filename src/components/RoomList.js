import React from 'react';
import Room from './Room';

function RoomList({ rooms }) {
    if (rooms.length == 0) {
        return <div className="empty-search">
            <h3> unfortunately no rooms matched your search parameters </h3>
        </div>
    }

    return (
    <section className="roomslist">
        
    </section>
    )
}

export default RoomList;
