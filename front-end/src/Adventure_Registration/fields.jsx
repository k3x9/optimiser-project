const adventureFields = [
    {
        labelText: "Adventure Name",
        labelFor: "Name",
        id: "Name",
        name: "Name",
        type: "text",
        autoComplete: "",
        isRequired: true,
        placeholder: "Enter Name",
      },
    {
        labelText: "Adventure Location",
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
        labelText:"Adventure WeekDay",
        labelFor:"Day",
        id:"Day",
        name:"Day",
        type:"text",
        autoComplete:"",
        isRequired:true,
        placeholder:"Applicable Weekdays"   
    },
    {
        labelText:"Adventure Date",
        labelFor:"Date",
        id:"Date",
        name:"Date",
        type:"date",
        autoComplete:"",
        isRequired:false,
        placeholder:""   
    },
    {
        labelText:"Adventure Start Time",
        labelFor:"Start",
        id:"Start",
        name:"Start",
        type:"time",
        autoComplete:"",
        isRequired:true,
        placeholder:""   
    },
    {
        labelText:"Adventure End Time",
        labelFor:"End",
        id:"End",
        name:"End",
        type:"time",
        autoComplete:"",
        isRequired:false,
        placeholder:""   
    },
];

export {adventureFields};