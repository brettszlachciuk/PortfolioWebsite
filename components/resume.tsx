import { Document, PDFPageItem } from "react-pdf";

export default function SinglePage(props: PDFPageItem) {
  //setting 1 to show fisrt page

  return (
    <>
      <Document
        file={props}
        options={{ workerSrc: "/pdf.worker.js" }}
      ></Document>
    </>
  );
}
