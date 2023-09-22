import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
function Card() {
  return (
    <div>
      <div className="custom-card">
        <div className="card-img">
          <img
            class="rounded-circle"
            alt="avatar1"
            src="https://picsum.photos/id/14/200/200"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
