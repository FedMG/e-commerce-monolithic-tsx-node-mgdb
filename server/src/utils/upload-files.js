import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

import { uploadStaticFileToTheCloud } from '../cloud/controller-static.js'

const filterExtensions = (files) => {
  const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png']
  return files.filter(file => {
    const extension = path.extname(file);
    return VALID_EXTENSIONS.includes(extension.toLowerCase());
  });
}


const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesPath = path.join(__dirname, '../images');

fs.readdir(imagesPath, async (err, files) => {
  if (err) throw new Error(`${err.name}: ${err.message}, codeError: ${err.code} `)
  
  try {
    const images = filterExtensions(files)
    
    const getSecureURLs = async (file) => {
      const image = path.join(imagesPath, file)
      const buffer = fs.readFileSync(image)
      return await uploadStaticFileToTheCloud(buffer)
    }
    
    const secure_urls = await Promise.all(images.map(getSecureURLs));
    console.log(`Uploaded ${secure_urls.length} images to Cloudinary`);
    process.exit(0)
  } catch (error) {
    console.log('Save data failed', { cause: error })
    process.exit(1)
  }
});
