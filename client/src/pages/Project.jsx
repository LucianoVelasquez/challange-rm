
import { Footer } from '../components/Footer/Footer.jsx';
import { CardsList } from '../components/Cards/CardList.jsx';
import { Nav } from '../components/Navbar/Nav.jsx';

export function Project() {

  
  return (
    <>
      <Nav></Nav>
      <h1 className="text-3xl font-bold">Welcome;</h1>
      <CardsList></CardsList>
      <Footer></Footer>
    </>
  );
}
