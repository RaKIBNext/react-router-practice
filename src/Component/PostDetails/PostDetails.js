import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {id}=useParams();
    const [post, setPost]=useState({});
    const [comments, setComments]=useState([]);
    useEffect( () =>{
const url=`https://jsonplaceholder.typicode.com/posts/${id}`;
fetch(url)
.then(res => res.json())
.then( data => setPost(data))
    }, []);

    useEffect(() => {
        const url=`https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then( res => res.json())
        .then(data => setComments(data))
    }, [])
    const { title, body, userId}=post;
    return (
        <div>
           <h1>Welcome to your post:{userId}</h1>
           <p>Use posted Id {userId}</p>
           <h4>Title: {title}</h4>
           <p>Post body: {body}</p>
           <p>Comment: {comments.length}</p>
           {
               comments.map(comment => <Comments comment={comment}></Comments>)
           }
        </div>
    );
};

export default PostDetails;