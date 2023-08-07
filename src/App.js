import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch'
import Follower from './follower';

const App = () => {
  const { followers, loading } = useFetch();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

 

  useEffect(() => {
    if (loading) return;
    setData(followers[page]);
  }, [loading, page])

  const handlePage = (index) => {
      setPage(index);
  }
  
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = followers.length - 1;
      }
      return prevPage;
    })
    
  }

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > followers.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    })
   
  }

  return (
    <main>
      <h1 className="section-title">{loading ? 'Loading...' : 'Pagination'}</h1>
      <div className="underline"></div>
      <section className="followers">
        <div className="container">
          {data.map((follower) => {
            return <Follower key={follower.id} {...follower}/>
          })}
        </div>
        {!loading && <div className="btn-container">
          <button className="prev-btn" onClick={prevPage}>prev</button>
          {followers.map((follower,index) => {
            return <button key={index} className={`btn-pagination ${index===page ? 'btn-active': null}`} onClick={()=>handlePage(index)}>{index + 1}</button>
          })}
          <button className="next-btn" onClick={nextPage}>next</button>
        </div>}
      </section>      
    </main>
  )
}

export default App
