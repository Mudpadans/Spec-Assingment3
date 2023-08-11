import React from 'react'

import DetailBanner from './DetailBanner';
import Footer from '../Footer/Footer';
import styles from './DetailScreen.module.css'

const DetailScreen = () => {  
  return (
    <section>
      <DetailBanner/>
      <div className={styles.container}>
        <div className={styles.info}>
          <div>
            <h3>Recipe</h3>
            <p>Prep time: 15 minutes</p>
            <p>Cook time: 20 minutes</p>
            <p>Serves: 2</p>
          </div>
          <div>
            <h3>Ingredients</h3>
            <p>2 New York Steak (10oz each)</p>
            <p>1tbsp salt</p>
            <p>1tbsp pepper</p>
            <p>1 lemon</p>
            <p>5 sprigs of Rosemary</p>
          </div>
        </div>
        <div className={styles.instructions}>
          <h3>Instructions</h3>
          <br/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Tempus urna et pharetra pharetra massa. Nibh nisl condimentum id venenatis. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Eget mauris pharetra et ultrices neque ornare aenean euismod elementum. Lectus proin nibh nisl condimentum id. Sed enim ut sem viverra aliquet eget sit amet. Sed id semper risus in.</p>
          <br/>
          <p>Nunc consequat interdum varius sit. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Tortor posuere ac ut consequat semper. Eget mauris pharetra et ultrices neque. Morbi tristique senectus et netus et. Faucibus nisl tincidunt eget nullam non. Ultrices in iaculis nunc sed augue lacus viverra vitae congue. Id leo in vitae turpis massa sed elementum tempus egestas. Eget egestas purus viverra accumsan in nisl nisi scelerisque eu. Sit amet porttitor eget dolor. Mi eget mauris pharetra et. Leo urna molestie at elementum eu facilisis sed odio morbi. Enim blandit volutpat maecenas volutpat blandit. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Lorem mollis aliquam ut porttitor leo. Pulvinar sapien et ligula ullamcorper. Leo in vitae turpis massa sed elementum tempus. Id aliquet risus feugiat in ante metus.</p>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default DetailScreen;
