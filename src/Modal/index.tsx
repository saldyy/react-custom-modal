import { createPortal } from "react-dom";

const backgroundStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};
const modalContainerStyle: React.CSSProperties = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#F6F6F6",
  zIndex: 1000,
  padding: "50px",
};

const Modal = ({
  isOpen,
  onClose,
  HeaderComponent,
  BodyComponent,
  FooterComponent,
}: {
  isOpen: boolean;
  onClose: () => void;
  HeaderComponent?: JSX.Element | null;
  BodyComponent?: JSX.Element | null;
  FooterComponent?: JSX.Element | null;
}) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div style={backgroundStyle} />
      <div style={modalContainerStyle}>
        {HeaderComponent ? HeaderComponent : <div>Title</div>}
        {BodyComponent ? BodyComponent : <div>Body</div>}
        {FooterComponent ? (
          FooterComponent
        ) : (
          <div>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </>,
    document.getElementById("portal-modal")!
  );
};

export default Modal;
