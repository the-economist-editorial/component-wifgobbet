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
        hostModule: 'wifgobbet',
        background: '#333333',
        fxDefaultStateBackground: '#999999',
        size: '100%',
        icons: [
        {
          href: 'http://www.facebook.com/sharer/sharer.php?u=http://worldif.economist.com/article/5/what-if',
          title: 'Share on Facebook',
          className: 'fb',
          size: '100%',
          icon: 'facebook',
          s: {
            events: 'event76',
          },
        },
        {
          href: 'https://twitter.com/intent/tweet?url=http://worldif.economist.com/article/5/what-if',
          title: 'Share on Twitter',
          className: 'twitter',
          size: '100%',
          icon: 'twitter',
          s: {
            events: 'event31',
          },
        },
        {
          href: 'https://plus.google.com/share?url=http://worldif.economist.com/article/5/what-if',
          title: 'Share on Google Plus',
          className: 'gplus',
          size: '100%',
          icon: 'googleplus',
          s: {
            events: 'event35',
          },
        },
        {
          href: 'https://www.linkedin.com/cws/share?url=http://worldif.economist.com/article/5/what-if',
          title: 'Linked In',
          className: 'linkedin',
          size: '100%',
          icon: 'linkedin',
          s: {
            events: 'event49',
          },
        },
        {
          href: 'whatsapp://send?text=http://worldif.economist.com/article/5/what-if',
          title: '',
          className: 'whatsapp',
          size: '100%',
          icon: 'whatsapp',
          s: {
            events: '',
          },
        },
        {
          href: 'http://www.economist.com/node/21644150/email/',
          title: 'Email a friend',
          className: 'mail',
          size: '100%',
          icon: 'mail',
          s: {
            events: 'event81',
          },
        },
      ],
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
