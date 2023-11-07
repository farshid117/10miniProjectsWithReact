import {createContext} from "react"

const ContactContext = createContext({
    loading : false ,
    setLoading : () =>{} ,

    contacts : [] ,
    setContacts : () => {} ,
    searchParams:{},

    filteredContacts : [] ,
    SetFilteredContacts : () => {} ,
   // errors : [] ,
  //  setErrors : () => {} ,
    groups : [] ,

    deleteContact: () => {},
    updateContact: () => {},
    createContact: () => {},
    onContactSearch: () => {},
})
export default ContactContext ;