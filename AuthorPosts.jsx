import React, { useState } from "react";
import { DUMMY_POSTS } from "../data";
import PostItem from "../components/PostItem";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="author_posts">
      {posts.length > 0 ? (
        <div className="container author_posts_container">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <PostItem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              description={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <h2 className="center">No posts available</h2>
      )}
    </section>
  );
};

export default AuthorPosts;
