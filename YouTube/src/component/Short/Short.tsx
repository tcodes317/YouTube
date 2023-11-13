import Shorts from "./Shorts";
import lg from "./../../assets/youtube-shorts.svg";

function Short(){
    return(
        <>
            <div className="relative pb-8">
                <div className="flex items-center mb-4 justify-between">
                    <div className="flex items-center">
                        <img src={lg} alt="" id="shortImg" className="w-1/12"/>
                        <div className="font-bold text-xl">Shorts</div>
                    </div>
                    <button>
                        <i className="fa fa-times text-3xl"></i>
                    </button>
                </div>
                <div className="space-x-4 grid grid-cols-2 justify-self-center">
                    <Shorts />
                    <Shorts />
                </div>
                <div className="mx-auto w-full mt-12 bg-black flex justify-center ">
                    <button className="hover:bg-slate-200 transition absolute p-3 bg-slate-100 text-black text-center bottom-3 rounded-full w-80 mx-auto">
                        <span>Show more</span>
                        <i className="fa fa-angle-down ml-2 relative top-0.5"></i>
                    </button>
                    <hr />
                </div>
            </div>
        </>
    )
}
export default Short;