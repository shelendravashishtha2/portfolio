import { Box, Button, Chip, Modal, ModalDialog } from "@mui/joy";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "../../../css/books/submit-book/submit-book-dialog.css";
import { SvgIcon } from "@mui/material";
import { styled } from "@mui/material";
import { useState } from "react";
import {
  validateEmptyArray,
  validateEmptytextField,
  validateEpubFileType,
  validateImageFileType,
  validateSafeLink,
} from "../../utils/utils";
import { toast } from "react-toastify";
import { postEBook } from "../../../Apis/submit-book";
// postEBook;
const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const defaultFormConfig = {
  title: {
    error: "",
    value: "",
    validation: (val) => validateEmptytextField({ text: val }),
    isRequired: true,
  },
  bookDescription: {
    error: "",
    validation: (val) => validateEmptytextField({ text: val }),
    value: "",
    isRequired: true,
  },
  writerName: {
    validation: (val) => validateEmptytextField({ text: val }),
    error: "",
    value: "",
    isRequired: true,
  },
  writerDescription: {
    error: "",
    validation: (val) => validateEmptytextField({ text: val }),
    value: "",
    isRequired: true,
  },
  genre: {
    error: "",
    isRequired: true,
    validation: (val) => validateEmptyArray({ array: val }),
    value: [],
  },
  language: {
    error: "",
    isRequired: true,
    validation: (val) => validateEmptytextField({ text: val }),
    value: "",
  },
  pages: {
    error: "",
    isRequired: true,
    validation: (val) => validateEmptytextField({ text: val }),
    value: "",
  },
  buyLink: {
    error: "",
    isRequired: false,
    validation: (val) => !val || validateSafeLink({ url: val }),
    value: "",
  },
  bookCover: {
    error: "",
    value: null,
    validation: (val) => val && validateImageFileType({ imageName: val.name }),
    isRequired: true,
  },
  writerPic: {
    isRequired: false,
    error: "",
    validation: (val) => !val || validateImageFileType({ imageName: val.name }),
    value: null,
  },
  book: {
    error: "",
    isRequired: true,
    validation: (val) => val && validateEpubFileType({ fileName: val.name }),
    value: null,
  },
};
const SubmitBookDialog = ({ isOpen, onClose }) => {
  const [formConfig, setFormConfig] = useState(defaultFormConfig);
  const [loading, setLoading] = useState(false);
  const submitHandler = async () => {
    try {
      setLoading(true);

      let newConfig = {};
      let isValid = true;
      Object.keys(formConfig).map((e) => {
        console.log(e);
        console.log(formConfig[e]);
        console.log(
          e,
          " ",
          formConfig[e],
          " ",
          formConfig[e].validation(formConfig[e].value)
        );
        newConfig[e] = formConfig[e];
        if (!formConfig[e].validation(formConfig[e].value)) {
          newConfig[e].error = "Invalid Input";
          isValid = false;
        } else {
          newConfig[e].error = "";
        }
      });
      if (isValid) {
        let body = {};
        Object.keys(newConfig).map((e) => (body[e] = newConfig[e].value));
        console.log("body", body);
        await postEBook({ body: body, toaster: toast });
        setFormConfig(defaultFormConfig);
        setLoading(false);
      } else {
        setFormConfig(newConfig);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  };

  const onValueChange = (e, name) => {
    const targetName = e.target.name;
    let setConfig = { ...formConfig };

    if (targetName) {
      setConfig[targetName] = {
        ...setConfig[targetName],
        error: "",
        value: e.target.type != "file" ? e.target.value : e.target.files[0],
      };
    } else {
      console.log(e.target.value);
      setConfig[name] = {
        ...setConfig[name],
        error: "",
        value: e.target.type != "file" ? e.target.value : e.target.files[0],
      };
    }
    setFormConfig(setConfig);
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.type);
    console.log(e.target.files);
    console.log(formConfig);
  };

  let genres = [
    {
      name: "Sui Generis",
      id: "sui-generis",
    },
    {
      name: "Politics",
      id: "politics",
    },
    {
      name: "Fantacy",
      id: "fantacy",
    },
    {
      name: "Biographies and Autobiographies",
      id: "biographies-and-autobiographies",
    },
    {
      name: "Religion",
      id: "religion",
    },
    {
      name: "Philosophy",
      id: "philosophy",
    },
    {
      name: "Poetry",
      id: "poetry",
    },
  ];

  let languages = [
    {
      name: "Hindi",
      id: "hindi",
    },
    {
      name: "English",
      id: "english",
    },
    {
      name: "Sanskrit",
      id: "devnagri",
    },
    {
      name: "Arabic",
      id: "arabic",
    },
    {
      name: "German",
      id: "german",
    },
  ];

  return (
    <>
      <Modal open={isOpen} onClose={onClose}>
        <ModalDialog
          style={{
            border: "1px solid var(--primary-color)",
            background: "var(--intro-canvas)",
            minHeight: "300px",
            height: "fit-content",
            maxHeight: "90%",
            scrollbarWidth: "none",
            overflow: "scroll",
            borderRadius: "30px",
            transition: "3s",
            width: "40%",
            color: "var(--primary-color)",
          }}
          variant="plain"
        >
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "Shadows Into Light, cursive",
              marginBottom: "5px",
            }}
          >
            Submit Your Book
          </div>
          <div className="book-input-form">
            <div className="book-typ-input">
              <label className="required" htmlFor="#title">
                Book Title
              </label>
              <input
                onChange={onValueChange}
                value={formConfig.title.value}
                className="book-input-field"
                name="title"
                id="title"
              />
              <span className="error">{formConfig.title.error}</span>
            </div>
            <div className="book-typ-input">
              <label className="required" htmlFor="#desc">
                Book Description
              </label>
              <textarea
                onChange={onValueChange}
                value={formConfig.bookDescription.value}
                rows={6}
                // maxLength={250}
                id="desc"
                name="bookDescription"
                className="book-input-field"
              ></textarea>
              <span className="error">{formConfig.bookDescription.error}</span>
            </div>
            <div className="book-typ-input">
              <label className="required" htmlFor="#writerName">
                Writer's Name
              </label>
              <input
                onChange={onValueChange}
                value={formConfig.writerName.value}
                name="writerName"
                className="book-input-field"
                id="writerName"
              />
              <span className="error">{formConfig.writerName.error}</span>
            </div>
            <div className="book-typ-input">
              <label className="required" htmlFor="#title">
                Writer Description
              </label>
              <textarea
                rows={6}
                // maxLength={2000}
                onChange={onValueChange}
                name="writerDescription"
                id="desc"
                value={formConfig.writerDescription.value}
                className="book-input-field"
              ></textarea>
              <span className="error">
                {formConfig.writerDescription.error}
              </span>
            </div>
            <div className="book-typ-input">
              <label className="required" htmlFor="#bookgenre">
                Book Genre
              </label>
              <Select
                className="book-input-field"
                onChange={(e) => onValueChange(e, "genre")}
                value={formConfig.genre.value}
                style={{
                  margin: "0",
                  padding: "0",
                }}
                multiple
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", gap: "0.25rem" }}>
                    {selected.map((selectedMenuItem, index) => (
                      <Chip
                        key={index}
                        variant="soft"
                        style={{
                          fontWeight: "bolder",
                        }}
                        color="primary"
                      >
                        {selectedMenuItem}
                      </Chip>
                    ))}
                  </Box>
                )}
                sx={{
                  minWidth: "15rem",
                }}
                slotProps={{
                  listbox: {
                    sx: {
                      width: "100%",
                    },
                  },
                }}
              >
                {genres.map((genre, index) => {
                  return (
                    <MenuItem key={index} value={genre.name}>
                      {genre.name}
                    </MenuItem>
                  );
                })}
              </Select>
              <span className="error">{formConfig.genre.error}</span>
            </div>
            <div className="book-typ-input">
              <label className="required" htmlFor="#bookgenre">
                Book's Language
              </label>
              <Select
                className="book-input-field"
                onChange={(e) => onValueChange(e, "language")}
                value={formConfig.language.value}
                style={{
                  margin: "0",
                  padding: "0",
                }}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", gap: "0.25rem" }}>
                    <Chip
                      variant="soft"
                      style={{
                        fontWeight: "bolder",
                      }}
                      color="primary"
                    >
                      {selected}
                    </Chip>
                  </Box>
                )}
                sx={{
                  minWidth: "15rem",
                }}
                slotProps={{
                  listbox: {
                    sx: {
                      width: "100%",
                    },
                  },
                }}
              >
                {languages.map((language, index) => {
                  return (
                    <MenuItem key={index} value={language.name}>
                      {language.name}
                    </MenuItem>
                  );
                })}
              </Select>
              <span className="error">{formConfig.language.error}</span>
            </div>
            <div className="book-typ-input">
              <label className="required" htmlFor="#title">
                Number of Pages
              </label>
              <input
                onChange={onValueChange}
                name="pages"
                id="desc"
                type="number"
                value={formConfig.pages.value}
                className="book-input-field"
              ></input>
              <span className="error">{formConfig.pages.error}</span>
            </div>
            <div className="book-typ-input">
              <label htmlFor="#link">Buy Link</label>
              <input
                onChange={onValueChange}
                value={formConfig.buyLink.value}
                name="buyLink"
                className="book-input-field"
                id="link"
              />
              <span className="error">{formConfig.buyLink.error}</span>
            </div>
            <div className="book-typ-input">
              <Button
                component="label"
                role={undefined}
                tabIndex={-1}
                onChange={(e) => onValueChange(e, "bookCover")}
                variant="outlined"
                color="neutral"
                name="bookCover"
                className="file-upload required"
                startDecorator={
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </SvgIcon>
                }
              >
                Selected Book Cover
                <VisuallyHiddenInput type="file" />
              </Button>
              {formConfig.bookCover.value ? (
                <p className="file-info">
                  File : {formConfig.bookCover.value.name}
                </p>
              ) : (
                ""
              )}
              <span className="error">{formConfig.bookCover.error}</span>
            </div>
            <div className="book-typ-input">
              <Button
                component="label"
                role={undefined}
                tabIndex={-1}
                variant="outlined"
                onChange={(e) => onValueChange(e, "writerPic")}
                name="writerPic"
                color="neutral"
                className="file-upload"
                startDecorator={
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </SvgIcon>
                }
              >
                Select Writer Pic
                <VisuallyHiddenInput type="file" />
              </Button>
              {formConfig.writerPic.value ? (
                <p className="file-info">
                  File : {formConfig.writerPic.value.name}
                </p>
              ) : (
                ""
              )}
              <span className="error">{formConfig.writerPic.error}</span>
            </div>
            <div className="book-typ-input">
              <Button
                component="label"
                role={undefined}
                tabIndex={-1}
                variant="outlined"
                color="neutral"
                onChange={(e) => onValueChange(e, "book")}
                name="book"
                className="file-upload required"
                startDecorator={
                  <SvgIcon>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                      />
                    </svg>
                  </SvgIcon>
                }
              >
                Select Book [epub file]
                <VisuallyHiddenInput type="file" />
              </Button>
              {formConfig.book.value ? (
                <p className="file-info">File : {formConfig.book.value.name}</p>
              ) : (
                ""
              )}
              <span className="error">{formConfig.book.error}</span>
            </div>
            <Button
              loading={loading}
              style={{
                width: "fit-content",
                padding: "8px 10px",
                margin: "20px auto",
                background: "var(--github-green-color)",
              }}
              onClick={submitHandler}
              className="book-typ-input"
            >
              Save Your Book
            </Button>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default SubmitBookDialog;
