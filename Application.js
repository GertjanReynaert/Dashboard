import React, { Component } from 'react';

import Navbar from 'components/Navbar';
import TabManager from 'components/TabManager';
import Tab from 'components/Tab';

import LayoutContainer from 'components/Layout/LayoutContainer';
import LayoutRow from 'components/Layout/LayoutRow';
import LayoutColumn from 'components/Layout/LayoutColumn';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'home',
    };
  }

  render() {
    return (
      <div>
        <Navbar
          onClick={newTab => this.setState({ activeTab: newTab })}
          active={this.state.activeTab}
        />
        <TabManager active={this.state.activeTab}>
          <Tab tabName="home">
            <LayoutContainer>
              <LayoutRow>
                <LayoutColumn width={1 / 2}>
                  <p>1/2</p>
                </LayoutColumn>
                <LayoutColumn width={1 / 2}>
                  <p>1/2</p>
                </LayoutColumn>
              </LayoutRow>
              <LayoutRow>
                <LayoutColumn width={1 / 3}>
                  <p>1/3</p>
                </LayoutColumn>
                <LayoutColumn width={1 / 3}>
                  <p>1/3</p>
                </LayoutColumn>
                <LayoutColumn width={1 / 3}>
                  <p>1/3</p>
                </LayoutColumn>
              </LayoutRow>
              <LayoutRow>
                <LayoutColumn width={1 / 4}>
                  <p>1/4</p>
                </LayoutColumn>
                <LayoutColumn width={1 / 4}>
                  <p>1/4</p>
                </LayoutColumn>
                <LayoutColumn width={1 / 4}>
                  <p>1/4</p>
                </LayoutColumn>
                <LayoutColumn width={1 / 4}>
                  <p>1/4</p>
                </LayoutColumn>
              </LayoutRow>
              <LayoutRow>
                <LayoutColumn width={1 / 4}>
                  <p>1/4</p>
                </LayoutColumn>
                <LayoutColumn width={2 / 4}>
                  <p>2/4</p>
                </LayoutColumn>
                <LayoutColumn width={1 / 4}>
                  <p>1/4</p>
                </LayoutColumn>
              </LayoutRow>
            </LayoutContainer>
          </Tab>
          <Tab tabName="office">
            <GridContainer
              grid={```
                @ $ # #
                @ % # #
                = = & *
              ```}
              grid={```
                $ # # = = @
                % # # ^ * *
                & & ~ ^ * *
              ```}
              grid={[
                ['a', 'b', 'c', 'c'],
                ['a', 'd', 'c', 'c'],
                ['e', 'e', 'f', 'g'],
              ]}
            >
              <GridCell id="@">
                <p>Hello Office!</p>
              </GridCell>
            </GridContainer>
          </Tab>
          <Tab tabName="road">
            <p>Hello road!</p>
          </Tab>
        </TabManager>
      </div>
    );
  }
}

export default Application;
