import { Container, } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { useGlobalContext } from '../context';
import { ListGroup, } from 'react-bootstrap';
import ItemBeer from './ItemBeer';
import useFetch from '../useFetch';
import ErrorMessage from './ErrorMessage';
import LoadingMessage from './Loading';

const ResponsePagination = () => {

    const { setInputPage, query } = useGlobalContext();

    const handlePageClick = (pagination) => {
        setInputPage(pagination.selected + 1);
    }

    //fetchDati
    const { isLoading, data, isError } = useFetch(`${query}`);

    return (
        <> <LoadingMessage loading={isLoading} />
            <ErrorMessage error={isError} />
            {!isError && <>
                <Container className='my-3'>
                    <h3 className='gray-txt'>{data.length} beers found</h3>
                    <ReactPaginate
                        previousLabel={''}
                        nextLabel={''}
                        onPageChange={handlePageClick}
                        pageCount={3}
                        containerClassName={'pagination d-flex justify-content-end'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link_custom'}
                        activeClassName={'active_pagination'}
                    />
                    <ListGroup as="ul">
                        {data.map((el) => <ItemBeer key={el.id} el={el} />)}
                    </ListGroup>
                </Container>
            </>
            }
        </>);
};
export default ResponsePagination;