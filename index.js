
  function wakeDog(dogName, dogBreed){
      console.log(`Wake ${dogName} the ${dogBreed}`);
      let message = `Wake ${dogName} the ${dogBreed}`;
      return message;
  }

  function leashDog(dogName, dogBreed){
      console.log(`Leash ${dogName} the ${dogBreed}`);
      let m = `Leash ${dogName} the ${dogBreed}`;
      return m;
  }

  function walkToPark(dogName, dogBreed){
      console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
      let m = `Walk to the park with ${dogName} the ${dogBreed}`;
      return m;
  }

  function throwFrisbee(dogName, dogBreed){
      console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
      let m = `Throw the frisbee for ${dogName} the ${dogBreed}`;
      return m;
  }

  function walkHome(dogName, dogBreed){
      console.log(`Walk home with ${dogName} the ${dogBreed}`);
      let m = `Walk home with ${dogName} the ${dogBreed}`;
      return m;
  }

  function unleashDog(dogName, dogBreed){
      console.log(`Unleash ${dogName} the ${dogBreed}`);
      let m= `Unleash ${dogName} the ${dogBreed}`;
      return m;
  }

  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
  console.log(routine.length);
  
  
  function exerciseDog(dogName, dogBreed){
    let arr = [];
    console.log(routine.length);
    for (let i = 0 ; i<routine.length ; i++){
      arr += routine[i](dogName, dogBreed);
    }
    return arr;
  }

  exerciseDog("Bryon","poodle");