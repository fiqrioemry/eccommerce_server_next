const multer = require("multer");
const path = require("path");
const cloudinary = require("../utils/Cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "images", // <-- folder name in cloudinary storage
    format: async (req, file) => "webp",
    public_id: (req, file) => {
      const timestamp = Date.now();
      const filename = file.originalname.replace(/\.[^/.]+$/, ""); // remove file extension
      const cleanFilename = filename.replace(/\s+/g, "_"); // replace spaces with underscores
      return `${cleanFilename}_${timestamp}`;
    },
    transformation: [{ width: 400, height: 400, crop: "limit" }],
  },
});

module.exports = multer({
  storage: storage,
  limits: { fileSize: "1000000" },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|webp|png/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));

    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
});
