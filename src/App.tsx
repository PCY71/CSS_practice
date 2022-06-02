import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faThumbsUp, faThumbsDown, faShare, faPlus } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <>
    {/* Header */}
      <header>
        <div className="logo">
          <FontAwesomeIcon icon={faYoutube} />
          <span className="title">Youtube</span>
        </div>
        <div className="icons"></div>
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
              <FontAwesomeIcon icon={faThumbsUp}/>
              <span>1K</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faThumbsDown}/>
              <span>0</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faShare}/>
              <span>share</span>
            </button>
          </li>
          <li>
            <button>
              <FontAwesomeIcon icon={faPlus}/>
              <span>Save</span>
            </button>
          </li>
        </div>
        <div className="channel">
          <div className="metadata"></div>
          <div className="subscribe"></div>
        </div>
      </section>
      <section className="UpNext"></section>
    </>
  )
}

export default App
