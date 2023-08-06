import { NavBarItemsLinksT } from '../../types/types';
import { Link } from 'react-scroll';
type NavBarListProps = {
  listItems: NavBarItemsLinksT;
  classList?: string;
  classItem?: string;
  closeMenu: () => void;
};

const NavBarList = ({ listItems, classList, classItem, closeMenu }: NavBarListProps) => {
  return (
    <ul className={classList}>
      {listItems.map(item => (
        <Link to={item.id} spy={true} smooth={true} offset={-50} duration={500} isDynamic={true}>
          <li key={item.name} className={classItem} onClick={closeMenu}>
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default NavBarList;
