import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import createWrapperAndAppendToBody from './createWrapperAndAppendToBody';

type ClientPortalInterface = {
  children: React.ReactElement;
  wrapperId: string
};

function ReactPortal({ children, wrapperId } : ClientPortalInterface) {
    const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

    useLayoutEffect(() => {
        let element = document.getElementById(wrapperId);
        let systemCreated = false;

        if (!element) {
          systemCreated = true;
          element = createWrapperAndAppendToBody(wrapperId);
        }
        setWrapperElement(element!);
    
        return () => {
          if (systemCreated && element && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
      }, [wrapperId]);

  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
}

export default ReactPortal;
