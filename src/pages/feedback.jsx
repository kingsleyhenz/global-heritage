import React from "react";
import '../styles/feedback.css';
import happy from '../assets/happy emoji.png';
import indifferent from '../assets/indifferent emoji.png'
import thumbUp from '../assets/thumb up.png'
import unimpressed from '../assets/unimpressed.png'
import learnt from '../assets/learnt.png'

const FeedBack = () => {
  return (
    <>
      <div className="feed-content">
        <div className="feed-box">
          <h1>How was your experience?</h1>
          <p>We hope you had a wonderful experience exploring the world’s historic monuments with us and felt a deeper connection to these timeless treasures. Your feedback is invaluable to us, so please let us know your thoughts below. Thank you for being a part of this journey through history!</p>
          <div className="feed-icon-box">
            <div className="feed-icon">
              <img src={happy} alt="" title="Very pleased" />
            </div>
            <div className="feed-icon">
              <img src={indifferent} alt="" title="Indifferent" />
            </div>
            <div className="feed-icon">
              <img src={thumbUp} alt="" title="Nicely done" />
            </div>
            <div className="feed-icon">
              <img src={unimpressed} alt="" title="Unimpressed" />
            </div>
            <div className="feed-icon">
              <img src={learnt} alt="" title="Learned a lot" />
            </div>
          </div>
          <div className="feed-form">
            <input type="text" placeholder="Send us a message"/>
            <button>Submit Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedBack;