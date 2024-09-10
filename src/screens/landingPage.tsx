import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate=useNavigate()
  //DB connections: 
  //Listen to Recoms --> List Recommandations best and last first
  //Create contact

  return (
    <main>
      <h1>Landing Page</h1>
      <button onClick={()=>navigate('/Courses')}>Courses Screen</button>
      <button onClick={()=>navigate('/')}>Home Page</button>
    </main>
  );
}

export default LandingPage;