import ButtonBackHome from "./ButtonBackHome";

const ErrorMessage = ({ error }) => {

    return (
        <>
            {error && <ButtonBackHome />}
        </>
    )
}
export default ErrorMessage;