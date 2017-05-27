import React from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import acmLongLogo from '../../../static/images/acm_logo_long_small.png'
import scienceLogo from '../../../static/images/science-logo.png'
import coorper1 from '../../../static/images/cooper-1.jpg'

class LargeFooter extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
  };

  static defaultProps = {
    className: 'large-footer',
  };

  getLiChildren = (data, i) => {
    const links = data.contentLink.split(/\n/).filter(item => item);
    const content = data.content.split(/\n/).filter(item => item)
      .map((item, ii) => {
        const cItem = item.trim();
        const isImg = cItem.match(/\.(jpg|png|svg|bmp|jpeg)$/i);
        return (<li className={isImg ? 'icon' : ''} key={ii}>
          <a href={links[ii]} target="_blank">
            {isImg ? <img src={cItem} width="100%" /> : cItem}
          </a>
        </li>);
      });
      return (<li className={data.className} key={i} id={`${this.props.id}-block${i}`}>
        <h2>{data.title}</h2>
        <ul>
          {content}
        </ul>
      </li>);
  }

  render() {
    const props = { ...this.props };
    const isMode = props.isMode;
    delete props.isMode;
    const logoContent = { img: acmLongLogo, content: 'ACM 俱乐部\n代码改变世界',contentLink: 'http://www.acmclub.cn\n'  };
    const logoContent2 = { img: scienceLogo, content: 'ACM 俱乐部\n代码改变世界',contentLink: 'http://www.acmclub.cn\n'  };
    const dataInnovation = [
      { title: '主办单位', content: '东北大学秦皇岛分校团委学生会\n东北大学秦皇岛分校大学生创新创业中心\n东北大学秦皇岛分校计算机与通信工程学院\n校友工作办公室', contentLink: 'http://www.neuq.edu.cn\nhttp://cxcyzx.neuq.edu.cn\nhttp://jsjytx.neuq.edu.cn\nhttp://www.neuq.edu.cn' },
      { title: '协办单位', content: '东北大学秦皇岛分校计算机与通信工程学院团委学生会\n东北大学秦皇岛分校计算机与通信工程学院科技创新部', contentLink: 'http://jsjytx.neuq.edu.cn\nhttp://jsjytx.neuq.edu.cn' },
      { title: '承办单位', content: '东北大学秦皇岛分校ACM俱乐部\n东北大学秦皇岛分校计算机与通信工程学院团委学生会\n东北大学秦皇岛分校计算机与通信工程学院科技创新部\n', contentLink: 'http://www.acmclub.cn\nhttp://jsjytx.neuq.edu.cn\nhttp://jsjytx.neuq.edu.cn/\n' },
      // { title: '合作单位', content: 'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\n https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\n https://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\n https://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg', contentLink: '#\n#\n#\n#' },
      // { title: '合作单位', content: '', contentLink: '' }
    ];

    const dataTurning = [
      { title: '主办单位', content: '东北大学秦皇岛分校创新创业协会\n东北大学秦皇岛分校ACM俱乐部\n东北大学秦皇岛分校计算机与通信工程学院', contentLink: 'http://cxcyzx.neuq.edu.cn/\nhttp://www.acmclub.cn\nhttp://jsjytx.neuq.edu.cn' },
      { title: '协办单位', content: '东北大学秦皇岛分校计算机与通信工程学院团委学生会\n东北大学秦皇岛分校计算机与通信工程学院科技创新部', contentLink: 'http://jsjytx.neuq.edu.cn\nhttp://jsjytx.neuq.edu.cn' },
      { title: '承办单位', content: '东北大学秦皇岛分校ACM俱乐部\n东北大学秦皇岛分校计算机与通信工程学院团委学生会\n东北大学秦皇岛分校计算机与通信工程学院科技创新部\n', contentLink: 'http://www.acmclub.cn\nhttp://jsjytx.neuq.edu.cn\nhttp://jsjytx.neuq.edu.cn/\n' },
      // { title: '合作单位', content: 'https://zos.alipayobjects.com/rmsportal/IiCDSwhqYwQHLeU.svg\n https://zos.alipayobjects.com/rmsportal/AXtqVjTullNabao.svg\n https://zos.alipayobjects.com/rmsportal/fhJykUTtceAhYFz.svg\n https://zos.alipayobjects.com/rmsportal/IDZTVybHbaKmoEA.svg', contentLink: '#\n#\n#\n#' },
    ];
    const liChildrenToRender = dataInnovation.map(this.getLiChildren);
    return (<OverPack
      {...props}
      playScale={isMode ? 0.5 : 0.2}
    >
      <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>
        <li key="logo" id={`${props.id}-logo`}>
          <a href="#">
            <p className="logo">
              <img src={logoContent.img} width="100%" />
            </p>
            <p>{logoContent.content}</p>
          </a>
          <a href="http://www.acmclub.cn/">
            <p className="logo">
              <img src={logoContent2.img} width="100%" />
            </p>
          </a>
        </li>

        {liChildrenToRender}
        <li key={'coorper'} id={`${this.props.id}-block`}>
          <h2>合作单位</h2>
          <ul>
            <li><img width={100} src={coorper1} /></li>
            {/*<li>More</li>*/}
          </ul>
        </li>
      </QueueAnim>
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="copyright"
        className="copyright"
        id={`${props.id}-content`}
      >
        <span>
          Copyright © 2017 ACMCLUB  Code By <a href="http://outxu.cn">out_xu</a> Power By <a href="https://motion.ant.design/">Ant-Motion</a>.
        </span>
      </TweenOne>
    </OverPack>);
  }
}

export default LargeFooter;
