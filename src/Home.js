
import BlogList from "./BlogList";
import {useEffect, useState} from "react";

const Home = () => {



    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log("useEffect run")

        fetch("http://localhost:8000/post").then(res => {
            if (res.ok !== true){
                throw Error("Error fetching post")
            }
            return res.json()
        }).then(data => {
            console.log(data)
            setPosts(data)
            setIsLoading(false)
            setError(null)
        }).catch((err)=>{
            console.log(err.message)
            setError(err.message)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <h3>Loading...</h3>}
            { posts && <BlogList posts={posts} /> }
        </div>

    );
};

export default Home;