function CardMain(){
    return(
        <>
            <div className="relative w-full h-2/12 px-3 mx-auto mt-7">
                <div className="relative">
                    <div className="w-full h-80 bg-orange-200 rounded-xl"></div>
                    <div className="absolute bottom-1 px-1 rounded-md right-1 bg-black text-white">1:35</div>
                </div>
                <div className="relative mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="p-5 rounded-full bg-black"></div>
                            <div className="ml-3">
                                <p>Test critical thinking skills with a Critical Thinking test</p>
                                <p className="text-sm">12 STAR TV</p>
                                <p className="text-sm">6.4K views - {Date.now()}</p>
                            </div>
                        </div>
                        <div className="hidden">
                            <i className="fa fa-ellipsis-v p-3 px-4 rounded-full text-balck"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CardMain;