import Koa from "koa";
import Router from "@koa/router";
import Amadeus from "amadeus";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

const router = new Router();
const app = new Koa();

const amadeus = new Amadeus({
  clientId: process.env["AMADEUS_CLIENT_ID"],
  clientSecret: process.env["AMADEUS_CLIENT_SECRET"],
});

router.get("/flights", async (ctx) => {
  const {
    originLocationCode,
    destinationLocationCode,
    departureDate,
    returnDate,
    adults,
  } = ctx.query;

  try {
    const flightOffers = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: originLocationCode || "SYD",
      destinationLocationCode: destinationLocationCode || "LON",
      departureDate: departureDate || "2024-08-01",
      returnDate: returnDate || "2024-08-05",
      adults: adults || "2",
      max: "10",
    });

    ctx.body = JSON.stringify(flightOffers.data);
  } catch (error) {
    console.log(error);
  }
});

app
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods())
  .use(
    bodyParser({
      enableTypes: ["json", "form", "text"],
    })
  );

app.listen(3000);
