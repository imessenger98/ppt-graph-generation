const htmlContent = ({
  verticalGraphBarImage,
  horizontalGraphBarImage,
  doughnutGraphBar,
}) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Base64 Images</title>
      <style>
        body {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-family: Arial, sans-serif;
        }
        
        h1 {
          margin-top: 20px;
        }
    
        .image-container {
          margin-top: 20px;
          text-align: center;
          border-top: 1px solid #ccc;
          padding-top: 20px;
        }
    
        img {
          max-width: 100%;
          height: auto;
        }
      </style>
    </head>
    <body>
      <h1>Base64 Images </h1>
    
      <div class="image-container">
        <h2>Vertical Graph Bar</h2>
        <img src="data:image/png;base64,${verticalGraphBarImage}" alt="Vertical Graph Bar">
      </div>
    
      <div class="image-container">
        <h2>Horizontal Graph Bar</h2>
        <img src="data:image/png;base64,${horizontalGraphBarImage}" alt="Horizontal Graph Bar">
      </div>
    
      <div class="image-container">
        <h2>Doughnut Graph Bar</h2>
        <img src="data:image/png;base64,${doughnutGraphBar}" alt="Doughnut Graph Bar">
      </div>
    </body>
    </html>
    `;
};
module.exports = { htmlContent };
