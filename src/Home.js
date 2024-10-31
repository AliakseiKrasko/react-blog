
import BlogList from "./BlogList";
import {useEffect, useState} from "react";

const Home = () => {

    const blog = [
        {
            title: "My First Blog",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "John Doe",
            id: 1
        },
        {
            title: "Second Post",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "Mary Jane",
            id: 2
        },
        {
            title: "Third Post",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "Tom Soyer",
            id: 3
        }
    ]

    const [posts, setPosts] = useState([
        {
            title: "My First Blog",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "John Doe",
            id: 1
        },
        {
            title: "Second Post",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "Mary Jane",
            id: 2
        },
        {
            title: "Third Post",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga nisi cum earum odio assumenda provident laborum quisquam ipsum, eaque accusantium maiores incidunt atque porro dicta dolores ad soluta modi?",
            author: "Tom Soyer",
            id: 3
        }
    ])


    useEffect(() => {
        console.log("useEffect run");

        fetch("http://localhost:8000/post").then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div className="Home">
            <BlogList posts={posts} />
        </div>

    );
};

export default Home;