import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        await axios.post("http://localhost:4000/posts", {
            title
        });

        setTitle('')
    }

    console.log("PostCreate")

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className="form-control" />
                </div>
                <button className="btn btn-primary">Post</button>
            </form>
        </div>
    )
}
export default PostCreate;