'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _connectedReactRouter = require('connected-react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
    return {
        url: state.router.location.pathname,
        redirect: state.redirect
    };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        redirectTo: function redirectTo(url) {
            dispatch((0, _connectedReactRouter.push)(url));
            dispatch({ type: 'redirect-cleanup' });
        }
    };
};

var Index = function (_React$Component) {
    _inherits(Index, _React$Component);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
    }

    Index.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.state.url = nextProps.url;
        if (nextProps.redirect) {
            this.props.redirectTo(nextProps.redirect);
        }
    };

    Index.prototype.render = function render() {
        return _react2.default.createElement(
            'div',
            null,
            this.props.children
        );
    };

    return Index;
}(_react2.default.Component);

Index.propTypes = process.env.NODE_ENV !== "production" ? {
    url: _propTypes2.default.string,
    redirect: _propTypes2.default.string
} : {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);
module.exports = exports['default'];