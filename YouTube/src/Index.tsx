import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Menu from "./component/Menu/Menu";

function Index(){
    function clas(e){
        document.querySelector("#menbk").style="display: none";
        e.stopPropagation();
    }
    return(
        <>
            <div className="relative md:bg-black ssm:bg-black">
                <Header />
                <Main />
                <div className="fixed top-0 left-0 bg-black w-full" id="menbk" onClick={clas}>
                    <Menu />
                </div>
            </div>
        </>
    )
}

export default Index;