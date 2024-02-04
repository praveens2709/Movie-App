import React, { useEffect, useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function App() {

  let [movieList,setMovieList]=useState([])
  let [page,setPage]=useState(1)
  let [title,setTitle]=useState('')

  let getMovieData=()=>{
    let apiUrl;
    if(title===''){
      apiUrl=`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=${page}`
    }
    else{
      apiUrl=`https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&query=${title}`
    }
    axios.get(apiUrl)
    .then((res)=>res.data)
    .then((finalData)=>{
      setMovieList(finalData.results)
    })
  }

  let movieItem=movieList.map((v,i)=>{
    return(
      <MovieCard v={v} key={i}/>
    )
  })

  useEffect(()=>{
    getMovieData()
  },[title])

  let paging=()=>{
    if(page>=1){
      setPage(page+1)
    }
    window.scrollTo(0,0)
  }
  useEffect(()=>{
    getMovieData()
  },[page])

  return (
    <>
    <div className='container-fluid'>
      <div className='container'>
        <div className='row mt-4'>
          <div className='col-lg-8 header d-flex mb-3'>
            <h2 className='m-0'>DISCOVER</h2>
            <h6 className='mb-0 position-relative'>MOVIES</h6>
          </div>
          <div className='col-lg-4'>
            <div className='search-box shadow-lg'>
              <input className="search-text" onChange={(event)=>setTitle(event.target.value)} type="text" placeholder="Search for a movie..."/>
                <a href="#" className="search-btn">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='search-icon'/>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='container-fluid p-5'>
      <div className='container px-lg-5 py-lg-3'>
        <div className='row gy-4'>
          { movieList.length>1 ?
            movieItem
            :
            ""
          }
        </div>
        <div className='d-flex align-items-center justify-content-center mt-4'>
          <button className='loadmore-btn text-center border-0' onClick={()=>paging()}>
            <span>LOAD MORE</span>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

function MovieCard({v}){
  return(
    <div className='col-md-6 col-lg-4 col-xl-3'>
      <Link to={'/movie'}>
        <div className='item d-flex flex-column position-relative'>
          <img src={'https://image.tmdb.org/t/p/w1280'+v.poster_path} alt='' className='image'/>
          <div className='item-inner d-flex flex-column align-items-center justify-content-between'>
            <h2 className='item-title text-center mb-2'>{v.original_title}</h2>
            <span className='rating'>
              <FontAwesomeIcon icon="fa-solid fa-star" /> {v.vote_average}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}