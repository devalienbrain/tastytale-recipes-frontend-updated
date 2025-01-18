

import Link from "next/link";
import FeaturedImages from "./Featured";

const Banner: React.FC = () => {
  return (
    <section className="w-full pt-20 pb-16 bg-gradient-to-b from-slate-950/10 via-slate-900/30 to-slate-900/10">
      {/* Featured Images Section */}
      <div>
        <FeaturedImages />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 mt-7">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-cyan-400 drop-shadow-md">
          Welcome to <span className="text-pink-500">Tasty Tales</span>
        </h1>
        <h3 className="pt-6 pb-3 text-base md:text-lg lg:text-xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent from-lime-400 via-emerald-400 to-teal-300">
          The Recipe Sharing Platform
        </h3>
        <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-200 dark:text-gray-100 max-w-2xl">
          Discover, share, and enjoy recipes from around the world. Your cooking
          adventure starts here! Explore authentic flavors, unique ingredients,
          and step-by-step guides to create memorable meals.
        </p>
        
        {/* Call-to-Action Button */}
        <div className="mt-8">
          <Link
             href="/recipes"
            className="inline-block px-6 py-3 text-sm md:text-base lg:text-lg font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            Explore Recipes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
