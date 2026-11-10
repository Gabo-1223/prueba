import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
// @material-ui/icons
import CardGiftcard from "@material-ui/icons/CardGiftcard";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Check from "@material-ui/icons/Check";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LocalOffer from "@material-ui/icons/LocalOffer";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "components/Snackbar/Snackbar.js";

import { bundlePromotions } from "data/bundlesData.js";
import { useCart } from "context/CartContext.js";

const styles = {
  bundleCard: {
    marginBottom: "30px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",
  },
  pcImage: {
    width: "100%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "6px",
  },
  specItem: {
    display: "flex",
    alignItems: "flex-start",
    fontSize: "0.88rem",
    color: "#cbd5e1",
    marginBottom: "6px",
    lineHeight: "1.4",
  },
  specIcon: {
    fontSize: "17px",
    color: "#38bdf8",
    marginRight: "8px",
    marginTop: "2px",
    flexShrink: 0,
  },
  freeGamesBox: {
    backgroundColor: "rgba(245, 158, 11, 0.08)",
    border: "2px dashed #f59e0b",
    borderRadius: "8px",
    padding: "16px",
  },
  freeGameCard: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#0f172a",
    border: "1px solid rgba(255, 255, 255, 0.07)",
    borderRadius: "6px",
    padding: "8px 12px",
    marginBottom: "10px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
  },
  gameThumbnail: {
    width: "60px",
    height: "60px",
    objectFit: "cover",
    borderRadius: "4px",
    marginRight: "12px",
  },
  priceBox: {
    backgroundColor: "#0f172a",
    border: "1px solid rgba(255, 255, 255, 0.07)",
    borderRadius: "8px",
    padding: "16px",
    textAlign: "right",
  },
  currentPrice: {
    fontSize: "2rem",
    fontWeight: "900",
    color: "#34d399",
    margin: "4px 0",
  },
  originalPrice: {
    fontSize: "1.1rem",
    color: "#94a3b8",
    textDecoration: "line-through",
  },
};

const useStyles = makeStyles(styles);

