import React, { Component } from "react";
import Hero from "../components/Hero";
import StyledHero from "../components/StyledHero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import defaultImg from '../images/room-1.jpeg';
import { RoomContext } from '../context';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);

        this.state = {
            slug: this.props.match.params.id,
            defaultImg
        }
    }

    static contextType = RoomContext;

    componentDidMount() {

    }

    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        if (!room) {
            return <div className="error">
                <h3> no such room could be found</h3>
                <Link to="/rooms" className="btn-primary">Back to rooms</Link>
            </div>
        }

        const { name, description, capacity, size, price, extras, breakfast, pets, images } = room;
        //destruct array, assim ele pega o primeiro item e deixa o resto do array q tinha, dessa forma n repete a imagem
        const [mainImg, ...defaultImg] = images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultImg}>
                    <Banner tittle={`${name} room`}>
                        <Link to='/rooms' className="btn-primary"> Back to rooms</Link>

                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item, index) => {
                            return <img key={index} src={item} alt={name}></img>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3> details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3> Info</h3>
                            <h6>price : ${price}</h6>
                            <h6>size : ${size} SQFT</h6>
                            <h6>Max Capacity : {capacity > 1 ? `${capacity} people` : `${capacity} person`} </h6>
                            <h6> {pets ? "Allowed Pets" : "Not Pets Allowed"} </h6>
                            <h6> {breakfast && "Free breakfast included"} </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>extras</h6>
                    <ul className="extras">
                        {extras.map((item, index) => {
                            return <li key={index}> - {item}</li>
                        })}
                    </ul>
                </section>
            </>);

    }
}