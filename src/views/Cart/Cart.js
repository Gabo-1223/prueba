import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import TextField from "@material-ui/core/TextField";
// @material-ui/icons
import Delete from "@material-ui/icons/Delete";
import Add from "@material-ui/icons/Add";
import Remove from "@material-ui/icons/Remove";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import CheckCircleOutline from "@material-ui/icons/CheckCircleOutline";
import ArrowForward from "@material-ui/icons/ArrowForward";
import RemoveShoppingCart from "@material-ui/icons/RemoveShoppingCart";
import CardGiftcard from "@material-ui/icons/CardGiftcard";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import { useCart } from "context/CartContext.js";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "bold",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  tableCell: {
    lineHeight: "1.42857143",
    padding: "12px 8px",
    verticalAlign: "middle",
  },
  productThumb: {
    width: "55px",
    height: "55px",
    borderRadius: "4px",
    objectFit: "cover",
    marginRight: "10px",
  },
  qtyControl: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    fontSize: "14px",
  },
  totalPrice: {
    fontSize: "1.8rem",
    fontWeight: "900",
    color: "#2e7d32",
  },
};

const useStyles = makeStyles(styles);

export default function Cart() {
  const classes = useStyles();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
    totalSavings,
  } = useCart();

  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const [customer, setCustomer] = useState({
    name: "Angel Romero",
    email: "angel.romero@estudiante.edu",
    github: "Gabo-1223",
    subject: "Electiva III",
    address: "Entrega Digital y Envío de Hardware Express",
  });

  const handleCheckout = () => {
    setOrderSuccess(true);
    setOrderModalOpen(true);
  };

  const handleCloseModal = () => {
    setOrderModalOpen(false);
    clearCart();
  };

  return (
    <div>
      <GridContainer>
        {/* Tabla del Carrito */}
        <GridItem xs={12} lg={8}>
          <Card>
            <CardHeader color="info">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                <div>
                  <h4 className={classes.cardTitleWhite}>
                    🛒 Tu Carrito de Compras ({totalItems} artículos)
                  </h4>
                  <p className={classes.cardCategoryWhite}>
                    Revisa los componentes, videojuegos digitales y promociones seleccionadas.
                  </p>
                </div>
                {cartItems.length > 0 && (
                  <Button
                    color="white"
                    size="sm"
                    simple
                    onClick={clearCart}
                    style={{ color: "#fff", border: "1px solid rgba(255,255,255,0.4)" }}
                  >
                    <RemoveShoppingCart style={{ fontSize: "16px", marginRight: "4px" }} />
                    Vaciar Carrito
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardBody>
              {cartItems.length === 0 ? (
                <div style={{ textAlign: "center", padding: "50px 20px" }}>
                  <ShoppingCart style={{ fontSize: "60px", color: "#cbd5e1", marginBottom: "16px" }} />
                  <h3 style={{ color: "#475569", fontWeight: "bold" }}>
                    Tu carrito está vacío
                  </h3>
                  <p style={{ color: "#64748b", maxWidth: "450px", margin: "0 auto 20px auto" }}>
                    Explora nuestra sección de componentes de PC, tienda de videojuegos estilo Steam/Eneba o las promociones de PCs con juegos de regalo.
                  </p>
                </div>
              ) : (
                <div style={{ overflowX: "auto" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell align="center">Tipo</TableCell>
                        <TableCell align="center">Precio</TableCell>
                        <TableCell align="center">Cantidad</TableCell>
                        <TableCell align="right">Subtotal</TableCell>
                        <TableCell align="center">Acción</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cartItems.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell className={classes.tableCell}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                              <img
                                src={item.image}
                                alt={item.name}
                                className={classes.productThumb}
                              />
                              <div>
                                <div style={{ fontWeight: "600", fontSize: "14px", color: "#1e293b" }}>
                                  {item.name}
                                </div>
                                {item.freeGames && (
                                  <div style={{ display: "flex", alignItems: "center", marginTop: "4px" }}>
                                    <CardGiftcard style={{ fontSize: "14px", color: "#d97706", marginRight: "4px" }} />
                                    <span style={{ fontSize: "11px", color: "#b45309", fontWeight: "bold" }}>
                                      Incluye {item.freeGames.length} juegos gratis
                                    </span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </TableCell>
                          <TableCell align="center" className={classes.tableCell}>
                            <Chip
                              label={item.type || "Producto"}
                              size="small"
                              style={{
                                fontSize: "11px",
                                backgroundColor: item.type?.includes("Juego")
                                  ? "#fce4ec"
                                  : item.type?.includes("Bundle")
                                  ? "#fff8e1"
                                  : "#e0f2fe",
                                color: item.type?.includes("Juego")
                                  ? "#c2185b"
                                  : item.type?.includes("Bundle")
                                  ? "#b45309"
                                  : "#0369a1",
                                fontWeight: "600",
                              }}
                            />
                          </TableCell>
                          <TableCell align="center" className={classes.tableCell}>
                            <strong>${item.price.toFixed(2)}</strong>
                          </TableCell>
                          <TableCell align="center" className={classes.tableCell}>
                            <div className={classes.qtyControl} style={{ justifyContent: "center" }}>
                              <IconButton
                                size="small"
                                onClick={() => updateQuantity(item.id, item.qty - 1)}
                              >
                                <Remove style={{ fontSize: "16px" }} />
                              </IconButton>
                              <span style={{ fontWeight: "bold", minWidth: "24px", textAlign: "center" }}>
                                {item.qty}
                              </span>
                              <IconButton
                                size="small"
                                onClick={() => updateQuantity(item.id, item.qty + 1)}
                              >
                                <Add style={{ fontSize: "16px" }} />
                              </IconButton>
                            </div>
                          </TableCell>
                          <TableCell align="right" className={classes.tableCell}>
                            <strong style={{ color: "#34d399" }}>
                              ${(item.price * item.qty).toFixed(2)}
                            </strong>
                          </TableCell>
                          <TableCell align="center" className={classes.tableCell}>
                            <IconButton
                              size="small"
                              color="secondary"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Delete style={{ fontSize: "18px", color: "#ef4444" }} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardBody>
          </Card>
        </GridItem>

        {/* Resumen del Pedido y Checkout */}
        <GridItem xs={12} lg={4}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>Resumen del Pedido</h4>
              <p className={classes.cardCategoryWhite}>
                Desglose financiero y confirmación
              </p>
            </CardHeader>
            <CardBody>
              <div className={classes.summaryRow}>
                <span style={{ color: "#94a3b8" }}>Subtotal ({totalItems} productos):</span>
                <span style={{ fontWeight: "600", color: "#f8fafc" }}>${totalPrice.toFixed(2)}</span>
              </div>
              <div className={classes.summaryRow}>
                <span style={{ color: "#94a3b8" }}>Ahorro por Ofertas / Bundles:</span>
                <span style={{ color: "#34d399", fontWeight: "bold" }}>
                  -${totalSavings.toFixed(2)}
                </span>
              </div>
              <div className={classes.summaryRow}>
                <span style={{ color: "#94a3b8" }}>Costo de Envío / Claves Digitales:</span>
                <span style={{ color: "#38bdf8", fontWeight: "bold" }}>¡GRATIS!</span>
              </div>
              <div className={classes.summaryRow}>
                <span style={{ color: "#94a3b8" }}>Garantía y Activación:</span>
                <span style={{ color: "#38bdf8", fontWeight: "bold" }}>Incluida (12 meses)</span>
              </div>

              <hr style={{ border: 0, borderTop: "1px dashed rgba(255, 255, 255, 0.15)", margin: "16px 0" }} />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "20px" }}>
                <span style={{ fontSize: "18px", fontWeight: "bold", color: "#f8fafc" }}>
                  Total a Pagar:
                </span>
                <span className={classes.totalPrice}>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              {/* Formulario de Checkout Rápido */}
              <div style={{ backgroundColor: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "14px", borderRadius: "8px", marginBottom: "16px" }}>
                <div style={{ fontSize: "12px", fontWeight: "bold", color: "#cbd5e1", textTransform: "uppercase", marginBottom: "8px" }}>
                  Datos del Cliente (Proyecto Académico):
                </div>
                <TextField
                  fullWidth
                  size="small"
                  label="Comprador"
                  value={customer.name}
                  disabled
                  margin="dense"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  size="small"
                  label="Asignatura"
                  value={customer.subject}
                  disabled
                  margin="dense"
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  size="small"
                  label="Usuario GitHub"
                  value={customer.github}
                  disabled
                  margin="dense"
                  variant="outlined"
                />
              </div>

              <Button
                color="success"
                size="lg"
                round
                block
                disabled={cartItems.length === 0}
                onClick={handleCheckout}
              >
                <CheckCircleOutline style={{ marginRight: "8px", fontSize: "20px" }} />
                Realizar Pedido & Pagar
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

      {/* Modal de Confirmación de Pedido Exitoso */}
      <Dialog
        open={orderModalOpen}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle style={{ backgroundColor: "#059669", color: "#fff", textAlign: "center", padding: "20px" }}>
          <CheckCircleOutline style={{ fontSize: "48px", marginBottom: "8px", display: "block", margin: "0 auto" }} />
          ¡Compra Realizada con Éxito!
        </DialogTitle>
        <DialogContent style={{ backgroundColor: "#1e293b", color: "#f8fafc", padding: "24px" }}>
          <h4 style={{ color: "#f8fafc", fontWeight: "bold", marginTop: 0 }}>
            Gracias por tu compra, {customer.name}
          </h4>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>
            Tu orden <strong>#NX-2026-AR99</strong> ha sido procesada correctamente en la plataforma <strong>NexusTech & Gaming</strong> para la materia <strong>{customer.subject}</strong>.
          </p>
          <div style={{ backgroundColor: "#0f172a", border: "1px solid rgba(255, 255, 255, 0.08)", padding: "14px", borderRadius: "6px", margin: "16px 0" }}>
            <div style={{ fontSize: "13px", color: "#cbd5e1", marginBottom: "4px" }}>
              <strong>Monto Total Facturado:</strong> ${totalPrice.toFixed(2)} USD
            </div>
            <div style={{ fontSize: "13px", color: "#cbd5e1", marginBottom: "4px" }}>
              <strong>Claves Digitales de Juegos:</strong> Enviadas a tu correo y listas para canjear en Steam/Epic Games.
            </div>
            <div style={{ fontSize: "13px", color: "#cbd5e1" }}>
              <strong>Hardware & PCs:</strong> En proceso de embalaje y despacho prioritario.
            </div>
          </div>
        </DialogContent>
        <DialogActions style={{ backgroundColor: "#1e293b", borderTop: "1px solid rgba(255, 255, 255, 0.08)", padding: "16px 24px" }}>
          <Button color="success" round onClick={handleCloseModal}>
            Aceptar y Continuar Comprando
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
