import React, { useState } from "react";
import "./MediaGigs.css";
import { LuUploadCloud } from "react-icons/lu";
const MediaGigs = ({ gigs, setGigs }) => {
  const [fileName, setFileNames] = useState("");
  const handleMultiChange = (e) => {
    const { value, name, files } = e.target;
    setGigs((prevGigs) => ({
      ...prevGigs,
      [name]: files ? files : value,
    }));
  };
  const handleVideoChange = (e) => {
    const { files } = e.target;
    if (files) {
      setFileNames(files[0]?.name);
      setGigs((prevGigs) => ({
        ...prevGigs,
        gigsImages: [...prevGigs?.gigsImages, files[0]],
      }));
    }
  };
  console.log(fileName);
  return (
    <div className="media-gigs">
      <h4 className="my-4 fw-bold">Médias</h4>

      <h5>Gig Images</h5>
      <div className="d-flex">
        <div className="w-100 border rounded-4 border-2 media-img position-relative">
          <div
            className="position-absolute d-flex  "
            style={{ inset: "0", zIndex: "3" }}
          >
            <label
              htmlFor="media"
              style={{ inset: "0", zIndex: "3", cursor: "pointer" }}
              className="m-auto position-absolute gap-1 d-flex flex-column align-items-center justify-content-center"
            >
              <span className="p-2 border rounded">
                <LuUploadCloud size={25} />
              </span>
              <span style={{ fontSize: "14px" }} className="navbar-active">
                {gigs?.gigsImages
                  ? fileName
                    ? gigs?.gigsImages?.length - 1 + " x Images"
                    : gigs?.gigsImages?.length + " x Images"
                  : "Cliquez pour télécharger"}
              </span>
              <span style={{ fontSize: "14px" }}>ou glisser-déposer</span>
            </label>
            <input
              onChange={handleMultiChange}
              multiple
              className="position-absolute"
              style={{ zIndex: "-1", opacity: "0" }}
              id="media"
              name="gigsImages"
              type="file"
            />
          </div>
        </div>
        <div className="w-100 media-img border rounded-4 border-2">
          <img src="" alt="" />
        </div>
        <div className="w-100 media-img border rounded-4 border-2">
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <h5 className="my-4">Gig Video</h5>
        <div className="border border-2 position-relative rounded rounded-4">
          <label
            htmlFor="gigVideo"
            className="gigVideo-label d-flex align-items-center justify-content-center flex-column gap-1"
            style={{ cursor: "pointer" }}
          >
            <span className="p-2 border rounded">
              <LuUploadCloud size={25} />
            </span>
            {fileName ? (
              fileName
            ) : (
              <span>
                <span
                  style={{ fontSize: "14px" }}
                  className="navbar-active mx-2"
                >
                  Cliquez pour télécharger
                </span>
                <span style={{ fontSize: "14px" }}>ou glisser-déposer</span>
              </span>
            )}
          </label>
          <input
            onChange={handleVideoChange}
            type="file"
            id="gigVideo"
            style={{ opacity: "0" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MediaGigs;
