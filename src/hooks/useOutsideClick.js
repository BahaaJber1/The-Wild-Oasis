import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturin = true) {
    const ref = useRef();

    useEffect(() => {
        function handleClick(e) {
            if (ref.current && !ref.current.contains(e.target)) handler();
        }

        document.addEventListener("click", handleClick, listenCapturin);
        return () => document.removeEventListener("click", handleClick, listenCapturin);
    }, [handler, listenCapturin]);

    return ref;
}