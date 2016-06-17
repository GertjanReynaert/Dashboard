import React, { PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { backgroundColor, colorRenamed } from 'config/colors';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor,
    display: 'flex',
    justifyContent: 'space-around',
  },
  tab: {
    flexGrow: 1,
    padding: 15,
    backgroundColor,
    border: 'none',
    color: 'white',
    textAlign: 'center',
  },
  activeTab: {
    borderBottom: '3px solid',
    borderBottomColor: colorRenamed,
  },
});

const Navbar = ({ onClick, active }) => {
  const tabStyles = tabName => css(
    styles.tab,
    active === tabName ? styles.activeTab : undefined
  );

  return (
    <div className={css(styles.tabBar)}>
      <button className={tabStyles('home')} onClick={() => onClick('home')}>
        Home
      </button>
      <button className={tabStyles('office')} onClick={() => onClick('office')}>
        Office
      </button>
      <button className={tabStyles('road')} onClick={() => onClick('road')}>
        Road
      </button>
    </div>
  );
};

Navbar.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
};

export default Navbar;
