import React from 'react'
import Image from "next/image";

function Author({author}) {
    return (
        <div>
            <div className="grid grid-cols-1 divide-y-4 divide-yellow-500">
                <div><h2 className="text-3xl">About the Author</h2></div>
                <div></div>
            </div>
            <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black">
                <div className="absolute left-0 right-0 -top-14">
                    <Image alt={author.name} height="100px" width="100px" src={author.photo.url} className="align-middle rounded-full" unoptimized/>
                </div>
                <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
                <p className="text-white text-lg">{author.bio}</p>
            </div>
        </div>
    )
}

export default Author