import React, { PropTypes } from 'react';

import LayoutRowComponent from 'components/Layout/LayoutRowComponent';

const LayoutRow = ({ children, RowComponent = LayoutRowComponent }) => (
  <RowComponent>{children}</RowComponent>
);

LayoutRow.propTypes = {
  children: PropTypes.node,
  RowComponent: PropTypes.element,
};

export default LayoutRow;
