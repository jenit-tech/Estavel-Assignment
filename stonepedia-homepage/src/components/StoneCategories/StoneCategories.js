import React from "react";
import "./StoneCategories.css";

const stoneData = [
  { id: 1, name: "Marble", image: "/images/marble.jpg", description: "Elegant and durable." },
  { id: 2, name: "Granite", image: "/images/granite.jpg", description: "Strong and versatile." },
  { id: 3, name: "Limestone", image: "/images/limestone.jpg", description: "Natural and beautiful." },
];

const StoneCategories = () => (
  <section id="categories" className="stone-categories">
    <h2>Stone Categories</h2>
    <div className="stone-grid">
      {stoneData.map((stone) => (
        <div key={stone.id} className="stone-item">
          <img src={stone.image} alt={stone.name} />
          <h3>{stone.name}</h3>
          <p>{stone.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default StoneCategories;
