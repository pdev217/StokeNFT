import { useState, useLayoutEffect } from "react";
//redux
import { open as openError } from "../../redux/slices/errorSnackbarSlice";
import { useDispatch } from "react-redux";
//next
import Image from "next/image";
//mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
//components
import { CustButton } from "../../components/CustButton/CustButton";
import { PropertiesRow } from "./PropertiesRow";
//styles
import { styles as jsStyles } from "./AddToNFTModal.utils";
import cssStyles from "./AddToNFTModal.module.css";
//utils
import { getEmptyProperty } from "./AddToNFTModal.utils";

export const AddPropertiesModal = ({ isModalOpened, setIsModalOpened, data, setData }) => {
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState(
    data.properties.length > 0 ? data.properties : [{ ...getEmptyProperty() }]
  );

  const handleClose = () => {
    setIsModalOpened(false);
  };

  const handleAdd = () => {
    if (modalData.length === 50) {
      dispatch(openError('Only 50 values can be added'))
    }

    setModalData([...modalData, { ...getEmptyProperty() }]);
  };

  const handleDelete = (id) => {
    const newArr = [...modalData];

    setModalData(newArr.filter((elem) => elem.id !== id));
  };

  const handleSave = () => {
    const newData = [...modalData];
    console.log(newData)
    const filtered = newData.filter((elem) => elem.name !== "" && elem.type !== "");
    setData({ ...data, properties: [...filtered] });

    setModalData([...filtered]);
    setIsModalOpened(false);
  };

  useLayoutEffect(() => {
    modalData.length === 0 && setModalData([{ ...getEmptyProperty() }]);
  }, [modalData]);

  return (
    <Modal
      open={isModalOpened}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={jsStyles.wrapper}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={jsStyles.header}>
          <span>Add Properties</span>
          <div className={cssStyles.cross} onClick={() => setIsModalOpened(false)}>
            <Image
              src="/create-nft/Icon-Close.svg"
              alt="close-icon"
              width={15}
              height={15}
              onClick={() => setIsModalOpened(false)}
            />
          </div>
        </Typography>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={jsStyles.description}>
          Properties show up underneath your item, are clickable, and can be filtered in your
          collection&apos;s sidebar.
        </Typography>
        <section className={cssStyles.section}>
          <div className={cssStyles.fieldsWrapper}>
            <div className={cssStyles.titles}>
              <div>
                <span>Name</span>
              </div>
              <div>
                <span>Value</span>
              </div>
            </div>
            {modalData.map(({ name, type, id }, index) => (
              <PropertiesRow
                handleDelete={handleDelete}
                setModalData={setModalData}
                modalData={modalData}
                id={id}
                index={index}
                key={id}
                name={name}
                type={type}
              />
            ))}
          </div>
          <CustButton color="ghost" onClick={handleAdd} text="Add More" className={cssStyles.addMoreButton} />
        </section>
        <footer className={cssStyles.footer}>
          <CustButton color="primary" onClick={handleSave} text="Save" />
        </footer>
      </Box>
    </Modal>
  );
};
