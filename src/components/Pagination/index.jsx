import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { List } from './styles'

const Pagination = ({
  limitPerPage,
  totalItems,
  currentPage = 1,
  maxLinks = 5,
  onPageChange
}) => {

  if (totalItems <= 0) {
    return null;
  }

  const maxLinksAround = maxLinks ? (maxLinks - 1) / 2 : 5;
  const current = currentPage || 1;
  const pages = Math.ceil(totalItems / limitPerPage);
  const first = Math.max(current - maxLinksAround, 1);

  const links = Array.from({
    length: Math.min(maxLinks, (pages - first) + 1)
  }, (_, index) => index + first)

  return (
    <List className="pagination">
      <li>
        <button
          onClick={() => onPageChange(current - 1)}
          className={current === 1 ? 'disabled' : 'active'}
        >
          < IoIosArrowBack />
        </button>
      </li>
      {links.map((page) => (
        <li key={page}>
          <button
            onClick={() => onPageChange(page)}
            className={
              page === current
                ? 'pagination__item--active'
                : null
            }
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button className="active"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          <IoIosArrowForward />
        </button>
      </li>
    </List>
  );
};

export default Pagination;