import SignIn from "./components/SignIn";
import Register from './components/Register';

export default function AuthPage() {


    return (
        /* CONTENT */
        <section className="py-12 bg-light" >
            <div className="container">
                <div className="row">
                    <SignIn />
                    <Register />
                </div>
            </div>
        </section>
    )
}
