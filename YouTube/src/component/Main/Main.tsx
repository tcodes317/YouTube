import Card from "./../Card/Card";
import CardMain from "./../Card/CardMain";
import Short from "./../Short/Short";

function Main(){
    return(
        <>
            <div className="relative">
                <div className=""> {/** return back  */}
                    <div>
                        <Card />
                    </div>
                    <div className="block">
                        <CardMain />
                    </div>
                </div>
                <div className="relative mt-10 mx-4">
                    <Short />
                </div>
                <div className="block">
                    <CardMain />
                </div>
                <div className="block">
                    <CardMain />
                </div>
                <div className="block">
                    <CardMain />
                </div>
                <div className="block">
                    <CardMain />
                </div>
            </div>
        </>
    )
}
export default Main;