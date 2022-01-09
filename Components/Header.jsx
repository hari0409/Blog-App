import React,{useState,useEffect} from 'react';
import Link from "next/link";
import {getCategories} from "../services";


function Header() {
    const [cat, setCat] = useState([]);
    useEffect(() => {
        getCategories().then((c)=>setCat(c));
    }, []);
    const catc=cat.sort(()=>0.5-Math.random());
    const cat_copy=catc.slice(0,3);
    return (
        <div className="container mx-auto px-10 mb-8">
            <div className="border-b w-full inline-block border-blue-400 py-8">
                <div className="md:float-left block">
                    <Link href="/">
                        <span className="cursor-pointer font-bold text-4xl text-white">
                            Blog
                        </span>
                    </Link>
                </div>
                <div className="hidden md:float-left md:contents">
                    {cat_copy.map((c)=>(
                        <Link key={c.slug} href={`/category/${c.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                                {c.name}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
