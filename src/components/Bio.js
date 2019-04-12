import React from 'react';
import profilePic from '../../content/assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Dan Abramov`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Social impact driven development. By{' '}
          <a href="https://www.linkedin.com/in/mateusbs17">Mateus Santos</a>.{' '}
        </p>
      </div>
    );
  }
}

export default Bio;
