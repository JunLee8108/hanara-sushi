import "./LoadingMinHeight100.css";

import BeatLoader from "react-spinners/BeatLoader";

export default function LoadingMinHeight100() {
  return (
    <>
      <div className="loading-height-container display-flex-center">
        <BeatLoader color="black" />
      </div>
    </>
  );
}
