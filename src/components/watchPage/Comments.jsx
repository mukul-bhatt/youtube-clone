import React, { useState, useEffect } from 'react'
import SingleComment from './SingleComment'
import { dataForComments as comments } from '../../utils/mockData'
import { repliesMock as repliesMock } from '../../utils/mockData'
import { useParams } from 'react-router'

const Comments = () => {
    // const items = comments.items;
    const[items, setItems] = useState(comments.items);
    // const [visible, setVisible] = useState(items[0].id);
    const {id: videoID} = useParams();
    // console.log("params in comments:", params);
    const [replies, setReplies] = useState(repliesMock);
    const [visible, setVisible] = useState(false);
    const [commentId, setCommentId] = useState("124");

    useEffect(()=>{
        console.log("commentId changed:", commentId);
        async function fetchReplies() {
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=${commentId}&key=AIzaSyDV5n1LnD0gF6CzFo-R3RUGSXqCyEPdfKo`);
            const json = await data.json();
            // console.log("no.of replies", json.items.length)
            setReplies(json);
        }
        
        fetchReplies();
      
    },[commentId])


    useEffect(()=>{
        async function fetchComments() {
            const data = await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoID}&key=AIzaSyDV5n1LnD0gF6CzFo-R3RUGSXqCyEPdfKo`);
            const json = await data.json();
            // console.log("no.of replies", json.items.length)
            setItems(json.items);
        }

        fetchComments();
    },[])

  return (
    <div>
        <h1 className='my-5 text-3xl border-b-2'>this is comments section</h1>

        {items.map((comment)=> {
            // console.log(comment.replies)
            return (
                <div key={comment.id}>
            <SingleComment key={comment.id} data={comment.snippet.topLevelComment.snippet} visible={visible} setVisible={setVisible} id={comment.id} setCommentId={setCommentId} totalReplyCount={comment.snippet.totalReplyCount}/>
            <div className='ml-7 border-l-2 pl-5'>
            {/* <h2>Replies:</h2> */}
            {visible && commentId===comment.id && replies.items.map((reply) => (
                <SingleComment key={reply.id} data={reply.snippet} visible={visible} setVisible={setVisible} />

            ))}
        </div>
            </div>
            )
               


        })}
        
        

        {/* <div className='ml-7 border-l-2 pl-5'>
{visible && obj.replies.comments.map((reply) => {
    return <SingleComment key={reply.id} data={reply.snippet} />
})}

</div> */}

<br />



        {/* <div>
            <h2>Replies:</h2>
            {replies.items.map((reply) => (
                <div key={reply.id}>
                    <p>{reply.snippet.textOriginal}</p>
                </div>
            ))}
        </div> */}
    </div>
  )
}

export default Comments

// Next Steps:
// 1. Add infinite scroll for comments, both top level and replies
// 2. Optimize API calls to avoid hitting quota limits
// 3. improve data flow and cache the replies for already opened comments