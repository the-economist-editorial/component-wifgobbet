'use strict';

exports.__esModule = true;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _economistComponentGobbet = require('@economist/component-gobbet');

var _economistComponentGobbet2 = _interopRequireDefault(_economistComponentGobbet);

var WorldIfGobbet = (function (_React$Component) {
  _inherits(WorldIfGobbet, _React$Component);

  function WorldIfGobbet() {
    _classCallCheck(this, WorldIfGobbet);

    _React$Component.apply(this, arguments);
  }

  WorldIfGobbet.prototype.render = function render() {
    var customHeader = _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'span',
        { className: 'Gobbet--title-left' },
        'WHAT'
      ),
      _react2['default'].createElement(
        'span',
        { className: 'Gobbet--title-right' },
        'IF'
      )
    );
    return _react2['default'].createElement(
      _economistComponentGobbet2['default'],
      { className: 'Gobbet', showShareBar: true, sharebar: this.props.shareBarFlip, title: customHeader },
      this.props.children
    );
  };

  _createClass(WorldIfGobbet, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        title: _react2['default'].PropTypes.node,
        children: _react2['default'].PropTypes.node,
        showShareBar: _react2['default'].PropTypes.bool,
        sharebar: _react2['default'].PropTypes.object,
        shareBarFlip: _react2['default'].PropTypes.object
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        shareBarFlip: {
          useSvg: true,
          fxDirection: 'flip-to-top',
          fxType: 'cube',
          layout: 'horizontal',
          background: '#333333',
          fxDefaultStateBackground: '#999999',
          size: '100%'
        }
      };
    }
  }]);

  return WorldIfGobbet;
})(_react2['default'].Component);

exports['default'] = WorldIfGobbet;
module.exports = exports['default'];

