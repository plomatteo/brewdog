import { useEffect, useState } from "react";
import { useGlobalContext } from '../context';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

const AddFavouritesStar = ({ el }) => {

    const {
        favouritesArray,
        setFavouritesArray,
    } = useGlobalContext();

    const [favourites, setFavourites] = useState(localStorage.getItem(el.name) === 'true' ? true : false);
    const [starIcon, setStarIcon] = useState(<StarBorderIcon />);

    const saveFavourites = () => {
        //save favourite on localstorage
        localStorage.setItem(el.name, !favourites);
        setFavourites(!favourites);
        //save favourite on useState
        let backupArray = [...favouritesArray];
        const searchFavourite = backupArray.findIndex(item => item.id === el.id);
        if (searchFavourite === -1) {
            backupArray.push({ id: el.id, name: el.name, abv: el.abv, isFavourite: !favourites });
        } else { backupArray[searchFavourite] = { id: el.id, name: el.name, abv: el.abv, isFavourite: !favourites } }
        setFavouritesArray(backupArray);
        //save favourite as json on localstorage
        localStorage.setItem('jsonOnLocalstorage', JSON.stringify(backupArray));
    }

    useEffect(() => {
        if (favourites) {
            setStarIcon(<StarIcon sx={{ fontSize: 30 }} />)
        } else {
            setStarIcon(<StarBorderIcon sx={{ fontSize: 30 }} />)
        }
    }, [favourites])

    return (
        <div className='starIcon' onClick={(e) => { e.stopPropagation(); saveFavourites() }}>{starIcon}</div>
    )
}
export default AddFavouritesStar;