import React, { useState } from "react";
import { AnimatedPointerProps } from "./pointer.type";

import "./pointer.style.css";

const AnimatedPointer: React.FC = (props: AnimatedPointerProps) => {
  const [state, setState] = useState({ pX: 0, pY: 0 });
  const { pX, pY } = state || {};
  const rippleW = 30;
  const rippleH = 30;

  const mouseClicked = (e: React.MouseEvent) => {
    appendRipple(pX, pY);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    setState({ pX: e.pageX, pY: e.pageY });
  };

  const appendRipple = (x: number, y: number) => {
    // To remove existing ripple element from dom.
    removeRipple("ripplespan-01");
    const span = document.createElement("span");
    span.setAttribute("id", "ripplespan-01");

    if (span) {
      span.classList.add("ripple");
      span.classList.add("rippleEffect");
      span.style.top = y - rippleW / 2 + "px"; //center point
      span.style.left = x - rippleH / 2 + "px"; //center point
      span.style.width = rippleW + "px";
      span.style.height = rippleH + "px";
    }

    document.body.appendChild(span);
  };

  const appendStaticPointer = (x: number, y: number) => {
    const span = document.getElementById("staticspan-01");

    if (span) {
      span.classList.add("staticspan");
      span.style.top = y - 50 / 2 + "px"; //center point
      span.style.left = x - 50 / 2 + "px"; //center point
      span.style.width = 50 + "px";
      span.style.height = 50 + "px";
    }
  };

  const removeRipple = (id: string) => {
    const span = document.getElementById(id);
    if (span) {
      span.parentNode?.removeChild(span);
    }
  };

  const onTouchStart = (e: any) => {
    if ("ontouchstart" in document.documentElement) {
      const totalTouches = e.touches.length;
      if (totalTouches > 0) {
        const newTouch = e.touches[totalTouches - 1];
        const x = newTouch.clientX;
        const y = newTouch.clientY;
        setState({ pX: x, pY: e.y });
      }
    }
  };

  const onDragOver = (e: React.MouseEvent) => {
    e.preventDefault();
    onMouseMove(e);
    appendStaticPointer(pX, pY);
  };

  const onDragEnd = (e: React.MouseEvent) => {
    removeRipple("staticspan-01");
  };
  const onDragStart = (e: React.MouseEvent) => {
    const span = document.createElement("span");
    span.setAttribute("id", "staticspan-01");
    document.body.appendChild(span);
  };

  return (
    <div
      onClick={mouseClicked}
      onMouseMove={onMouseMove}
      onTouchStart={onTouchStart}
      draggable
      onDragOver={onDragOver}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {props.children}
    </div>
  );
};

export default AnimatedPointer;
