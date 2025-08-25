'use client';

import Link from "next/link";
import css from "./TagsMenu.module.css";
import { TagList } from "@/lib/api";
import { useState } from "react";

export default function TagsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton} onClick={() => { setIsOpen(!isOpen) }}>
        Notes ▾
      </button>
      <ul className={`${css.menuList} ${isOpen ? '' : css.hidden}`}>
        {
          TagList.map(item => (
            <li key={item} className={css.menuItem} onClick={() => { setIsOpen(!isOpen) }}>
              <Link href={'/notes/filter/' + item} className={css.menuLink}>
                {item}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}