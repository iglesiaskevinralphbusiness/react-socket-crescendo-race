import React, { useState, useEffect } from 'react';
import { socket } from '../socket';

function Home(){
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {

    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };

  },[]);

  const manualConnect = () => {
    socket.connect();
  }

  const manualDisconnect = () => {
    socket.disconnect();
  }

  return <div>
    <p>State: { '' + isConnected }</p>
    <button onClick={ ()=>manualConnect() }>Connect</button>
    <button onClick={ ()=> manualDisconnect() }>Disconnect</button>
  </div>
}

export default Home;