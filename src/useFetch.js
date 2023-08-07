import { useState, useEffect } from 'react'
import paginate from './paginate';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [followers, setFollowers] = useState([]);
    
    const getFollowers = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setFollowers(paginate(data));
        console.log(followers);
        setLoading(false);
    }

    useEffect(() => {
        getFollowers();
    }, [])



  return {loading,followers}
    
}

