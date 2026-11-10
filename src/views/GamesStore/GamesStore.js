import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import SportsEsports from "@material-ui/icons/SportsEsports";
import Search from "@material-ui/icons/Search";
import FlashOn from "@material-ui/icons/FlashOn";
import Star from "@material-ui/icons/Star";
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import Check from "@material-ui/icons/Check";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "components/Snackbar/Snackbar.js";

import { gamesCatalog, gameGenres } from "data/gamesData.js";
import { useCart } from "context/CartContext.js";

const styles = {
  cardTitle: {
    color: "#f8fafc",
    fontWeight: "700",
    fontSize: "1.15rem",
    margin: "8px 0 4px 0",
    lineHeight: "1.3",
  },
  gameImg: {
    width: "100%",
    height: "220px",
    objectFit: "cover",
    borderRadius: "6px",
    filter: "brightness(0.95)",
    transition: "transform 0.3s ease, filter 0.3s ease",
    "&:hover": {
      transform: "scale(1.03)",
      filter: "brightness(1.05)",
    },
  },
  platformTag: {
    position: "absolute",
    bottom: "12px",
    left: "12px",
    backgroundColor: "rgba(15, 23, 42, 0.9)",
    color: "#38bdf8",
    padding: "3px 8px",
    borderRadius: "4px",
    fontSize: "11px",
    fontWeight: "bold",
    backdropFilter: "blur(4px)",
  },
  discountTag: {
    backgroundColor: "#10b981",
    color: "#ffffff",
    fontWeight: "900",
    fontSize: "1.1rem",
    padding: "4px 8px",
    borderRadius: "4px",
  },
  priceRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#0f172a",
    border: "1px solid rgba(255, 255, 255, 0.06)",
    padding: "8px 12px",
    borderRadius: "6px",
    marginTop: "10px",
  },
  currentPrice: {
    fontSize: "1.45rem",
    fontWeight: "800",
    color: "#38bdf8",
  },
  originalPrice: {
    fontSize: "0.9rem",
    color: "#94a3b8",
    textDecoration: "line-through",
  },
  deliveryBadge: {
    display: "flex",
    alignItems: "center",
    fontSize: "11px",
    color: "#0284c7",
    fontWeight: "600",
    marginTop: "8px",
  },
};

const useStyles = makeStyles(styles);

export default function GamesStore() {
  const classes = useStyles();
  const [selectedGenre, setSelectedGenre] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, notification, closeNotification } = useCart();

  const filteredGames = gamesCatalog.filter((game) => {
    const matchesGenre =
      selectedGenre === "all" || game.genre === selectedGenre;
    const matchesSearch =
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.developer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div>
      {/* Header Banner Estilo Eneba / Steam */}
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ margin: 0, color: "#fff", fontWeight: "bold" }}>
                    🎮 Tienda de Videojuegos Digitales (Estilo Steam / Eneba)
                  </h3>
                  <p style={{ margin: "5px 0 0 0", color: "#fce4ec" }}>
                    Claves oficiales 100% garantizadas para Steam, Epic Games, GOG y Xbox con activación inmediata.
                  </p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Chip
                    icon={<FlashOn style={{ color: "#ffd600" }} />}
                    label="Rebajas de Temporada - Hasta 70% OFF"
                    style={{ backgroundColor: "#880e4f", color: "#fff", fontWeight: "bold" }}
                  />
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <GridContainer alignItems="center">
                <GridItem xs={12} md={7}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {gameGenres.map((genre) => (
                      <Button
                        key={genre.id}
                        color={selectedGenre === genre.id ? "rose" : "white"}
                        size="sm"
                        round
                        onClick={() => setSelectedGenre(genre.id)}
                      >
                        {genre.label}
                      </Button>
                    ))}
                  </div>
                </GridItem>
                <GridItem xs={12} md={5}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    placeholder="Buscar juego por título o desarrollador..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search style={{ color: "#e91e63" }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Grid de Videojuegos */}
      <GridContainer>
        {filteredGames.map((game) => (
          <GridItem xs={12} sm={6} md={4} lg={3} key={game.id}>
            <Card style={{ height: "calc(100% - 30px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", padding: "10px 10px 0 10px" }}>
                  <img
                    src={game.image}
                    alt={game.title}
                    className={classes.gameImg}
                  />
                  <span className={classes.platformTag}>
                    <SportsEsports style={{ fontSize: "14px", verticalAlign: "middle", marginRight: "4px" }} />
                    {game.platform}
                  </span>
                  {game.badge && (
                    <Chip
                      label={game.badge}
                      size="small"
                      style={{
                        position: "absolute",
                        top: "18px",
                        right: "18px",
                        backgroundColor: "#d81b60",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    />
                  )}
                </div>

                <CardBody style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "12px", color: "#64748b", fontWeight: "600" }}>
                      {game.developer}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", fontSize: "12px", color: "#eab308", fontWeight: "bold" }}>
                      <Star style={{ fontSize: "14px", marginRight: "2px" }} />
                      {game.rating}
                    </span>
                  </div>

                  <h4 className={classes.cardTitle}>{game.title}</h4>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", margin: "8px 0" }}>
                    {game.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        style={{
                          backgroundColor: "rgba(255, 255, 255, 0.08)",
                          color: "#cbd5e1",
                          padding: "2px 6px",
                          borderRadius: "4px",
                          fontSize: "11px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Caja de precios con descuento estilo Steam */}
                  <div className={classes.priceRow}>
                    <span className={classes.discountTag}>
                      -{game.discount}%
                    </span>
                    <div style={{ textAlign: "right" }}>
                      <div className={classes.originalPrice}>
                        ${game.originalPrice.toFixed(2)}
                      </div>
                      <div className={classes.currentPrice}>
                        ${game.price.toFixed(2)}
                      </div>
                    </div>
                  </div>

                  <div className={classes.deliveryBadge}>
                    <FlashOn style={{ fontSize: "14px", marginRight: "2px" }} />
                    {game.delivery}
                  </div>
                </CardBody>
              </div>

              <CardFooter style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "8px" }}>
                <Button
                  color="rose"
                  block
                  round
                  onClick={() => addToCart(game)}
                >
                  <AddShoppingCart style={{ marginRight: "8px", fontSize: "18px" }} />
                  Comprar Clave
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </GridContainer>

      {/* Snackbar Notificación */}
      <Snackbar
        place="tr"
        color="rose"
        icon={Check}
        message={notification.message}
        open={notification.open}
        closeNotification={closeNotification}
        close
      />
    </div>
  );
}
