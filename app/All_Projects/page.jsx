import React from 'react';

const languages = [
  {
    name: 'Online Recipe App',
    price: 79.99,
    image: 'https://example.com/recipe-app.jpg',
    lang: 'python',
    description: 'An app for finding and sharing recipes from around the world.',
  },
  {
    name: 'Personal Budget Tracker',
    price: 49.99,
    image: 'https://example.com/budget-tracker.jpg',
    lang: 'python',
    description: 'A tool for tracking expenses, creating budgets, and managing finances.',
  },
  {
    name: 'Task Management Tool',
    price: 89.99,
    image: 'https://example.com/task-manager.jpg',
    lang: 'python',
    description: 'A platform for organizing tasks, assigning deadlines, and tracking progress.',
  },
  {
    name: 'Weather Forecast App',
    price: 69.99,
    image: 'https://c4.wallpaperflare.com/wallpaper/148/249/100/world-war-ii-soldier-tank-white-wallpaper-preview.jpg',
    lang: 'python',
    description: 'An app for checking weather forecasts, radar maps, and severe weather alerts.',
  },
  {
    name: 'Stock Trading Simulator',
    price: 129.99,
    image: 'https://example.com/stock-simulator.jpg',
    lang: 'python',
    description: 'A virtual trading platform for practicing stock trading strategies without real money.',
  },
  {
    name: 'Language Learning App',
    price: 99.99,
    image: 'https://c4.wallpaperflare.com/wallpaper/148/249/100/world-war-ii-soldier-tank-white-wallpaper-preview.jpg',
    lang: 'python',
    description: 'An app for learning new languages through interactive lessons and exercises.',
  },
  {
    name: 'Event Planning Tool',
    price: 79.99,
    image: 'https://example.com/event-planner.jpg',
    lang: 'python',
    description: 'A tool for planning and organizing events, managing guest lists, and sending invitations.',
  },
  {
    name: 'Fitness Challenge App',
    price: 59.99,
    image: 'https://c4.wallpaperflare.com/wallpaper/148/249/100/world-war-ii-soldier-tank-white-wallpaper-preview.jpg',
    lang: 'python',
    description: 'An app for setting fitness goals, tracking progress, and participating in challenges.',
  },
  {
    name: 'Pet Adoption Website',
    price: 109.99,
    image: 'https://c4.wallpaperflare.com/wallpaper/274/323/713/code-php-html-ilya-pavlov-wallpaper-preview.jpg',
    lang: 'python',
    description: 'A website for finding and adopting pets from local shelters and rescue organizations.',
  },
  {
    name: 'Online Marketplace Platform',
    price: 149.99,
    image: 'https://c4.wallpaperflare.com/wallpaper/274/323/713/code-php-html-ilya-pavlov-wallpaper-preview.jpg',
    lang: 'python',
    description: 'A platform for buying and selling goods, services, and digital products.',
  },
  {
    name: 'Portfolio Website Template',
    price: 39.99,
    image: 'https://example.com/portfolio-template.jpg',
    lang: 'python',
    description: 'A customizable template for creating professional portfolio websites for individuals and businesses.',
  },
  {
    name: 'Virtual Event Platform',
    price: 199.99,
    image: 'https://c4.wallpaperflare.com/wallpaper/274/323/713/code-php-html-ilya-pavlov-wallpaper-preview.jpg',
    lang: 'python',
    description: 'A platform for hosting virtual events, conferences, webinars, and online meetings.',
  },
  {
    name: 'Recipe Blog Website',
    price: 89.99,
    image: 'https://example.com/recipe-blog.jpg',
    lang: 'python',
    description: 'A blog website featuring a collection of delicious recipes, cooking tips, and food-related articles.',
  },
  {
    name: 'Property Rental App',
    price: 119.99,
    image: 'https://c4.wallpaperflare.com/wallpaper/274/323/713/code-php-html-ilya-pavlov-wallpaper-preview.jpg',
    lang: 'python',
    description: 'An app for searching, listing, and renting residential and commercial properties.',
  },
  {
    name: 'Music Streaming Service',
    price: 169.99,
    image: 'https://c4.wallpaperflare.com/wallpaper/274/323/713/code-php-html-ilya-pavlov-wallpaper-preview.jpg',
    lang: 'python',
    description: 'A streaming platform for listening to music, podcasts, and audiobooks on-demand.',
  },
];


const ProjectCard = ({ language }) => (
    <div className="max-w-xs rounded overflow-hidden">
      <img className="w-full h-40 rounded-lg object-cover border-2 drop-shadow-sm" src={language.image} alt={language.name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-base mb-2 text-center ">{language.name}</div>
        {/* <p className="text-gray-700 text-base">{language.description}</p> */}
      </div>
    </div>
  );
  

const AllProjects = () => (
    <div className='mt-2 py-4 px-24'>
    <h1 className=' text-center font-bold my-4 text-xl'>All Projects</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
    {languages.map((language, index) => (
      <ProjectCard key={index} language={language} />
    ))}
  </div>
  </div>
);

export default AllProjects;
