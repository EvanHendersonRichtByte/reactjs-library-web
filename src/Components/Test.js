import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

class Test extends React.Component{

    render(){
        return(
            <div>
                <FontAwesomeIcon icon={faThumbsUp} /> Hello Next.js
  </div>
              )
        
    }

}

export default Test