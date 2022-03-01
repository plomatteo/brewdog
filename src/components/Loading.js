const LoadingMessage = ({ loading }) => {


    return (
        <>
            {loading && <div className='loadingMessage'>Loading...</div>}
        </>
    )
}
export default LoadingMessage;