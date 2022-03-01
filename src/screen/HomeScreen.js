import { Container } from 'react-bootstrap'
import FilterForm from '../components/FilterForm'
import ResponsePagination from '../components/ResponsePagination'

const HomeScreen = () => {

    return (
        <>
            <Container className='home-filterForm py-3 px-0 mx-0' fluid>
                <FilterForm />
            </Container>
            <Container className='home-responsePagination py-3 px-0 mx-0' fluid>
                <ResponsePagination />
            </Container>
        </>
    )
}
export default HomeScreen;