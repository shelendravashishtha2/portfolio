import EpubViewer from "../epub_viewer";

const ReadBookComponent = () => {
  return (
    <>
      <EpubViewer epubUrl={"/book.epub"} onChapterChange={() => {}} />
    </>
  );
};

export default ReadBookComponent;
