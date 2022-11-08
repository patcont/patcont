import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
const Date = React.lazy(() => import("./Da_te.js"));

function GroupExample() {
  return (
    <CardGroup>
      <Card bg="primary">
        <Card.Img variant="top" src={require("./images/1107151.jpeg")} />
        <Card.Body>
          <Card.Title>Filtro polipropileno 5 micras 10"x2.75"</Card.Title>
          <Card.Text></Card.Text>
          <Date></Date>
          <br></br>
          <Card.Link
            href="https://www.google.cl/search?q=Filtro+polipropileno+5+micras+10%22x2.72%22&source=hp&ei=7n9iY7qNN8245OUPkau-uAM&iflsig=AJiK0e8AAAAAY2KN_o4hzJtqNWWKZs0aa4N7nlkArnZd&ved=0ahUKEwi6vOzk24_7AhVNHLkGHZGVDzcQ4dUDCAg&uact=5&oq=Filtro+polipropileno+5+micras+10%22x2.72%22&gs_lp=Egdnd3Mtd2l6uAED-AEC-AEBSKIFUABYAHAAeADIAQCQAQCYAQCgAQCqAQA&sclient=gws-wiz"
            target="_blank"
          >
            Buscar en Google
          </Card.Link>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card bg="primary">
        <Card.Img
          variant="top"
          src={require("./images/carbon block (1).jpg")}
        />
        <Card.Body>
          <Card.Title>Filtro carbón block de 10"x2.75"</Card.Title>
          <Card.Text></Card.Text>
          <Date></Date>
          <br></br>
          <Card.Link
            href="https://www.google.cl/search?q=Filtro+carb%C3%B3n+block+de+10%22x2.75%22&source=hp&ei=0oFiY_H9OvfD5OUPnN2x4AQ&iflsig=AJiK0e8AAAAAY2KP47JfTi03FQHgS56t06FEzFK3uGzl&ved=0ahUKEwjxrtXL3Y_7AhX3IbkGHZxuDEwQ4dUDCAg&uact=5&oq=Filtro+carb%C3%B3n+block+de+10%22x2.75%22&gs_lp=Egdnd3Mtd2l6uAED-AEC-AEBSLQGUABYAHAAeADIAQCQAQCYAQCgAQCqAQA&sclient=gws-wiz"
            target="_blank"
          >
            Buscar en Google
          </Card.Link>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card bg="primary">
        <Card.Img variant="top" src={require("./images/post filtro.jpeg")} />
        <Card.Body>
          <Card.Title>Post filtro en línea carbón granular</Card.Title>
          <Card.Text></Card.Text>
          <Date></Date>
          <br></br>
          <Card.Link
            href="https://www.google.cl/search?q=Post+filtro+en+l%C3%ADnea+carb%C3%B3n+granular&ei=mIJiY7822pLk5Q-77JyYBA&ved=0ahUKEwi_4s-p3o_7AhVaCbkGHTs2B0MQ4dUDCA8&uact=5&oq=Post+filtro+en+l%C3%ADnea+carb%C3%B3n+granular&gs_lp=Egxnd3Mtd2l6LXNlcnC4AQP4AQEyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEfCAgoQABhHGNYEGLADkAYHSN0EUNgCWNgCcAF4AsgBAJABAJgBAKABAKoBAOIDBCBBGADiAwQgRhgAiAYB&sclient=gws-wiz-serp"
            target="_blank"
          >
            Buscar en Google
          </Card.Link>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
      <Card bg="primary">
        <Card.Img variant="top" src={require("./images/osmosis (1).jpeg")} />
        <Card.Body>
          <Card.Title>Membrana de osmosis inversa 80gdp</Card.Title>
          <Card.Text></Card.Text>
          <Date></Date>
          <br></br>
          <Card.Link
            href="https://www.google.cl/search?q=Membrana+de+osmosis+inversa&sa=X&biw=1217&bih=621&tbm=shop&ei=4YJiY7OKIajN5OUP74Wo6Ao&ved=0ahUKEwjz_tfM3o_7AhWoJrkGHe8CCq0Q4dUDCAY&uact=5&oq=Membrana+de+osmosis+inversa&gs_lp=Egtwcm9kdWN0cy1jY7gBA_gBATIFEAAYgAQyBRAAGIAEMgcQABiABBgYMgcQABiABBgYMgcQABiABBgYMgcQABiABBgYMggQABgWGB4YGDIIEAAYFhgeGBgyCBAAGBYYHhgYMggQABgWGB4YGEjDBVD7A1j7A3ABeADIAQCQAQCYAUigAUiqAQEx4gMEIEEYAYgGAQ&sclient=products-cc"
            target="_blank"
          >
            Buscar en Google
          </Card.Link>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;
