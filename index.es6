import React from 'react';
import Icon from '@economist/component-icon';
import Gobbet from '@economist/component-gobbet';

export default class WorldIfGobbet extends React.Component {

  static get propTypes() {
    return {
      title: React.PropTypes.node,
      children: React.PropTypes.node,
      showShareBar: React.PropTypes.bool,
      sharebar: React.PropTypes.object,
    };
  }

  render() {
    const customHeader = (<span className="gobbet-title-wrapper">WHAT <Icon type="logoWorldIF" className="worldif-logo"
    background="none" /></span>);
    return (
      <Gobbet className="gobbet" showShareBar={true} title={customHeader}>
        {this.props.children}
      </Gobbet>
    );
  }
}
