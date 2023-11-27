import { cards, lifestyle } from "../data/data";
import LifestyleCard from "./LifestyleCard";
import Technology from "./technology";

export default function Main() {
    const lifestyles = lifestyle.map((card)=>{
        return (
            <LifestyleCard 
              img={card.img}
              title={card.title}
              profile={card.profile}
              name={card.name}
              date={card.date}
              like={card.like}
              likes={card.likes}
              facebook={card.facebook} 
              />
              
        );
    });

   

    return ( 
        <div className=" h-[80%] bg-slate-300  flex ">
        LIFESTYLE
            {lifestyles}
            {/* <img src="../public/img/Image.png" alt="" /> */}
        </div>
    );
}