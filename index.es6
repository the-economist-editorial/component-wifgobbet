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
      shareBarFlip: React.PropTypes.object,
    };
  }

  static get defaultProps() {
    return {
      shareBarFlip: {
        useSvg: true,
        fxDirection: 'flip-to-top',
        fxType: 'cube',
        layout: 'horizontal',
        background: '#333333',
        fxDefaultStateBackground: '#999999',
      },
    };
  }

  render() {
    const customHeader = (<span className="Gobbet--title-wrapper">WHAT <Icon icon="worldif"
      className="wif-gobbet-logo" background="none" /></span>);
    return (
      <Gobbet className="Gobbet" showShareBar={true} sharebar={this.props.shareBarFlip} title={customHeader}>
        {this.props.children}
      </Gobbet>
    );
  }
}
