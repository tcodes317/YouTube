import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./../../assets/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I (1).jpg";
import Slider from "./../Slider/Slider";
import Menu from "./../Menu/Menu";

function Header(){
    function di(e){
        document.querySelector("#menbk").style="display: block !important";
    }
    return(
        <>
            <div className="relative p-2 fixed">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <div onClick={di}>
                            <i className="fa fa-bars p-4 cursor-pointer hover:bg-slate-200 rounded-full" id="menu"></i>
                        </div>
                        <div className="flex items-center">
                            <img src={logo} alt="" className="w-5/12"/>
                            <sup className="relative -top-3 right-2">NG</sup>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="cursor-pointer transition fa fa-search p-3 hover:bg-slate-200 rounded-full"></i>
                        <i className="cursor-pointer transition fa fa-microphone p-3 hover:bg-slate-200 rounded-full"></i>
                        <i className="cursor-pointer transition fa fa-video p-3 hover:bg-slate-200 rounded-full"></i>
                        <i className="cursor-pointer transition fa fa-bell p-3 hover:bg-slate-200 rounded-full"></i>
                        <div className="relative rounded-full">
                            <span className="px-4 text-white bg-blue-500 rounded-full p-2 bg-slate-200 block">C</span>
                            <div id="c_drop" className="right-0 absolute rounded-xl bg-white border-2 p-2">
                                <div id="c_drop_i" className="flex">
                                    <div id="i">
                                        <span>C</span>
                                    </div>
                                    <div id="ii">
                                        <p>Codes</p>
                                        <p>@codes35</p>
                                        <a href="" hrefLang="en">View your channel</a>
                                    </div>
                                </div>
                                <div id="c_drop_ii" className="pi">
                                    <i className="fab fa-google"></i>
                                    <span>Google account</span>
                                </div>
                                <div id="c_drop_iii" className="pi">
                                    <i className="fab fa-google"></i>
                                    <div className="ml-2 flex items-center justify-between w-full">
                                    <span className="">Switch account</span>
                                    <i className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <span className="">Sign out</span>
                                </div>
                                <hr />
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <span className="">YouTube Studio</span>
                                </div>
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <span className="">Purchases and memberships</span>
                                </div>
                                <hr />
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <span className="">Your Data in YouTube</span>
                                </div>
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <div className="flex items-center justify-between w-full ml-2">
                                        <span className="mr-20">Apperance: Light</span>
                                        <i className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <div className="flex items-center justify-between w-full ml-2">
                                        <span>Language: British English</span>
                                        <i className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <div className="flex items-center justify-between w-full ml-2">
                                        <span>Restricted Mode: Off</span>
                                        <i className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <div className="flex items-center justify-between w-full ml-2">
                                        <span>Location: Nigeria</span>
                                        <i className="fa fa-angle-right"></i>
                                    </div>
                                </div>
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <span>Keyboard shortcuts</span>
                                </div>
                                <hr />
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-cog"></i>
                                    <span>Settings</span>
                                </div>
                                <hr />
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-question-circle"></i>
                                    <span>Help</span>
                                </div>
                                <div id="c_drop_iiv" className="pi">
                                    <i className="fa fa-sign-out"></i>
                                    <span>Send feedback</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Slider />
                </div>
                <div className="fixed top-0 left-0 bg-black w-full" id="menbk">
                    <Menu />
                </div>
            </div>
        </>
    )
}   

export default Header;