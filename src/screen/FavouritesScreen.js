import { ListGroup, Container, Col, Row } from 'react-bootstrap'
import { useGlobalContext } from '../context';
import ItemBeer from '../components/ItemBeer';

const FavouriteScreen = () => {

    const {
        favouritesArray,
    } = useGlobalContext();

    return (
        <Container>
            <Row className='mb-5'>
                <Col sm={12} md={6}>
                    <h1 className='text-center my-5'>Favourites</h1>
                    <ListGroup as="ul">
                        {favouritesArray.length === 0 && (<ListGroup.Item as="li" className='d-flex justify-content-between'>Nessun preferito salvato</ListGroup.Item>)}
                        {favouritesArray.filter(el => el.isFavourite === true).map((el) => <ItemBeer key={el.id} el={el} />)}
                    </ListGroup>
                </Col>
                <Col sm={12} md={6}>
                    <h1 className='text-center my-5'>Deleted</h1>
                    <ListGroup as="ul">
                        {favouritesArray.filter(el => el.isFavourite === false).map((el) => <ItemBeer key={el.id} el={el} id="deleteItem" />)}
                    </ListGroup>
                </Col>
            </Row>

        </Container>
    )
}
export default FavouriteScreen;