import React from 'react'

function Avatar(props) {
  return (
    <div>
      <img src={props.url} height={props.height} width={props.width}/>
      <h3>{props.name}</h3>
    </div>
  )
}

export default Avatar

{/* app.js

 import Avatar from "./components/Avatar";
 
<Avatar name={"rahul"} url={"https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"} height={100} width={100} />
    <Avatar name={"rinku"} url={"https://w7.pngwing.com/pngs/99/557/png-transparent-computer-icons-avatar-avatar-angle-heroes-recruiter-thumbnail.png"} height={100} width={100} />
    <Avatar name={"rahul"} url={"https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png"} height={100} width={100} />

   

*/}

