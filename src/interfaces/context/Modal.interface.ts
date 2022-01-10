export interface ModalContextInterface {
  show: boolean;
  openModal: () => void;
  setModalText: (text: string) => void;
  modalText: string;
}
