import React,{Component} from 'react'
import './css/msite.styl'

export default class Msite extends Component{


  render(){
    return(
      <div>

        <div className="all-top-wrap">
          <nav className="nav">
            <div className="nav-title">
              <h2 className="nav-logo"><a href="javascript:">网易严选</a></h2>
              <input className="nav-search" type="text" placeholder="搜索商品,共16705款好物"/>
            </div>

           {/* <NavBar/>*/}
          </nav>

          <div className="my-scrollYYY">
            <div className="scrollUpDown">

              <div className="swiper-container">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                  <img src="https://yanxuan.nosdn.127.net/fc52e260d16abdff1a8777a713c67aa2.jpg?imageView&quality=75&thumbnail=750x0"/>
              </div>
            </div>
          </div>

          <div className="g-grow">
            <div>
              <i className="iconfont icon-zhengquewancheng-xianxingyuankuang"></i>
              <span className="g-grow-font">网易自营品牌</span>
            </div>
            <div>
              <i className="iconfont icon-zhengquewancheng-xianxingyuankuang"></i>
              <span className="g-grow-font">30天无忧退货</span>
            </div>
            <div>
              <i className="iconfont icon-zhengquewancheng-xianxingyuankuang"></i>
              <span className="g-grow-font">48小时快速退款</span>
            </div>
          </div>

          <div className="zhigong-content">
            <div className="zhi-gong">
              <span>品牌制造商直供</span>
              <i className="iconfont icon-xiayiyeqianjinchakangengduo-xianxingyuankuang"></i>
            </div>
          </div>

          <div className="sx-wrap">
            <ul className="sx-list clearFix">
              <li className="sx-item">
              <div>
                <h4 className="sx-global">全球定制</h4>
                <span className="sx-price">9元起</span>
                <i className="iconfont icon-31shangxin"></i>
              </div>
              <img className="sx-img" src="//yanxuan.nosdn.127.net/1a6a7318b26bb92a8559a1bad827205f.png" alt="logo"/>
              </li>
            </ul>
          </div>

          <div className="m-xinpinshoufa">
          <header className="hd">
            <a className="more">
              <span className="xinpingshoufa">新品首发</span>
              <div className="all" >
                <span className="chakanquanbu">查看全部 ></span>
              </div>
            </a>
          </header>
          <div className="innerwrap-swiper">
            <ul className="list-swiper" >
              <li className="item-swiper">
              <a href="javascript:;">
                <div className="swiper-img">
                  <img src="http://yanxuan.nosdn.127.net/71aea6da16f988640eb3b1eb4b13a028.png" alt=""/>
                </div>
                <div className="swiper-content">
                  <span>item.name</span>
                </div>
                <div className="swiper-price">
                  <span>¥</span>
                  <span>9元</span>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>

  </div>
  </div>

  </div>
    <div className="mask-wrap on" >
    <div className="close-fuli">
    <span className="iconfont icon-guanbi"></span>
  </div>
    <div className="mask-img">
      <div>
        <img src="https://yanxuan.nosdn.127.net/3296fd0c446376e1ec5f76a4f8062aa1.png?imageView&quality=85&thumbnail=630x804" alt=""/>
          <div><span>立即去领取</span></div>
      </div>
    </div>

  </div>
  </div>


    )
  }
}
