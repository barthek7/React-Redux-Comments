import React from 'react';

const Comment = ({ text, votes, id, thumbUpComment, thumbDownComment }) => {
    return (
        <li>
        {text} 
        <span> votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)}>Thumb Up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb Down</button>
        </li>
    )
}
export default Comment;
