
import { Footer } from '../components/Footer/Footer.jsx';
import { CardsList } from '../components/Cards/CardList.jsx';
import { Nav } from '../components/Navbar/Nav.jsx';
import { Pagination } from '../components/Pagination/Pagination.jsx';
import { Filters } from '../components/Filters/Filters.jsx';

export function Project() {

  
  return (
    <>
      <Nav></Nav>
      <Filters></Filters>
      <CardsList></CardsList>
      <Pagination></Pagination>
      <Footer></Footer>
    </>
  );
}
