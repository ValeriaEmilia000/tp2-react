import  Container  from "react-bootstrap/Container";
import Pelicula from "./pelicula";
import Nav from "./nav";
import Navegador from "./nav";
import RedesSociales from "./redes";
import Logo from "./logo";
import Pagina from "./pagina";
import Media from "./media";
import Footer from "./footer";
import pelicula from "./peliculas.json"

function App(){
return(
    <>
    {pelicula.map(peli =>    
<Pelicula
img={peli.img}
titulo={peli.titulo}
>
</Pelicula>)}

    <Navegador></Navegador>
    <RedesSociales></RedesSociales>
    <Logo></Logo>
    <Pagina></Pagina>
    <Media></Media>
    <Footer></Footer>
    </>
)
}

export default App;