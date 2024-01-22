import React from 'react';

import './Page.css';
import sampleImg from './lorem-picsum.png';

type PageProps = {
  flipVertically: boolean;
  flipHorizontally: boolean;
  toggleFlipVertically: (isEnabled: boolean) => void;
  toggleFlipHorizontally: (isEnabled: boolean) => void;
};

export const Page = ({ flipVertically, flipHorizontally, toggleFlipVertically, toggleFlipHorizontally }: PageProps) => (
  <div className="page">
    <ul>
      <li>Home</li>
      <li>News</li>
      <li>Contact</li>
      <li>About</li>
    </ul>
    <div className="content">
      <div className="controls">
        <div className="title">
          <div>Flip Page 👆</div>
        </div>
        <div className="form">
          <label>
            <input
              onChange={(ev) => toggleFlipVertically(ev.target.checked)}
              checked={flipVertically}
              type="checkbox"
            />
            Vertically
          </label>
          <label>
            <input
              onChange={(ev) => toggleFlipHorizontally(ev.target.checked)}
              checked={flipHorizontally}
              type="checkbox"
            />
            Horizontally
          </label>
        </div>
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        const cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <img src={sampleImg} alt="pic" />
      <div>
        culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      </div>
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut
      enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
      occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>

    <div className="contact-form">
      <div className="field">
        <div>Your Name</div>
        <input type="text" name="name" placeholder="Enter your name.." />
      </div>
      <div className="field">
        <div>Country</div>
        <label>
          <input type="radio" name="country" defaultChecked />
          Slovenia
        </label>
        <label>
          <input type="radio" name="country" />
          Canada
        </label>
        <label>
          <input type="radio" name="country" />
          USA
        </label>
      </div>
      <div className="field">
        <div>Subject</div>
        <textarea id="subject" name="subject" placeholder="Write something.." />
      </div>
      <input className="field" type="submit" value="Submit" />
    </div>

    <div className="footer">&copy; {new Date().getFullYear()} Footer.com</div>
  </div>
);
