import Shorts from "./Shorts";

function Short(){
    return(
        <>
            <div className="relative border-b-2">
                <div className="flex items-center justify-between">
                    <div>
                        <img src="" alt="" />
                        <div className="font-bold">Shorts</div>
                    </div>
                    <button>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
                <div className="grid">
                    <Shorts />
                    <Shorts />
                </div>
                <button className="absolute">
                    <span>Show more <i className="fa fa-angle-down"></i></span>
                </button>
            </div>
        </>
    )
}
export default Short;