import logo from "./../../assets/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I (1).jpg";
import {useState} from "react";

function Menu(){
    const [count, setCount] = useState(0);
    setCount(count => count + 1);
    return(
        <>
            <div className="relative" id="menu-bck">
                <div className="flex items-center">
                    <i className="fa fa-bars"></i>
                    <img src={logo} alt="" />
                </div>
                <div className="overflow-y-scroll border-b-2">
                    <div className="relative">
                        <i className="fa fa-home"></i>
                        <span className="text-md">Home</span>
                    </div>
                    <div className="relative">
                        <i className="fa fa-home"></i>
                        <span className="text-md">Short</span>
                    </div>
                    <div className="relative">
                        <i className="fa fa-home"></i>
                        <span className="text-md">Subscriptions</span>
                    </div>
                </div>
                <div className="overflow-y-scroll border-b-2">
                    <div className="flex items-center">
                        <span className="font-bold mr-4">You</span>
                        <i className="fa fa-angle-right"></i>
                    </div>
                    <div className="relative">
                        <i className="fa fa-home"></i>
                        <span className="text-md">Your channel</span>
                    </div>
                    <div className="relative">
                        <i className="fa fa-home"></i>
                        <span className="text-md">History</span>
                    </div>
                    <div className="relative">
                        <i className="fa fa-home"></i>
                        <span className="text-md">Your videos</span>
                    </div>
                    <div className="relative">
                        <i className="fa fa-home"></i>
                        <span className="text-md">Watch Later</span>
                    </div>
                    <div className="relative">
                        <i className="fa fa-angle-down"></i>
                        <span className="text-md">Show more</span>
                    </div>
                </div>
                <div className="overflow-y-scroll border-b-2">
                    <div className="flex items-center">
                        <span className="font-bold mr-4">Subscription</span>
                    </div>
                    <div className="relative flex items-center">
                        <div id="sub-img" className=""></div>
                        <span className="text-md"></span>
                    </div>
                    <div className="relative flex items-center">
                        <i className="fa fa-anlge-down"></i>
                        <span className="text-md">Show {count} more</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;