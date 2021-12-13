import React ,{ useState } from 'react';
import './App.css';
import { FormControl,Input, IconButton} from '@material-ui/core';
import Message from './Message';
import { useEffect } from 'react';
import db from './firebase';
import { onSnapshot, collection, addDoc,serverTimestamp, orderBy, query } from 'firebase/firestore';
// import firebase from './firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {

  const [input, setInput] = useState("")
  const [message, setMessage] = useState([])
  const [username, setUsername] = useState([])
  const userCollectionRef = collection(db,'messages')

  const sendMessage = async (event) => {
    event.preventDefault()
    await addDoc(userCollectionRef, {
      message: input, 
      username: username,
      timestamp : serverTimestamp()
    })
    // setMessage([...message, {username : username , input : input}]) 
    setInput('')
  }

  useEffect(()=>{
      const q = query(collection(db, 'messages'),orderBy('timestamp','desc'));
      onSnapshot(q,(snapshot)=>{
        setMessage(snapshot.docs.map((doc=>( {id: doc.id ,message : doc.data()}))));
        })
      
  },[])

  useEffect(()=>{
    setUsername(prompt("Please enter you name"))
  },[])


  return (
    <div className="App">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/768px-Facebook_Messenger_logo_2020.svg.png" width="60" alt='logo'/>
      <h1>Messenger App</h1>
      <form className='app__form'>
      <FormControl className='app__formControl'>
        <Input className='app__input' placeholder='Enter a message...' value={input} onChange={event => setInput(event.target.value)}/>
        <IconButton className='app_iconButton' disabled={!input} type='submit' variant='contained' color='primary' onClick={sendMessage}>
          <SendIcon/>
        </IconButton>
      </FormControl>
      </form>  
      <FlipMove>
      {
        message.map(({id ,message}) => (
          <Message key={id} username={username} message={message}/>
        ))
      }
      </FlipMove>

    </div>
  );
}

export default App;
