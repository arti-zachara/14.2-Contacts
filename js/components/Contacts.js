var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
      return <Contact item={contact} key={contact.id} />;
      // without babel
      // React.createElement(Contact, { item: contact, key: contact.id });
    });

    return <ul className={"contactsList"}>{contacts}</ul>;
    // without babel
    // React.createElement("ul", { className: "contactsList" }, contacts);
  }
});
