var React = require('react');

var HelloWorld = React.createClass({
    render: function() {
        return (
          <p>Hello my friend {this.props.name}! How are you?</p>
        );
    }
});

module.exports = HelloWorld;
