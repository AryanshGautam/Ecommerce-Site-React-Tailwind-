import React from "react";
import Left from "./Left";
import Rig from "./Rig";


function Profile() {
    return(
        <>
            <div className="flex flex-col lg:flex-row justify-around items-start lg:mt-4 ">
                <Left/>
                {/* <div className="mx-4"></div> */}
                <Rig className="lg:mt-8"/>
            </div>
        </>
    )
}

export default Profile;