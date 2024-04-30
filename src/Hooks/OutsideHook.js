import { useEffect } from "react";

/**
 * Hook that closes sidebar in mobile view on outside click
 */
export function useSidebarOutsideAlerter(ref, setSidebarState) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && window.innerWidth <= 767) {
        setSidebarState(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
