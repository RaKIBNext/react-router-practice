import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
    const {id, title, body}=props.post;
    let history=useHistory();
    const showComment=id=>{
        const url=`post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h3>Id:<strong>{id}</strong> {title}</h3>
            <p>{body}</p>
            <button onClick={()=> showComment(id)}>Show Comments</button>
        </div>
    );
};

export default Posts;