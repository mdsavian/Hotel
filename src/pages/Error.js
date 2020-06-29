import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import {Link} from "react-router-dom";

export default function Error()
    {
        return <Hero>
            <Banner tittle="404" subtittle="page not found">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    }