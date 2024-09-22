import { useNavigate } from "react-router-dom";

function AccountSettings() {
  const navigate=useNavigate()
  //DB connections: 
  //Listen to Recoms --> List Recommandations best and last first
  //Create Recommandations (if registered)
  //Create contact

  return (
    <main>
      <h1>Account Settings</h1>
      <button onClick={()=>navigate('/Courses')}>Courses Screen</button>
      <button onClick={()=>navigate('/LandingPage')}>Landing Page</button>
    </main>
  );
}

export default AccountSettings;