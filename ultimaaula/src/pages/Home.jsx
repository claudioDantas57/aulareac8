import { Card, CardImg, CardTitle, ContainerCards } from "./style";

export const Home = () => {
    return (
      <>
        <h1>Categorias</h1>
        <ContainerCards>
            <Card>
                <CardTitle>MMORPG</CardTitle>
                <CardImg src="https://images5.alphacoders.com/640/640377.jpg"></CardImg>
            </Card>

            <Card>
                <CardTitle>FFS</CardTitle>
                <CardImg src="https://cdn.wallpapersafari.com/9/23/7Fl16w.jpg"></CardImg>
            </Card>

            <Card>
                <CardTitle>MOBA</CardTitle>
                <CardImg src="https://images.hdqwalls.com/wallpapers/2019-genesis-moba-n0.jpg"></CardImg>
            </Card>

        </ContainerCards>
      </>
        
    );
  }