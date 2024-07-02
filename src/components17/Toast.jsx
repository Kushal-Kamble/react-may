import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const notify = () => toast.success("Wow so easy!");
  return (
    <div>
        <button class="btn btn-primary" onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
  )
}

export default Toast
