import { useNavigate } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { useEffect } from 'react';

const Home = () => {
  //아직 메인페이지가 없으므로 /compare/squad-list로 리다이렉션해줍니다.
  const navigate = useNavigate();

  useEffect(() => {
    console.log('무한');
    navigate('/compare/squad-list', { replace: true });
  }, [navigate]);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

export default Home;
