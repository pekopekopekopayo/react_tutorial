import React from "react";

class ClassComponent extends React.Component {
  render() {
    const { name, sex, children } = this.props;
    console.log(this.props);
    return (
        <div>
            안녕하세요 저의 이름은 {name} 입니다. <br />
            성별은 {sex} 입니다. <br />
            자식요소는 {children} 입니다. <br />
        </div>
    )
  }
}

export default ClassComponent;