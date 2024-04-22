import React, { useState } from 'react'

function UserCard({ userUrl, userName, name, userPost, post, userFollowers, followers }) {

    let [uBtn, setUBtn] = useState(true)
    console.log(uBtn)
    return (
        <div style={{ border: "1px solid", width: "60%", height: "300px", display: "flex", marginLeft: "260px" }}>
            <div style={{ alignContent: 'center', marginLeft: "20px" }}>
                <img src={userUrl} style={{ height: "200px", width: "200px", objectFit: "cover", borderRadius: "50%" }} />
            </div>
            <div style={{ alignContent: "center", marginLeft: "200px" }}>
                <h2>{userName}</h2>
                <p>{name}</p>

                <button style={{ backgroundColor: uBtn ? "green" : "red" }} className='userBtn1' onClick={() => setUBtn(!uBtn)}>{uBtn ? "Follow" : "Following"}</button>
                <div className='maindiv' style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>
                        <h2>{userPost}</h2>
                        <p>{post}</p>
                    </div>
                    <div>
                        <h2>{userFollowers}</h2>
                        <p>{followers}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserCard

{/*

import "./App.css";
import UserCard from "./components/UserCard";
function App() {
  return (
    <div>
    <Title user={"UserName"}/>
    <UserCard userUrl={"https://www.cnet.com/a/img/resize/bc48bbd2f4dbb7f5799eb4bc28bdcf6f19f6f408/hub/2022/05/10/708507de-bb07-4c16-9a94-bbf206a59fd5/avatar.jpg?auto=webp&fit=crop&height=675&width=1200"} userName={"rinku"} userPost={"Posts"} userFollowers={"Followers"}  name={"Rinku 3107"} post={"1001"} followers={"1M"} />
    </div>
  )
}

export default App;


*/}