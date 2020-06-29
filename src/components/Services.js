import React, { Component } from 'react'
import Tittle from './Tittle';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends Component {
   

    constructor(props) {
        super(props)

        this.state = {
            services: [
                {
                    icon: <FaCocktail />,
                    tittle: "free cocktails",
                    info: "Hotels with cocktails free, enjoy it!"
                },

                {
                    icon: <FaHiking />,
                    tittle: "Endless Hiking",
                    info: "Hotels with cocktails free, enjoy it!"
                },

                {
                    icon: <FaShuttleVan />,
                    tittle: "Free Shuttle",
                    info: "Hotels with cocktails free, enjoy it!"
                },

                {
                    icon: <FaBeer />,
                    tittle: "Strongest Beer",
                    info: "Hotels with cocktails free, enjoy it!"
                },

            ]

        }
    }

    render() {
        return (
            <section className="services">

                <Tittle tittle="Services"></Tittle>
                <div className="services-center">
                    {
                        this.state.services.map((item, index) => {
                            return (
                                <article key={index} className="service">
                                    <span> {item.icon} </span>
                                    <h6> {item.tittle}</h6>
                                    <p>{item.info}</p>
                                </article>
                            );
                        })}

                </div>
            </section>
        );
    }
}

export default Services
