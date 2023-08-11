import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RecipeCard.module.css';

const RecipeCard = ({recipe}) => {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`);
    }

    return (
        <div>
            <div className={styles.recipe_card}>
                <div>
                    <div className={styles.recipe_img_container}>
                        <img src={recipe.image_url} alt="pic"/>
                    </div>
                    <h3>{recipe.recipe_name}</h3>
                </div>
                <button onClick={handleClick}>See More</button>
            </div>
        </div>
    );
}

export default RecipeCard;