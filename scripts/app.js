"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
   _inherits(Form, _React$Component);

   function Form(props) {
      _classCallCheck(this, Form);

      var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));

      _this.onSubmit = _this.onSubmit.bind(_this);
      return _this;
   }

   _createClass(Form, [{
      key: "onSubmit",
      value: function onSubmit(e) {
         e.preventDefault();
         var url = e.target.elements.urlInput.value;
         this.props.handleOnSubmit(url);
      }
   }, {
      key: "render",
      value: function render() {
         return React.createElement(
            "form",
            { onSubmit: this.onSubmit },
            React.createElement("input", { type: "url", name: "urlInput" }),
            React.createElement(
               "button",
               { type: "submit" },
               "Submit"
            )
         );
      }
   }]);

   return Form;
}(React.Component);

var EmbedPage = function (_React$Component2) {
   _inherits(EmbedPage, _React$Component2);

   function EmbedPage() {
      _classCallCheck(this, EmbedPage);

      return _possibleConstructorReturn(this, (EmbedPage.__proto__ || Object.getPrototypeOf(EmbedPage)).apply(this, arguments));
   }

   _createClass(EmbedPage, [{
      key: "render",
      value: function render() {
         return this.props.url && React.createElement(
            "div",
            null,
            React.createElement("iframe", { frameBorder: "0", src: this.props.url })
         );
      }
   }]);

   return EmbedPage;
}(React.Component);

var Main = function (_React$Component3) {
   _inherits(Main, _React$Component3);

   function Main(props) {
      _classCallCheck(this, Main);

      var _this3 = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this, props));

      _this3.state = {
         url: ""
      };
      _this3.handleOnSubmit = _this3.handleOnSubmit.bind(_this3);
      return _this3;
   }

   _createClass(Main, [{
      key: "handleOnSubmit",
      value: function handleOnSubmit(url) {
         this.setState({ url: url });
      }
   }, {
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            null,
            React.createElement(Form, { handleOnSubmit: this.handleOnSubmit }),
            React.createElement(EmbedPage, { url: this.state.url })
         );
      }
   }]);

   return Main;
}(React.Component);

ReactDOM.render(React.createElement(Main, null), document.getElementById("search"));
