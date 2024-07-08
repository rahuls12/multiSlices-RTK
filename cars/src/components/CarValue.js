import { useSelector } from "react-redux";

export default function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    return data
      .filter((d) => d.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, car) => acc + car.cost, 0);
  });

  return <div className="car-value">Total Cost: $ {totalCost}</div>;
}
