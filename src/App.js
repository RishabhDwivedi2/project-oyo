import React from 'react'
import Data from './Data'
function App() {
  const [state, setState] = React.useState(false)
  const [data, setData] = React.useState(Data)
  return (
    <>
    <div className='container'>
    <div className='section-1'>
      <nav className="nav">
        <div className='menu'>
          <button onClick={()=>setState(!state)} className='menu-icon'>{state ? 
          <i className="fas fa-times"></i> :
          <i className="fas fa-bars"></i> }
          </button>
        </div>
        <ul className={state ?  "before-click" : "after-click"}>
        <div className='title'>
        <img className='logo' src='./images/pp.jpeg'></img>
        <h1>Logo</h1>
      </div>
          <li><i className="fa fa-tachometer"></i><a href='#'>Dashboard</a></li>
          <li><i className="fa fa-archive"></i><a href='#'>Projects</a></li>
          <li><i className="fa fa-line-chart"></i><a href='#'>Earnings</a></li>
          <li><i className="fa fa-asterisk"></i><a href='#'>Profile</a></li>
        </ul>
      </nav>
      </div>
      <div className='user'>
        <h2>Mayilsamy</h2>
        <img className='user-profile' src='./images/profile1.jfif'></img>
      </div>
      </div>
      <div className='section-2' id={state ? "change-width-1-5" : ""}>
          <div className='options'  id={state ? "change-width-1" : ""}>
            <h5 className='colored-1'>My projects (13)</h5>
            <h5 className='colored-2'>Explore</h5>
          </div>
          <span className='search'>
          <i className="fa fa-search"></i>
          <input type="text" placeholder="Search Projects"></input>
          </span>
      </div>
      <div className='section-3' id={state ? "change-width-2" : ""}>
            {
              data.map((item) =>{
                return <Card  img ={item.img}
                              name={item.name}
                              btn={item.btn}
                              title = {item.title}
                              detail = {item.detail}/>
              })              
            }
      </div>
      </>
  )
}
const Card =(props) =>{
  return(
      <div className='card'>
        <div className='card-section-1'>
        <div className='oyo-section'>
        <img className='oyo-logo' src={props.img}></img>
        <p className='oyo'>OYO</p>
        </div>
          {/* <button className='btn-1'>{props.btn}</button> */}
          <div className='btn-section'>
            <p className='btn'>{props.btn}</p>
          </div>
      </div>
      <div className='card-section-2'>
      <div className='mid-1'>
      <p className='card-title'>{props.title}</p>
      <p className='card-detail'>{props.detail}</p>
      </div>
      <div className='mid-2'>
        <i className="fa fa-rupee-sign"></i>
        <p className='price'>2500</p>
      </div>
      </div>
      </div>
  )
}
export default App