import "./SuccessNotification.scss"

const SuccessNotification = () => {
    return ( 
    <section className="success-notification">
        <div className="notification">
            <img src="/success.svg" alt="" />
            <div className="shadow"></div>
            <h1>Welcome to Grosshop</h1>
            <p>You have successfully created your account</p>
        </div>
    </section> );
}
 
export default SuccessNotification;