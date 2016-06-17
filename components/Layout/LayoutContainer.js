import React, { PropTypes } from 'react';

import LayoutContainerComponent from 'components/Layout/LayoutContainerComponent';

const LayoutContainer = ({ children, ContainerComponent = LayoutContainerComponent }) => (
  <ContainerComponent>{children}</ContainerComponent>
);

LayoutContainer.propTypes = {
  children: PropTypes.node,
  ContainerComponent: PropTypes.element,
};

export default LayoutContainer;
