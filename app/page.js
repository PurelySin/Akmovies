import React from 'react';
import { Play, Info } from 'lucide-react';

async function getMovies(type) {
  const API_KEY = '56b50689afe7438a51aab0d653679865'; // Bhai ye dummy key hai, apni TMDB se replace karna
  const res = await fetch(`https://api.themoviedb.org/3${type}?api_key=${API_KEY}`);
  return res.json();
}

export default async function Home() {
  const trending = await getMovies('/trending/movie/day');
  const action = await getMovies('/discover/movie?with_genres=28');
  const hero = trending.results[0];

  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <div className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] to-transparent z-10" />
        <img src={`https://image.tmdb.org/t/p/original${hero.backdrop_path}`} className="w-full h-full object-cover" />
        <div className="absolute top-[30%] left-10 z-20">
          <h1 className="text-6xl font-extrabold mb-4">{hero.title}</h1>
          <div className="flex gap-4">
            <a href={`/watch/${hero.id}`} className="bg-white text-black px-8 py-2 rounded font-bold flex items-center gap-2"> <Play size={20} fill="black" /> Play</a>
          </div>
        </div>
      </div>

      {/* Row: Trending */}
      <div className="px-10 -mt-20 relative z-30 space-y-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">Trending Now</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-10">
            {trending.results.map(movie => (
              <a key={movie.id} href={`/watch/${movie.id}`} className="min-w-[200px] hover:scale-105 transition duration-300">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="rounded-md" />
              </a>
            ))}
          </div>
        </div>

        {/* Row: Action */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Action Hits</h2>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-10">
            {action.results.map(movie => (
              <a key={movie.id} href={`/watch/${movie.id}`} className="min-w-[200px] hover:scale-105 transition duration-300">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="rounded-md" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
