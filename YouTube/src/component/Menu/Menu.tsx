import logo from "./../../assets/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I (1).jpg";
import {useState} from "react";
import stud from "./../../assets/youtube-studio-9449620-7683473.png";
import Ykids from "./../../assets/youtube-kids-icon-72.jpg";
import ymusic from "./../../assets/communityIcon_hrwddlmhxak41.jpg";

function Menu(){
    const [count, setCount] = useState(0);
    // setCount(count => count + 1);
    return(
        <>
            <div className="relative w-64 px-2 pb-20 bg-white h-screen overflow-hidden overflow-x-hidden hidden" id="menu-bck">
                <div className="flex items-center">
                    <i className="fa fa-bars cursor-pointer p-4 rounded-full"></i>
                    <img src={logo} alt="" className="w-5/12"/>
                </div>
                <div className="overflow-y-scroll overflow-x-hidden h-full mb-8 pr-2">
                    <div className="border-b-2 pb-3">
                    <div className="relative p-1 rounded-xl cursor-pointer hover:bg-slate-200 bg-slate-100 transition">
                        <i className="fa fa-home p-3 rounded-full"></i>
                        <span className="text-md">Home</span>
                    </div>
                    <div className="relative p-1 rounded-xl cursor-pointer hover:bg-slate-100 transition">
                        <i className="fa fa-home p-3 rounded-full"></i>
                        <span className="text-md">Short</span>
                    </div>
                    <div className="relative p-1 rounded-xl cursor-pointer hover:bg-slate-100 transition">
                        <i className="fa fa-home p-3 rounded-full"></i>
                        <span className="text-md">Subscriptions</span>
                    </div>
                    </div>
                    <div className="border-b-2 pb-3 pt-3">
                    <div className="flex items-center relative">
                        <span className="font-bold mr-4 ml-4 py-2">You</span>
                        <i className="fa fa-angle-right -ml-2"></i>
                    </div>
                    <div className="relative p-1 rounded-xl cursor-pointer hover:bg-slate-100 transition">
                        <i className="fa fa-home p-3 rounded-full"></i>
                        <span className="text-md">Your channel</span>
                    </div>
                    <div className="relative p-1 rounded-xl cursor-pointer hover:bg-slate-100 transition">
                        <i className="fa fa-home p-3 rounded-full"></i>
                        <span className="text-md">History</span>
                    </div>
                    <div className="relative p-1 rounded-xl cursor-pointer hover:bg-slate-100 transition">
                        <i className="fa fa-home p-3 rounded-full"></i>
                        <span className="text-md">Your videos</span>
                    </div>
                    <div className="relative p-1 rounded-xl cursor-pointer hover:bg-slate-100 transition">
                        <i className="fa fa-home p-3 rounded-full"></i>
                        <span className="text-md">Watch Later</span>
                    </div>
                    <div className="relative p-1 rounded-xl cursor-pointer hover:bg-slate-100 transition">
                        <i className="fa fa-angle-down p-3 rounded-full"></i>
                        <span className="text-md ml-2 rounded-full">Show more</span>
                    </div>
                    </div>
                    <div className="border-b-2 pb-3 pt-3 border-b-2">
                    <div className="flex items-center">
                        <span className="font-bold mr-4 ml-4 py-2">Subscription</span>
                    </div>
                    <div className="relative mt-2">
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <div id="sub-img" className="p-4 bg-black rounded-full ml-4 mr-2"></div>
                            <span className="text-md ml-2">FirstName LastName</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <div id="sub-img" className="p-4 bg-black rounded-full ml-4 mr-2"></div>
                            <span className="text-md ml-2">FirstName LastName</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <div id="sub-img" className="p-4 bg-black rounded-full ml-4 mr-2"></div>
                            <span className="text-md ml-2">FirstName LastName</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <div id="sub-img" className="p-4 bg-black rounded-full ml-4 mr-2"></div>
                            <span className="text-md ml-2">FirstName LastName</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <div id="sub-img" className="p-4 bg-black rounded-full ml-4 mr-2"></div>
                            <span className="text-md ml-2">FirstName LastName</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <div id="sub-img" className="p-4 bg-black rounded-full ml-4 mr-2"></div>
                            <span className="text-md ml-2">FirstName LastName</span>
                        </div>
                    </div>
                    <div className="relative rounded-xl flex items-center pb-3 pt-3">
                        <i className="fa fa-angle-down ml-7 mr-7"></i>
                        <span className="text-md -ml-1">Show {count} more</span>
                    </div>
                    </div>
                    <div className="border-b-2 pb-3 pt-3 border-b-2">
                        <div className="flex items-center">
                            <span className="font-bold mr-4 ml-4 py-2">Explore</span>
                        </div>
                        <div className="relative mt-2 ml-4">
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <i className="fa fa- p-4 rounded-full bg-black ml-1"></i>
                            <span className="text-md ml-4">Trending</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <i className="fa fa- p-4 rounded-full bg-black ml-1"></i>
                            <span className="text-md ml-4">Music</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <i className="fa fa- p-4 rounded-full bg-black ml-1"></i>
                            <span className="text-md ml-4">Gaming</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <i className="fa fa- p-4 rounded-full bg-black ml-1"></i>
                            <span className="text-md ml-4">News</span>
                        </div>
                        <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                            <i className="fa fa- p-4 rounded-full bg-black ml-1"></i>
                            <span className="text-md ml-4">Sport</span>
                        </div>
                        </div>
                    </div>
                    <div className="border-b-2 pb-3 pt-3 border-b-2">
                    <div className="relative mt-2 ml-4">
                            <div className="flex items-center">
                                <span className="font-bold mr-4 ml-2 py-2">More from YouTube</span>
                            </div>
                            <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                                <img src="https://www.youtube.com/s/desktop/6ee70b2c/img/favicon_48x48.png" alt="" className="w-2/12"/>
                                <span className="text-md ml-4">YouTube Premium</span>
                            </div>
                            <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                                <img src={stud} alt="" className="w-2/12"/>
                                <span className="text-md ml-4">YouTube Studio</span>
                            </div>
                            <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                                <img src={ymusic} alt="" className="w-2/12" />
                                <span className="text-md ml-4">YouTube Music</span>
                            </div>
                            <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                                <img src={Ykids} alt="" className="w-2/12"/>
                                <span className="text-md ml-4">YouTube Kids</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-b-2 pb-3 pt-3 border-b-2">
                        <div className="relative mt-2 ml-4">
                            <div className="flex items-center">
                                <span className="font-bold mr-4 ml-2 py-2">More from YouTube</span>
                            </div>
                            <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                                <i className="fa fa-cog"></i>
                                <span className="text-md ml-4">Settings</span>
                            </div>
                            <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                                <i className="fa fa-flag"></i>
                                <span className="text-md ml-4">Report history</span>
                            </div>
                            <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                                <i className="fa fa-question-circle"></i>
                                <span className="text-md ml-4">Help</span>
                            </div>
                            <div className="relative flex items-center rounded-xl hover:bg-slate-100 pb-3 pt-3 cursor-pointer">
                                <i className=""></i>
                                <span className="text-md ml-4">Send feedback</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 ml-4">
                        <a href="" hrefLang="" className="px-2 pl-0">About</a>
                        <a href="" hrefLang="" className="px-2">Press</a>
                        <a href="" hrefLang="" className="px-2">Copyright</a>
                        <a href="" hrefLang="" className="px-2">Contact us</a>
                        <a href="" hrefLang="" className="px-2">Creator</a>
                        <a href="" hrefLang="" className="px-2">Advertise</a>
                        <a href="" hrefLang="" className="px-2">Developers</a>
                    </div>
                    <div className="mt-4 ml-4">
                        <a href="" hrefLang="" className="px-2 pl-0">Terms</a>
                        <a href="" hrefLang="" className="px-2">Privacy</a>
                        <a href="" hrefLang="" className="px-2">Policy & Safety</a>
                        <a href="" hrefLang="" className="px-2">How YouTube works</a>
                        <a href="" hrefLang="" className="px-2">Test new features</a>
                    </div>
                    <div className="flex items-center ml-4 justif mt-4">
                        <i className="fa fa-copyright"></i>
                        <p>2023 Google LLC</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;