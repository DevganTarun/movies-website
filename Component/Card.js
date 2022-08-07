import React from "react";


export default function Card(props) {


  return (
    <>

      <div   className="container p-4 border border-white rounded mt-4 bg-dark ">
            {/* <h4 style={{width : '300px'}} className="text-light m-auto mb-2">{props.textRes}</h4> */}
           <p style={{width : '300px'}} className="text-light m-auto ">Total {props.movies.length} Numbers of results found.</p>
        <div className="row">
        


          {props.movies.map((value) => {
            return (
              <div className="col d-flex m-2">

                <div className="card p-2 bg-dark text-light" style={{width: "18rem"}}>

                  <img src={value.Poster} className="card-img-top" alt="..." />

                  <div className="card-body">

                    <h5 className="card-title">{value.Title}</h5>

                    <p className="card-text">
                     {value.Year}
                    </p>

                  </div>
                  
                </div>
              </div>
            );
          })}



        </div>
      </div>
    </>
  );
}
