import React from 'react'
import { Link } from 'react-router-dom'
const ButtonHome = ()=>{
    return(
        <div className="col-md-7 mx-auto d-flex justify-content-center">
              <Link to="/" className="btn btn-info text-uppercase font-weight-bold  mb-3">Back to home</Link>
          </div>
    )
}
export default ButtonHome