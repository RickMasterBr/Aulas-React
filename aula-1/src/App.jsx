import { useState, useEffect } from 'react'

import './App.css'

function App() {

  //lista json
  const [albuns, setAlbuns] = useState([]);

  try{

  } catch(){
    
  }

  const buscarAlbuns = async () => {
    
    //fazeer requisição
    const response = await fetch('https://jsonplaceholder.typicode.com/albums')
    
    //converter para JSON
    const data = await response.json();
    //atualizar o estado
    setAlbuns(data);



  }
  
  return (
    <>
    
    </>
  )
}

export default App
