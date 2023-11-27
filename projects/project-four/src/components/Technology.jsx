import React from "react";
const  Technology= ({img, name, title, like, likes, facebook, profile, date }) => {
    return (
        <div className=" ">
           <img src={img} alt="" />
        <h3 >{title}</h3>
        <div className="flex">
            <img src={profile} alt="" />
            <div>{name}</div>
            <div>{date}</div>
        </div>
        <div className="flex gap-x-28">
            <div className="flex">
                <img src={like} alt="" />
                <div>{likes}</div>
            </div>
           <button className="bg-blue-700 flex gap-x-1 text-white rounded-sm items-stretch pe-0.5  "> 
            <img src={facebook} alt="" />
            share
           </button>
        </div>
        </div>
    )
}

export default Technology ;