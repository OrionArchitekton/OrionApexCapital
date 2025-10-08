import clsx from "clsx";

export function Card({ children, as: Tag = "div", className = "" }) {
  return (
    <Tag className={clsx("panel panel--subtle", className)}>
      {children}
    </Tag>
  );
}

