import React from 'react';

export default props => (
  <div>
    {React.Children.map(props.children, filho => 
      React.cloneElement(filho, { ...props })
    )}
    {/* {props.children} */}
  </div>
);