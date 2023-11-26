import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { UIState } from '../states/UIState';

const useUpdateUIInterval = () => {
  const [uiState, setUIState] = useRecoilState(UIState);

  useEffect(() => {
    // Function to update the UI state
    const updateUI = () => {
      setUIState({
        x: window.innerWidth,
        y: window.innerHeight,
        scrollY: document.body.scrollTop,
      });
    };
    const intervalId = setInterval(updateUI, 100);
    return () => clearInterval(intervalId);
  }, [setUIState]);

  return uiState;
};

export default useUpdateUIInterval;
