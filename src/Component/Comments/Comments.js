import React from 'react';

const Comments = (props) => {
    const {name, email}=props.comment;
    return (
        <p>
         Name: {name}  <br/>
         Email: {email}
        </p>
    );
};

export default Comments;