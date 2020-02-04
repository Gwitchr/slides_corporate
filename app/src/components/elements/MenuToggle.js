import React from "react";
import { motion } from "framer-motion";

const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="2"
    stroke={props.light?'#f2f2f2':'#3c3c3c'}
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ className,toggle, collapse, hasPulse,light,...rest }) => (
  <motion.span
      initial={false}
      animate={collapse?'open':'closed'}
    >
    <button {...rest} className={`${className} menu_toggle btn ${hasPulse&&!collapse?'pulse':''}`}>
    {collapse}
      <svg width="24" height="24" viewBox="0 0 24 24">
        <Path
          light={light}
          variants={{
            closed: { d: "M 2 8 L 22 8" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />

        <Path
          light={light}
          variants={{
            closed: { d: "M 2 16 L 22 16" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </button>
  </motion.span>
);

export default MenuToggle
