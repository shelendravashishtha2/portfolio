import { Box, Button, Chip, Modal, ModalDialog } from "@mui/joy";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import "../../../css/poetry/submit-poetry/submit-poetry-dialog.css";
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
import SlateEditor from "../SlateEditor/Editor";
import { postEPoetry } from "../../../Apis/submit-poetry";
// postEpoetry;
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
  poetryDescription: {
    error: "",
    validation: (val) => validateEmptytextField({ text: val }),
    value: "",
    isRequired: true,
  },
  poetName: {
    validation: (val) => validateEmptytextField({ text: val }),
    error: "",
    value: "",
    isRequired: true,
  },
  poetDescription: {
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
  buyLink: {
    error: "",
    isRequired: false,
    validation: (val) => !val || validateSafeLink({ url: val }),
    value: "",
  },
  poetry: {
    error: "",
    isRequired: true,
    validation: (val) =>
      !deepCompare(val, [
        {
          type: "paragaph",
          children: [{ text: "" }],
        },
      ]),
    value: [
      {
        type: "paragaph",
        children: [{ text: "" }],
      },
    ],
  },
};

const deepCompare = (arg1, arg2) => {
  console.log("arg1, arg2 ", arg1, arg2);
  if (
    Object.prototype.toString.call(arg1) ===
    Object.prototype.toString.call(arg2)
  ) {
    if (
      Object.prototype.toString.call(arg1) === "[object Object]" ||
      Object.prototype.toString.call(arg1) === "[object Array]"
    ) {
      if (Object.keys(arg1).length !== Object.keys(arg2).length) {
        return false;
      }
      return Object.keys(arg1).every(function (key) {
        return deepCompare(arg1[key], arg2[key]);
      });
    }
    return arg1 === arg2;
  }
  return false;
};

const SubmitPoetryDialog = ({ isOpen, onClose }) => {
  const [formConfig, setFormConfig] = useState(defaultFormConfig);
  const [loading, setLoading] = useState(false);
  const submitHandler = async () => {
    try {
      setLoading(true);

      let newConfig = {};
      console.log("formConfig", formConfig);
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
      console.log("isValid", isValid);
      if (isValid) {
        let body = {};
        Object.keys(newConfig).map((e) => (body[e] = newConfig[e].value));
        console.log("body", body);
        await postEPoetry({ body: body, toaster: toast });
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
    console.log(e);
    const targetName = e.target ? e.target.name : null;
    let setConfig = { ...formConfig };
    console.log(name);
    if (targetName) {
      setConfig[targetName] = {
        ...setConfig[targetName],
        error: "",
        value:
          e.target && e.target.type != "file"
            ? e.target.value
            : e.target.files[0],
      };
    } else {
      setConfig[name] = {
        ...setConfig[name],
        error: "",
        value: e.target && e.target.type != "file" ? e.target.value : e,
      };
    }
    console.log(setConfig);
    setFormConfig(setConfig);
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
            width: "90%",
          }}
          variant="plain"
        >
          <div
            style={{
              fontSize: "2rem",
              fontFamily: "Shadows Into Light, cursive",
              marginBottom: "5px",
            }}
            className="poetry-input-form-heading"
          >
            Submit Your Poetry
          </div>
          <div className="poetry-input-form">
            <div className="poetry-typ-input">
              <label className="required" htmlFor="#title">
                Poetry Title
              </label>
              <input
                onChange={onValueChange}
                value={formConfig.title.value}
                className="poetry-input-field"
                name="title"
                id="title"
              />
              <span className="error">{formConfig.title.error}</span>
            </div>
            <div className="poetry-typ-input">
              <label className="required" htmlFor="#desc">
                Poetry Description
              </label>
              <textarea
                onChange={onValueChange}
                value={formConfig.poetryDescription.value}
                rows={6}
                // maxLength={250}
                id="desc"
                name="poetryDescription"
                className="poetry-input-field"
              ></textarea>
              <span className="error">
                {formConfig.poetryDescription.error}
              </span>
            </div>
            <div className="poetry-typ-input">
              <label className="required" htmlFor="#poetryName">
                Poet's Name
              </label>
              <input
                onChange={onValueChange}
                value={formConfig.poetName.value}
                name="poetName"
                className="poetry-input-field"
                id="poetryName"
              />
              <span className="error">{formConfig.poetName.error}</span>
            </div>
            <div className="poetry-typ-input">
              <label className="required" htmlFor="#title">
                Poet's Description
              </label>
              <textarea
                rows={6}
                // maxLength={2000}
                onChange={onValueChange}
                name="poetDescription"
                id="desc"
                value={formConfig.poetDescription.value}
                className="poetry-input-field"
              ></textarea>
              <span className="error">{formConfig.poetDescription.error}</span>
            </div>
            <div className="poetry-typ-input">
              <label className="required" htmlFor="#poetrygenre">
                Poetry Genre
              </label>
              <Select
                className="poetry-input-field"
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
            <div className="poetry-typ-input">
              <label className="required" htmlFor="#poetrygenre">
                Poetry's Language
              </label>
              <Select
                className="poetry-input-field"
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
            <div className="poetry-typ-input">
              <label htmlFor="#link">Poetry Link</label>
              <input
                onChange={onValueChange}
                value={formConfig.buyLink.value}
                name="buyLink"
                className="poetry-input-field"
                id="link"
              />
              <span className="error">{formConfig.buyLink.error}</span>
            </div>
            <div className="poetry-typ-input">
              <label className="required" htmlFor="#poetrygenre">
                Poetry
              </label>
              <SlateEditor
                editorValue={formConfig.poetry.value}
                handleChange={(e) => onValueChange(e, "poetry")}
              />
              <span className="error">{formConfig.poetry.error}</span>
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
              className="poetry-typ-input"
            >
              Save Your poetry
            </Button>
          </div>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default SubmitPoetryDialog;
