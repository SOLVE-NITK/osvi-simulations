import { dialogManager } from "./dialog.js";
import { Prop } from "./prop.js";
import generateProps from "./propgenerator.js";
const simulation = document.querySelector(".simulation");

const textelement = document.getElementById("text-element");

const sampleimage =
  "https://easydrawingguides.com/wp-content/uploads/2020/04/how-to-draw-a-mason-jar-featured-image-1200.png";

const moveTo = () => {
}

export const sceneProps = generateProps();

// export const sceneProps = {
//   step1: {
//     props: [
//       new Prop(
//         sampleimage,
//         { x: "300px", y: "300px" },
//         document.getElementById("step1"),
//         undefined,
//         undefined,
//         [
//           {
//             x: 10,
//             y: 90,
//             cb: function (prop, styles) {
//               // styles.left = "200px";
//               // styles.top = "150px";
//              moveTo({ x: 100, y: 50 });

//               textelement.toggleState();
//               textelement.setTitle("New Title");
//               textelement.setDescription("New Title");
//             },
//           },
//           {
//             x: 30,
//             y: 40,
//             cb: () => console.log("DAMN"),
//           },
//         ]
//       ),
//       new Prop(
//         sampleimage,
//         { x: "200px", y: "100px" },
//         document.getElementById("step1"),
//         undefined,
//         undefined,
//         [
//           {
//             x: 20,
//             y: 50,
//             cb: function (prop, styles) {
//               dialogManager.openDialog("alert");
//               styles.left = "200px";
//               styles.top = "150px";

//               textelement.toggleState();
//               textelement.setTitle("New Title");
//               textelement.setDescription("New Title");
//             },
//           },
//           {
//             x: 30,
//             y: 40,
//             cb: () => console.log("DAMN"),
//           },
//         ]
//       ),
//       new Prop(
//         sampleimage,
//         { x: "0px", y: "100px" },
//         document.getElementById("step1"),
//         undefined,
//         undefined,
//         [
//           {
//             x: 20,
//             y: 0,
//             cb: function (prop, styles) {
//               // dialogManager.openDialog("alert");
//               styles.left = "200px";
//               styles.top = "150px";

//               textelement.toggleState();
//               textelement.setTitle("New Title");
//               textelement.setDescription("New Title");
//             },
//           },
//           {
//             x: 30,
//             y: 10,
//             cb: () => console.log("DAMN"),
//           },
//         ]
//       ),
//       new Prop(
//         sampleimage,
//         { x: "200px", y: "200px" },
//         document.getElementById("step1")
//       ),
//     ],
//   },
//   step2: {
//     props: [
//       new Prop(
//         sampleimage,
//         { x: "150px", y: "150px" },
//         document.getElementById("step2")
//       ),
//       new Prop(
//         sampleimage,
//         { x: "250px", y: "50%" },
//         document.getElementById("step2")
//       ),
//     ],
//   },
// };
