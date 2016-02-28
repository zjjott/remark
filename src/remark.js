'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var marked = require('marked');
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

class ReMarkEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "text": "" };
    this.onChange = text => {
      this.setState({ text: text,
        html: marked(text) });
    };
  }
  render() {
    var valueLink = {
      value: this.state.text,
      requestChange: this.onChange
    };
    // const {editorState} = this.state;
    return React.createElement(
      'div',
      { id: 'editor' },
      React.createElement('textarea', {
        className: 'col-sm-12',
        rows: '30',
        valueLink: valueLink }),
      React.createElement('div', { dangerouslySetInnerHTML: { __html: this.state.html } })
    );
  }
  onChange(text) {
    this.setState({ text: text });
  }
}

ReactDOM.render(React.createElement(ReMarkEditor, { linkElement: 'display' }), document.getElementById('app'));
