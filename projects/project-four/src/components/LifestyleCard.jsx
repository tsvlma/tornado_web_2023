import React from "react";
const LifestyleCard = ({ img, name, title, like, likes, facebook, profile, date }) => {
    return (
        <div className=" flex-col  w-56">
            <img src={img} alt="" />
            <h3 >{title}</h3>
            <div className="flex text-slate-600">
                <img src={profile} alt="" />
                <p>{name}</p>
                <p className="">{date}</p>
            </div>
            <div className="flex gap-x-28">
                <div className="flex">
                    <img src={like} alt="" />
                    <p>{likes}</p>
                </div>
                <button className="bg-blue-700 flex gap-x-1 text-white rounded-md items-stretch pe-0.5  ">
                    <img src={facebook} alt="" />
                    share
                </button>
            </div>
        </div>
    )
}

export default LifestyleCard;