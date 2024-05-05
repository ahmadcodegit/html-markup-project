import './index.css';
import { useState } from 'react';
import Marked from 'react-markdown';

function App() {
  const [txt, setTxt] = useState('');

  const handleChangeEditor = (e) => {
    setTxt(e.target.value);
  };
  return (
    <div>
      <div id="Con">
        <div id="conHeader">
          <h1>Editor</h1>
        </div>
        <textarea
          value={txt}
          id="editor"
          onChange={handleChangeEditor}
        ></textarea>
      </div>
      <br />
      <div id="Con">
        <div id="conHeader">
          <h1>Preview</h1>
        </div>
        <Marked>{txt}</Marked>
      </div>
    </div>
  );
}

export default App;
