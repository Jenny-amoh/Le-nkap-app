import axios from 'axios'; // import axios

function App() {
  const login = async () => {
    // Define your login data
    const loginData = {
      email: 'jennerr20@gmail.com',
      password: 'Jennerrrchi'
    };

    try {
      // Make a POST request to the login endpoint
      const response = await axios.post('https://le-nkap-v1.onrender.com/auth', loginData);
      console.log(response.data);
      // Store the token in local storage
      localStorage.setItem('token', response.data);
      console.log(localStorage.getItem('token'));
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  const addCategory = async () => {
    try {
      // Get the token from local storage
      const token = localStorage.getItem('token');
      // console.log('Token from localstorage is', token);
      // return null;

      // Define the category data
      const categoryData = {
        name: 'Hospital bills',
        type: 'expense', // income or expense
      };

      // Make a POST request to the add category endpoint
      const response = await axios.post('https://le-nkap-v1.onrender.com/categories', categoryData, {
        headers: {
          'x-auth-token': token
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }

  }

  const getCategories = async () => {
    try {
      // Get the token from local storage
      const token = localStorage.getItem('token');

      // Make a GET request to the get categories endpoint
      const response = await axios.get('https://le-nkap-v1.onrender.com/categories', {
        headers: {
          'x-auth-token': token
        }
      });

      console.log(response.data);
    } catch (error) {
      console.error('There was an error!', error);
    }
  }

  const newExpense = async () => {
    try {
      const token = localStorage.getItem('token');
      const data = {
        name: "Regular checkup",  // should come from form field
        type: 'expense', 
        amount: 12000, // should come from form field, 
        categoryId: "65dc690bf596883edc3a117b", // should come from form field (dropdown 
        // gotten from data from the getCategories function)
      }

      const response = await axios.post('https://le-nkap-v1.onrender.com/transactions', data, {
        headers: {
          'x-auth-token': token
        }
      });

      console.log('New expense returned', response.data);

    }
    catch(error) {
      console.error('There was an error!', error);
    }
  }

  return (
    <div>
      <p>Hello to react playground</p>


      <button onClick={login}>Login</button> <br /><br />
      <button onClick={addCategory}>Add category</button><br /><br />
      <button onClick={getCategories}>Get categories</button>
      <button onClick={newExpense}>New expense</button>
    </div>
  )
}

export default App