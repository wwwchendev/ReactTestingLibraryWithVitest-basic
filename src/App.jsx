
import { useState } from 'react';
import './App.css'

function App() {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [btnColor, setBtnColor] = useState('medium-violet-red');
  const nextColor = btnColor === 'midnight-blue' ? 'medium-violet-red' : 'midnight-blue';
  const colorLabels = {
    'red': '紅色',
    'blue': '藍色',
    'medium-violet-red': '紫紅色',
    'midnight-blue': '午夜藍色'
  };

  return (
    <div>
      <button
        className={btnColor}
        onClick={() => { setBtnColor(nextColor) }}
        disabled={btnDisabled}
      >
        變成{colorLabels[nextColor]}
      </button>
      <br />
      <input
        type="checkbox"
        id="disabled-button-checkbox"
        defaultChecked={btnDisabled}
        onChange={() => { setBtnDisabled(prevState => !prevState) }}
      />
      <label htmlFor="disabled-button-checkbox">禁用按鈕</label>
      {JSON.stringify(btnDisabled ? 'true' : 'false')}
    </div>
  );
}

export default App;