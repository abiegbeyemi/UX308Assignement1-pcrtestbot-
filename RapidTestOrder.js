class RapidTestOrder {
  constructor(sFrom) {
    this.OrderState = {
      WELCOMING: () => {
        let aReturn = [];
        this.stateCur = this.OrderState.FOOD_TYPE;
        aReturn.push("Welcome to Fridays Cafe and Eatery.");
        aReturn.push("What can I get for you today? We have Breakfast bagels or Panini wraps!");
        return aReturn;
      },

      FOOD_TYPE: (sInput) =>{
        let aReturn = [];
        this.isDone = [];
        if (sInput.toLowerCase().startsWith('b')) {
            aReturn.push("Nice choice! What kind of bagel would you like?");
        } else {
            aReturn.push("Cold? We have Iced Coffee or Mango Chai Smoothie.");
            aReturn.push("Maybe next time")
        }
        return aReturn;
        }, 

      RESERVING: (sInput) => {
        let aReturn = [];
        this.isDone = true;
        if (sInput.toLowerCase().startsWith('y')) {
          aReturn.push(`Your rapid test is reserved under the phone number ${this.sFrom}`);
          let d = new Date();
          d.setMinutes(d.getMinutes() + 120);
          aReturn.push(`Please pick it up at 123 Tidy St., Acton before ${d.toTimeString()}`);
        } else {
          aReturn.push("Thanks for trying our reservation system");
          aReturn.push("Maybe next time")
        }
        return aReturn;
      }
    };

    this.stateCur = this.OrderState.WELCOMING;
    this.isDone = false;
    this.sFrom = sFrom;
  }
  handleInput(sInput) {
    return this.stateCur(sInput);
  }
  isDone() {
    return this.isDone;
  }
}

export { RapidTestOrder }