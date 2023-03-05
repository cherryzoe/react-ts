import * as React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import './style.css';
import { useOutsideClick } from './hooks/useOutsideClick';

export default function App() {
  const boxRef = React.useRef();
  useOutsideClick(boxRef, () => toast('toast content'));

  return (
    <div>
      <Toaster />
      <div className="container">
        <div className="inside" ref={boxRef}>
          <h1 className="text">Hello StackBlitz!</h1>
        </div>
      </div>
    </div>
  );
}
