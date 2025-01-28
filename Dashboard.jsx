import React, { useState } from "react";
import { DUMMY_POSTS } from "../data.js";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="dashboard">
      {posts.length ? (
        <div className="container dashboard_container">
          {posts.map((post) => {
            return (
              <article key={post.id} className="dashboard_post">
                <div className="dashboard_post_info">
                  <div className="dashboard_post_thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard_post_actions">
                  <Link to={`/posts/${post.id}`} className="btn sm">
                    view
                  </Link>
                  <Link
                    to={`/posts/${post.id}/edit`}
                    className="btn sm primary"
                  >
                    edit
                  </Link>
                  <Link
                    to={`/posts/${post.id}/delete`}
                    className="btn sm danger"
                  >
                    delete
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2 className="center">You have no posts yet</h2>
      )}
    </section>
  );
};

export default Dashboard;
