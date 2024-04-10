
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log(coffees);

  return (
    <div className='text-center'>

      <div className='mb-7 text-4xl'>
        <h2>Total new coffee:{coffees.length}</h2>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee =>
            <CoffeeCard key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
