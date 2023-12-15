import BlogCard from "./BlogCard"


const CardsContainer = ({ title, children }) => {

    return (
        <div  className="ps-16 ps-16">
            <div>{title}</div>
            <div className="flex ">
            {children.map((card) => {
                return <BlogCard
                    img={card.img}
                    title={card.title}
                    profile={card.profile}
                    name={card.name}
                    date={card.date}
                    like={card.like}
                    likes={card.likes}
                    facebook={card.facebook}
                />
            })}
            </div>
            
        </div>
    )
}

export default CardsContainer