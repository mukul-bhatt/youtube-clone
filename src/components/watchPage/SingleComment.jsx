import React from 'react'

const SingleComment = ({data, visible, setVisible, id, setCommentId}) => {
   
    // console.log("data",data);
    // console.log("key",id);
    // const [visible, setVisible] = useState(false);
    const {authorDisplayName, likeCount, textOriginal, publishedAt} = data;


  return (
    <div className='border-b border-gray-300 pb-3 flex flex-col mb-5'>
        <div className='flex gap-3 mb-3'>
    <div className="badge badge-md">{authorDisplayName}</div>
    <p className='text-xs'>{publishedAt}</p>
</div>

<div>
    <p className='max-w-1/2 text-sm ml-3.5'>{textOriginal}</p>
</div>


<div>

<button className="btn w-24 btn-ghost btn-sm rounded-full gap-2 normal-case mt-3">
  <p className='text-xs'>{likeCount}</p>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
</button>
<button onClick={() => {
    setVisible(!visible)
    setCommentId(id)
}} className='ml-7 text-blue-600 text-sm mb-3'>Reply</button>
  </div>


    </div>
  )
}

export default SingleComment




// <div className="stat">
// <div className="stat-figure text-secondary">
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 24 24"
//     className="inline-block h-8 w-8 stroke-current"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M13 10V3L4 14h7v7l9-11h-7z"
//     ></path>
//   </svg>
// </div>
// <div className="stat-title">Page Views</div>
// <div className="stat-value text-secondary">2.6M</div>
// <div className="stat-desc">21% more than last month</div>
// </div>

// <div className="stat">
// <div className="stat-figure text-secondary">
//   <div className="avatar avatar-online">
//     <div className="w-16 rounded-full">
//       <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
//     </div>
//   </div>
// </div>
// <div className="stat-value">86%</div>
// <div className="stat-title">Tasks done</div>
// <div className="stat-desc text-secondary">31 tasks remaining</div>
// </div>