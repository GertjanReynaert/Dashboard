import React, { PropTypes } from 'react';

const LayoutColumn = ({ width, children }) => {
  const percentageWidth = (width * 100).toPrecision(5);

  return (
    <div style={{ width: `${percentageWidth}%`, minHeight: '60px', border: '2px solid grey', textAlign: 'center' }}>
      {children}
    </div>
  );
};

LayoutColumn.propTypes = {
  width: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default LayoutColumn;
