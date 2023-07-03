const eventsFields = [
    {
        labelText: "Event Name",
        labelFor: "Name",
        id: "Name",
        name: "Name",
        type: "text",
        autoComplete: "",
        isRequired: true,
        placeholder: "Enter Name",
      },
    {
        labelText: "Event-Type",
        labelFor: "Type",
        id: "Type",
        name: "Type",
        type: "text",
        autoComplete: "",
        isRequired: true,
        placeholder: "Music, Comedy, Poetry...",
      },
    {
        labelText: "Event Location",
        labelFor: "Location",
        id: "Location",
        name: "Location",
        type: "url",
        autoComplete: "",
        isRequired: true,
        placeholder: "Enter Bing Url",
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
        labelText:"Event Date",
        labelFor:"Date",
        id:"Date",
        name:"Date",
        type:"date",
        autoComplete:"",
        isRequired:true,
        placeholder:""   
    },
    {
        labelText:"Start Time",
        labelFor:"Opening",
        id:"Opening",
        name:"Opening",
        type:"time",
        autoComplete:"",
        isRequired:true,
        placeholder:""   
    },
    {
        labelText:"Duration",
        labelFor:"Duration",
        id:"Duration",
        name:"Duration",
        type:"text",
        autoComplete:"",
        isRequired:true,
        placeholder:"mins"   
    },
];

export {eventsFields};