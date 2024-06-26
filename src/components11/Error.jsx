import { useNavigate } from "react-router-dom";


const Error = () => {
  const navigate = useNavigate();

  return (
    <div>
        <h2>404 this page not found</h2>
        <button type="button" onClick={() => navigate(-1)} class="btn btn-primary">Primary</button>
      
    </div>
  )
}

export default Error
