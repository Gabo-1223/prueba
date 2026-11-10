import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
// @material-ui/icons
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import CheckCircle from "@material-ui/icons/CheckCircle";
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

import { hardwareCategories, hardwareProducts } from "data/hardwareData.js";
import { useCart } from "context/CartContext.js";

const styles = {
  cardTitle: {
    color: "#f8fafc",
    marginTop: "10px",
    minHeight: "auto",
    fontWeight: "600",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "8px",
    textDecoration: "none",
    fontSize: "1.1rem",
  },
  cardCategory: {
    color: "#94a3b8",
    margin: "0",
    fontSize: "13px",
    marginTop: "0",
    paddingTop: "4px",
    marginBottom: "0",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "0.5px",
  },
  productImg: {
    width: "100%",
    height: "190px",
    objectFit: "cover",
    borderRadius: "6px",
    transition: "transform 0.3s ease",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  priceContainer: {
    display: "flex",
    alignItems: "baseline",
    gap: "10px",
    marginTop: "12px",
    marginBottom: "8px",
  },
  currentPrice: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "#34d399",
    margin: 0,
  },
  originalPrice: {
    fontSize: "1rem",
    color: "#64748b",
    textDecoration: "line-through",
    margin: 0,
  },
  discountBadge: {
    backgroundColor: "#ef4444",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "0.75rem",
  },
  specItem: {
    display: "flex",
    alignItems: "center",
    fontSize: "0.85rem",
    color: "#cbd5e1",
    marginBottom: "4px",
  },
  specIcon: {
    fontSize: "15px",
    color: "#10b981",
    marginRight: "6px",
  },
  filterContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "24px",
  },
  activeFilterBtn: {
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },
};

const useStyles = makeStyles(styles);

export default function Hardware() {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { addToCart, notification, closeNotification } = useCart();

  const filteredProducts =
    selectedCategory === "all"
      ? hardwareProducts
      : hardwareProducts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Header Banner */}
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary">
              <h3 style={{ margin: 0, color: "#fff", fontWeight: "bold" }}>
                💻 Componentes de PC & Hardware de Alto Rendimiento
              </h3>
              <p style={{ margin: "5px 0 0 0", color: "#e0e0e0" }}>
                Tarjetas de video RTX serie 4000, procesadores AMD Ryzen e Intel de 14va Gen, laptops y PCs armadas con garantía oficial.
              </p>
            </CardHeader>
            <CardBody>
              <div className={classes.filterContainer}>
                {hardwareCategories.map((cat) => (
                  <Button
                    key={cat.id}
                    color={selectedCategory === cat.id ? "primary" : "white"}
                    size="sm"
                    round
                    className={
                      selectedCategory === cat.id
                        ? classes.activeFilterBtn
                        : ""
                    }
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </Button>
                ))}
              </div>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Grid de Productos */}
      <GridContainer>
        {filteredProducts.map((product) => (
          <GridItem xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card style={{ height: "calc(100% - 30px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ position: "relative", padding: "12px 12px 0 12px" }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={classes.productImg}
                  />
                  {product.badge && (
                    <Chip
                      label={product.badge}
                      size="small"
                      color="secondary"
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        fontWeight: "bold",
                        backgroundColor: "#9c27b0",
                        color: "#fff",
                      }}
                    />
                  )}
                </div>

                <CardBody style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                  <p className={classes.cardCategory}>{product.brand}</p>
                  <h4 className={classes.cardTitle}>{product.name}</h4>

                  {/* Especificaciones clave */}
                  <div style={{ margin: "10px 0" }}>
                    {product.specs.slice(0, 3).map((spec, index) => (
                      <div key={index} className={classes.specItem}>
                        <CheckCircle className={classes.specIcon} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Precios */}
                  <div className={classes.priceContainer}>
                    <span className={classes.currentPrice}>
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className={classes.originalPrice}>
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    {product.discount > 0 && (
                      <Chip
                        label={`-${product.discount}%`}
                        size="small"
                        className={classes.discountBadge}
                      />
                    )}
                  </div>
                  <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                    Stock disponible: <strong>{product.stock} unidades</strong>
                  </div>
                </CardBody>
              </div>

              <CardFooter style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "10px" }}>
                <Button
                  color="success"
                  block
                  round
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart style={{ marginRight: "8px", fontSize: "18px" }} />
                  Añadir al Carrito
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
      </GridContainer>

      {/* Snackbar Notificación */}
      <Snackbar
        place="tr"
        color="success"
        icon={Check}
        message={notification.message}
        open={notification.open}
        closeNotification={closeNotification}
        close
      />
    </div>
  );
}
