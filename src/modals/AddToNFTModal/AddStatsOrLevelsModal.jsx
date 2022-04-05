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
import { StatsOrLevelsRow } from "./StatsOrLevelsRow";
//styles
import { styles as jsStyles } from "./AddToNFTModal.utils";
import cssStyles from "./AddToNFTModal.module.css";
//utils
import { getEmptyLevelOrStat } from "./AddToNFTModal.utils";

export const AddStatsOrLevelsModal = ({
  title,
  description,
  isModalOpened,
  setIsModalOpened,
  setData,
  data,
}) => {
  const defaultValue = title === "Add Stats" ? data.stats : data.levels;
  const [modalData, setModalData] = useState(
    defaultValue.length > 0 ? defaultValue : [{ ...getEmptyLevelOrStat() }]
  );

  useLayoutEffect(() => {
    modalData.length === 0 && setModalData([{ ...getEmptyLevelOrStat() }]);
  }, [modalData]);

  const handleClose = () => {
    setIsModalOpened(false);
  };

  const handleAdd = () => {
    if (modalData.length === 50) {
      dispatch(openError('Only 50 values can be added'))
    }

    setModalData([...modalData, { ...getEmptyLevelOrStat() }]);
  };

  const handleDelete = (id) => {
    setModalData(modalData.filter((elem) => elem.id !== id));
  };

  const handleSave = () => {
    const newData = [...modalData];
    const filtered = newData.filter((elem) => elem.name !== "" && elem.nftValue && elem.maxValue);
    
    title === "Add Stats"
      ? setData({ ...data, stats: [...filtered] })
      : setData({ ...data, levels: [...filtered] });
    setIsModalOpened(false);
  };

  return (
    <Modal
      open={isModalOpened}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={jsStyles.wrapper}>
        <Typography id="modal-modal-title" variant="h6" component="h2" style={jsStyles.header}>
          <span>{title}</span>
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
          {description}
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
            {modalData.map(({ name, nftValue, id, maxValue }, index) => (
              <StatsOrLevelsRow
                name={name}
                modalData={modalData}
                setModalData={setModalData}
                nftValue={nftValue}
                maxValue={maxValue}
                id={id}
                key={id}
                index={index}
                handleDelete={handleDelete}
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
