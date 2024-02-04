import React from 'react'
import './Movie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Movie() {
    return (
        <>
            <div class="content">
                <div class="inner-container">
                    <div class="item-container single">
                        <div class="overview">
                            <div class="movie-container">
                                <div class="movie-inner">
                                    <div class="movie-content">
                                        <div class="movie-poster">
                                            <img class="movie-img" src="https://image.tmdb.org/t/p/w370_and_h556_bestv2/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg"/>
                                        </div>
                                        <div class="movie-data">
                                            <div class="movie-info">
                                                <div class="movie-head">
                                                    <h1 class="movie-title">Killers of the Flower Moon</h1>
                                                    <h1 class="movie-tagline">Greed is an animal that hungers for blood.</h1>
                                                </div>
                                                <div class="movie-subdata">
                                                    <div class="movie-left">
                                                        <p class="movie-stars">
                                                            <FontAwesomeIcon icon="fa-solid fa-star"/>  7.617</p>
                                                    </div>
                                                    <div class="movie-right">2023 / 206 min</div>
                                                </div>
                                                <h3 class="movie-fields">The Genres</h3>
                                                <div class="movie-tags">
                                                    <span class="movie-taxonomy">Crime, Drama, History</span>
                                                </div>
                                                <h3 class="movie-fields">The Synopsis</h3>
                                                <p class="movie-description">When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.</p>
                                            </div>
                                            <h3 class="movie-fields">The Actors</h3>
                                            <div class="movie-tags">
                                                <a class="movie-taxonomy">Leonardo DiCaprio</a>
                                                <a class="movie-taxonomy"> Lily Gladstone</a>
                                                <a class="movie-taxonomy">Robert De Niro</a>
                                                <a class="movie-taxonomy">Jesse Plemons</a>
                                            </div>
                                            <div class="exit">
                                                <FontAwesomeIcon icon="fa-solid fa-circle-left" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
