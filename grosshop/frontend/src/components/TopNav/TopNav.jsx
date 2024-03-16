import "./TopNav.scss";

const TopNav = ({ location, actionType }) => {
    let actionElement;

    switch (actionType) {
        case "bin":
            actionElement = <img src="/bin.svg" alt="bin" />;
            break;
        default:
            actionElement = <div />;
            break;
    }

    return (
        <div className="top-nav">
            <img src="./previous.svg" alt="back button" />
            <p>{location}</p>
            {actionElement}
        </div>
    );
}

export default TopNav;