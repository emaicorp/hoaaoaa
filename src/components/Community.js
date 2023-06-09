import React from "react";

export default function Community() {
  return (
    <div>
      <h1>Join Our Community</h1>
      <div className="RoadMap-items">
        <p>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          distinctio accusantium architecto iure doloremque eius expedita
          explicabo numquam beatae similique quia optio dignissimos earum vitae
          voluptates nostrum aliquid eveniet voluptas!",
        </p>
        <div className="community-link-div">
          <a href="#" className="community-link">
            Join Discord <i class="fa-brands fa-discord fa-beat-fade"></i>
          </a>
          <a href="#" className="community-link">
            Join Twitter <i class="fa-brands fa-twitter fa-beat-fade"></i>
          </a>
          <a href="#" className="community-link">
            Join Telegram <i class="fa-brands fa-telegram fa-beat-fade"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
