import React, { Component} from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import defaultImg from '../images/room-1.jpeg';
import {RoomContext} from '../context';

export default class SingleRoom extends Component{
    constructor(props)
    {
        super(props);
        console.log(this.props);
    }

    componentDidMount()
    {
// console.log("did")
    }
    render()
        {
            return (<div>
            
                hello from single room.
            </div>)
        }
}