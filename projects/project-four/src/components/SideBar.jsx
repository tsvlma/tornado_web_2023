
export default function SideBar() {
    return (
        <div className="w-64 h-screen bg-slate-200 ps-12 pt-10 " >
            <h1 className="flex text-orange-500">
                <img src="img/Group.png" alt="" />
                iblog
            </h1>
            <div>
            <p className="flex ">
                Lifestyle
            <img className="shrink-0" src="img/Frame.png" alt="" />
            </p>
            <p>Hobby</p>
            <p>Travel</p>
            <p>Food&Beverage</p>
            </div>
        </div>
    );
}