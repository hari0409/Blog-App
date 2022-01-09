import React,{useState,useEffect} from 'react';
import Link from "next/link";
import {getCategories} from "../services";

function Categories() {
    const [cat, setCat] = useState([]);
    useEffect(() => {
        getCategories().then((c)=>setCat(c));
    }, []);
    return (
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8 ">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">
                Categories
            </h3>
            {cat.map((c)=>(
                <Link href={`/category/${c.slug}`} key={c.slug}>
                    <span className="cursor-pointer block pb-3 mb-3">
                        {c.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}
export default Categories;