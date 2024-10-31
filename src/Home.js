import React from 'react';

const Home = () => {
    return (
        <div className="blog">
            <div className="post-preview">
                <h2>Title</h2>
                <p>author</p>
                <button className="btn-delete">Delete</button>
            </div>

            <div className="post-preview">
                <h2>Title</h2>
                <p>author</p>
                <button className="btn-delete">Delete</button>
            </div>

            <div className="post-preview">
                <h2>Title</h2>
                <p>author</p>
                <button className="btn-delete">Delete</button>
            </div>
        </div>
    );
};

export default Home;