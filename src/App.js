/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./App.css";
import { HexColorPicker } from "react-colorful";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("#aabbcc");
  const [isOpen, toggle] = useState(false);

  return (
    <>
      {/* react-colorful */}
      <div className="mx-auto container flex-col justify-center w-100">
        <div className="relative top-16 w-1/3 m-auto">
          <div
            css={css`
              width: 100px;
              height: 20px;
              margin-top: 10px;
              margin-left: 10px;
              background-color: ${color};
              border-radius: 4px;
              position: absolute;
              z-index: 1;
            `}
          />

          <input
            name="text"
            type="text"
            className={`relative w-full block px-3 py-2 bg-gray-50 border rounded-md pl-32`}
            value={color}
            onClick={() => toggle(!isOpen)}
          />
          {isOpen && (
            <HexColorPicker
              color={color}
              onChange={setColor}
              css={css`
                margin-top: 1px;
              `}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
