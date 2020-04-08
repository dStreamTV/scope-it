import React, { Component } from 'react'
import { Video } from '../../types/'
import {
  cutOffText,
  secondsToHms
} from '../../utility/utility'
import PlaceholderImage from "../../assets/images/placeholder.png";

export interface VideoThumbnailProps {
  title: string,
  description: string,
  source: string,
  rand: string,
  processed?: 0 | 1,
  id?: number,
  created_at: string,
  updated_at: string
}

export interface VideoThumbnailState {

}

class VideoThumbnail extends React.Component<VideoThumbnailProps, VideoThumbnailState> {
  render() {
    const {
      title,
      description,
      source,
      created_at
    } = this.props
    const shortenedTitle = cutOffText(title, 60)
    const createdAtTime = (new Date(created_at)).getTime()
    const nowTime = (new Date()).getTime()
    const msTimeDifference = nowTime - createdAtTime
    const timeAgo = secondsToHms(msTimeDifference / 1000)
    return (
      <div className='video-thumbnail'>
        <div className='video-thumbnail-image'>
          <img className='video-thumbnail-image-content' src={PlaceholderImage} />
        </div>
        <div className='video-thumbnail-info'>
          <div className='video-thumbnail-avatar'></div>
          <div className='video-thumbnail-info-text'>
            <span className='video-thumbnail-info-text-title'>{shortenedTitle}</span><br />
            <span className='video-thumbnail-info-text-user'>User1asdf</span><br />
            <span className='video-thumbnail-info-text-views'>99 Views</span> | <span className='video-thumbnail-info-text-time'>{`${timeAgo} ago`}</span>
          </div>
        </div>
      </div>
    )
  }
}

const mapStatToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {
  }
}

export default VideoThumbnail;