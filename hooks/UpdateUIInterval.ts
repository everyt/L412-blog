import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { UIState } from '../states/UIState';

const UpdateUIInterval = () => {
  const [uiState, setUIState] = useRecoilState(UIState);

  useEffect(() => {
    // Function to update the UI state
    const updateUI = () => {
      setUIState({
        x: window.innerWidth,
        y: window.innerHeight,
        scrollTop: document.body.scrollTop,
      });
      console.log(uiState);
    };
    const intervalId = setInterval(updateUI, 100);
    return () => clearInterval(intervalId);
  }, [setUIState]);

  return uiState;
};

export default UpdateUIInterval;