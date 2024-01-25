import { Box, Button, Chip, Modal, ModalDialog } from "@mui/joy";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "../../../css/books/submit-book/submit-book-dialog.css";
import { SvgIcon } from "@mui/material";
import { styled } from "@mui/material";
import { useState } from "react";

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

const SubmitBookDialog = ({ isOpen, onClose }) => {
  const [formConfig, setFormConfig] = useState({
    title: {
      error: "",
      value: "",
    },
    bookDescription: {
      error: "",
      value: "",
    },
    writerName: {
      error: "",
      value: "",
    },
    writerDescription: {
      error: "",
      value: "",
    },
    genre: {
      error: "",
      value: [],
    },
    buyLink: {
      error: "",
      value: "",
    },
    bookCover: {
      error: "",
      value: null,
    },
    writerPic: {
      error: "",
      value: null,
    },
    book: {
      error: "",
      value: null,
    },
  });

  const onValueChange = (e, name) => {
    const targetName = e.target.name;
    let setConfig = { ...formConfig };

    if (targetName) {
      setConfig[targetName] = {
        error: "",
        value: e.target.type != "file" ? e.target.value : e.target.files[0],
      };
    } else {
      console.log(e.target.value);
      setConfig[name] = {
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
            </div>
            <div className="book-typ-input">
              <label className="required" htmlFor="#desc">
                Book Description
              </label>
              <textarea
                onChange={onValueChange}
                value={formConfig.bookDescription.value}
                rows={6}
                maxLength={250}
                id="desc"
                name="bookDescription"
                className="book-input-field"
              ></textarea>
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
            </div>
            <div className="book-typ-input">
              <label className="required" htmlFor="#title">
                Writer Description
              </label>
              <textarea
                rows={6}
                maxLength={250}
                onChange={onValueChange}
                name="writerDescription"
                id="desc"
                value={formConfig.writerDescription.value}
                className="book-input-field"
              ></textarea>
              <div className="book-typ-input">
                <label className="required" htmlFor="#bookgenre">
                  Book Genre
                </label>
                <Select
                  className="book-input-field"
                  onChange={(e) => onValueChange(e, "genre")}
                  value={formConfig.genre.value}
                  multiple
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", gap: "0.25rem" }}>
                      {selected.map((selectedMenuItem) => (
                        <Chip
                          variant="soft"
                          style={{
                            fontWeight: "bolder",
                          }}
                          color="primary"
                        >
                          {
                            genres.filter((e) => e.id == selectedMenuItem)[0]
                              .name
                          }
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
                      <MenuItem key={index} value={genre.id}>
                        {genre.name}
                      </MenuItem>
                    );
                  })}
                </Select>
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
              </div>
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
            </div>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default SubmitBookDialog;
