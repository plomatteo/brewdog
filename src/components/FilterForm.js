import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

const FilterForm = () => {

    const {
        setQuery,
        inputPage,
        setInputPage
    } = useGlobalContext();

    const [inputText, setInputText] = useState('');
    const [inputMinMaxAlc, setInputMinMaxAlc] = useState({ min: 0, max: 100 });
    const [selectedAlcohol, setSelectedAlcohol] = useState([`selectedButton`, ``, ``, ``]);
    const [typeOfSearch, setTypeOfSearch] = useState(0);
    let inputQuery = '';

    //logica che gestisce la query all'API
    !inputText
        ? inputQuery = `?&page=${inputPage}&abv_gt=${inputMinMaxAlc.min}&abv_lt=${inputMinMaxAlc.max}`
        : typeOfSearch === 0
            ? inputQuery = `?&page=${inputPage}&abv_gt=${inputMinMaxAlc.min}&abv_lt=${inputMinMaxAlc.max}&beer_name=${inputText}`
            : inputQuery = `?&page=${inputPage}&abv_gt=${inputMinMaxAlc.min}&abv_lt=${inputMinMaxAlc.max}&food=${inputText}`

    const handleSubmit = (e) => {
        e.preventDefault();
        setInputPage(1)
        setQuery(inputQuery);
    }
    const handleTypeOfSearch = (e) => {
        setTypeOfSearch(e.target.value);
        setInputText('');
        setInputPage(1);
    }
    const handleAlcoholButton = (selected) => {
        let supportArray = [``, ``, ``, ``];
        supportArray[selected] = `selectedButton`;
        setSelectedAlcohol(supportArray);
        switch (selected) {
            case 0:
                setInputMinMaxAlc({ min: 0, max: 100 });
                break;
            case 1:
                setInputMinMaxAlc({ min: 0, max: 5 });
                break;
            case 2:
                setInputMinMaxAlc({ min: 5, max: 8 });
                break;
            case 3:
                setInputMinMaxAlc({ min: 8, max: 100 });
                break;
            default: setInputMinMaxAlc({ min: 0, max: 100 });
        }
    }

    useEffect(() => { setQuery(inputQuery) }, [inputMinMaxAlc, inputPage, typeOfSearch]) // eslint-disable-line

    return (
        <Container>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col xs={12} md={6} className='d-flex justify-content-center'>
                        <input className='sm-input' type="text" placeholder="Search for" name="filterBy" value={inputText} autoComplete='off' onChange={(e) => setInputText(e.target.value)} />
                        <Form.Select aria-label="Default select example" onChange={(e) => handleTypeOfSearch(e)} >
                            <option value="0">Beer Name</option>
                            <option value="1">Food</option>
                        </Form.Select>
                        <Button className='searchButton' type='submit' ><SearchIcon /></Button>
                    </Col>
                    <Col xs={12} md={6} className='d-flex justify-content-center'>
                        <div className='d-flex justify-content-center mt-mobileView'>
                            <div className={`button-PercentageOfAlcohol mx-2 ${selectedAlcohol[0]}`} onClick={() => handleAlcoholButton(0)} >All</div>
                            <div className={`button-PercentageOfAlcohol mx-2 ${selectedAlcohol[1]}`} onClick={() => handleAlcoholButton(1)}>0%- 5%</div>
                            <div className={`button-PercentageOfAlcohol mx-2 ${selectedAlcohol[2]}`} onClick={() => handleAlcoholButton(2)}>5% - 8%</div>
                            <div className={`button-PercentageOfAlcohol mx-2 ${selectedAlcohol[3]}`} onClick={() => handleAlcoholButton(3)}>8% + </div>
                        </div>
                    </Col>
                </Row>
            </form>
        </Container>
    );
};
export default FilterForm;