import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../../common';
import './ProfileUserDetails.scss';
import ProfileUserPicture from '../ProfileUserPicture';
import ProfileEdit from '../ProfileEdit';

export class ProfileUserDetails extends Component {
  render() {
    const { profile: { firstName, lastName, username, email, bio } } = this.props;
    return (
      <div className="ProfileUserDetails container">
        <div className="small-screen-4 xxlarge-v-margin border b-light-grey radius-2 shadow-1">
          <ProfileUserPicture />
          <div className="center-align small-screen-4 medium-screen-4 large-screen-2">
            <div className="small-padding large-text capitalize names">
              {firstName} {lastName}
            </div>
            <div className="small-padding username">
              {username && '@'}
              {username}
            </div>
            <div className="small-padding email">
              {email && <FontAwesomeIcon icon={faEnvelope} />} {email}
            </div>
            <div className="small-padding bio">{bio}</div>
            <div className="divider" />
            <div>
              <span className="followers">
                <span className="number">{12}</span> Followers
              </span>
              <span className="following">
                <span className="number">{120}</span> Following
              </span>
            </div>
            <div className="divider" />
            <span className="inline-block medium-v-padding">
              <ProfileEdit />
            </span>{' '}
            <span className="inline-block medium-v-padding">
              <Button>
                Follow <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

ProfileUserDetails.propTypes = {
  profile: PropTypes.object,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  username: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.string,
  bio: PropTypes.string,
  editUserProfile: PropTypes.func
};

const mapStateToProps = ({ user: { profile } }) => ({ profile });

export default connect(mapStateToProps)(ProfileUserDetails);
