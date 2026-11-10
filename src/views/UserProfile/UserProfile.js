import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Chip from "@material-ui/core/Chip";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

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
  cardCategory: {
    color: "#94a3b8",
    marginTop: "10px",
    fontSize: "13px",
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "1px",
  },
  cardTitle: {
    color: "#f8fafc",
    marginTop: "5px",
    fontWeight: "bold",
    fontSize: "1.4rem",
  },
  description: {
    color: "#cbd5e1",
    fontSize: "14px",
    lineHeight: "1.5",
    margin: "15px 0",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Perfil del Estudiante / Desarrollador</h4>
              <p className={classes.cardCategoryWhite}>
                Información del proyecto y datos de la entrega académica
              </p>
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Plataforma"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                      value: "NexusTech & Gaming",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Usuario GitHub"
                    id="username"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                      value: "Gabo-1223",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Materia / Asignatura"
                    id="subject"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                      value: "Electiva III",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Nombre Completo"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                      value: "Angel Romero",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Rol en el Proyecto"
                    id="role"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      disabled: true,
                      value: "Desarrollador Principal & Administrador",
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <InputLabel style={{ color: "#AAAAAA", marginTop: "15px" }}>
                    Resumen del Proyecto Académico
                  </InputLabel>
                  <CustomInput
                    labelText=""
                    id="about-me"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 4,
                      disabled: true,
                      value:
                        "NexusTech & Gaming es una plataforma integral de comercio electrónico diseñada para la venta y cotización de hardware para computadoras, catálogo digital de videojuegos con activación instantánea (estilo Steam / Eneba) y paquetes promocionales donde la compra de PCs en oferta incluye videojuegos de regalo. Desarrollado con React y Material-UI.",
                    }}
                  />
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
              <Button color="primary" round>
                Guardar Cambios
              </Button>
            </CardFooter>
          </Card>
        </GridItem>

        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                <img src={avatar} alt="Angel Romero" />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>Electiva III</h6>
              <h4 className={classes.cardTitle}>Angel Romero</h4>
              <Chip
                label="@Gabo-1223"
                color="primary"
                size="small"
                style={{ fontWeight: "bold", margin: "8px 0" }}
              />
              <p className={classes.description}>
                Estudiante y desarrollador responsable de la adaptación, diseño de catálogo, arquitectura de componentes y sistema de carrito de NexusTech & Gaming.
              </p>
              <Button
                color="info"
                round
                href="https://github.com/Gabo-1223"
                target="_blank"
              >
                Ver Perfil en GitHub
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
