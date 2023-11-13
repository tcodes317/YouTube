import Card from "./../Card/Card";
import CardMain from "./../Card/CardMain";

function Main(){
    return(
        <>
            <div className="relative">
                <div>
                    <Card />
                </div>
                <div className="block">
                    <CardMain />
                    <CardMain />
                    <CardMain />
                    <CardMain />
                    <CardMain />
                    <CardMain />
                </div>
            </div>
        </>
    )
}
export default Main;