import React, { Component } from "react";

import "./Feed.css";
import more from "../assets/more.svg";
import like from "../assets/like.svg";
import comment from "../assets/comment.svg";
import send from "../assets/send.svg";

class Feed extends Component {
  render() {
    return (
      <section id="post-list">
        <article>
          <header>
            <div className="user-info">
              <span>Paulo Spiguel</span>
              <span className="place">Centenário do Sul</span>
            </div>

            <img src={more} alt="Mais" />
          </header>
          <img
            src="https://solabg.newtechtecnologia.com/wp-content/uploads/2019/04/economia.png"
            alt="Mais"
          />
          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={comment} alt="comment" />
              <img src={send} alt="send" />
            </div>

            <strong> 900 curtidas</strong>
            <p>
              Um post muito legal da OmniStack
              <span>#react #omnistack #top</span>
            </p>
          </footer>
        </article>

        <article>
          <header>
            <div className="user-info">
              <span>Paulo Spiguel</span>
              <span className="place">Centenário do Sul</span>
            </div>

            <img src={more} alt="Mais" />
          </header>
          <img
            src="https://solabg.newtechtecnologia.com/wp-content/uploads/2019/04/economia.png"
            alt="Mais"
          />
          <footer>
            <div className="actions">
              <img src={like} alt="Like" />
              <img src={comment} alt="comment" />
              <img src={send} alt="send" />
            </div>

            <strong> 900 curtidas</strong>
            <p>
              Um post muito legal da OmniStack
              <span>#react #omnistack #top</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
