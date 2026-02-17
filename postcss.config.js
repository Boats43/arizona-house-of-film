import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const plugins = [tailwindcss, autoprefixer];

// Check if we are in a production environment safely
const isProduction = typeof process !== 'undefined' && 
                     process.env && 
                     process.env.NODE_ENV === 'production';

if (isProduction) {
  plugins.push(cssnano({
    preset: 'default'
  }));
}

export default {
  plugins,
};