import Section from '../components/Section/Section';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import { getUserInfo } from '../service/opencagedataApi';
import { useEffect } from 'react';

const Home = () => {
  const isError = false;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async pos => {
      const crd = pos.coords;

      try {
        const response = await getUserInfo(crd);
        console.log(response.results[0].annotations.currency.iso_code);

        return response;
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  return (
    <Section>
      <Container>
        <Heading info title="What currencies do you want to exchange?🙂" />

        {isError && (
          <Heading
            error
            title="Something went wrong...😐 Check the data validity and try again!"
          />
        )}
      </Container>
    </Section>
  );
};

export default Home;
