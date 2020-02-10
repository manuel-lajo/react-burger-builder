import React, { Component } from 'react';

import Wrapper from '../../hoc/Wrapper';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
      ingredients: {
          salad: 0,
          bacon: 0,
          cheese: 0,
          meat: 0
      },
      // totalPrice: 4,
      // purchasable: false,
      // purchasing: false
  }

  render() {
    return (
      <Wrapper>
        <Burger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Wrapper>
    )
  }
}

export default BurgerBuilder;