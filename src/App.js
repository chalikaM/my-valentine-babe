import './App.css';
import {useState} from "react";
import 'react-bootstrap'
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Anee baboo...",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a Biriyani on top",
      "What about a Pizza",
      "PLEASE Babaa..",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "please babe",
      ":((((",
      "Baba PLEASE",
      "Anee baba..",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
      <div className="-mt-16 flex h-screen flex-col items-center justify-center">
        {yesPressed ? (
            <>
              <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
              <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you Baba! ;))</div>
            </>
        ) : (
            <>
              <img
                  className="h-[200px]"
                  src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
              />
              <h1 className="my-4 text-4xl">Will you be my Valentine Baba?</h1>
              <div className="flex items-center">
                <Button variant="success"
                    style={{ fontSize: yesButtonSize }}
                    onClick={() => setYesPressed(true)}
                >
                  Yes
                </Button>
                <Button variant="danger"
                    onClick={handleNoClick}
                >
                  {noCount === 0 ? "No" : getNoButtonText()}
                </Button>
              </div>
            </>
        )}
      </div>
  );
}

export default App;
