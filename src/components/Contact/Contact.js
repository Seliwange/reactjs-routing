import './Contact.css';

export default function Contact({firstName, lastName, phone, gender}){

    function convertGender(gender){
        switch(gender){
            case "male":
                return "♂";
            case "female":
                return "♀";
            default: 
                return "";
        }
    }

    return (
        <div className="contact">
            <h3>{firstName} {lastName}</h3>
            <p>{phone}</p>
            <p>{convertGender(gender)}</p>
        </div>
    );
}