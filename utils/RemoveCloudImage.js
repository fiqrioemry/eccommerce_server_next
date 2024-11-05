const cloudinary = require("cloudinary").v2;

module.exports = (url) => {
  const fileName = url.split("/").at(-1).split(".").at(0);

  cloudinary.uploader.destroy(`images/${fileName}`, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("file deleted successfuly:");
    }
  });
};
