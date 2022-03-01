import ButtonBackHome from "./ButtonBackHome";

const ErrorMessage = ({ error }) => {

    return (
        <>
            {error && <><h3 className='text-center py-3'>Error</h3> <ButtonBackHome /></>}
        </>
    )
}
export default ErrorMessage;