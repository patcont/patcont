import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
import MyCard from "./MyCard.js";
import { useState } from "react";
import { useEffect } from "react";

function Cards() {
  const initialCardData = [
    {
      id: 1,
      title: 'Filtro polipropileno 5 micras 10"x2.75"',
      imageUrl: "1107151.jpeg",
      linkUrl:
        "https://www.google.cl/search?q=Filtro+polipropileno+5+micras+10%22x2.72%22&source=hp&ei=7n9iY7qNN8245OUPkau-uAM&iflsig=AJiK0e8AAAAAY2KN_o4hzJtqNWWKZs0aa4N7nlkArnZd&ved=0ahUKEwi6vOzk24_7AhVNHLkGHZGVDzcQ4dUDCAg&uact=5&oq=Filtro+polipropileno+5+micras+10%22x2.72%22&gs_lp=Egdnd3Mtd2l6uAED-AEC-AEBSKIFUABYAHAAeADIAQCQAQCYAQCgAQCqAQA&sclient=gws-wiz",
    },
    {
      id: 2,
      title: 'Filtro carbón block de 10"x2.75"',
      imageUrl: "carbon block (1).jpg",
      linkUrl:
        "https://www.google.cl/search?q=Filtro+carb%C3%B3n+block+de+10%22x2.75%22&source=hp&ei=0oFiY_H9OvfD5OUPnN2x4AQ&iflsig=AJiK0e8AAAAAY2KP47JfTi03FQHgS56t06FEzFK3uGzl&ved=0ahUKEwjxrtXL3Y_7AhX3IbkGHZxuDEwQ4dUDCAg&uact=5&oq=Filtro+carb%C3%B3n+block+de+10%22x2.75%22&gs_lp=Egdnd3Mtd2l6uAED-AEC-AEBSLQGUABYAHAAeADIAQCQAQCYAQCgAQCqAQA&sclient=gws-wiz",
    },
    {
      id: 3,
      title: "Post filtro en línea carbón granular",
      imageUrl: "post filtro.jpeg",
      linkUrl:
        "https://www.google.cl/search?q=Post+filtro+en+l%C3%ADnea+carb%C3%B3n+granular&ei=mIJiY7822pLk5Q-77JyYBA&ved=0ahUKEwi_4s-p3o_7AhVaCbkGHTs2B0MQ4dUDCA8&uact=5&oq=Post+filtro+en+l%C3%ADnea+carb%C3%B3n+granular&gs_lp=Egxnd3Mtd2l6LXNlcnC4AQP4AQEyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEcyBBAAGEfCAgoQABhHGNYEGLADkAYHSN0EUNgCWNgCcAF4AsgBAJABAJgBAKABAKoBAOIDBCBBGADiAwQgRhgAiAYB&sclient=gws-wiz-serp",
    },
    {
      id: 4,
      title: "Membrana de osmosis inversa 80gdp",
      imageUrl: "osmosis (1).jpeg",
      linkUrl:
        "https://www.google.cl/search?q=Membrana+de+osmosis+inversa&sa=X&biw=1217&bih=621&tbm=shop&ei=4YJiY7OKIajN5OUP74Wo6Ao&ved=0ahUKEwjz_tfM3o_7AhWoJrkGHe8CCq0Q4dUDCAY&uact=5&oq=Membrana+de+osmosis+inversa&gs_lp=Egtwcm9kdWN0cy1jY7gBA_gBATIFEAAYgAQyBRAAGIAEMgcQABiABBgYMgcQABiABBgYMgcQABiABBgYMgcQABiABBgYMggQABgWGB4YGDIIEAAYFhgeGBgyCBAAGBYYHhgYMggQABgWGB4YGEjDBVD7A1j7A3ABeADIAQCQAQCYAUigAUiqAQEx4gMEIEEYAYgGAQ&sclient=products-cc",
    },
  ];

  const [cardData, setCardData] = useState(initialCardData);
  const [shouldRefetch, setShouldRefetch] = useState(false);

  // Fetch filter data from the server when the component mounts
  const fetchData = () => {
    fetch("http://localhost:5000/filters")
      .then((response) => response.json())
      .then((data) => {
        // Create a map from fetched filter data for easy access by id
        const fetchedDataMap = data.filters.reduce((acc, filter) => {
          acc[filter.filter_id] = filter;
          return acc;
        }, {});

        // Update startDate field from fetched filter data
        const mergedData = initialCardData.map((card) => {
          const fetchedFilterData = fetchedDataMap[card.id];
          if (fetchedFilterData) {
            return {
              ...card,
              startDate: fetchedFilterData.cycle_start_date,
            };
          } else {
            return card; // If no fetched data for this card, return the card as is
          }
        });
        setCardData(mergedData);
      });
  };

  // Call fetchData whenever shouldRefetch changes

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchData, [shouldRefetch, cardData]);

  const handleStartDateChange = () => {
    setShouldRefetch(true);
  };

  return (
    <CardGroup>
      {cardData.map((data, index) => (
        <MyCard
          key={index}
          id={data.id}
          title={data.title}
          imageUrl={data.imageUrl}
          linkUrl={data.linkUrl}
          startDate={data.startDate}
          setNewStartDate={handleStartDateChange}
        />
      ))}
    </CardGroup>
  );
}

export default Cards;
