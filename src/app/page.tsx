import Category from "@/Components/Categorys";
import Container from "@/Components/Container";
import Deals from "@/Components/Deals";
import Header from "@/Components/Header";

export default function Home() {
  return (
    <div>
      <Container>
        <Header />
        <Category />
        <Deals />
      </Container>
    </div>
  );
}
