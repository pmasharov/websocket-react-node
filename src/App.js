import React, {useEffect} from 'react';
import './App.css';
import Form from './components/Form';

function App() {

    const ws = new WebSocket('ws://localhost:8080')
    useEffect(() => {
        ws.onopen = () => console.log('ws connected')
        ws.onmessage = data => console.log(data.data)
    })

    return (
    <div className="App">
      <Form ws={ws}/>
    </div>
  );
}

export default App;
