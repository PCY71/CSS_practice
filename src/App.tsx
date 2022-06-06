import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faThumbsDown, faShare, faPlus, faEllipsis, faSearch, faE } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
      {/* Header */}
      <header>
        <div className="logo">
          <FontAwesomeIcon icon={faYoutube} />
          <span className="title">Youtube</span>
        </div>
        <div className="icons">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faEllipsis} />
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
            <button className="moreBtn"></button>
          </div>
          <div className="views">
            <span className="views"> 1M vies 1 month ago</span>
          </div>
        </div>
        <div className="actions">
          <li>
            <button>
              <FontAwesomeIcon icon={faThumbsUp} />
              <span>1K</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faThumbsDown} />
              <span>0</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faShare} />
              <span>share</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faPlus} />
              <span>Save</span>
            </button>
          </li>
        </div>

        {/* Channel Description */}
        <div className="channel">
          <div className="metadata">
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
            <button className="moreBtn"><FontAwesomeIcon icon={faEllipsis}/></button>
          </li>
          <li className="item">
            <img src="" alt="img2" />
            <span className="title">
              HTML 태그 완성, 웹 포트폴리오 만들기 전에 꼭 보세요 | 프론트엔드 개발자 입문편: HTML, CSS, JavaScript
            </span>
            <span className="channel">CY's Study Room</span>
            <span className="views">82K views</span>
            <button className="moreBtn"><FontAwesomeIcon icon={faEllipsis}/></button>
          </li>
          <li className="item">
            <img src="" alt="img3" />
            <span className="title">
              HTML 태그 완성, 웹 포트폴리오 만들기 전에 꼭 보세요 | 프론트엔드 개발자 입문편: HTML, CSS, JavaScript
            </span>
            <span className="channel">CY's Study Room</span>
            <span className="views">82K views</span>
            <button className="moreBtn"><FontAwesomeIcon icon={faEllipsis}/></button>

          </li>
        </ul>
      </section>
    </>
  )
}

export default App
