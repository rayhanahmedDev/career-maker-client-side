import { Link } from 'react-router-dom';
import errorPic from '../../assets/404.gif'

const ErrorPage = () => {
    return (
        <div>
            <div className='flex items-center justify-center'>
                <img src={errorPic} alt="" />
            </div>
            <div className='text-center'>
                <Link to='/'><button className='btn'>Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;