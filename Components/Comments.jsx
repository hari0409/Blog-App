import React,{useState,useEffect} from 'react'
import moment from 'moment'
import parse from "html-react-parser";
import {getComments} from "../services"
function Comments({slug}) {
    const [comments, setComments] = useState([]);
    useEffect(() => {
       getComments(slug).then((res)=>setComments(res))
    },[comments])
    return (
        <>
            {comments.length>0&&(
                <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
                    <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                        {comments.length}{' '}Comments
                    </h3>
                    {comments.map((com)=>(
                        <div className="border-b border-gray-100 mb-4 pb-4" key={com.id}>
                            <p className="mb-4">
                                <span className="">
                                    {com.name}{' '}
                                    on
                                    {" "}
                                    {moment(com.createdAt).format("MMM DD,YYYY")}
                                </span>
                            </p>
                            <p className="whitespace-pre-line text-gray-600 w-full">
                                {parse(com.comment)}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default Comments
