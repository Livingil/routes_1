import { Link, Outlet, useParams, useSearchParams } from "react-router-dom";
import { validationFunction } from "../validation";

export const CategoryPage = () => {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const items = validationFunction(category!);

  const sort = searchParams.get("sort") || "createdDESC";

  const sortedItems = [...items].sort((a, b) => {
    const dateA = new Date(a.created).getTime();
    const dateB = new Date(b.created).getTime();

    if (sort === "createdASC") {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  });

  return (
    <>
      <h1>{category} page</h1>

      <div>
        <h2>Sort by created date:</h2>
        <button
          onClick={() => setSearchParams({ sort: "createdDESC" })}
          disabled={sort === "createdDESC"}
        >
          🔽 Newest first
        </button>
        <button
          onClick={() => setSearchParams({ sort: "createdASC" })}
          disabled={sort === "createdASC"}
        >
          🔼 Oldest first
        </button>

        <p>Current sort: {sort}</p>
      </div>

      {sortedItems.map((item) => (
        <Link key={item.id} to={`/${category}/${item.id}`}>
          {item.name} <br />
        </Link>
      ))}

      <Outlet />
    </>
  );
};
