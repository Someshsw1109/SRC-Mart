import { useNavigate } from "react-router-dom";

// category
const category = [
  {
    image: "https://cdn-icons-png.flaticon.com/256/4359/4359963.png",
    name: "Entertainment",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12114/12114279.png",
    name: "Technology",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/8174/8174424.png",
    name: "Dresses",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/7648/7648246.png",
    name: "Electronics",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/12142/12142416.png",
    name: "Laptop",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/10686/10686553.png",
    name: "Shoes",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/256/11946/11946316.png",
    name: "Stationary",
  },
];

const Category = () => {
  // navigate
  const navigate = useNavigate();
  return (
    <div className="mt-10">
      {/* Top */}
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold mb-5">Shop by Category</h1>
      </div>

      {/* Main */}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
        {/* category */}
        {category.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate(`/category/${item.name}`)}
            >
              {/* Image */}
              <div className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-pink-500 transition-all hover:bg-pink-400 flex items-center justify-center">
                <img src={item.image} alt={item.name} className="w-12 h-12" />
              </div>

              {/* Name Text */}
              <h1 className="text-sm lg:text-lg text-center font-medium title-font mt-2">
                {item.name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;