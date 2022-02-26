import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ErrorData(result: any) {
  if (Array.isArray(result)) {
    result.forEach(function (item, index) {
      toast.error(item, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  } else {
    toast.error(result, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }
}

export function SuccessData(result: any) {
  toast.success(result, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

export function WarningData(result: any) {
  toast.info(result, {
    position: "bottom-center",
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
  });
}
