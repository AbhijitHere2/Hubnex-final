import React, { useState, useRef, useEffect } from "react";
import "./Certificate.css";

const Certificate = () => {
  const [name, setName] = useState("Abhishek");
  const [downloadLink, setDownloadLink] = useState("");
  const canvasRef = useRef(null);

  useEffect(() => {
    generateCertificate();
  }, []);

  const generateCertificate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const image = new Image();
    image.src = "./certificate.png";

    image.onload = () => {
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      ctx.font = "30px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(name, canvas.width / 2, canvas.height / 2);
      
      const dataUrl = canvas.toDataURL("image/png");
      setDownloadLink(dataUrl);
    };
  };

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
   <div className="w-full flex justify-center">
        <div className="container mb-6  bg-slate-400">
      <div className="id-card-text">
        <h3>Certificate</h3>
        <small>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          aspernatur nihil distinctio beatae, sed est magni offici
        </small>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
          consequatur quam velit cumque tenetur minima deserunt laborum
          quibusdam! Cum ea beatae ratione reprehenderit nemo itaque, quasi quas
          qui maiores cupiditate.
        </p>
        <div>
          {/*
          {downloadLink && (
            <a
              href={downloadLink}
              download="certificate.png"
              className="download-link"
              onClick={handleDownload}
            >
              Download Certificate
            </a>
          )}
          */}
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-clip"></div>
        <div className="id-card">
          <canvas ref={canvasRef} width="800" height="600" style={{ display: 'none' }}></canvas>
          <img src="./certificate.png" alt="Certificate" />
        </div>
      </div>
    </div>
   </div>

  );
};

export default Certificate;