export default function Bundles() {
  const classes = useStyles();
  const { addToCart, notification, closeNotification } = useCart();

  return (
    <div>
      {/* Banner Principal */}
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="warning">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div>
                  <h3 style={{ margin: 0, color: "#fff", fontWeight: "bold" }}>
                    🎁 Promociones Especiales: Compra tu PC y Llévate Juegos GRATIS
                  </h3>
                  <p style={{ margin: "5px 0 0 0", color: "#fffde7" }}>
                    Adquiere cualquiera de nuestras PCs Gamer seleccionadas en oferta y recibe claves digitales oficiales de los títulos más galardonados del año sin costo extra.
                  </p>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Chip
                    icon={<CardGiftcard style={{ color: "#d97706" }} />}
                    label="Hasta $140 en Juegos Gratis"
                    style={{ backgroundColor: "#ffffff", color: "#b45309", fontWeight: "bold" }}
                  />
                </div>
              </div>
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Lista de Promociones Bundle */}
      {bundlePromotions.map((bundle) => (
        <Card className={classes.bundleCard} key={bundle.id}>
          <CardHeader color={bundle.bannerColor || "warning"}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
              <div>
                <span style={{ fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", fontWeight: "bold", opacity: 0.9 }}>
                  {bundle.badge}
                </span>
                <h3 style={{ margin: "4px 0 2px 0", color: "#fff", fontWeight: "bold" }}>
                  {bundle.title}
                </h3>
                <p style={{ margin: 0, color: "#f8fafc", fontSize: "14px" }}>
                  {bundle.subtitle}
                </p>
              </div>
              <div style={{ marginTop: "8px" }}>
                <Chip
                  label={`Ahorro Total: $${bundle.savings.toFixed(2)}`}
                  style={{ backgroundColor: "#ffffff", color: "#15803d", fontWeight: "bold", fontSize: "13px" }}
                />
              </div>
            </div>
          </CardHeader>

          <CardBody style={{ padding: "20px" }}>
            <GridContainer spacing={3}>
              {/* Columna Izquierda: La PC Gamer */}
              <GridItem xs={12} md={5}>
                <div style={{ position: "relative", marginBottom: "15px" }}>
                  <img
                    src={bundle.pcImage}
                    alt={bundle.title}
                    className={classes.pcImage}
                  />
                  <Chip
                    label="PC Gamer Armada & Testeada"
                    size="small"
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      backgroundColor: "rgba(0,0,0,0.8)",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  />
                </div>
                <h5 style={{ fontWeight: "bold", color: "#f8fafc", margin: "10px 0 8px 0" }}>
                  Especificaciones del Sistema:
                </h5>
                {bundle.pcSpecs.map((spec, i) => (
                  <div key={i} className={classes.specItem}>
                    <CheckCircle className={classes.specIcon} />
                    <span>{spec}</span>
                  </div>
                ))}
              </GridItem>

              {/* Columna Derecha: Juegos de Regalo y Precios */}
              <GridItem xs={12} md={7}>
                <div className={classes.freeGamesBox}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <CardGiftcard style={{ color: "#f59e0b", fontSize: "24px", marginRight: "8px" }} />
                      <h4 style={{ margin: 0, fontWeight: "bold", color: "#fbbf24" }}>
                        JUEGOS INCLUIDOS 100% GRATIS
                      </h4>
                    </div>
                    <Chip
                      label={`Valor Real: $${bundle.freeGamesValue.toFixed(2)}`}
                      size="small"
                      style={{ backgroundColor: "rgba(245, 158, 11, 0.2)", color: "#fbbf24", fontWeight: "bold" }}
                    />
                  </div>

                  <p style={{ margin: "0 0 12px 0", fontSize: "13px", color: "#fde68a" }}>
                    Al comprar esta computadora, recibirás las licencias digitales oficiales sin pagar ni un centavo adicional:
                  </p>

                  {bundle.freeGames.map((game, i) => (
                    <div key={i} className={classes.freeGameCard}>
                      <img
                        src={game.image}
                        alt={game.title}
                        className={classes.gameThumbnail}
                      />
                      <div style={{ flexGrow: 1 }}>
                        <div style={{ fontWeight: "bold", fontSize: "15px", color: "#f8fafc" }}>
                          {game.title}
                        </div>
                        <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                          Plataforma: <strong>{game.platform}</strong>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ fontSize: "12px", color: "#94a3b8", textDecoration: "line-through" }}>
                          ${game.value.toFixed(2)}
                        </div>
                        <Chip
                          label="¡GRATIS!"
                          size="small"
                          style={{ backgroundColor: "#22c55e", color: "#fff", fontWeight: "900" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resumen de Precios y Botón de Acción */}
                <div className={classes.priceBox} style={{ marginTop: "16px" }}>
                  <div className={classes.originalPrice}>
                    Precio regular combinado: ${bundle.originalPrice.toFixed(2)}
                  </div>
                  <div className={classes.currentPrice}>
                    ${bundle.price.toFixed(2)}
                  </div>
                  <div style={{ fontSize: "13px", color: "#15803d", fontWeight: "bold", marginBottom: "12px" }}>
                    ¡Te estás ahorrando ${bundle.savings.toFixed(2)} en este combo!
                  </div>

                  <Button
                    color="warning"
                    size="lg"
                    round
                    block
                    onClick={() => addToCart({
                      id: bundle.id,
                      name: bundle.title,
                      price: bundle.price,
                      originalPrice: bundle.originalPrice,
                      type: "Bundle PC + Juegos Gratis",
                      image: bundle.pcImage,
                      freeGames: bundle.freeGames,
                    })}
                  >
                    <ShoppingBasket style={{ marginRight: "10px", fontSize: "22px" }} />
                    Adquirir Bundle Completo (PC + Juegos de Regalo)
                  </Button>
                </div>

                <div style={{ fontSize: "11px", color: "#94a3b8", marginTop: "10px", textAlign: "center" }}>
                  {bundle.terms}
                </div>
              </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      ))}

      {/* Snackbar Notificación */}
      <Snackbar
        place="tr"
        color="warning"
        icon={Check}
        message={notification.message}
        open={notification.open}
        closeNotification={closeNotification}
        close
      />
    </div>
  );
}
