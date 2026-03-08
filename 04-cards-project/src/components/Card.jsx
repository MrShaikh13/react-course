import React from 'react'
import { Bookmark } from "lucide-react";
// company='Amazon' date='5 days ago' work='Senior UI/UX Designer' wokrTime='Part-Time' level='Senior Level' price='$120/hr' from='Mumbai, India'
const Card = (props) => {
  return (
          <div className="card">
        <div className="topcen">
          <div className="top">
            <img src={props.img} />
            <button>
              Save <Bookmark size={12} />
            </button>
          </div>
          <div className="center">
            <h3>
              {props.company} <span>{props.date}</span>
            </h3>
            <h2>{props.work}</h2>
            <div className="tag">
                <h4>{props.warkTime}</h4>
              <h4>{props.level}</h4>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.price}</h3>
            <p>{props.from}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
