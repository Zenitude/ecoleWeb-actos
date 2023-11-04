import { useState } from "react";
import { DropdownProps } from "../../utils/types/DropdownProps"
import { plus, minus } from "../../assets";


export default function Dropdown({summary, content}: DropdownProps) {
  const [ toggle, setToggle ] = useState(false);

  return (
    <details>
      <summary onClick={() => setToggle(!toggle)}>
        <span>{summary}</span>
        <img src={toggle ? minus : plus} alt={"open/close details"} />
      </summary>
      <div className="content">
        <h3>{content.title}</h3>
        <p>{content.txt}</p>
      </div>
    </details>
  )
}
