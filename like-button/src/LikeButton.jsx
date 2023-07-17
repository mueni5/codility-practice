import React, { useState } from 'react';
import classNames from 'classnames';


const LikeButton = () => {
  const [likes, setLikes] = useState(100);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const buttonClasses = classNames('like-button', { liked });

  return (
    <button className={buttonClasses} onClick={handleLikeClick}>
      Like | <span className="likes-counter">{likes}</span>
    </button>
  );
};

export default LikeButton;
