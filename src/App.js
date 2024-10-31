function App() {
    return (
        <div className="app">
            <nav className="navBar">
                <h1>React Blog</h1>
                <div className="links">
                    <a href="#">Home</a>
                    <a href="#">New post</a>
                </div>
            </nav>
            <main className="main">
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
            </main>
        </div>
    );
}

export default App;
