import React from 'react';
import cakeImage from '../../assets/cake.jpg';
import steakImage from '../../assets/steak.jpg';
import martiniImage from '../../assets/martini.jpg';
import styles from './RecipeCard.modules.css'

const RecipeCard = () => {
    return (
        <div className={styles.recipe_card}>
            <div>
                <div>
                    <img src={cakeImage} alt="cake"/>
                </div>
                <h3>Triple chocolate mousse cake</h3>
                <button>See More</button>
            </div>
            <div>
                <div>
                    <img src={steakImage} alt="cake"/>
                </div>
                <h3>Rosemary Seared Steak</h3>
                <button>See More</button>
            </div>
            <div>
                <div>
                    <img src={martiniImage} alt="cake"/>
                </div>
                <h3>Some Martini</h3>
                <button>See More</button>
            </div>
        </div>
    );
}

export default RecipeCard;