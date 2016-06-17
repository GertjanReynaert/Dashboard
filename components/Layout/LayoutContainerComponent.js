import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { backgroundColor } from 'config/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
});

const LayoutContainerComponent = ({ children }) => (
  <div className={css(styles.container)}>{children}</div>
);

LayoutContainerComponent.propTypes = {
  children: PropTypes.node,
};

export default LayoutContainerComponent;
