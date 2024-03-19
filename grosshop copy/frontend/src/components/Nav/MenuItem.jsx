
const MenuItem = ({ pageName, isActive, handleClick }) => {

  return (
    <div onClick={() => handleClick(pageName)}>
      <img src={isActive ? `/active_${pageName.toLowerCase()}.svg` : `/${pageName.toLowerCase()}.svg`} alt={pageName} />
      <span className={isActive ? 'active' : ''}>{pageName}</span>    </div>
  );
};

export default MenuItem;