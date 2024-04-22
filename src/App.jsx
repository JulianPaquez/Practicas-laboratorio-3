import { useState } from "react";
import Table from "./assets/components/Table/table";

function App() {
  const [netIncomes] = useState([
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ]);

  const totalIncome = netIncomes.reduce(
    (total, base) => total + base.income,
    0
  );
  const averageBrands = totalIncome / netIncomes.length;

  return (
    <div>
      <h1>Ingresos Netos por Marca</h1>
      <Table netIncomes={netIncomes} />
      <p>Promedio de Ingreso Neto: {averageBrands}</p>
    </div>
  );
}

export default App;
