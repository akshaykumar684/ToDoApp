import { Toast, ToastContainer } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toastAction } from "../../store/toast-state";
const Toasts = (props) => {
  const dispatch = useDispatch();
  const { showToast, msg, isOperationSucessfull } = props.Data;
  const hideToastHandler = () => {
    dispatch(toastAction.hideToast());
  };
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast
        show={showToast}
        onClose={hideToastHandler}
        delay={3000}
        autohide
        bg={isOperationSucessfull ? "success" : "danger"}
      >
        <Toast.Header>
          <strong className="me-auto">Sucess</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>{msg}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default Toasts;
