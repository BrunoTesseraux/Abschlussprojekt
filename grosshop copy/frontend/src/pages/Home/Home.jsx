import CategoryList from "../../components/CategoryList/CategoryList";
import Navigation from "../../components/Nav/Nav";
import PromotionSlider from "../../components/PromotionSlider/PromotionSlider";
import Searchbar from "../../components/Searchbar/Searchbar";
import TopNav from "../../components/TopNav/TopNav";
import ProductListSmall from "../ProductListSmall/ProductListSmall";
import "./Home.scss"

const Home = () => {
    return ( 
    <section className="home">
        <Searchbar/>
        <PromotionSlider/>
        <CategoryList/>
        <h1 className="deal-heading">Todays Grocery Deals</h1>
        <ProductListSmall maxProducts={6} endpoint={"promotions/todayDeals"}/>
        <img src="./bier.jpg" alt="" className="home-deal-picture" />
        <h1 className="deal-heading">Grocery Member Deals</h1>
        <ProductListSmall maxProducts={3} endpoint={"promotions/memberDeals"}/>
        <Navigation/>
    </section> 
    );
}
 
export default Home;