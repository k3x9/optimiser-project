const movieFields = [
    {
        labelText:"Movie Name",
        labelFor:"Name",
        id:"Name",
        name:"Name",
        type:"text",
        autoComplete:"",
        isRequired:true,
        placeholder:"Enter Name"   
    },
    {
        labelText:"Platform Location",
        labelFor:"Location",
        id:"Location",
        name:"Location",
        type:"url",
        autoComplete:"",
        isRequired:true,
        placeholder:"Bing Url (OTT/Theatre)"   
    },
    {
        labelText:"Date",
        labelFor:"Date",
        id:"Date",
        name:"Date",
        type:"date",
        autoComplete:"",
        isRequired:true
        // placeholder:"Enter Movie Name"   
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
        labelText:"Show Time",
        labelFor:"Time",
        id:"Time",
        name:"Time",
        type:"time",
        autoComplete:"",
        isRequired:true,
        placeholder:""   
    },
]

export {movieFields}