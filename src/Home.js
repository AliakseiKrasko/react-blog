
import BlogList from "./BlogList";
import {useEffect, useState} from "react";

const Home = () => {



    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        console.log("useEffect run")

        fetch("http://localhost:8000/post").then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            setPosts(data)
            setIsLoading(false)
        })
    }, [])

    return (
        <div className="home">
            {isLoading && <h3>Loading...</h3>}
            { posts && <BlogList posts={posts} /> }
        </div>

    );
};

export default Home;