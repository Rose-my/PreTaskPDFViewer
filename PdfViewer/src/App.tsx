import PdfViewer from "./Pdfviewer";
const App = () => {
  const pdfUrl = './sample.pdf';
  return (
    <div>
      <h1>PDF Viewer</h1>
      <PdfViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default App;
