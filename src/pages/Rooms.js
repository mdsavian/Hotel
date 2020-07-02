import React from "react";
import Hero from '../components/Hero'
import Banner from "../components/Banner";
import {Link} from "react-router-dom";
import RoomContainer from "../components/RoomContainer";
export default function Rooms()
    {
        return (
        <>
        <Hero hero="roomsHero">
            <Banner tittle="Our Rooms">
                <Link className="btn-primary" to="/">
                    return home
                </Link>
            </Banner>
        </Hero>
        <RoomContainer/>
        </>)
    }