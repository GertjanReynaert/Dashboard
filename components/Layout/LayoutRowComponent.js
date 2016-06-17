import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { blue } from 'config/colors';

const styles = StyleSheet.create({
  row: {
    width: '100%',
    backgroundColor: blue,
    // Row itself is the container of columns
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

const LayoutRowComponent = ({ children }) => (
  <div className={css(styles.row)}>{children}</div>
);

LayoutRowComponent.propTypes = {
  children: PropTypes.node,
};

export default LayoutRowComponent;
