import React, { PropTypes } from 'react';

const Tab = ({ tabName, children }) => (
  <div id={tabName}>
    {children}
  </div>
);

Tab.propTypes = {
  tabName: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Tab;
