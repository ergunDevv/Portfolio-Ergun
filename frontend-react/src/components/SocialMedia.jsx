import React from 'react';
import { BsTwitter, BsLinkedin,BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://github.com/ergunDevv"target="_blank" rel="noopener noreferrer"><BsGithub /> </a>
    </div>
    <div>
     <a href="https://www.linkedin.com/in/ergün-ceylan-9664aa229/"target="_blank" rel="noopener noreferrer"><BsLinkedin /></a> 
    </div>
    <div>
    <a href="https://twitter.com/Ergun_Dev"target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
    </div>
  </div>
);

export default SocialMedia;
