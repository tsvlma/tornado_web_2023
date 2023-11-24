export default function Header() {
    return (
        // <div className="w-full h-28 bg-white items-center  flex absolute">
        //     <input className="border border-inherit rounded-t-2xl max-w-xl" type="text"  placeholder="хайх" />
        //    <img src="img/Search.png" alt="" />
        //    <div className="gap-x-3">
        //    <button className="border border-inherit  text-orange-500 rounded-t-xl ">Бүртгүүлэх</button>
        //    <button className="border text-white bg-orange-500 rounded-t-xl" >Нэвтрэх</button>
        //    </div>
        // </div>
        <div className="flex justify-between">
            <div class="w-[572px] h-[39px] px-[25px] rounded-[20px] border border-neutral-300 justify-between items-center inline-flex">
                <div class="w-[39px] h-4 text-zinc-500 text-base font-normal font-['Inter']">Хайх</div>
                <div class="w-5 h-5 justify-center items-center flex">
                    <div class="w-5 h-5 relative">
                        <img src="img/Search.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div class="w-[149px] h-[41px] px-[30px] py-2.5 bg-white rounded-[10px] border border-zinc-200 justify-center items-center gap-2.5 inline-flex">
                    <div class="text-amber-600 text-base font-semibold font-['Inter'] leading-[21px]">Бүртгүүлэх</div>
                </div>
                <div class="w-[122px] h-[41px] px-[30px] py-2.5 bg-amber-600 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                    <div class="text-white text-[15px] font-medium font-['Inter'] leading-[21px]">Нэвтрэх</div>
                </div>

            </div>
        </div>


    )
}