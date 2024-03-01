import './App.css';
import { HiMiniChatBubbleBottomCenter } from "react-icons/hi2";
import * as React from 'react';
import Modal from '@mui/material/Modal';



function App() {
  const [open, setOpen] = React.useState(false);
  const [text, setText] =  React.useState("");
  const [insert, setInsert] = React.useState(false);
  const handleClose = () => setOpen(false);

  const handleModel = () => (
    setOpen(true)
  ) 
  const handleText = (e) => (
    setText(e.target.value)
  )
  const handleGenerate = () => {
    setInsert(true)
  }
  const handleInsert = () => {
    setOpen(false);
    setText("Thank you for the opportunity! If you have any more questions or if there's anything else i can help you with, feel free to ask")
  }

  return (
    <div className="App">
     <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='model-container'
      >
       <div className='model'>
        {insert && <><div className='first-msg'>{text}</div>
        <div className='container-second-msg'><div className='second-msg'>Thank you for the opportunity! If you have any more questions or if there's anything else i can help you with, feel free to ask</div></div></>}
      <input placeholder='Your Prompt' className='prompt' onChange={handleText} /><br/>
      <div className='button-container'>
      <button className='generate' onClick={handleGenerate}>Generate</button>
      {insert && <button className='insert generate' onClick={handleInsert}>Insert</button>}
      </div>
       </div>
      </Modal>
      </div>
      <div className="message-body">
       <textarea placeholder="Write Text Message" type="text"className='message' value={open ? '' : text}/>
       
       <div >
       <HiMiniChatBubbleBottomCenter className='icon1' onClick={handleModel}/>
       </div>
      </div>
    </div>
  );
}

export default App;
