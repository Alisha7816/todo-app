import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";
import { motion } from "framer-motion";

const TodoItems = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <motion.div
      className="flex items-center my-3 gap-2"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <div
        onClick={() => {
          toggle(id);
        }}
        className="flex flex-1 items-center cursor-pointer"
      >
        <img
          src={isComplete ? tick : not_tick}
          alt=""
          className={`w-7 tick-icon ${isComplete ? "active" : ""}`}
        />
        <p
          className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${
            isComplete ? "line-through" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => {
          deleteTodo(id);
        }}
        src={delete_icon}
        alt="Delete"
        className="w-3.5 cursor-pointer hover:scale-110 transition-transform"
      />
    </motion.div>
  );
};

export default TodoItems;