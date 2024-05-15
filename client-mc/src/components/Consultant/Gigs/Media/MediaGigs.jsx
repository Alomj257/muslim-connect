import React from "react";
import "./MediaGigs.css";
import { LuUploadCloud } from "react-icons/lu";
const MediaGigs = () => {
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
                Cliquez pour télécharger
              </span>
              <span style={{ fontSize: "14px" }}>ou glisser-déposer</span>
            </label>
            <input
              className="position-absolute"
              style={{ zIndex: "-1", opacity: "0" }}
              id="media"
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
            <span>
              <span style={{ fontSize: "14px" }} className="navbar-active mx-2">
                Cliquez pour télécharger
              </span>
              <span style={{ fontSize: "14px" }}>ou glisser-déposer</span>
            </span>
          </label>
          <input type="file" id="gigVideo" style={{ opacity: "0" }} />
        </div>
      </div>
    </div>
  );
};

export default MediaGigs;
