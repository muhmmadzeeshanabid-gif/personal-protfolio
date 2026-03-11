const fs = require("fs");
const path = require("path");
const { PDFDocument } = require("pdf-lib");

const pdfPath = path.join(__dirname, "..", "public", "Zeeshan_CV.pdf");

async function main() {
  if (!fs.existsSync(pdfPath)) {
    console.error(`PDF not found: ${pdfPath}`);
    process.exit(1);
  }

  const bytes = fs.readFileSync(pdfPath);
  const pdfDoc = await PDFDocument.load(bytes);

  const name = "Zeeshan Abid";
  pdfDoc.setTitle(name);
  pdfDoc.setAuthor(name);
  pdfDoc.setSubject("Resume");
  pdfDoc.setKeywords(["Zeeshan Abid", "Resume", "CV"]);

  const updatedBytes = await pdfDoc.save();
  fs.writeFileSync(pdfPath, updatedBytes);

  console.log("Updated PDF metadata:", pdfPath);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
