import './App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { faThumbsUp, faThumbsDown, faShare, faPlus, faEllipsis, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons'
// import {CSSProperties} from 'react';

function App() {

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">
          <i className="fab fa-youtube"/>
          {/* <FontAwesomeIcon className='fa-youtube' icon={faYoutube} style={youtubeStyle}/> */}
          <span className="title">Youtube</span>
        </div>
        <div className="icons">
          <i className='fas fa-search'/>
          <i className='fas fa-ellipsis-v'/>
          {/* <FontAwesomeIcon className='fa-search' icon={faSearch} />
          <FontAwesomeIcon icon={faEllipsis} /> */}
        </div>
      </header>

      {/* Video Player */}
      <section className="player">
        <video controls src="video/sample.mp4"></video>
      </section>

      {/* Video Info */}
      <section className="info">
        <div className="metadata">
          <ul className="hashtags">
            <li>#typesecript 연습</li>
            <li>#Youtube</li>
            <li>#clone</li>
          </ul>
          <div className="titleAndButton">
            <span className="title">
              Clone Coding: Youtube Mobile Website 유튜브 모바일 웹사이트 클론코딩
            </span>
            <i className='fas fa-caret-down'/>
            {/* <button className="moreBtn"><FontAwesomeIcon icon={faCaretDown}/></button> */}
          </div>
          <span className="views"> 1M views 1 month ago</span>
        </div>
        <div className="actions">
          <li>
            <button className='active'>
              <i className='fas fa-thumbs-up'/>
              {/* <FontAwesomeIcon icon={faThumbsUp} style={iconButton}/> */}
              <span>1K</span>
            </button>
          </li>
          <li>
            <button>
              <i className='fas fa-thumbs-down'/>
              {/* <FontAwesomeIcon icon={faThumbsDown} style={iconButton}/> */}
              <span>0</span>
            </button>
          </li>
          <li>
            <button>
              <i className='fas fa-share'/>
              {/* <FontAwesomeIcon icon={faShare} style={iconButton}/> */}
              <span>share</span>
            </button>
          </li>
          <li>
            <button>
              <i className='fas fa-plus'/>
              {/* <FontAwesomeIcon icon={faPlus} style={iconButton}/> */}
              <span>Save</span>
            </button>
          </li>
        </div>

        {/* Channel Description */}
        <div className="channel">
          <div className="metadata">
            <img src="img/cy.png" alt="profile"/>
            <div className="info">
              <span className="name">
                CY's Study Room
              </span>
              <span className="subscribers">
                1M subscribers
              </span>
            </div>
          </div>
          <button className="subscribe">subscribe</button>
        </div>
      </section>
      <section className="UpNext">
        <span className="title">Up next</span>
        <ul>
          <li className="item">
            <img src="" alt="img1" />
            <div className="info">
              <span className="title">
                HTML 기초, React 할때 꼭 필요한 팁! 쉽다고 무시하면 안돼요 | 프론트엔드 개발자 입문편: HTML, CSS, JavaScript
              </span>
              <span className="channel">CY's Study Room</span>
              <span className="views">1M views</span>
            </div>
            <button className="moreBtn">
              <i className='fas fa-ellipsis-v'/>
              {/* <FontAwesomeIcon icon={faEllipsis}/> */}
              </button>
          </li>
          <li className="item">
            <img src="" alt="img2" />
            <span className="title">
              HTML 태그 완성, 웹 포트폴리오 만들기 전에 꼭 보세요 | 프론트엔드 개발자 입문편: HTML, CSS, JavaScript
            </span>
            <span className="channel">CY's Study Room</span>
            <span className="views">82K views</span>
            <button className="moreBtn">
              <i className='fas fa-ellipsis-v'/>
              {/* <FontAwesomeIcon icon={faEllipsis}/> */}
            </button>
          </li>
          <li className="item">
            <img src="" alt="img3" />
            <span className="title">
              HTML 태그 완성, 웹 포트폴리오 만들기 전에 꼭 보세요 | 프론트엔드 개발자 입문편: HTML, CSS, JavaScript
            </span>
            <span className="channel">CY's Study Room</span>
            <span className="views">82K views</span>
            <button className="moreBtn">
              <i className='fas fa-ellipsis-v'/>  
              {/* <FontAwesomeIcon icon={faEllipsis}/> */}
            </button>

          </li>
        </ul>
      </section>
    </>
  )
}

export default App

/* typescript에서 인라인 CSS 연습용 
<FontAwesomeIcon className='fa-youtube' icon={faYoutube} style={youtubeStyle}/> 
이런식으로 넣기

const youtubeStyle: CSSProperties = {
  color: '#ff0000',
  marginRight: 10,
};
*/