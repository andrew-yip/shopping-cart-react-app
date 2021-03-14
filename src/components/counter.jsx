import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   // imageUrl: "https://picsum.photos/420"
  //   tags: ["tag1", "tag2", "tag3"]
  // };

  // IF the Event Handler function uses arrow function then we dont bind
  // event method everytime in the constructor

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);

    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from the server
    }
  }

  componentWillUnmount() {}

  render() {
    console.log("Counter - rendered");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary tbn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

//Depending the condition tags will be displayed or error msg will be shown
// renderTags() {
//   if (this.state.tags.length === 0) return <p>there are no Tags</p>;

//   return (
//     <ul>
//       {this.state.tags.map((tag, i) => (
//         <li key={i}>{tag}</li>
//       ))}
//     </ul>
//   );
// }

export default Counter;
