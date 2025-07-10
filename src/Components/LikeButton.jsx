import { useState } from "react";
export default function LikeButton(){
    let [isLike,setIsLike]=useState(false);
    let toggleLike=()=>{
        setIsLike(!isLike)
    }
    let styles={color :"red" }
    return (
            <p onClick={toggleLike}>
                {isLike? ( <i className="fa-solid fa-heart" style={styles}></i>)
                 :(<i className="fa-regular fa-heart"></i>
                )}
            </p>
    )
}