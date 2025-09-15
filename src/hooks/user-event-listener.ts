import { useEffect, useRef } from "react";

import { useIsomorphicLayoutEffect } from "./user-isomorphic-layout-effect";

export const useEventListener = (
  eventName: string,
  handler: any,
  element?: any,
  options?: any
) => {
  const savedHandler = useRef(handler);

  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const targetElement = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;

    const listener = (event: any) => {
      savedHandler.current(event);
    };

    targetElement.addEventListener(eventName, listener, options);

    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [element, eventName, options]);
};
