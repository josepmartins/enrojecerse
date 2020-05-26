import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import ResizeObserver from "resize-observer-polyfill";


// suppress useLayoutEffect warning when rendering on the server
// https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
const useIsoLayoutEffect =
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
    ? useLayoutEffect
    : useEffect;

const useFitText = () => {
  const maxFontSize = 500;
  const minFontSize = 10;
  const resolution = 1;

  const initState = useCallback(
    () => ({
      fontSize: maxFontSize,
      fontSizePrev: minFontSize,
      fontSizeMax: maxFontSize,
      fontSizeMin: minFontSize,
    }),
    [maxFontSize, minFontSize],
  );

  const ref = useRef(null);
  const [state, setState] = useState(initState);
  const { fontSize, fontSizeMax, fontSizeMin, fontSizePrev } = state;

  // montior div size changes and recalculate on resize
  let animationFrameId = null;
  const [ro] = useState(
    () =>
      new ResizeObserver(() => {
        animationFrameId = window.requestAnimationFrame(() => {
          setState(initState());
        });
      }),
  );

  useEffect(() => {
    if (ref.current) {
      ro.observe(ref.current);
    }
    return () => {
      animationFrameId && window.cancelAnimationFrame(animationFrameId);
      ro.disconnect();
    };
  }, [animationFrameId, ro]);

  // check overflow and resize font
  useIsoLayoutEffect(() => {
    const isDone = Math.abs(fontSize - fontSizePrev) <= resolution;
    const isOverflow =
      !!ref.current &&
      (ref.current.scrollWidth > ref.current.offsetWidth);
    const isAsc = fontSize > fontSizePrev;

    // return if the font size has been adjusted "enough" (change within `resolution`)
    // reduce font size by one increment if it's overflowing
    if (isDone) {
      if (isOverflow) {
        const fontSizeNew =
          fontSizePrev < fontSize
            ? fontSizePrev
            : fontSize - (fontSizePrev - fontSize);
        setState({
          fontSize: fontSizeNew,
          fontSizeMax,
          fontSizeMin,
          fontSizePrev,
        });
      }
      return;
    }

    // binary search to adjust font size
    let delta;
    let newMax = fontSizeMax;
    let newMin = fontSizeMin;
    if (isOverflow) {
      delta = isAsc ? fontSizePrev - fontSize : fontSizeMin - fontSize;
      newMax = Math.min(fontSizeMax, fontSize);
    } else {
      delta = isAsc ? fontSizeMax - fontSize : fontSizePrev - fontSize;
      newMin = Math.max(fontSizeMin, fontSize);
    }
    setState({
      fontSize: fontSize + delta / 2,
      fontSizeMax: newMax,
      fontSizeMin: newMin,
      fontSizePrev: fontSize,
    });
  }, [fontSize, fontSizeMax, fontSizeMin, fontSizePrev, ref, resolution]);

  return { fontSize: `${fontSize}px`, ref };
};

export default useFitText;
