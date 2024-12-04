import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (e) => {
      if (e.target.files.length > 0) {
          const file = e.target.files[0];
          const reader = new FileReader();
          reader.onloadend = () => {
              setImage(reader.result);
              localStorage.setItem("userImage", reader.result);
          };
          reader.readAsDataURL(file);
      }
  };

return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <InputBox onChange={e => {
          setFirstName(e.target.value);
        }} placeholder="FirstName" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="LastName" label={"Last Name"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="abc@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="SecurePassword" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password,
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}




// import { useState } from "react";
// import { BottomWarning } from "../components/BottomWarning";
// import { Button } from "../components/Button";
// import { Heading } from "../components/Heading";
// import { InputBox } from "../components/InputBox";
// import { SubHeading } from "../components/SubHeading";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export const Signup = () => {
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [image, setImage] = useState(null);
//     const navigate = useNavigate();

//     const handleImageChange = (e) => {
//         if (e.target.files.length > 0) {
//             setImage(e.target.files[0]);
//         }
//     };

//     const handleSubmit = async () => {
//         const formData = new FormData();
//         formData.append("username", username);
//         formData.append("firstName", firstName);
//         formData.append("lastName", lastName);
//         formData.append("password", password);
//         if (image) {
//             formData.append("image", image);
//         }

//         try {
//             const response = await axios.post("http://localhost:3000/api/v1/user/signup", formData, {
//                 headers: {
//                     "Content-Type": "multipart/form-data",
//                 },
//             });
//             localStorage.setItem("token", response.data.token);
//             navigate("/dashboard");
//         } catch (error) {
//             console.error("Signup error:", error);
//             // Handle error (e.g., show a message to the user)
//         }
//     };

//     return (
//         <div className="bg-slate-300 h-screen flex justify-center">
//             <div className="flex flex-col justify-center">
//                 <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
//                     <Heading label={"Sign up"} />
//                     <SubHeading label={"Enter your information to create an account"} />
//                     <input type="file" accept="image/*" onChange={handleImageChange} />
//                     <InputBox onChange={(e) => setFirstName(e.target.value)} placeholder="John" label={"First Name"} />
//                     <InputBox onChange={(e) => setLastName(e.target.value)} placeholder="Doe" label={"Last Name"} />
//                     <InputBox onChange={(e) => setUsername(e.target.value)} placeholder="harkirat@gmail.com" label={"Email"} />
//                     <InputBox onChange={(e) => setPassword(e.target.value)} placeholder="123456" label={"Password"} />
//                     <div className="pt-4">
//                         <Button onClick={handleSubmit} label={"Sign up"} />
//                     </div>
//                     <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
//                 </div>
//             </div>
//         </div>
//     );
// };
