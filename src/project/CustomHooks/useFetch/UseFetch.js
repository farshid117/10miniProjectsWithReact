import { useState, useEffect } from "react";

const UseFetch = (URL) => {
    const [posts ,setPosts ] = useState(null);
    const [isPending , setIsPending ] = useState(true);
    const [error , setError] = useState(null);

useEffect(() => {
   setTimeout(() => {
       fetch(URL)
           .then(response => response.json())
           .then(datas => {
               console.log(datas)
               setPosts(datas)
               setIsPending(false)
               setError(null)
           }).catch(error => {
               console.log(error)
               setError(error)
               setIsPending(false)
           })
   }, 2000)
}, [URL]);

    return {posts, isPending, error}
}

export default UseFetch;
