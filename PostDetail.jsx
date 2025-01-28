import React from "react";
import PostAuthor from "../components/PostAuthor.jsx";
import { Link } from "react-router-dom";
import Thumbnail from "../images/blog22.jpg";

const PostDetail = () => {
  return (
    <section className="post_detail">
      <div className="container post_detail_container">
        <div className="post_detail_header">
          <PostAuthor />
          <div className="post_detail_button">
            <Link to={"/posts/werwewr/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/posts/werwer/delete"} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is post title</h1>
        <div className="post_detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quasi
          cumque quidem aspernatur sed autem cupiditate numquam iure a fugit,
          voluptas eos? Assumenda, quam a? Architecto quasi eaque modi
          voluptates atque natus ad. Deleniti omnis saepe veritatis, quidem
          alias ullam!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          provident velit deleniti architecto explicabo iure recusandae
          perferendis illo sunt qui blanditiis, quasi reiciendis cupiditate
          repellendus nisi dicta omnis molestias nihil alias ea consequatur at!
          Dicta impedit itaque dolore ab quis eius dolorum amet earum optio, vel
          unde nesciunt consequatur dignissimos quia praesentium ex tempore sed!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          minus excepturi animi laborum, porro necessitatibus. Vitae quos enim
          itaque illum ipsam possimus odit blanditiis totam, quae harum
          similique voluptatum temporibus accusamus dicta, at deleniti. Eaque
          eius quis maxime optio enim eveniet vitae doloremque fuga, rem, unde
          harum, beatae corrupti ipsum laborum perspiciatis saepe nemo iusto
          aspernatur vero sequi. Adipisci, ipsam! Quis vitae totam alias, ipsam
          blanditiis maiores dolorem, consectetur molestiae, fuga cupiditate
          nihil doloribus debitis. Dolorum deleniti consequatur et doloribus
          nisi. Cumque consectetur fugiat iste deserunt impedit cum ducimus esse
          magni quas dicta perferendis sed animi odio repellat, soluta beatae
          nisi ab fuga, sapiente quisquam quibusdam similique officiis? Nostrum,
          dolore et?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          veritatis aut expedita et consequatur ea distinctio culpa doloremque
          itaque suscipit?
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
