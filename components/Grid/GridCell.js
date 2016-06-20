import React, { PropTypes } from 'react';

const GridCell = ({ id, children }) => {
  return (
    <div id={id}>{children}</div>
  );
};

GridCell.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node,
};

GridCell.displayName = 'GridCell';

export default GridCell;
