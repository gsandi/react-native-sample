export const Utilities = {

//function to determine how to greet the user

  findGreeting(){
    const today = new Date();
    const curHr = today.getHours();
    let greeting = '';

    if (curHr < 12) {
      greeting = 'Morning';
    }
    else if (curHr < 18) {
      greeting = 'Afternoon';
    }
    else {
      greeting = 'Evening';
    }
    return greeting;
  }

};
