/** @type {import('tailwindcss').Config} */
const config = {
   content: [
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         colors: {
         myGray : 'rgba(37, 37, 37, 0.77)',
         }
      }
   }
}


 export default config;