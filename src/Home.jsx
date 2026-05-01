import Card from './components/Card'
import './Home.css'
const Home = () => {
  return (
    <div className="home_container">
      <h3>Typing code...</h3>
      <div className="card-container">
        <Card title="CSS" content="최고 기록" to="/csspage" />
        <Card title="JS" content="최고 기록" to="/jspage" />
        <Card title="React" content="최고 기록" to="/reactpage" />
      </div>
    </div>
  )
}

export default Home
