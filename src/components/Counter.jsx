// import React, { useState } from "react";
// import Button from "./Button";

// const Counter = () => {
//   const [showA, setShowA] = useState(false);
//   function handleA() {
//     setShowA(true);
//     setShowB(false);
//     setShowC(false);
//     setShowD(false);
//   }

//   const [showB, setShowB] = useState(false);
//   function handleB() {
//     setShowA(false);
//     setShowB(true);
//     setShowC(false);
//     setShowD(false);
//   }

//   const [showC, setShowC] = useState(false);
//   function handleC() {
//     setShowA(false);
//     setShowB(false);
//     setShowC(true);
//     setShowD(false);
//   }

//   const [showD, setShowD] = useState(false);
//   function handleD() {
//     setShowA(false);
//     setShowB(false);
//     setShowC(false);
//     setShowD(true);
//   }
//   return (
//     <div className="flex gap-3">
//       <Button text="A" className="p-6" onClick={handleA} />
//       <Button text="B" className="p-6" onClick={handleB} />
//       <Button text="C" className="p-6" onClick={handleC} />
//       <Button text="D" className="p-6" onClick={handleD} />

//       <p className="text-2xl">{showA ? "A is click" : ""}</p>
//       <p className="text-2xl">{showB ? "B is click" : ""}</p>
//       <p className="text-2xl">{showC ? "C is click" : ""}</p>
//       <p className="text-2xl">{showD ? "D is click" : ""}</p>
//     </div>
//   );
// };

// export default Counter;

// import React, { useState } from "react";
// import Button from "./Button";

// const Counter = () => {
//   const [select, setSelect] = useState(false);
//   function handleData(active) {
//     setSelect(active);
//   }
//   return (
//     <div className="flex gap-3">
//       <Button text="A" className="p-6" onClick={() => handleData("A")} />
//       <Button text="B" className="p-6" onClick={() => handleData("B")} />
//       <Button text="C" className="p-6" onClick={() => handleData("C")} />
//       <Button text="D" className="p-6" onClick={() => handleData("D")} />

//       <p className="text-2xl mt-7">{select ? `${select} is click` : ""}</p>
//     </div>
//   );
// };

// export default Counter;
