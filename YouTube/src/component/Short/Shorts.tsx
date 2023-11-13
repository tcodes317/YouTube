function Shorts(){
    return(
        <>
            <div className="relative">
                <div className="">
                    <div className="relative">
                        <div className="w-full h-96 rounded-xl bg-black text-white"></div>
                    </div>
                    <div className="flex mt-4 mb-2 justify-between">
                        <div className="relative">
                            <p>#FirstName #LastName</p>
                            <p className="truncate">#Name #Name</p>
                            <p>27M views</p>
                        </div>
                        <div className="relative">
                            <i className="fa fa-ellipsis-v p-3 px-4 rounded-full"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Shorts;