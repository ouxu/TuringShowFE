import React from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import {Link} from 'react-router'
import contentLeft2 from '../../../static/images/content-left-2.png'

class ContentLeft extends React.Component {

  static defaultProps = {
    className: 'content-left',
  };

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const animType = {
      queue: isMode ? 'bottom' : 'left',
      one: isMode ? { y: '+=30', opacity: 0, type: 'from' }
        : { x: '+=30', opacity: 0, type: 'from' },
    };
    return (
      <div
        {...props}
        className={`content-template-wrapper content-half-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <QueueAnim
            type={animType.queue}
            className={`${props.className}-text`}
            key="text"
            leaveReverse
            ease={['easeOutCubic', 'easeInCubic']}
            id={`${props.id}-textWrapper`}
          >
            <h1 key="h1" id={`${props.id}-title`}>
              奖项设置 & <Link to="/applyTuring">点我报名 </Link>
            </h1>
            <p key="p" id={`${props.id}-content`} style={{lineHeight: 1.8,textAlign: 'left'}}>
              * 以下奖项仅为现场赛设置，网络赛获奖证书请联系交流群管理员
              <br />
              > 特等奖1队，专为 AK 队设置，无 AK 队不颁发
              <br />
              > 一等奖10% 二等奖20% 三等奖30%
              <br />
              > 首杀奖10队，颁发给每道题第一个提交正确的队伍
              <br />
              > 优秀新人奖3队，排名最高的前三个纯2016级队伍
              <br />
              > 优秀女生奖3队，排名最高的前三个女生队伍
            </p>
          </QueueAnim>
          <TweenOne
            key="img"
            animation={animType.one}
            className={`${props.className}-img`}
            id={`${props.id}-imgWrapper`}
            resetStyleBool
          >
            <span id={`${props.id}-img`}>
              <img width="100%" src={contentLeft2} />
            </span>
          </TweenOne>
        </OverPack>
      </div>
    );
  }
}

export default ContentLeft;
