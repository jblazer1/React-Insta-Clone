import React from "react";

const NewComment = props => {
  return (
    <>
      <form onSubmit={props.addNewComment}>
        <input
          value={props.newComment}
          type="text"
          name="newComment"
          placeholder="Add Comment"
          onChange={props.newCommentHandler}
        />
      </form>
    </>
  );
};

// class NewComment extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       newComment: []
//     };
//   }

//   render() {
//     return (
//       <>
//         <form>
//           <input
//             value={props.newComment}
//             type="text"
//             onSubmit={props.newCommentHandler}
//             name="newComment"
//             placeholder="Add Comment"
//           />
//         </form>
//       </>
//     );
//   }
// }

export default NewComment;
