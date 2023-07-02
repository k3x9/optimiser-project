const foodFields = [
  {
    labelText: "Restaurant Name",
    labelFor: "Name",
    id: "Name",
    name: "Name",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "Enter Name",
  },
  {
    labelText: "Food Preference",
    labelFor: "VNV",
    id: "VNV",
    name: "VNV",
    type: "text",
    autoComplete: "",
    isRequired: true,
    placeholder: "VEG/NON-VEG/BOTH",
  },
  {
    labelText: "Location",
    labelFor: "Location",
    id: "Location",
    name: "Location",
    type: "url",
    autoComplete: "",
    isRequired: true,
    placeholder: "Bing URL",
  },
  {
    labelText:"Rating",
    labelFor:"Rating",
    id:"Rating",
    name:"Rating",
    type:"number",
    autoComplete:"",
    isRequired:true,
    placeholder:"Enter from 1-5"   
},
{
    labelText:"Average Money",
    labelFor:"Money",
    id:"Money",
    name:"Money",
    type:"number",
    autoComplete:"",
    isRequired:true,
    placeholder:"Enter Average Amount"   
},
{
    labelText:"Opening Time",
    labelFor:"Opening",
    id:"Opening",
    name:"Opening",
    type:"time",
    autoComplete:"",
    isRequired:true,
    placeholder:""   
},
{
    labelText:"Closing Time",
    labelFor:"Closing",
    id:"Closing",
    name:"Closing",
    type:"time",
    autoComplete:"",
    isRequired:true,
    placeholder:""   
},


];

export { foodFields };
