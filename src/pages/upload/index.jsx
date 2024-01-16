import { useState } from "react";
import * as XLSX from "xlsx";

const Upload = () => {
  const [excelfile, setExcelfile] = useState(null);
  const [typeError, setTypeError] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const handleFile = (e) => {
    let fileTypes = [
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    ];
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setTypeError(null);
        let reader = new FileReader();
        reader.readAsArrayBuffer(selectedFile);
        reader.onload = (e) => {
          console.log("===eee===", e.target.result);
          setExcelfile(e.target.result);
        };
      } else {
        setTypeError("File should be only Excel");
        setExcelfile(null);
      }
    } else {
      console.log("Please Select Your file");
    }
  };

  const handleFileSubmit = (e) => {
    e.preventDefault();
    if (excelfile !== null) {
      const workbook = XLSX.read(excelfile, { type: "buffer" });
      const worksheetname = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetname];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data.slice(0, 100));
      console.log("workbook", data.slice());
    }
  };
  console.log("data", excelData);
  return (
    <div>
      <form onSubmit={handleFileSubmit}>
        <input type="file" required draggable onChange={handleFile} />
        <button type="submit">Upload</button>
        {typeError && <div className="text-red-600">{typeError}</div>}
      </form>
      <div className="bg-gray-300 p-4 flex items-center justify-center">
        {excelData ? (
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr>
                  {Object.keys(excelData[0])?.map((data) => (
                    <th key={data}>{data}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {excelData?.map((individualExcelData, i) => (
                  <tr key={i}>
                    {Object.keys(individualExcelData)?.map((key) => (
                      <td key={key}>{individualExcelData[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div>
            <h2>No file is created yet!!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
