
function Card(){
    return(
        <>
            <div className="relative w-full h-2/12 px-3 mx-auto">
                <div className="w-full h-80 bg-orange-200 rounded-xl"> 

                </div>
                <div className="relative mt-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="p-5 rounded-full bg-black"></div>
                            <div className="ml-3">
                                <p>Test critical thinking skills with a Critical Thinking test</p>
                                <p className="text-sm">Sponsored - TestGorilla</p>
                            </div>
                        </div>
                        <div>
                            <i className="fa fa-ellipsis-v p-3 px-4 rounded-full text-balck"></i>
                        </div>
                    </div>
                    <button className="w-full hover:bg-slate-300 transition p-2 mt-3 rounded-full bg-slate-200 text-center">
                        <span>Michael</span>
                        <i className="fa fa-"></i>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Card;