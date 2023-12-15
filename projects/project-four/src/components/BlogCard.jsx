import React from "react";
const BlogCard = ({ img, name, title, like, likes, facebook, profile, date }) => {
    return (
        <div className="gap-y-5 m-4 h-[288px] w-[230px]">
            <div >
                <img className=" w-52 h-36" src={img} alt="" />
            </div>
            <div className="h-14 w-48 mt-[5px] ">
                <h3 >{title}</h3>
            </div>
            <div className="flex flex-row  my-2.5">
                <img className="w-5 h-5" src={profile} alt="" />
                <div className=" flex text-slate-600">
                    <p className=" h-3.5 w-24 text-sm ">{name}</p>
                    <p className=" text-xs  my-px">{date}</p>
                </div>
            </div>

            <div className="flex gap-x-5 space-x-16 my-2.5 ">
                <div className="flex">
                    <img className="w-5 h-5" src={like} alt="" />
                    <p className="w-5 h-5">{likes}</p>
                </div>
                <button className="bg-blue-700 flex gap-x-1 text-white rounded-md  h-7 w-16   ">
                    <img  className="py-1" src={facebook} alt="" />
                    share
                </button>
            </div>
        </div>
    )
}

export default BlogCard;