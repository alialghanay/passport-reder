export default function createWrapperAndAppendToBody(wrapperId : string) {
    if(!document) return null;
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute("id", wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  }