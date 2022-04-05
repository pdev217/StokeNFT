//next
import Image from "next/image";
//components
import { CustComposedTextField } from "./CustComposedTextField";
import { CustTextField } from "./CustTextField";
//styles
import cssStyles from "./AddToNFTModal.module.css";

export const StatsOrLevelsRow = ({ name, id, nftValue, maxValue, handleDelete, modalData, setModalData, index }) => {
  return (
    <div className={cssStyles.row}>
      <CustTextField
        name={name}
        id={id}
        label="Name"
        modalData={modalData}
        setModalData={setModalData}
        index={index}
      />
      <CustComposedTextField
        nftValue={nftValue}
        id={id}
        modalData={modalData}
        setModalData={setModalData}
        index={index}
        maxValue={maxValue}
      />
      <div className={cssStyles.crossBox} onClick={() => handleDelete(id)}>
            <Image
              src="/create-nft/Icon-Close.svg"
              alt="close-icon"
              width={15}
              height={15}
            />
          </div>
    </div>
  );
};
