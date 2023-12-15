import { blogs } from "../data/data";
import CardsContainer from "./CardsContainer";


export default function Main() {

    const cardsContainer = blogs.map((blog) => 
    <CardsContainer title={blog.title} children={blog.children} />);

    return (
        <div className="  ">

            {cardsContainer}

        </div>
    );
}