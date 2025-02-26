import "tailwindcss";
import "./App.css";


export default function App(){
 return (
  <>
    <main className="bg-[url('../icons/mixed.jpg')] h-screen w-screen bg-no-repeat bg-cover flex justify-center p-4">
      <section className="flex justify-center w-3/5 h-12">
        <div className="flex flex-grow relative ">
            <div className="absolute left-2">
               <svg className="fill-white max-w-8" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M44.5986 41.1514L35.4102 31.9629C37.6223 29.0179 38.8165 25.4333 38.8125 21.75C38.8125 12.3418 31.1582 4.6875 21.75 4.6875C12.3418 4.6875 4.6875 12.3418 4.6875 21.75C4.6875 31.1582 12.3418 38.8125 21.75 38.8125C25.4333 38.8165 29.0179 37.6223 31.9629 35.4102L41.1514 44.5986C41.6165 45.0144 42.2231 45.2364 42.8468 45.2189C43.4704 45.2015 44.0636 44.9459 44.5048 44.5048C44.9459 44.0636 45.2015 43.4704 45.2189 42.8468C45.2364 42.2231 45.0144 41.6165 44.5986 41.1514ZM9.5625 21.75C9.5625 19.3395 10.2773 16.9832 11.6165 14.979C12.9556 12.9748 14.8591 11.4127 17.086 10.4902C19.313 9.56778 21.7635 9.32642 24.1277 9.79668C26.4918 10.2669 28.6634 11.4277 30.3679 13.1321C32.0723 14.8366 33.2331 17.0082 33.7033 19.3723C34.1736 21.7365 33.9322 24.187 33.0098 26.414C32.0873 28.6409 30.5252 30.5444 28.521 31.8835C26.5168 33.2227 24.1605 33.9375 21.75 33.9375C18.5189 33.9336 15.4212 32.6483 13.1364 30.3636C10.8517 28.0788 9.56638 24.9811 9.5625 21.75Z" /></svg>
            </div>
            <input
               type="text"
               className="flex-grow bg-gray-700/77 bg-opacity-80 text-white placeholder-gray-300 p-2 pl-12 rounded-lg focus:outline-none"
               placeholder="Search for a city"
            />
        </div>
      </section>

      <section>
         <div>
            
         </div>
      </section>
    </main>
  </>
 );
}