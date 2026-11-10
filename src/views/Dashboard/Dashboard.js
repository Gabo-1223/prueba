import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import SportsEsports from "@material-ui/icons/SportsEsports";
import Computer from "@material-ui/icons/Computer";
import CardGiftcard from "@material-ui/icons/CardGiftcard";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import Check from "@material-ui/icons/Check";
import FlashOn from "@material-ui/icons/FlashOn";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import Snackbar from "components/Snackbar/Snackbar.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import { useCart } from "context/CartContext.js";
import { gamesCatalog } from "data/gamesData.js";
import { hardwareProducts } from "data/hardwareData.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  const { addToCart, notification, closeNotification } = useCart();

  const featuredDeal1 = gamesCatalog[0]; // Black Myth Wukong
  const featuredDeal2 = hardwareProducts[0]; // RTX 4080 Super
  const featuredDeal3 = gamesCatalog[1]; // Cyberpunk 2077

  return (
    <div>
      {/* Banner Principal de Bienvenida a NexusTech */}
      <GridContainer>
        <GridItem xs={12}>
          <Card style={{ background: "linear-gradient(60deg, #1e1b4b, #3730a3)", color: "#fff", border: "1px solid rgba(255, 255, 255, 0.1)" }}>
            <CardBody style={{ padding: "28px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "28px" }}>⚡</span>
                    <h2 style={{ margin: 0, color: "#fff", fontWeight: "900" }}>
                      NexusTech & Gaming Store
                    </h2>
                  </div>
                  <p style={{ margin: 0, color: "#e0f2fe", fontSize: "16px", maxWidth: "700px" }}>
                    Plataforma líder en hardware de última generación, claves digitales oficiales de videojuegos (estilo Steam / Eneba) y promociones exclusivas de PCs Armadas con Juegos AAA Gratis.
                  </p>
                  <div style={{ marginTop: "12px", fontSize: "13px", color: "#bfdbfe" }}>
                    Proyecto desarrollado por <strong>Angel Romero</strong> | Materia: <strong>Electiva III</strong> | GitHub: <strong>@Gabo-1223</strong>
                  </div>
                </div>
                <div style={{ marginTop: "16px" }}>
                  <Chip
                    icon={<FlashOn style={{ color: "#ffd600" }} />}
                    label="Descuentos Gamer hasta -70%"
                    style={{ backgroundColor: "#1e40af", color: "#fff", fontWeight: "bold", padding: "10px 4px" }}
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Tarjetas de Estadísticas de la Tienda */}
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Store />
              </CardIcon>
              <p className={classes.cardCategory}>Ventas Mensuales</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <ArrowUpward style={{ color: "#4caf50", fontSize: "16px", marginRight: "4px" }} />
                <span style={{ color: "#4caf50", fontWeight: "bold" }}>+18%</span> este mes
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="rose" stats icon>
              <CardIcon color="rose">
                <SportsEsports />
              </CardIcon>
              <p className={classes.cardCategory}>Juegos en Rebaja</p>
              <h3 className={classes.cardTitle}>48 Títulos</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <FlashOn style={{ color: "#e91e63", fontSize: "16px", marginRight: "4px" }} />
                Steam, Epic Games y GOG
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Computer />
              </CardIcon>
              <p className={classes.cardCategory}>Hardware en Stock</p>
              <h3 className={classes.cardTitle}>124 Unidades</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Check style={{ color: "#4caf50", fontSize: "16px", marginRight: "4px" }} />
                GPUs RTX 4000 y Ryzen 7000
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <CardGiftcard />
              </CardIcon>
              <p className={classes.cardCategory}>Bundles PC + Juegos</p>
              <h3 className={classes.cardTitle}>4 Combos</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <span style={{ color: "#0284c7", fontWeight: "bold" }}>Juegos Gratis Incluidos</span>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Ofertas Destacadas Rápidas */}
      <h3 style={{ fontWeight: "bold", color: "#f8fafc", margin: "25px 0 15px 15px" }}>
        🔥 Ofertas Relámpago del Día
      </h3>
      <GridContainer>
        {[featuredDeal1, featuredDeal2, featuredDeal3].map((deal) => {
          const isGame = !!deal.platform;
          const name = deal.name || deal.title;
          return (
            <GridItem xs={12} md={4} key={deal.id}>
              <Card>
                <div style={{ position: "relative", padding: "12px 12px 0 12px" }}>
                  <img
                    src={deal.image}
                    alt={name}
                    style={{
                      width: "100%",
                      height: "170px",
                      objectFit: "cover",
                      borderRadius: "6px",
                    }}
                  />
                  <Chip
                    label={`-${deal.discount}% OFF`}
                    size="small"
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      backgroundColor: isGame ? "#f43f5e" : "#10b981",
                      color: "#fff",
                      fontWeight: "bold",
                    }}
                  />
                </div>
                <CardBody>
                  <p className={classes.cardCategory}>
                    {isGame ? `${deal.platform} • ${deal.developer}` : deal.brand}
                  </p>
                  <h4 style={{ fontWeight: "bold", margin: "6px 0", color: "#f8fafc" }}>
                    {name}
                  </h4>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", margin: "8px 0" }}>
                    <span style={{ fontSize: "1.4rem", fontWeight: "bold", color: "#34d399" }}>
                      ${deal.price.toFixed(2)}
                    </span>
                    <span style={{ textDecoration: "line-through", color: "#64748b", fontSize: "0.95rem" }}>
                      ${deal.originalPrice.toFixed(2)}
                    </span>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button
                    color={isGame ? "rose" : "success"}
                    round
                    block
                    onClick={() => addToCart(deal)}
                  >
                    <ShoppingCart style={{ marginRight: "6px", fontSize: "18px" }} />
                    Añadir al Carrito
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          );
        })}
      </GridContainer>

      {/* Gráficos de Métricas de Ventas */}
      <GridContainer>
        <GridItem xs={12} md={6}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Ventas Diarias de Hardware</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                de incremento en ventas de tarjetas RTX 4000 este fin de semana.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Actualizado hace 4 minutos
              </div>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} md={6}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Activaciones de Claves de Videojuegos</h4>
              <p className={classes.cardCategory}>
                Récord de entregas digitales en Black Myth: Wukong y Baldur's Gate 3.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> Datos sincronizados con APIs de Steam y Eneba
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Tabla de Últimos Pedidos Procesados */}
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary">
              <h4 style={{ margin: 0, color: "#fff", fontWeight: "bold" }}>
                📦 Últimas Órdenes y Entregas Digitales Recientes
              </h4>
              <p style={{ margin: "5px 0 0 0", color: "#e0e0e0" }}>
                Registro simulado de compras en la plataforma para la entrega de la materia Electiva III.
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Nº Orden", "Cliente", "Producto / Combo", "Monto", "Estado"]}
                tableData={[
                  ["#NX-1042", "Angel Romero", "PC Master Race RTX 4080 + Wukong & Cyberpunk GRATIS", "$2,399.99", "Entregado"],
                  ["#NX-1041", "Carlos Mendoza", "Black Myth: Wukong (Steam Key)", "$39.99", "Clave Activada"],
                  ["#NX-1040", "Sofía Valenzuela", "AMD Ryzen 7 7800X3D + ASUS ROG Strix", "$1,389.98", "En Despacho"],
                  ["#NX-1039", "Gabriel Méndez", "Elden Ring: Shadow of the Erdtree", "$47.99", "Clave Activada"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Snackbar Notificación */}
      <Snackbar
        place="tr"
        color="info"
        icon={Check}
        message={notification.message}
        open={notification.open}
        closeNotification={closeNotification}
        close
      />
    </div>
  );
}
