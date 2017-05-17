import React, { Component } from 'react';   // Syntatic Sugar.
// import React from 'react'; // here it just means import react and pull off the property component as a variable called component
// const Component = React.Component; Same as above.

// Functional components do not have state, only class based components do.
// We need a class based component, needs to handle more complexity, like record keeping, and introspection on itself.
class SearchBar extends Component {    // This is saying, give our search bar a bunch of functionality from the React.Component Class
  constructor(props) {     // all js classes have a special func called constructor, it's called automatically whenever a new instance of it is called, for example in index.js <SearchBar />
    super(props);     // Component contains a constructor class, so we call super to access the components methods. Itll throw an error anyways

    this.state = { term: '' };  // initializing state, this will be the only place that you will see the object written this way, this.state, everywhere else it will be this.setState
  }
  // You need {} to inject vanilla js into jsx. Never set this.state = {} anywhere else except for inside the constructor.
  render() {
    return (          // one css className per component is the best approach.
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  // need a way to handle the video search term from the search bar.
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
  // render() {   // Changing this to this.setState
  //   return <input onChange={event => console.log(event.target.value)} />; // You need {} to inject vanilla js into jsx.
  // }

  // onInputChange(event) {       // added this event directly into it.
  //   console.log(event.target.value);
  // }
}

// class SearchBar extends React.Component {    // This is saying, give our search bar a bunch of functionality from the React.Component Class
//   render() {
//     return <input />;
//   }
// }

// We will refactor the function below to a class
// This is called a functional component, it's just a function
// const SearchBar = () => {
//   return <input />
// };

export default SearchBar;