export const validateEpubFileType = ({ fileName }) => {
  try {
    let extension = fileName.split(".");
    if (extension[extension.length - 1] === "epub") {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export const validateImageFileType = ({ imageName }) => {
  try {
    let imgExtensions = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "svg",
      "tiff",
      "tif",
      "webp",
    ];

    let extension = imageName.split(".");
    if (imgExtensions.find(extension)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
