import React, { Component } from "react";
import api from "../services/api";
import "./Feed.css";
import moment from "moment";
import "moment/locale/pt-br";
import io from "socket.io-client";

import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  state = {
    feed: []
  };

  async componentDidMount() {
    this.registerToSocket();

    const response = await api.get("posts");
    this.setState({ feed: response.data });
  }

  handleLike = id => {
    api.post(`posts/${id}/like`);
  };

  registerToSocket = newPost => {
    const socket = io("http://localhost:3333");

    socket.on("post", newPost => {
      this.setState({ feed: [newPost, ...this.state.feed] });
    });

    socket.on("like", likedPost => {
      this.setState({
        feed: this.state.feed.map(post =>
          post._id === likedPost._id ? likedPost : post
        )
      });
    });
  };

  render() {
    return (
      <section id="post-list">
        {this.state.feed.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span>{post.author}</span>
                <span className="place">{post.place}</span>
              </div>

              <img src={more} alt="Mais" />
            </header>
            <img
              src={`http://localhost:3333/file/${post.image}`}
              alt="Imagem do Post"
            />
            <footer>
              <div className="actions">
                <button type="button" onClick={() => this.handleLike(post._id)}>
                  <img src={like} alt="Like" />
                </button>
                <img src={comment} alt="comment" />
                <img src={send} alt="send" />
              </div>

              <strong> {post.likes} curtidas</strong>
              <p>
                {post.description}
                <span>{post.hashtags}</span>
                <small>
                  {moment(post.updatedAt)
                    .locale("pt-br")
                    .format("LLLL")}
                </small>
              </p>
            </footer>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
