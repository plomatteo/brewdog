import { useNavigate } from 'react-router-dom'

const ButtonBackHome = () => {
    let navigate = useNavigate();
    return (
        <div className='errorMessage'><button className='black-txt' onClick={() => { navigate('/') }}> Back to Hompage </button></div>
    )
}
export default ButtonBackHome;