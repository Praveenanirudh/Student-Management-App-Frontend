import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="text-center h-15 w-15  bg-gray-800 bottom-0 "
        style={{ color: "rgba(255,255,255, 0.2)" }}
      >
        <div className="text-center text-xs mt-24 p-8">
          <p className=" text-sm" style={{ color: "rgba(255,255,255, 0.2)" }}>
            All Right Reserved To Praveen Anirudh
          </p>
          <p>© 2022 Copyright</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
