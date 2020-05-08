import React, { Component, PureComponent } from "react";

// 容器组件
export default class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    setInterval(() => {
      this.setState({
        comments: [
          { body: "react is very good", author: "facebook" },
          { body: "vue is very good", author: "youyuxi" },
        ],
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        {this.state.comments.map((c, i) => (
          <Comment key={i} {...c} />
        ))}
      </div>
    );
  }
}

// 展示组件
// memo实际是一个高阶组件
const Comment = React.memo(({ body, author }) => {
  console.log("render comment");

  return (
    <div>
      <p>{body}</p>
      <p>--- {author}</p>
    </div>
  );
});

// PureComponent
// shouldComponentUpdate should not be used when extending React.PureComponent
// console 打印4次
// class Comment extends PureComponent {
//   render() {
//     console.log("render comment");
//     const { body, author } = this.props;
//     return (
//       <div>
//         <p>{body}</p>
//         <p> --- {author}</p>
//       </div>
//     );
//   }
// }



// 会一直render
// class Comment extends Component {
//   render() {
//     console.log("render comment");
//     const { body, author } = this.props;
//     return (
//       <div>
//         <p>{body}</p>
//         <p> --- {author}</p>
//       </div>
//     );
//   }
// }
