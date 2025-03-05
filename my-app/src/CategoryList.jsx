export default function CategoryList({ categories }) {
    return (
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    );
  }
  