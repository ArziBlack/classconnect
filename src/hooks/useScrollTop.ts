import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = (shouldScroll: boolean) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (shouldScroll) {
      window.scrollTo(0, 0);
    }
  }, [pathname, shouldScroll]);
};

export default useScrollToTop;
