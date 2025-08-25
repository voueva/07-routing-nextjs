// app/notes/filter/@sidebar/default.tsx

import { TagList } from "@/lib/api";
import Link from "next/link";
import css from "./SidebarNotes.module.css";

const NotesSidebar = async () => {
    const categories = TagList;

  return (
    <ul className={css.menuList}>
      {categories.map((category) => (
        <li key={category} className={css.menuItem}>
          <Link className={css.menuLink} href={`/notes/filter/${category}`}>{category}</Link>
        </li>
      ))}
    </ul>
  );
};
  
export default NotesSidebar;
  