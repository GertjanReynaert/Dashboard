import React, { PropTypes, Children } from 'react';

const TabManager = ({ active, children }) => {
  const filteredChildren = Children
    .toArray(children)
    .filter(child => child.props.tabName.toLowerCase() === active.toLowerCase());

  return <div>{filteredChildren}</div>;
};

TabManager.propTypes = {
  active: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default TabManager;
