export default function Header() {
    return (
        <div className="flex justify-between">
            <div className="w-[572px] h-[39px] px-[25px] rounded-[20px] border border-neutral-300 justify-between items-center inline-flex">
                <div className="w-[39px] h-4 text-zinc-500 text-base font-normal font-['Inter']">Хайх</div>
                <div className="w-5 h-5 justify-center items-center flex">
                    <div className="w-5 h-5 relative">
                        <img src="img/Search.png" alt="" />
                    </div>
                </div>
            </div>
            <div>
                <div className="w-[149px] h-[41px] px-[30px] py-2.5 bg-white rounded-[10px] border border-zinc-200 justify-center items-center gap-2.5 inline-flex">
                    <div className="text-amber-600 text-base font-semibold font-['Inter'] leading-[21px]">Бүртгүүлэх</div>
                </div>
                <div className="w-[122px] h-[41px] px-[30px] py-2.5 bg-amber-600 rounded-[10px] justify-center items-center gap-2.5 inline-flex">
                    <div className="text-white text-[15px] font-medium font-['Inter'] leading-[21px]">Нэвтрэх</div>
                </div>

            </div>
        </div>


    )
}