export default function Header() {
    return (
        <div className="flex justify-between m-10 ms-12">
            <div className="container w-[572px] h-[39px] px-[25px] rounded-[20px] border border-neutral-300 justify-between items-center inline-flex">
        <form action="">
            <input  className="  outline-none " type="text" placeholder="Хайх" name="" />
        </form>
        <button   type="submit"> <img src="img/Search.png" alt="" /></button>
            </div>
            <div className=" gap-x-3.5">
                 <button></button>
                <div className="w-[149px] h-[41px] px-[30px] py-2.5 bg-white rounded-[10px] border border-zinc-200 justify-center items-center inline-flex">
                    <a   className="text-amber-600 text-base font-semibold font-['Inter'] leading-[21px] text-sm">Бүртгүүлэх</a>
                </div> 
                <div className="w-[122px] h-[41px] px-[30px] py-2.5 bg-amber-600 rounded-[10px] justify-center items-center inline-flex">
                    <div className="text-white text-[15px] font-medium font-['Inter'] leading-[21px] text-sm">Нэвтрэх</div>
                </div>

            </div>
        </div>


    )
}

