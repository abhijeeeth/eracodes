import React from 'react';

const languages = [
  { name: 'JavaScript', image: 'https://c4.wallpaperflare.com/wallpaper/966/672/905/javascript-minimalism-wallpaper-preview.jpg', description: 'A high-level programming language.' },
  { name: 'Python', image: 'https://miro.medium.com/v2/resize:fit:640/format:webp/1*49Ge0PYuwyPqpG3vl9N9zg.png', description: 'An interpreted, high-level and general-purpose programming language.' },
  { name: 'Django', image: 'https://miro.medium.com/v2/resize:fit:828/format:webp/1*S4_1BT8vWcZ_qVnT1Pn0sQ.png', description: 'A class-based, object-oriented programming language.' },
  { name: 'React.JS', image: 'https://shethink.in/wp-content/uploads/2021/07/react.js-img.png', description: 'A general-purpose programming language created as an extension of the C programming language.' },
  { name: 'PhP', image: 'https://itcjaipur.com/images/PHP%20Language.jpg', description: 'A high-level programming language.' },
  { name: 'Template', image: 'https://logowik.com/content/uploads/images/css3-html51661.jpg', description: 'An interpreted, high-level and general-purpose programming language.' },
];

const LanguageCard = ({ language }) => (
    <div className="max-w-xs rounded overflow-hidden">
      <img className="w-full h-40 object-cover border-2 drop-shadow-sm" src={language.image} alt={language.name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-start whitespace-nowrap">{language.name}</div>
        {/* <p className="text-gray-700 text-base">{language.description}</p> */}
      </div>
    </div>
  );
  

const LanguageList = () => (
    <div className='mt-60 py-8 px-24'>
    <h1 className=' text-center font-bold my-4 text-xl'>Catagories</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 ">
    {languages.map((language, index) => (
      <LanguageCard key={index} language={language} />
    ))}
  </div>
  </div>
);

export default LanguageList;
