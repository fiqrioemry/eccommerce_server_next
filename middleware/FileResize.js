const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

module.exports = async (req, res, next) => {
  try {
    // for single image file upload
    if (req.file) {
      const imagePath = path.join(process.cwd(), "images", req.uploadName);
      sharp(imagePath)
        .toFormat("webp")
        .webp({ quality: 90 })
        .toFile(`images/${req.formatWebp}`, () => {
          fs.unlinkSync(imagePath);
        });

      // for multiple images file upload : the size will be reduced and create a watermark
    } else {
      await req.files.map((file) => {
        const newFileName = `${Date.now()}.webp`;
        file.filename = newFileName;

        // adding custom watermark on image using storename
        const text = `COPYRIGHT BY ${req.user.storeName.toUpperCase()}`;
        const svgBuffer = Buffer.from(createSVG(text));

        // reduce the file size and format to webp
        sharp(file.path)
          .resize(400, 400, {
            fit: sharp.fit.inside,
            withoutEnlargement: true,
          })
          .composite([{ input: svgBuffer, top: 150, left: 0 }])
          .toFormat("webp")
          .webp({ quality: 90 })
          .toFile(`images/${newFileName}`, () => {
            fs.unlinkSync(file.path);
          });
      });
    }
    next();
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// create SVG file function
function createSVG(text) {
  return `<svg width="350" height="100"> 
     <style>.title {fill: rgba(255,255,255,0.5); font-size: 16px; font-weight: bold; font-family: arial}</style>
     <text x="50%" y="50%" text-anchor="middle" class="title">${text}</text>
   </svg>
  `;
}
