
import BlogList from "./BlogList";
import {useEffect, useState} from "react";

const Home = () => {



    const [posts, setPosts] = useState(null)


    useEffect(() => {
        console.log("useEffect run");

        fetch("http://localhost:8000/post").then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            setPosts(data)
        })
    }, [])

    return (
        <div className="home">
            { posts && <BlogList posts={posts} /> }

        </div>

    );
};

export default Home;