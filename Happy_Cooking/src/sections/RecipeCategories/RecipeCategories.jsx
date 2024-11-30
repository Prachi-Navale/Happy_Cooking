import './RecipeCategories.css';
import Breakfast from '../../Assets/Breakfast.jpg';
import Desserts from '../../Assets/Desserts.jpeg';
import Dinner from '../../Assets/Dinner.jpg';
import Beverages from '../../Assets/Beverages.jpg';
import Snacks from '../../Assets/Snacks.jpg';

function RecipeCategories() {
  return (
    <section className="categories">
      <h2>Recipe Categories</h2>
      <div className="category-container">
        <div className="category">
          <img src={Breakfast} alt="Breakfast" />
          <h3>Breakfast</h3>
          <button className="view-recipes-btn">View Recipes</button>
        </div>
        <div className="category">
          <img src={Desserts} alt="Desserts" />
          <h3>Desserts</h3>
          <button className="view-recipes-btn">View Recipes</button>
        </div>
        <div className="category">
          <img src={Dinner} alt="Dinner" />
          <h3>Dinner</h3>
          <button className="view-recipes-btn">View Recipes</button>
        </div>
        <div className="category">
          <img src={Beverages} alt="Beverages" />
          <h3>Beverages</h3>
          <button className="view-recipes-btn">View Recipes</button>
        </div>
        <div className="category">
          <img src={Snacks} alt="Snacks" />
          <h3>Snacks</h3>
          <button className="view-recipes-btn">View Recipes</button>
        </div>
      </div>
    </section>
  );
}

export default RecipeCategories;
