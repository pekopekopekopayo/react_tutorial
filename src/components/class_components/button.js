import React from "react";
class Button extends React.Component {
  constructor(props) {
		super(props);
		this.state = { number: 0 };
	}
	render() {
		const { number } = this.state;
		return (
			<div>
				<h1>{number}</h1>

				<button onClick={() => this.setState({ number: number + 1 }) }>Click me!</button>
			</div>
		);
  }

}


export default Button;