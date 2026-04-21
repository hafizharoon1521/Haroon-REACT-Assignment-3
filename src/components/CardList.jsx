import Card from "./Card";

function CardList() {
  return (
    <div className="card-container">
      <Card
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        title="Web Development"
        description="Learn HTML, CSS, and JavaScript to build modern websites."
      />

      <Card
        image="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c"
        title="Mobile Development"
        description="Build Android and iOS apps using modern frameworks."
      />

      <Card
        image="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c"
        title="UI/UX Design"
        description="Design beautiful and user-friendly interfaces."
      />

      {/* Challenge: extra cards */}
      <Card
        image="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
        title="Data Science"
        description="Analyze data and build intelligent systems."
      />

      <Card
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
        title="Programming"
        description="Master coding in multiple languages."
      />

      <Card
        image="https://images.unsplash.com/photo-1506765515384-028b60a970df"
        title="Cyber Security"
        description="Protect systems from digital attacks."
      />
    </div>
  );
}

export default CardList;