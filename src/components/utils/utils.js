import { isURL } from "validator";

export const validateEpubFileType = ({ fileName }) => {
  try {
    let extension = fileName.split(".");
    if (extension.length && extension[extension.length - 1] === "epub") {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export const validateEmptytextField = ({ text }) => {
  try {
    if (!`${text}`.trim()) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    return false;
  }
};

export const validateSafeLink = ({ url }) => {
  try {
    if (isURL(url)) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};

export const validateEmptyArray = ({ array }) => {
  try {
    if (!array || !array.length) {
      return false;
    } else {
      return true;
    }
  } catch (e) {
    return false;
  }
};

export const validateImageFileType = ({ imageName }) => {
  try {
    console.log("imageName ", imageName);
    let imgExtensions = [
      "jpg",
      "jpeg",
      "png",
      "gif",
      "bmp",
      "svg",
      "tiff",
      "tif",
      "HEIC",
      "heic",
      "webp",
    ];

    let extension = imageName.split(".");
    if (
      extension.length &&
      imgExtensions.includes(extension[extension.length - 1])
    ) {
      return true;
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
