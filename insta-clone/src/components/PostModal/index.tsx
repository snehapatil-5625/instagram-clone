import { Modal, ModalBody, ModalHeader, ROLE, SIZE } from "baseui/modal";

export default function PostModel({
  isOpen,
  close,
}: {
  isOpen: any;
  close: any;
}) {
  return (
    <div>
      <Modal
        onClose={close}
        closeable
        isOpen={isOpen}
        animate
        autoFocus
        size={SIZE.default}
        role={ROLE.dialog}
      >
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
          faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
        </ModalBody>
      </Modal>
    </div>
  );
}
