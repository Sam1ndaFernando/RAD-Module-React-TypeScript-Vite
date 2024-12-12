import './App.css'
import {ChangeEvent} from "react";
import {Customer} from "./model/Customer.ts";



function App() {
    const [customers, setCustomers] = React.useState<Customer[]>([]);
    const [firstName, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [contact, setContact] = React.useState("");


    function addCustomer() {
        const new_customer=new Customer(firstName, email, contact);
        setCustomers((customers)=>[...customers, new_customer]);

    }
    function deleteCustomer() {
        setCustomers((customers):Customer[]=>customers.slice(0,-1))

    }
    function deleteCustomerByEmail() {
        setCustomers((customers)=>customers.filter((customer) => customer.email !== email));

    }
    function updateCustomer() {
        const newCustomers = customers.map((customer) =>
            customer.email === email ? { ...customer, firstName: firstName, contact: contact, email: email }: customer
        );

        setCustomers(newCustomers);
    }


    return (
        <>
            <input name={'firstName'} type={"text"} placeholder={"First name"} onChange={(e => setName(e.target.value))}/>
            <input name={'email'} type={"email"} placeholder={"Email"} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}/>
            <input name={'contact'} type={"text"} placeholder={"Email"} onChange={(e: ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}/>
            <br/>
            <button onClick={addCustomer}>Add Customer</button>
            <button onClick={deleteCustomer}>Delete Customer</button>
            <button onClick={deleteCustomerByEmail}>Delete Customer By Email</button>
            <button onClick={updateCustomer}>Update Customer</button>
            {customers.map((customer) => (<div>{customer.name+" "+customer.email+" "+customer.phone}</div>
            ))}
        </>

    )
}

export default App