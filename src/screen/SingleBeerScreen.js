import { useParams } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import AddFavouritesStar from '../components/AddFavouritesStar';
import useFetch from '../useFetch';
import ErrorMessage from '../components/ErrorMessage';
import LoadingMessage from '../components/Loading';

const SingleBeerScreen = () => {

    const { id } = useParams();
    const { isLoading, data, isError } = useFetch(`/${id}`);

    return (
        <>  <LoadingMessage loading={isLoading} />
            <ErrorMessage error={isError} />
            {!isError && <>
                <Container className='bg-black' fluid>
                    <Container className='bg-black beerDetails-heroSection d-flex py-5'>
                        <div className='detailsBox-heroSection'>
                            <div >
                                {data.map((el) => (<AddFavouritesStar el={el} />))}
                            </div>
                            <h2>{data[0]?.name}</h2>
                            <p>{data[0]?.tagline}</p>
                        </div>
                        <div className="boxBeer">
                            <div className="circle-heroSection">
                            </div>
                            <div><img src={`${data[0]?.image_url}`} className='beerImg' alt="" /></div>
                        </div>
                    </Container>
                </Container>
                <Container className='bg-white' fluid>
                    <Container className='bg-white beerDetails-heroSection py-5'>
                        <div className='detailsBox-heroSection'>
                            <p>{data[0]?.description}</p>
                        </div>
                    </Container>
                </Container >
                <Container fluid>
                    <Row className='bg-yellow d-flex justify-content-center my-5'>
                        <div className='bg-yellow d-flex justify-content-center flex-wrap p-3'>
                            <div className='d-flex justify-content-center px-4 py-2'>ABV: {data[0]?.abv}%</div>
                            <div className='d-flex justify-content-center px-4 py-2'>IBU: {data[0]?.ibu}</div>
                            <div className='d-flex justify-content-center px-4 py-2'>SRM: {data[0]?.srm}</div>
                            <div className='d-flex justify-content-center px-4 py-2'>EBC: {data[0]?.ebc}</div>
                            <div className='d-flex justify-content-center px-4 py-2'>PH: {data[0]?.ph}</div>
                        </div>
                    </Row>
                    <Container>
                        <h4 className='d-flex justify-content-center flex-wrap mt-5'>Food pairing</h4>
                        <Row>
                            <div className='d-flex justify-content-center flex-wrap px-3 mb-5'>
                                <div className='d-flex justify-content-center p-4 foodBox'>{data[0]?.food_pairing[0]}</div>
                                <div className='d-flex justify-content-center p-4 foodBox'>{data[0]?.food_pairing[1]} </div>
                                <div className='d-flex justify-content-center p-4 foodBox'>{data[0]?.food_pairing[2]} </div>
                            </div>
                        </Row>
                    </Container>
                </Container >
            </>
            }
        </>
    )
}
export default SingleBeerScreen;