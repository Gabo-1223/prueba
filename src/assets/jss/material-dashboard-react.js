/*!

 =========================================================
 * Material Dashboard React - v1.10.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2021 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
const hexToRgb = (input) => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase();
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

const drawerWidth = 260;

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
};

const container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto",
};

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em",
};

// Paleta moderna, suave y agradable para la vista (Dark Slate & Soft Neons)
const primaryColor = ["#6366f1", "#818cf8", "#4f46e5", "#4338ca"]; // Indigo gamer
const warningColor = ["#f59e0b", "#fbbf24", "#d97706", "#b45309"]; // Ámbar cálido
const dangerColor = ["#ef4444", "#f87171", "#dc2626", "#b91c1c"]; // Rojo suave
const successColor = ["#10b981", "#34d399", "#059669", "#047857"]; // Esmeralda suave
const infoColor = ["#0284c7", "#38bdf8", "#0369a1", "#0284c7"]; // Cyan / Sky
const roseColor = ["#f43f5e", "#fb7185", "#e11d48", "#be123c"]; // Rose gamer
const grayColor = [
  "#94a3b8",
  "#64748b",
  "#f8fafc",
  "#94a3b8",
  "#334155",
  "#1e293b",
  "#cbd5e1",
  "#f1f5f9",
  "#0f172a",
  "#94a3b8",
  "#1e293b",
  "#334155",
];
const blackColor = "#000";
const whiteColor = "#FFF";

const boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(0, 0, 0, 0.5)",
};

const primaryBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(0, 0, 0, .3), 0 7px 10px -5px rgba(99, 102, 241, .4)",
};
const infoBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(0, 0, 0, .3), 0 7px 10px -5px rgba(2, 132, 199, .4)",
};
const successBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(0, 0, 0, .3), 0 7px 10px -5px rgba(16, 185, 129, .4)",
};
const warningBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(0, 0, 0, .3), 0 7px 10px -5px rgba(245, 158, 11, .4)",
};
const dangerBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(0, 0, 0, .3), 0 7px 10px -5px rgba(239, 68, 68, .4)",
};
const roseBoxShadow = {
  boxShadow:
    "0 4px 20px 0 rgba(0, 0, 0, .3), 0 7px 10px -5px rgba(244, 63, 94, .4)",
};

const warningCardHeader = {
  background:
    "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")",
  ...warningBoxShadow,
};
const successCardHeader = {
  background:
    "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")",
  ...successBoxShadow,
};
const dangerCardHeader = {
  background:
    "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")",
  ...dangerBoxShadow,
};
const infoCardHeader = {
  background:
    "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")",
  ...infoBoxShadow,
};
const primaryCardHeader = {
  background:
    "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")",
  ...primaryBoxShadow,
};
const roseCardHeader = {
  background:
    "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")",
  ...roseBoxShadow,
};

const cardActions = {
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
  height: "auto",
  ...defaultFont,
};

const cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "6px",
  padding: "15px",
};

const card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.4)",
  borderRadius: "8px",
  color: "#f1f5f9",
  background: "#1e293b",
  border: "1px solid rgba(255, 255, 255, 0.08)",
};

const defaultBoxShadow = {
  border: "0",
  borderRadius: "6px",
  boxShadow: "0 10px 20px -12px rgba(0, 0, 0, 0.5)",
  padding: "10px 0",
  transition: "all 150ms ease 0s",
};

const title = {
  color: "#f8fafc",
  textDecoration: "none",
  fontWeight: "600",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: "#94a3b8",
    fontWeight: "400",
    lineHeight: "1",
  },
};

const cardTitle = {
  ...title,
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": {
    ...title,
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto",
  },
};

const cardSubtitle = {
  marginTop: "-.375rem",
  color: "#94a3b8",
};

const cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem",
  },
};

export {
  hexToRgb,
  //variables
  drawerWidth,
  transition,
  container,
  boxShadow,
  card,
  defaultFont,
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  blackColor,
  whiteColor,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader,
  roseCardHeader,
  cardActions,
  cardHeader,
  defaultBoxShadow,
  title,
  cardTitle,
  cardSubtitle,
  cardLink,
};
