import { useNavigate } from "react-router-dom";
import { ListGroup, } from 'react-bootstrap';
import AddFavouritesStar from "./AddFavouritesStar";

const ItemBeer = ({ el, id }) => {

    let navigate = useNavigate();
    return (
        <ListGroup.Item as="li" id={id} className='d-flex justify-content-between' onClick={() => { navigate(`/beers/${el.id}`) }} >
            <div><h5>{el.name}</h5></div>
            <div className='d-flex'>
                <div className='px-5'>{el.abv}%</div>
                <AddFavouritesStar el={el} />
            </div>
        </ListGroup.Item >
    )
}
export default ItemBeer;