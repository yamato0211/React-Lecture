import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './Components/TodoList';
import axios from "axios"

type ResponseType = {
  message: string
  status: string
}

function App() {
  const [imageUrl, setImageUrl] = useState<ResponseType>()
  useEffect(() => {
    async function getDogImageUrl() {
      const response = await axios.get("https://dog.ceo/api/breeds/image/random") 
      setImageUrl(response.data)
    }
    getDogImageUrl()
  },[])
  return (
    <div className="App">
      <img src={imageUrl?.message} alt=""/>
      <TodoList />
    </div>
  );
}

export default App;
