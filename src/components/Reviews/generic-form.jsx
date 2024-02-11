import { Box, Button, Chip, Modal, ModalDialog } from "@mui/joy";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { SvgIcon } from "@mui/material";
import { styled } from "@mui/material";
import { useState } from "react";
import "../../css/books/Details/review-form.css";
import { toast } from "react-toastify";
// import { postEBook } from "../../../Apis/submit-book";
import {
  validateEmptyArray,
  validateEmptytextField,
  validateEpubFileType,
  validateImageFileType,
  validateSafeLink,
} from "../utils/utils";
import { submitBookReview } from "../../Apis/submit-review";
import { submitPoetryReview } from "../../Apis/submit-poetry-review";
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
  name: {
    error: "",
    value: "",
    validation: (val) => validateEmptytextField({ text: val }),
    isRequired: true,
  },
  review: {
    error: "",
    value: "",
    validation: (val) => validateEmptytextField({ text: val }),
    isRequired: true,
  },
  rating: {
    error: "",
    value: 0,
    validation: (val) => !!val,
    isRequired: true,
  },
};
const GenericReviewForm = ({ id, handleClose, isBook }) => {
  const [formConfig, setFormConfig] = useState(defaultFormConfig);
  const [loading, setLoading] = useState(false);
  const submitHandler = async () => {
    try {
      setLoading(true);

      let newConfig = {};
      let isValid = true;
      Object.keys(formConfig).map((e) => {
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
        if (isBook) {
          await submitBookReview({ body: body, toaster: toast, id: id });
        } else {
          await submitPoetryReview({ body: body, toaster: toast, id: id });
        }
        // await postEBook({ body: body, toaster: toast });
        setFormConfig(defaultFormConfig);
        setLoading(false);
        handleClose();
      } else {
        setFormConfig(newConfig);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
    }
  }; //this is a complete new comment, what a book, oh my Jod, Paani choot gya, maa ki choot

  const onValueChange = (e, name) => {
    console.log(e);
    const targetName = e.target.name;
    let setConfig = { ...formConfig };

    if (targetName) {
      console.log(e.target.value);

      setConfig[targetName] = {
        ...setConfig[targetName],
        error: "",
        value: e.target.type != "file" ? e.target.value : e.target.files[0],
      };
    } else {
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
    console.log(setConfig);
  };

  return (
    <>
      <div
        style={{
          fontSize: "2rem",
          fontFamily: "Shadows Into Light, cursive",
          marginBottom: "5px",
          color: "var(--primary-color)",
        }}
      >
        Leave a Review
      </div>
      <div className="book-input-form">
        <div className="book-typ-input">
          <label className="required" htmlFor="#title">
            Name
          </label>
          <input
            onChange={onValueChange}
            value={formConfig.name.value}
            className="book-input-field"
            name="name"
            id="title"
          />
          <span className="error">{formConfig.name.error}</span>
        </div>
        <div className="book-typ-input">
          <label className="required" htmlFor="#desc">
            Review
          </label>
          <textarea
            onChange={onValueChange}
            value={formConfig.review.value}
            rows={6}
            // maxLength={250}
            id="desc"
            name="review"
            className="book-input-field"
          ></textarea>
          <span className="error">{formConfig.review.error}</span>
        </div>
        <div
          className="book-typ-input"
          style={{
            width: "fit-content",
          }}
        >
          {" "}
          <Rating
            emptyIcon={
              <StarIcon
                style={{
                  color: "#aaa",
                }}
                fontSize="inherit"
              />
            }
            color="var(--primary-color)"
            name="rating"
            value={formConfig.rating.value}
            onChange={onValueChange}
          />
          <div>
            <span className="error">{formConfig.rating.error}</span>
          </div>
        </div>
        <Button
          loading={loading}
          style={{
            padding: "8px 10px",
            background: "var(--github-green-color)",
          }}
          onClick={submitHandler}
          className="book-typ-input"
        >
          Save Your Review
        </Button>
      </div>
    </>
  );
};

export default GenericReviewForm;
