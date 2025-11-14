import React, { useState } from 'react'
import SingleComment from './SingleComment'
import { dataForComments as comments } from '../../utils/mockData'
import { repliesMock as replies } from '../../utils/mockData'
const obj = {
    "kind": "youtube#commentThread",
    "etag": "a9vSXj7LrpLJoZqnMChetTvoQAQ",
    "id": "UgzUHRWBlp1_vxP9w6p4AaABAg",
    "snippet": {
      "channelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
      "videoId": "9M_QK4stCJU",
      "topLevelComment": {
        "kind": "youtube#comment",
        "etag": "-PG4pmxcscuZ3ekzrekKS_jvcG4",
        "id": "UgzUHRWBlp1_vxP9w6p4AaABAg",
        "snippet": {
          "channelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
          "videoId": "9M_QK4stCJU",
          "textDisplay": "To help correct your overconfidence we have a tabletop game launching. Back the game now on kickstarter! - <a href=\"https://ve42.co/ocpc\">https://ve42.co/ocpc</a>",
          "textOriginal": "To help correct your overconfidence we have a tabletop game launching. Back the game now on kickstarter! - https://ve42.co/ocpc",
          "authorDisplayName": "@veritasium",
          "authorProfileImageUrl": "https://yt3.ggpht.com/7vCbvtCqtjQ3YLgsJt7Y952MQV1sBvhllSCSxHP8_sVZdcPCBrITfhkN2RdyCuwPnsByq-1GoA=s48-c-k-c0x00ffffff-no-rj",
          "authorChannelUrl": "http://www.youtube.com/@veritasium",
          "authorChannelId": {
            "value": "UCHnyfMqiRRG1u-2MsSQLbXA"
          },
          "canRate": true,
          "viewerRating": "none",
          "likeCount": 657,
          "publishedAt": "2025-11-12T22:54:40Z",
          "updatedAt": "2025-11-12T23:33:30Z"
        }
      },
      "canReply": true,
      "totalReplyCount": 88,
      "isPublic": true
    },
    "replies": {
      "comments": [
        {
          "kind": "youtube#comment",
          "etag": "JncmpDcIfQtVch5ZB3ZtJKezbZw",
          "id": "UgzUHRWBlp1_vxP9w6p4AaABAg.APRq0BH70iKAPRtTZgPT3Z",
          "snippet": {
            "channelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
            "videoId": "9M_QK4stCJU",
            "textDisplay": "Hi",
            "textOriginal": "Hi",
            "parentId": "UgzUHRWBlp1_vxP9w6p4AaABAg",
            "authorDisplayName": "@AsherNichols-s9g",
            "authorProfileImageUrl": "https://yt3.ggpht.com/DX69gOnfe3oapl8bvu-zDF0WIX_ME3bAAnTUfqmn4RuCBfp3WPHzBcIN2sde19oYoPYjSEEP=s48-c-k-c0x00ffffff-no-rj",
            "authorChannelUrl": "http://www.youtube.com/@AsherNichols-s9g",
            "authorChannelId": {
              "value": "UClQnKZxeKqh79fPk6jWtS1w"
            },
            "canRate": true,
            "viewerRating": "none",
            "likeCount": 6,
            "publishedAt": "2025-11-12T23:24:54Z",
            "updatedAt": "2025-11-12T23:24:54Z"
          }
        },
        {
          "kind": "youtube#comment",
          "etag": "ZJSziQQ3uW05RpsR9Vf233NNkAA",
          "id": "UgzUHRWBlp1_vxP9w6p4AaABAg.APRq0BH70iKAPRtUoq15wb",
          "snippet": {
            "channelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
            "videoId": "9M_QK4stCJU",
            "textDisplay": "Hallo",
            "textOriginal": "Hallo",
            "parentId": "UgzUHRWBlp1_vxP9w6p4AaABAg",
            "authorDisplayName": "@Username101-----x",
            "authorProfileImageUrl": "https://yt3.ggpht.com/j6IPF8xpwIMnqHywvIcJAoAk4WHDVB03DY4VB-3LGsCuP0IGzTDA330hC_ZiBSoNSmZDGTZLo_Y=s48-c-k-c0x00ffffff-no-rj",
            "authorChannelUrl": "http://www.youtube.com/@Username101-----x",
            "authorChannelId": {
              "value": "UCd23fjSY2fjfr6pwIffUJnA"
            },
            "canRate": true,
            "viewerRating": "none",
            "likeCount": 0,
            "publishedAt": "2025-11-12T23:25:04Z",
            "updatedAt": "2025-11-12T23:25:04Z"
          }
        },
        {
          "kind": "youtube#comment",
          "etag": "R5mHwz4erTxhjQ4gijky--0z8D4",
          "id": "UgzUHRWBlp1_vxP9w6p4AaABAg.APRq0BH70iKAPRtYTbDtuc",
          "snippet": {
            "channelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
            "videoId": "9M_QK4stCJU",
            "textDisplay": "Thanks",
            "textOriginal": "Thanks",
            "parentId": "UgzUHRWBlp1_vxP9w6p4AaABAg",
            "authorDisplayName": "@0xnCubed",
            "authorProfileImageUrl": "https://yt3.ggpht.com/Jl3hLbnOa9VxCCDkboQbccylNKj7TdktcVslJ1SVo9-aYeWbDjdry-MP5Cp1EP_j0goXjl29c9Q=s48-c-k-c0x00ffffff-no-rj",
            "authorChannelUrl": "http://www.youtube.com/@0xnCubed",
            "authorChannelId": {
              "value": "UCViTI9Zhf1PTT9bYnwENSgQ"
            },
            "canRate": true,
            "viewerRating": "none",
            "likeCount": 0,
            "publishedAt": "2025-11-12T23:25:34Z",
            "updatedAt": "2025-11-12T23:25:34Z"
          }
        },
        {
          "kind": "youtube#comment",
          "etag": "ky9e-kpdJYsNev8c5ukiMcNSmto",
          "id": "UgzUHRWBlp1_vxP9w6p4AaABAg.APRq0BH70iKAPRtfkttUWY",
          "snippet": {
            "channelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
            "videoId": "9M_QK4stCJU",
            "textDisplay": "errmm",
            "textOriginal": "errmm",
            "parentId": "UgzUHRWBlp1_vxP9w6p4AaABAg",
            "authorDisplayName": "@maruftim",
            "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kCPd4fw2zu-OlWOwpsSUWiEcnZw-wwUMLaQTyVO50s3sI=s48-c-k-c0x00ffffff-no-rj",
            "authorChannelUrl": "http://www.youtube.com/@maruftim",
            "authorChannelId": {
              "value": "UCNW4uCcEgiWtYgvF1MGpe9g"
            },
            "canRate": true,
            "viewerRating": "none",
            "likeCount": 0,
            "publishedAt": "2025-11-12T23:26:42Z",
            "updatedAt": "2025-11-12T23:26:42Z"
          }
        },
        {
          "kind": "youtube#comment",
          "etag": "EPUeKmgvkin6Q_mmFAvGSIsnsaw",
          "id": "UgzUHRWBlp1_vxP9w6p4AaABAg.APRq0BH70iKAPRtirFdlUY",
          "snippet": {
            "channelId": "UCHnyfMqiRRG1u-2MsSQLbXA",
            "videoId": "9M_QK4stCJU",
            "textDisplay": "How did bro comment on his own video before it was out?",
            "textOriginal": "How did bro comment on his own video before it was out?",
            "parentId": "UgzUHRWBlp1_vxP9w6p4AaABAg",
            "authorDisplayName": "@RyanMc-vo2yc",
            "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lXNBnVor2T5FVc9Go-w378cXn6JmX-YLkW1G6mVZyFzwgLjg01XTaBOrjvCuKmfuRq9g=s48-c-k-c0x00ffffff-no-rj",
            "authorChannelUrl": "http://www.youtube.com/@RyanMc-vo2yc",
            "authorChannelId": {
              "value": "UC_INrzpmc4IAaDlBd0yG6sw"
            },
            "canRate": true,
            "viewerRating": "none",
            "likeCount": 2,
            "publishedAt": "2025-11-12T23:27:07Z",
            "updatedAt": "2025-11-12T23:27:07Z"
          }
        }
      ]
    }
  }


const Comments = () => {
    const items = comments.items;
    // const [visible, setVisible] = useState(items[0].id);
    const [visible, setVisible] = useState(false);
    const [commentId, setCommentId] = useState("124");
  return (
    <div>
        <h1 className='my-5 text-3xl border-b-2'>this is comments section</h1>

        {items.map((comment)=> {
            // console.log(comment.replies)
            return (
                <div key={comment.id}>
            <SingleComment key={comment.id} data={comment.snippet.topLevelComment.snippet} visible={visible} setVisible={setVisible} id={comment.id} setCommentId={setCommentId}/>
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