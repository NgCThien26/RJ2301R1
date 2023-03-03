import "./App.css";

import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
    this.state = { 
      isExpand: false 
    };
  }
  handlerClick() {
    this.setState({ 
      isExpand: !this.state.isExpand 
    });
  }
  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "20px",
          }}
        >
          Conditional Rendering
        </div>
        <button onClick={this.handlerClick}>
          {this.state.isExpand ? "Đóng giới thiệu" : "Xem giới thiệu"}
        </button>
        {this.state.isExpand ? (
          <div>
            <h3>Giới thiệu</h3>
            <p>
              Trong ReactJs, đôi khi bạn có 1 số component và tùy thuộc vào từng
              điều kiện ví dụ như t rạng thái của state, props,... mà bạn muốn
              hiển thị một hoặc một số component nào đó. Khi đó bạn có thể sử
              dụng Conditional rendering để render ra component mà bạn mong
              muốn.
            </p>
          </div>
        ) : null}
      </>
    );
  }
}

export default App;
