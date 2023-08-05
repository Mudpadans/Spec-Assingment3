import React from 'react';
import cakeImage from '../../assets/cake.jpg';
import steakImage from '../../assets/steak.jpg';
import martiniImage from '../../assets/martini.jpg';

const RecipeCard = (key, recipe) => {
    return (
        <div>
            <div>
                <img 
                    src={cakeImage} 
                    alt="cake" 
                    style={{
                        height: "300px",
                        width: "300px"
                    }}/>
                <h3>Triple chocolate mousse cake</h3>
                <button>See More</button>
            </div>
            <div>
                <img 
                    src={steakImage} 
                    alt="cake" 
                    style={{
                        height: "300px",
                        width: "300px"
                    }}/>
                <h3>Rosemary Seared Steak</h3>
                <button>See More</button>
            </div>
            <div>
                <img 
                    src={martiniImage} 
                    alt="cake" 
                    style={{
                        height: "300px",
                        width: "300px"
                    }}/>
                <h3>Some Martini</h3>
                <button>See More</button>
            </div>
        </div>
    );
}

export default RecipeCard