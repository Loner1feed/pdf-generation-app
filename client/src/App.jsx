import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { TinyMCE } from './components/TinyMCE/TinyMCE';

const App = () => {

  
  const {margins} = useSelector(store => store.editor)

  // const editorRef = useRef();
  const [data, setData] = useState('')


  return (
    <div className="App">
      <TinyMCE data={data} setData={setData} />
    </div>
  );
}

export default App;
