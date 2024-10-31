import useFetch from "./useFetch";
import BlogList from "./BlogList";
import {useEffect, useState} from "react";

const Home = () => {

    const {data, isLoading, error} = useFetch("http://localhost:8000/post");

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isLoading && <h3>Loading...</h3>}
            { data && <BlogList posts={data} /> }
        </div>

    );
};

export default Home;