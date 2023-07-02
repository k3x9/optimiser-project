const moocFields = [
    {
      labelText: "Course Name",
      labelFor: "Name",
      id: "Name",
      name: "Name",
      type: "text",
      autoComplete: "",
      isRequired: true,
      placeholder: "Enter Name",
    },
    {
      labelText: "Platform Link",
      labelFor: "Location",
      id: "Location",
      name: "Location",
      type: "url",
      autoComplete: "",
      isRequired: true,
      placeholder: "Enter Platform URL",
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
      labelText:"Cost",
      labelFor:"Money",
      id:"Money",
      name:"Money",
      type:"number",
      autoComplete:"",
      isRequired:true,
      placeholder:"Enter Amount"   
  },
  {
      labelText:"Course Duration",
      labelFor:"Opening",
      id:"Opening",
      name:"Opening",
      type:"time",
      autoComplete:"",
      isRequired:true,
      placeholder:""   
  },
  
  
  ];
  
  export { moocFields };
  