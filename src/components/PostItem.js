import React from "react";

function DataPost({ author, date }) {
    return (
        <div className="DataPost">
            <img src={author.avatar} className="avatar" />
            <div className="datatext"> 
                <span>{author.name}</span>
                <span>{date}</span>
            </div>
        </div>
    )
}

function CommentPost({ comments }) {
    return(
    <div className="CommentPost">
    <div className="divider" />
    { comments.map(comment => (
        <div key={comment.id} className="postComment">
            <img src={comment.author.avatar} className="avatar" />
            <p>
                <span>{comment.author.name}</span> 
                {comment.content}
            </p>
        </div>))}
    </div>
    )
}

function PostItem({ author, date, content, comments }) {
    return (
        <div className="PostItem">
            <DataPost author={author} date={date} />
            <p className="postContent">{content}</p>
            <CommentPost comments={comments} />
        </div>
    )
}

export default PostItem;