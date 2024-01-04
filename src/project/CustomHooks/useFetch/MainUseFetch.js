import React from 'react';

import UseFetch from "./UseFetch"
import Spinner from "../../../assets/Spinner.gif"

const MainUseFetch = () => {
    let URL = "https://jsonplaceholder.typicode.com/posts"
    const { posts, isPending, error } = UseFetch(URL)
    return (
        <>
            {isPending && (
                <div className='text-center'>
                    <h2 dir='ltr'>Pending...!</h2>
                    <img src={Spinner} alt="loading" />
                </div>
            )}
            {error && <div>{error}</div>}
            {
                posts && posts.map(post => (
                    <div key={post.id} className='text-center' dir='ltr'>
                        <p>{post.id}-{post.title}</p>
                        <hr />
                    </div>

                ))
            }

        </>
    );
}
export default MainUseFetch;
