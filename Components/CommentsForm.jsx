import React,{useState,useEffect,useRef} from 'react'
import {submitComment} from "../services"
function CommentsForm({slug}) {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl=useRef();
  const nameEl=useRef();
  const emailEl=useRef();
  const storeDataEl=useRef();
  useEffect(() => {
    nameEl.current.value=window.localStorage.getItem("name");
    emailEl.current.value=window.localStorage.getItem("email");
  },[]);
  const handleCommentSubmit=()=>{
    setError(false);
    const {value:comment}=commentEl.current;
    const {value:name}=nameEl.current;
    const {value:email}=emailEl.current;
    const {value:storeData}=storeDataEl.current;

    if (!comment||!name||!email)
    {
      setError(true);
      return ;
    }
    const commentObj={name,email,comment,slug};
    if (storeData)
    {
      window.localStorage.setItem("name",name);
      window.localStorage.setItem("email",email);
    }
    else
    {
      window.localStorage.remove("name",name);
      window.localStorage.remove("email",email);
    }
    submitComment(commentObj).then(()=>{
      setShowSuccessMessage(true);
      setTimeout(()=>{
        setShowSuccessMessage(false);
      },3000)
    })
  }
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Reply</h3>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <textarea className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
                  ref={commentEl}
                  placeholder="Comment"
                  name="comment"/>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input type="text" 
               ref={nameEl}
               className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
               placeholder="Name" 
               name="name"/>
        <input type="text" 
               ref={emailEl}
               className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700" 
               placeholder="Email" 
               name="email"/>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input ref={storeDataEl} type="checkbox" id="storeData" name="storeData"/>
          <label className="text-gray-500 cursor-pointer ml-2" htmlFor="storeData">Save username and email for future use.</label>
        </div>
      </div>
      {error&&<p className="text-xs text-red-500">All Fields are required</p>}
      <div className="mt-8">
        <button type="button" 
                onClick={handleCommentSubmit}
                className="transition duration-500 ease hover:bg-indigo-800 inline-block bg-pink-700 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Submit</button>
        {showSuccessMessage&&<span className="text-xl float-right font-semibold mt-3 text-green-500">Comment Submitted</span>}
      </div>
    </div>
  )
}

export default CommentsForm;
