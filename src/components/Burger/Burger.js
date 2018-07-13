import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from 'components/Burger/BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_,i) =>{ 
        return <BurgerIngredient key={igKey + i} type={igKey} />
      });
    });

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top"></BurgerIngredient>
        { transformedIngredients }
      <BurgerIngredient type="bread-bottom"></BurgerIngredient>
    </div>
  );
}

export default burger;