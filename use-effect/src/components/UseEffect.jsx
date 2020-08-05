import React from 'react';
import axios from 'axios';

const UseEffect = () => {
  const [count, setCount] = React.useState(0);
  const [username, setUsername] = React.useState('');
  const [recipes, setRecipes] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    document.title = `You clicked ${count} times!`;
    console.log('title updated');
    // alert(`count is ${count}`);
  }, [count]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval fires');
      setCount((prevCount) => {
        return prevCount + 1;
      });

      // alternative syntax for setState function
      // setCount(prev => prev + 1);
      // setCount(count + 1);
    }, 3000);

    const cleanup = () => {
      console.log('clearing the interval');
      clearInterval(interval);
    };

    return cleanup;
  }, [count]);

  React.useEffect(() => {
    const baseUrl = 'https://my-json-server.typicode.com/andydlindsay/chef-andy';
    const promiseOne = axios.get(`${baseUrl}/recipes`);
    const promiseTwo = axios.get(`${baseUrl}/ingredients`);

    Promise.all([promiseOne, promiseTwo])
      .then((arrOfValues) => {
        const [recipeData, ingredientData] = arrOfValues;
        console.log(ingredientData);
        setRecipes(recipeData.data);
        setIngredients(ingredientData.data);
      });
  }, []);

  return (
    <div>
      <h1>Use Effect</h1>
      <h2>Count: { count }</h2>
      <button onClick={() => setCount(count + 1)}>
        Click Me!
      </button>

      <h2>Username: { username }</h2>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />

      <div>
        { recipes.map((recipe) => {
          return (
            <h2 key={recipe.id}>Recipe: {recipe.title}</h2>
          )
        }) }
      </div>
    </div>
  );
};

export default UseEffect;
