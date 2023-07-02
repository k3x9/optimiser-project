const ssFields = [
    {
      labelText: "Sight Name",
      labelFor: "Name",
      id: "Name",
      name: "Name",
      type: "text",
      autoComplete: "",
      isRequired: true,
      placeholder: "Enter Name",
    },
    {
      labelText: "Sight Location",
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
      labelText:"Money",
      labelFor:"Money",
      id:"Money",
      name:"Money",
      type:"number",
      autoComplete:"",
      isRequired:true,
      placeholder:"Enter Amount"   
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
  
  export { ssFields };
  