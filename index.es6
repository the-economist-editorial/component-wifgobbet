import React from 'react';
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
        size: '100%',
      },
    };
  }

  render() {
    const customHeader = (<div><span className="Gobbet--title-left">WHAT</span>
      <span className="Gobbet--title-right">IF</span></div>);
    return (
      <Gobbet className="Gobbet" showShareBar={true} sharebar={this.props.shareBarFlip} title={customHeader}>
        {this.props.children}
      </Gobbet>
    );
  }
}
