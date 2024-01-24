import { toast } from "react-toastify";

type ToastProps = {
  message: string;
  color: string;
};
export const notifyToast = (props: ToastProps) => {
  const { message, color } = props;
  toast(message, {
    style: {
      background: "#fff",
      color: color,
      borderRadius: "8px",
      fontSize: "16px",
      padding: "15px",
    },
  });
  toast(message);
};
