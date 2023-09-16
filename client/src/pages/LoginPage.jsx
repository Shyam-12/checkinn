import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
                <h1 className="text-4xl text-center m-4">Login</h1>
                <form action="" className="max-w-md mx-auto">
                    <input type="email" name="email" id="email" placeholder={'youremail@email.com'} />
                    <input type="password" name="password" id="password" placeholder={'your password'} />
                    <button type="button" className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        Not registered yet? <Link className="underline text-black" to={'/register'}>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}