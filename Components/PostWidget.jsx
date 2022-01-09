import React,{useState,useEffect} from 'react'
import moment from "moment";
import Link from 'next/link';
import {getRecentPosts,getSimilarPosts} from "../services"

function PostWidget({categories,slug}) {
    const [related , setrelated] = useState([]);
    useEffect(() => {
        if (slug)
        {
            getSimilarPosts(categories,slug).then((result)=>setrelated(result))
        }
        else
        {
            getRecentPosts().then((res)=>setrelated(res))
        }
    }, [slug]);
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                {slug?" Related Post":"Recent Post"}
            </h3>
            {related.map((post)=>
                    <div className="flex items-center w-full mb-4" key={post.title}>
                        <div className="w-16 flex-none">
                            <img alt={post.title} src={post.featuredImage.url} height="60px" width="60px" className="align-middle rounded-full"/>
                        </div>
                        <div className="flex-grow ml-4">
                            <p className="text-gray-500">
                                {moment(post.createdAt).format("MMM DD,YYYY")};
                            </p>
                            <Link href={`/post/${post.slug}`} key={post.title} className="text-md">
                                {post.title}
                            </Link>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default PostWidget
