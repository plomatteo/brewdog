import { Container } from 'react-bootstrap'
import ButtonBackHome from '../components/ButtonBackHome';

const ErrorScreen = () => {
    return (
        <Container>
            <h1 className="text-center my-5">Error</h1>
            <ButtonBackHome />
        </Container>
    )
}
export default ErrorScreen;