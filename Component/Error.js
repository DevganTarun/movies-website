import React from 'react'

export default function Error(props) {
  return (
    <div className="container p-4 border border-white rounded mt-4 bg-dark">
          <h4 style={{width : '300px'}} className="text-light m-auto mb-2">{props.textRes}</h4>
         
            {/* <h1 className='text-light'>Bhai Ess Naam ki toh movie nhi hai</h1> */}
        </div>
  )
}

