import React from "react";
import "./styles.css"

export const Bot = ({myClick}) => { 

    return (
        <div className="nova">
            <button className="main" onClick={myClick}> Adicionar</button>
          <div className="main2">        
          </div>
        </div>
    )
}

export default Bot
