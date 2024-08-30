import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

const IframeWrapper = ({ children, ...props }) => {
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframeDocument = iframeRef.current.contentDocument;
    iframeDocument.open();
    iframeDocument.write('<!DOCTYPE html><html><head></head><body><div id="root"></div></body></html>');
    iframeDocument.close();

    ReactDOM.render(children, iframeDocument.getElementById('root'));
  }, [children]);

  return <iframe {...props} ref={iframeRef} />;
};

export default IframeWrapper;
