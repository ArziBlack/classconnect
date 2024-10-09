import ViewHeader from "../components/ViewHeader";
import { BreadCrumb } from "../components/Courses/BreadCrumb";
import { useAppDispatch } from "../../../hooks/reactReduxHooks";
import { getPaymentHistory } from "../../../services/student/studentThunks";
import { useEffect } from "react";

const links = [
  { to: "", label: "Make payment" },
  { to: "payment-history", label: "Payment history" },
];

export const Billing = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPaymentHistory());
  }, []);

  return (
    <>
      <ViewHeader
        title="Billing"
        subtext="Manage your billing information, view and pay invoices, and keep track of your payment history. Ensure your account is up-to-date and review your financial transactions with ease."
      />
      <BreadCrumb links={links} />
    </>
  );
};
