import CTA from "../components/CTA"
import { useNavigate } from 'react-router-dom'

export default function EpaperPage() {

  const navigate = useNavigate()

  return (
    <div>
      <CTA 
        title="Ready to elevate your e-paper experience?"
        buttonText="Let's Talk"
        onClick={() => navigate('/contacts')}
      />
    </div>
  )
}