import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Ensure the correct type for pdfjs.GlobalWorkerOptions
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfViewerProps {
  // Assume the pdfUrl is a string representing the PDF file path
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < (numPages || 0)) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <div>
      <Document file={require(`./sample.pdf`)} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={goToPreviousPage} disabled={pageNumber <= 1}>
        Previous Page
      </button>
      <button onClick={goToNextPage} disabled={pageNumber >= (numPages || 0)}>
        Next Page
      </button>
    </div>
  );
};

export default PdfViewer;
