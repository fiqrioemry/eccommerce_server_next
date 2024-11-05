const cloudinary = require("cloudinary").v2;

module.exports = (url) => {
  const fileNameWithExtension = url.split("/").pop();
  const fileName = fileNameWithExtension.slice(
    0,
    fileNameWithExtension.lastIndexOf(".")
  );

  cloudinary.uploader.destroy(`images/${fileName}`, function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("file deleted successfuly:");
    }
  });
};
