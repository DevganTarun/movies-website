import React , { useState} from 'react'
import axios from 'axios'
import Card from './Component/Card'
import Error from './Component/Error'

export default function App() {
  //I am not creating any component creating this project for single work , But must create component


  //Text of Input area

  const [text, setText] = useState('')
  

  const handleChange= (e) => {
    setText(e.target.value)
  }

   // Axios for getting data from OMDb

   //Movies 

   const [movies, setMovies] = useState([])
 
   
   const searchMov = (e) => {
      axios.get(`https://www.omdbapi.com/?s=${text}&apikey=807a9adf`)
      .then((searched) => {
        setMovies(searched.data.Search) // Data stored
      })
      e.preventDefault();
    }

    //Search Function
    
      const [textRes, setTextRes] = useState('Nothing to Preview')
      const textResult = () => {
        setTextRes('Loading...........')
        if(text.length === 0 ) {
          alert('Write something')
      }
      }

      // No Free space

     

  return (
    <>

    {/* //Create Component for nav always */}

    <nav className='nav bg-dark p-3'>
      <h2  style={{width : "300px"}} className='text text-light mx-auto'> Your MoViesBuddy</h2>
    </nav>
    <nav class="navbar py-3" style={{backgroundColor : "#1b1c1d"}}>
  <div style={{width : "300px"}} class="container-fluid mx-auto">
    <form class="d-flex" onSubmit={searchMov} role="search" >
      <input value={text} class="form-control me-2" onChange={handleChange} type="search" placeholder="Search" aria-label="Search"/>
      <button onClick={textResult} class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

    {  (movies.length === 0)?(<Error textRes={textRes} movies={movies} />) :
       <Card textRes={textRes} movies={movies}/>
    }
    </>
  )
}














