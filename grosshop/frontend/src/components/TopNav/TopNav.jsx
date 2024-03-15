import "./TopNav.scss";

const TopNav = ({ location, withBinIcon }) => {
    return (
        <div className="top-nav">
            <img src="./previous.svg" alt="back button" />
            <p>{location}</p>
            {withBinIcon ? <img src="/bin.svg" alt="" /> : <div />}
        </div>
    );
}

export default TopNav;