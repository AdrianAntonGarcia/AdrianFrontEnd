import { createContext, ReactElement, useState } from 'react';
import { ModalContextInterface } from '../interfaces';

export const ModalContext = createContext({} as ModalContextInterface);

interface Props {
  children?: ReactElement | ReactElement[];
}

export const ModalProvider = ({ children }: Props) => {
  const { Provider } = ModalContext;
  const [showModal, setShowModal] = useState<{
    modalText: string;
    show: boolean;
  }>({
    modalText: '',
    show: false,
  });
  const openModal = () => {
    setShowModal((prev) => ({ ...prev, show: !prev.show }));
  };
  const setModalText = (text: string) => {
    setShowModal((prev) => ({ ...prev, modalText: text }));
  };
  return (
    <Provider
      value={{
        show: showModal.show,
        openModal,
        modalText: showModal.modalText,
        setModalText,
      }}
    >
      {children}
    </Provider>
  );
};
