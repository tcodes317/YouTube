import Card from "./../Card/Card";
import CardMain from "./../Card/CardMain";
import Short from "./../Short/Short";

function Main(){
    return(
        <>
            <div className="relative">
                <div className="ssm:grid ssm:grid-cols-2"> {/** return back  */}
                    <div>
                        <Card />
                    </div>
                    <div className="block ssm:bottom-7 ssm:relative ">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-0 ssm:relative hidden ssm:block">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-0 ssm:relative hidden ssm:block">
                        <CardMain />
                    </div>
                </div>
                <div className="relative mt-10 mx-4">
                    <Short />
                </div>
                <div className="ssm:grid ssm:grid-cols-2"> {/** return back  */}
                    <div className="block ssm:bottom-7 ssm:relative">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-7 ssm:relative ">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-0 ssm:relative hidden ssm:block">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-0 ssm:relative hidden ssm:block">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-0 ssm:relative hidden ssm:block">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-0 ssm:relative hidden ssm:block">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-0 ssm:relative hidden ssm:block">
                        <CardMain />
                    </div>
                    <div className="block ssm:bottom-0 ssm:relative hidden ssm:block">
                        <CardMain />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main;