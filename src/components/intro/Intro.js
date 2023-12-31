import React, { useState, useEffect } from 'react';
import './Intro.css';
import { useNavigate, Link } from "react-router-dom";


export const Intro = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/game')
        }, 70000)
    }, [])

    return (
        <div className="sw">	
        <div className="sw-intro">
            A long time ago, in a galaxy far, far away...
        </div>

        <div>
            <img className="sw-logo"  src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Star_Wars_Yellow_Logo.svg" alt="Star Wars"/>
        </div>
        <div className="sw-crawl">
            <div className="sw-crawl-episode-title">TIC TAC TOE</div>
            <div className="sw-crawl-episode-text">
                <p>
                    This is a refactored version of a project that was completed in mod 2 at the Turing School of Software and Design.
                </p>
                <p>
                    It is a compilation of react based components, hooks, and chakra-ui library tools.
                </p>		
                <p>
                    Future features will include multiplayer, login, profile customization, and adding friends.
                </p>
                <p>
                    At this point you can only play as Din Djarin "The Mandalorian" or Grogu "Baby Yoda".
                </p>
                <Link>CLICK HERE TO SKIP AND GO TO GAME.</Link>
            </div>
        </div>
    </div>
    )
}