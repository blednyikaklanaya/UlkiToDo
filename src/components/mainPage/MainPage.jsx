import "./mainPage.css";

import Column from "../column/Сolumn";

function MainPage() {

    return (
        <>
            <div className="container-columns">
                <Column nameColumn={"To do"}/>
                <Column nameColumn={"Doing"}/>
                <Column nameColumn={"Done"}/>
            </div>
        </>
    )
}

export default MainPage