import Link from "next/link";
import css from "./TagsMenu.module.css";
import { TagList } from "@/lib/api";

export default function TagsMenu() {
  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>
        Notes ▾
      </button>
        <ul className={css.menuList}>
          {
            TagList.map(item => (
              <li className={css.menuItem}>
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