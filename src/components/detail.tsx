import { useParams } from "react-router-dom";
import { validationFunction } from "../validation";
import type { Item } from "../types";

export const DetailPage = () => {
  const { category, id } = useParams();
  const items = validationFunction(category!);
  const item: Item | undefined = items.find((item) => item.id === Number(id));

  return (
    <>
      <h1>Detail Page: {category}</h1>
      {item && (
        <>
          <h2>{item.name}</h2>

          <div>
            {Object.entries(item).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> {String(value)}
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};
