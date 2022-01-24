import { useState } from 'react';

function App() {
  const [people, setPeople] = useState(5);
  const [jalluindex, setJalluindex] = useState(17.38);
  const jalluindexLength = jalluindex.toString().length
  const peopleLength = people.toString().length

  const indexForPeople = (num) => Math.ceil(people / 3) * jalluindex
  const updatePeople = (event) => setPeople(event.target.value)
  const updateJalluindex = (event) => setJalluindex(event.target.value)

  return (
    <div className="bg-emerald-200 w-screen h-screen">
      <header className="fixed p-3 text-lg text-emerald-800 font-bold">
        <h1>budget calculator 2022</h1>
      </header>
      <main className="flex items-center justify-center h-full">
        <div className="bg-emerald-600 shadow-xl shadow-emerald-700 rounded text-white p-12 flex gap-5 flex-col items-center">
          <p className="text-7xl">{indexForPeople(people).toFixed(2)}€</p>
          <p className="text-5xl">
            for{' '}
            <input type="number" style={{width: `calc(${peopleLength + 2}ch + 5px)`}} className="font-bold appearance-textfield bg-emerald-700 border-none" value={people} onChange={updatePeople} />
            {' '}{people === 1 ? 'person' : 'people'}
          </p>
          <p className="text-xl">jalluindex:{' '}
            <input type="number" style={{width: `calc(${jalluindexLength + 2}ch + 5px)`}} className="font-bold appearance-textfield bg-emerald-700 border-none" value={jalluindex} onChange={updateJalluindex} />
          €</p>
        </div>
      </main>
    </div>
  );
}

export default App;
