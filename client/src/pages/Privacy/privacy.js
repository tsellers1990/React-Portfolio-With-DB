import React from "react"
import PrivacyPolicy from "./privacyQD.js"
import "./Privacy.css"

var Policy = () => {
  return(
    <div className="privwrapper">
      <div dangerouslySetInnerHTML={{ __html: PrivacyPolicy }} className="document"></div>
    </div>
  )
}


export default Policy