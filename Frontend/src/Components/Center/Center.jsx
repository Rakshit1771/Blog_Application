import { useNavigate } from "react-router-dom";
import "./Center.css";
function Center() {
  const navigate = useNavigate();
  return (
    <>
      <div className="center_container">
        <div className="center_image">
          <img
            src="https://thumbs.dreamstime.com/b/explore-world-wooden-sign-forest-background-51325243.jpg"
            alt="img"
          />
        </div>
        <div className="center_text">
          <h2>Explore what’s trending </h2>
          <p className="centerpara">
            Discover what the world is talking about. From viral thoughts to
            powerful perspectives, explore trending blogs that are shaping
            conversations right now. Whether it's inspiration, insight, or
            innovation it all starts here. Stay in the loop, stay inspired. Let
            the trends lead you to your next favorite read.
          </p>
        </div>
      </div>
      <div className="center_container">
        <div className="center_text">
          <h2>Connect Through Stories </h2>
          <p className="centerpara">
            Connection goes beyond likes and comments it begins with stories
            that resonate. At ThoughtVerse, every blog is a chance to find
            someone who feels the same, thinks differently, or inspires you.
            Engage with voices from around the world, share your thoughts, and
            build meaningful bonds. Because behind every post is a person, and
            behind every reader, a connection waiting to happen.
          </p>
        </div>
        <div className="center_image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREvqYff79c0kmJi6LGPfHDmdWWmnSKytdD-1PZro1JXQQgZkU4TzX6YkFUC_he4979HvE&usqp=CAU"
            alt="img"
          />
        </div>
      </div>
    </>
  );
}

export default Center;
