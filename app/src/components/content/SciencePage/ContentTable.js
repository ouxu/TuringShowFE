import React from 'react'
import TweenOne from 'rc-tween-one'
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import { Tabs } from 'antd'

const TabPane = Tabs.TabPane

class ContentTable extends React.Component {

  static propTypes = {
    id: React.PropTypes.string,
    className: React.PropTypes.string,
  }

  static defaultProps = {
    className: 'content-table',
  }

  state = {
    show: 0,
  }

  onChange = (key) => {
    this.setState({show: parseInt(key)})
  }

  getBlockChildren = (item, i) => {
    const tag = item.tag
    const img = item.img
    const text = item.text
    return (
      <TabPane
        key={i}
        tab={(<span
          className={`${this.props.className}-tag`}
          id={`${this.props.id}-tagBlock${i}`}
        >
          {tag.tag}
        </span>)}
      >
        <TweenOne.TweenOneGroup
          enter={{y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad'}}
          leave={null}
          component=""
        >
          {this.state.show === i && (
            <div key="content">
              <div
                className={`${this.props.className}-img`}
                id={`${this.props.id}-imgBlock${i}`}
              >
                {img}
              </div>
              <div
                className={`${this.props.className}-text`}
                id={`${this.props.id}-textBlock${i}`}
                dangerouslySetInnerHTML={{__html: text}}
              />
            </div>)}
        </TweenOne.TweenOneGroup>
      </TabPane>
    )
  }

  render () {
    const props = {...this.props}
    delete props.isMode
    const childrenData = [{
      tag: {tag: 'ACM 图灵杯'},
      img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
      text: `<h3>技术</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。。
<h3>融合</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。
<h3>开放</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。`,
    }, {
      tag: {tag: 'CCPC'},
      img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
      text: `<h3>技术</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。
<h3>融合</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。
<h3>开放</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。`,
    },
      {
        tag: {tag: 'ICPC'},
        img: <img width="100%" src="https://zos.alipayobjects.com/rmsportal/xBrUaDROgtFBRRL.png" />,
        text: `<h3>技术</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。
<h3>融合</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。
<h3>开放</h3>
假装有字假装有字假装有字假装有字假装有字假装有字假装有字假装有字。`,
      }
    ]
    const tabsChildren = childrenData.map(this.getBlockChildren)
    return (
      <div
        {...props}
        className={`content-template-wrapper ${props.className}-wrapper`}
      >
        <OverPack
          className={`content-template ${props.className}`}
          location={props.id}
        >
          <TweenOne
            animation={{y: '+=30', opacity: 0, type: 'from'}}
            component="h1"
            key="h1"
            reverseDelay={200}
            id={`${props.id}-title`}
          >
            ACM ICPC/CCPC 最专业的程序设计竞赛！
          </TweenOne>
          <TweenOne
            animation={{y: '+=30', opacity: 0, type: 'from', delay: 100}}
            component="p"
            key="p"
            reverseDelay={100}
            id={`${props.id}-content`}
          >
            保研找工作利器！我们的图灵杯是你展现自己的最好舞台！
          </TweenOne>
          <TweenOne.TweenOneGroup
            key="tabs"
            enter={{y: 30, opacity: 0, delay: 200, type: 'from'}}
            leave={{y: 30, opacity: 0}}
            className={`${props.className}-tabs`}
            id={`${props.id}-tabs`}
          >
            <Tabs key="tabs" onChange={this.onChange} activeKey={`${this.state.show}`}>
              {tabsChildren}
            </Tabs>
          </TweenOne.TweenOneGroup>
        </OverPack>
      </div>
    )
  }
}

export default ContentTable
